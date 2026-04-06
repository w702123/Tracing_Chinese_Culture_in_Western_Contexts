(function () {
  // Read the shared archive data and set constants for the overview map.
  var terms = Array.isArray(window.TERMS) ? window.TERMS : [];
  var OVERVIEW_WIDTH = 2440;
  var OVERVIEW_HEIGHT = 1320;
  var MOBILE_BREAKPOINT = 760;
  var OVERVIEW_ORIGIN_X = 220;
  var OVERVIEW_OUTCOME_X = 2140;
  var OVERVIEW_ROW_START_Y = 180;
  var OVERVIEW_ROW_GAP = 280;
  var OVERVIEW_DEFAULT_ZOOM = 1;
  var OVERVIEW_MIN_ZOOM = 0.7;
  var OVERVIEW_MAX_ZOOM = 1.6;
  var OVERVIEW_ZOOM_STEP = 0.15;

  // Escape user-facing text before inserting it into HTML strings.
  function escapeHtml(value) {
    return String(value)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#39;");
  }

  // Normalize text so searching stays case-insensitive and consistent.
  function normalize(value) {
    return String(value || "").trim().toLowerCase();
  }

  // Read a value from the page URL, such as the selected term slug.
  function getQueryParam(name) {
    var params = new URLSearchParams(window.location.search);
    return params.get(name);
  }

  // Find one explanation point inside a term by its id.
  function getPointById(term, pointId) {
    return (term.points || []).find(function (point) {
      return point.id === pointId;
    });
  }

  // Build a stable key for nodes and lines across the interface.
  function buildSelectionKey(termSlug, nodeType, nodeId) {
    return termSlug + ":" + nodeType + ":" + nodeId;
  }

  // Create the detail panel markup for one clickable factor.
  function renderPointDetail(point) {
    var sidePointMarkup = point.sidePoint
      ? '<div class="side-point"><span class="side-point-label">Side point</span><p>' +
        escapeHtml(point.label + " -> " + point.sidePoint) +
        "</p></div>"
      : "";

    return (
      '<div class="point-detail-copy">' +
      '<p class="detail-kicker">Clickable factor</p>' +
      "<h3>" +
      escapeHtml(point.title) +
      "</h3>" +
      "<p>" +
      escapeHtml(point.body) +
      "</p>" +
      sidePointMarkup +
      "</div>"
    );
  }

  // Create the summary panel for an origin node or outcome node.
  function renderTermSummaryDetail(term, mode) {
    var heading =
      mode === "origin"
        ? "Origin / Context"
        : mode === "outcome"
          ? "Western Outcome"
          : "Archive Entry";

    return (
      '<div class="point-detail-copy">' +
      '<p class="detail-kicker">' +
      escapeHtml(heading) +
      "</p>" +
      "<h3>" +
      escapeHtml(mode === "origin" ? term.titleZhOrContext : term.titleEn) +
      "</h3>" +
      "<p>" +
      escapeHtml(term.shortExplanation) +
      "</p>" +
      '<a class="detail-entry-link" href="term.html?slug=' +
      encodeURIComponent(term.slug) +
      '">Open entry</a>' +
      "</div>"
    );
  }

  // Turn a list of transformation steps into a visual path.
  function renderPathMarkup(steps, className) {
    return (steps || [])
      .map(function (step, index) {
        var stepClass = (className || "path-step") + " path-step";

        if (index === 0) {
          stepClass += " is-origin";
        } else if (index === steps.length - 1) {
          stepClass += " is-outcome";
        }

        return (
          '<span class="' +
          stepClass +
          '">' +
          '<span class="path-node" aria-hidden="true"></span>' +
          '<span class="path-label">' +
          escapeHtml(step) +
          "</span>" +
          "</span>"
        );
      })
      .join('<span class="path-line" aria-hidden="true"></span>');
  }

  // Draw one SVG line between two map nodes.
  function lineMarkup(x1, y1, x2, y2, className, key) {
    return (
      '<line class="' +
      className +
      '" data-line-key="' +
      escapeHtml(key) +
      '" x1="' +
      x1 +
      '" y1="' +
      y1 +
      '" x2="' +
      x2 +
      '" y2="' +
      y2 +
      '"></line>'
    );
  }

  // Create one clickable map node button.
  function nodeMarkup(node) {
    return (
      '<button class="map-node map-node-' +
      escapeHtml(node.type) +
      '" type="button" style="left:' +
      node.x +
      "px; top:" +
      node.y +
      'px" data-node-key="' +
      escapeHtml(node.key) +
      '" data-term-slug="' +
      escapeHtml(node.term.slug) +
      '" data-node-type="' +
      escapeHtml(node.type) +
      '" data-node-id="' +
      escapeHtml(node.id) +
      '">' +
      '<span class="map-node-dot" aria-hidden="true"></span>' +
      '<span class="map-node-label">' +
      escapeHtml(node.label) +
      "</span>" +
      "</button>"
    );
  }

  // Pick the correct edge of a node so lines connect cleanly.
  function getNodeAnchor(node, side) {
    var width = node.width;
    var height = node.height;

    if (side === "left") {
      return { x: node.x - width / 2, y: node.y };
    }

    if (side === "right") {
      return { x: node.x + width / 2, y: node.y };
    }

    if (side === "top") {
      return { x: node.x, y: node.y - height / 2 };
    }

    return { x: node.x, y: node.y + height / 2 };
  }

  // Use the rendered element size when available so lines land accurately.
  function getRenderedNodeMetrics(root, node) {
    var element = root.querySelector('[data-node-key="' + node.key + '"]');

    if (!element) {
      return {
        x: node.x,
        y: node.y,
        width: node.type === "point" ? 320 : 360,
        height: node.type === "point" ? 72 : 82
      };
    }

    return {
      x: node.x,
      y: node.y,
      width: element.offsetWidth,
      height: element.offsetHeight
    };
  }

  // Choose the best connection points based on node positions.
  function getConnectionAnchors(fromNode, toNode, type) {
    var deltaX = toNode.x - fromNode.x;
    var deltaY = toNode.y - fromNode.y;

    if (type === "primary") {
      if (deltaX >= 0) {
        return {
          from: getNodeAnchor(fromNode, "right"),
          to: getNodeAnchor(toNode, "left")
        };
      }

      return {
        from: getNodeAnchor(fromNode, "left"),
        to: getNodeAnchor(toNode, "right")
      };
    }

    if (Math.abs(deltaX) >= Math.abs(deltaY)) {
      return deltaX >= 0
        ? {
            from: getNodeAnchor(fromNode, "right"),
            to: getNodeAnchor(toNode, "left")
          }
        : {
            from: getNodeAnchor(fromNode, "left"),
            to: getNodeAnchor(toNode, "right")
          };
    }

    return deltaY >= 0
      ? {
          from: getNodeAnchor(fromNode, "bottom"),
          to: getNodeAnchor(toNode, "top")
        }
      : {
          from: getNodeAnchor(fromNode, "top"),
          to: getNodeAnchor(toNode, "bottom")
        };
  }

  // Build one searchable text block for each term.
  function buildSearchIndex(term) {
    var pointBodies = (term.points || [])
      .map(function (point) {
        return [point.label, point.title, point.body, point.sidePoint || ""].join(" ");
      })
      .join(" ");
    var overviewLabels = (term.overviewProcessNodes || [])
      .map(function (node) {
        return node.label;
      })
      .join(" ");

    return normalize(
      [
        term.titleEn,
        term.titleZhOrContext,
        term.overviewOriginLabel,
        term.overviewOutcomeLabel,
        term.shortExplanation,
        term.previewPath,
        (term.pathSteps || []).join(" "),
        overviewLabels,
        pointBodies
      ].join(" ")
    );
  }

  // Convert the term dataset into map nodes and line definitions.
  function buildOverviewModel(items) {
    var connectionLines = [];
    var nodes = [];
    var termsBySlug = {};

    items.forEach(function (term, index) {
      var baseY = OVERVIEW_ROW_START_Y + index * OVERVIEW_ROW_GAP;
      var originNode = {
        id: "origin",
        key: buildSelectionKey(term.slug, "origin", "origin"),
        label: term.overviewOriginLabel || term.titleZhOrContext,
        type: "origin",
        x: OVERVIEW_ORIGIN_X,
        y: baseY,
        term: term
      };
      var outcomeNode = {
        id: "outcome",
        key: buildSelectionKey(term.slug, "outcome", "outcome"),
        label: term.overviewOutcomeLabel || term.titleEn,
        type: "outcome",
        x: OVERVIEW_OUTCOME_X,
        y: baseY,
        term: term
      };
      var processNodes = (term.overviewProcessNodes || []).map(function (point) {
        return {
          id: point.id,
          key: buildSelectionKey(term.slug, "point", point.id),
          label: point.label,
          type: "point",
          x: point.x,
          y: point.y,
          group: point.group,
          term: term
        };
      });
      var nodeMap = {
        origin: originNode,
        outcome: outcomeNode
      };

      termsBySlug[term.slug] = {
        term: term,
        origin: originNode,
        outcome: outcomeNode,
        processNodes: processNodes
      };

      processNodes.forEach(function (node) {
        nodeMap[node.id] = node;
      });

      nodes.push(originNode);
      Array.prototype.push.apply(nodes, processNodes);
      nodes.push(outcomeNode);

      (term.overviewConnections || []).forEach(function (connection) {
        var fromNode = nodeMap[connection.from];
        var toNode = nodeMap[connection.to];

        if (!fromNode || !toNode) {
          return;
        }

        connectionLines.push({
          key: buildSelectionKey(term.slug, "line", connection.from + "-" + connection.to),
          from: fromNode,
          to: toNode,
          termSlug: term.slug,
          type: connection.type || "primary"
        });
      });
    });

    return {
      nodes: nodes,
      connectionLines: connectionLines,
      termsBySlug: termsBySlug
    };
  }

  // Return only the entries that match the current search query.
  function getFilteredTerms(items, query) {
    if (!query) {
      return items.slice();
    }

    return items.filter(function (term) {
      return buildSearchIndex(term).indexOf(query) !== -1;
    });
  }

  // Keep the current selection visible, or choose the closest useful match.
  function findBestSelection(items, query, fallbackKey) {
    var normalizedQuery = normalize(query);
    var firstTerm = items[0];
    var fallbackSlug;
    var hasVisibleFallback;

    if (!items.length) {
      return fallbackKey;
    }

    if (!normalizedQuery) {
      fallbackSlug = fallbackKey ? fallbackKey.split(":")[0] : "";
      hasVisibleFallback = items.some(function (term) {
        return term.slug === fallbackSlug;
      });

      return hasVisibleFallback
        ? fallbackKey
        : buildSelectionKey(firstTerm.slug, "outcome", "outcome");
    }

    for (var i = 0; i < items.length; i += 1) {
      var term = items[i];

      if (normalize(term.titleEn).indexOf(normalizedQuery) !== -1) {
        return buildSelectionKey(term.slug, "outcome", "outcome");
      }

      if (normalize(term.titleZhOrContext).indexOf(normalizedQuery) !== -1) {
        return buildSelectionKey(term.slug, "origin", "origin");
      }

      for (var j = 0; j < (term.points || []).length; j += 1) {
        var point = term.points[j];
        if (
          normalize(
            [point.label, point.title, point.body, point.sidePoint || ""].join(" ")
          ).indexOf(normalizedQuery) !== -1
        ) {
          return buildSelectionKey(term.slug, "point", point.id);
        }
      }
    }

    return buildSelectionKey(firstTerm.slug, "outcome", "outcome");
  }

  // Rebuild the SVG lines after node sizes or selection states change.
  function buildOverviewLineMarkup(root, model, selectedKey, visibleSlugs) {
    var selectedTermSlug = selectedKey.split(":")[0];
    var visibleLookup = {};

    visibleSlugs.forEach(function (slug) {
      visibleLookup[slug] = true;
    });

    var lineMarkupHtml = model.connectionLines
      .map(function (line) {
        var isVisible = !!visibleLookup[line.termSlug];
        var fromNode = getRenderedNodeMetrics(root, line.from);
        var toNode = getRenderedNodeMetrics(root, line.to);
        var anchors = getConnectionAnchors(fromNode, toNode, line.type);
        return lineMarkup(
          anchors.from.x,
          anchors.from.y,
          anchors.to.x,
          anchors.to.y,
          "overview-line overview-line-" +
            line.type +
            (line.termSlug === selectedTermSlug ? " is-related" : "") +
            (isVisible ? "" : " is-dim"),
          line.termSlug
        );
      })
      .join("");

    return lineMarkupHtml;
  }

  // Update only the line layer instead of rerendering the whole map.
  function updateOverviewLines(root, model, selectedKey, visibleSlugs) {
    var svg = root.querySelector(".overview-svg");

    if (!svg) {
      return;
    }

    svg.innerHTML = buildOverviewLineMarkup(root, model, selectedKey, visibleSlugs);
  }

  // Render the overview map with current selection and search visibility.
  function renderOverviewMap(model, selectedKey, visibleSlugs) {
    var visibleLookup = {};

    visibleSlugs.forEach(function (slug) {
      visibleLookup[slug] = true;
    });

    var nodeMarkupHtml = model.nodes
      .map(function (node) {
        var html = nodeMarkup(node);
        var replacement = 'class="map-node ';

        if (node.key === selectedKey) {
          replacement += "is-active ";
        }

        if (!visibleLookup[node.term.slug]) {
          replacement += "is-dim ";
        }

        return html.replace('class="map-node ', replacement);
      })
      .join("");

    return (
      '<div class="overview-canvas" style="width:' +
      OVERVIEW_WIDTH +
      "px;height:" +
      OVERVIEW_HEIGHT +
      'px">' +
      '<div class="overview-grid" aria-hidden="true"></div>' +
      '<svg class="overview-svg" viewBox="0 0 ' +
      OVERVIEW_WIDTH +
      " " +
      OVERVIEW_HEIGHT +
      '" preserveAspectRatio="none"></svg>' +
      nodeMarkupHtml +
      "</div>"
    );
  }

  // Render the zoom buttons and current zoom percentage.
  function renderOverviewZoomControls(zoom) {
    return (
      '<div class="overview-zoom-controls" data-overview-zoom-controls>' +
      '<button class="overview-zoom-button" type="button" data-zoom-action="in" aria-label="Zoom in">+</button>' +
      '<button class="overview-zoom-button" type="button" data-zoom-action="out" aria-label="Zoom out">-</button>' +
      '<div class="overview-zoom-readout" data-overview-zoom-readout>' +
      Math.round(zoom * 100) +
      "%</div>" +
      "</div>"
    );
  }

  // Render one expandable card in the archive index list.
  function renderHomePanel(term, selectedKey, isExpanded) {
    var summaryKey = buildSelectionKey(term.slug, "outcome", "outcome");
    var previewPoints = (term.points || [])
      .slice(0, 3)
      .map(function (point) {
        var pointKey = buildSelectionKey(term.slug, "point", point.id);
        return (
          '<button class="point-button home-point-button' +
          (selectedKey === pointKey ? " is-active" : "") +
          '" type="button" data-home-point-key="' +
          escapeHtml(pointKey) +
          '">' +
          '<span class="point-dot" aria-hidden="true"></span>' +
          '<span class="point-text">' +
          escapeHtml(point.label) +
          "</span>" +
          "</button>"
        );
      })
      .join("");

    return (
      '<article class="entry-card entry-card-' +
      escapeHtml(term.slug) +
      (selectedKey.indexOf(term.slug + ":") === 0 ? " is-linked-active" : "") +
      '" data-entry-card="' +
      escapeHtml(term.slug) +
      '">' +
      '<button class="entry-toggle" type="button" data-toggle-slug="' +
      escapeHtml(term.slug) +
      '" aria-expanded="' +
      (isExpanded ? "true" : "false") +
      '">' +
      '<span class="entry-toggle-label">Index</span>' +
      '<span class="entry-toggle-title">' +
      escapeHtml(term.titleEn) +
      "</span>" +
      '<span class="entry-toggle-context">' +
      escapeHtml(term.titleZhOrContext) +
      "</span>" +
      '<span class="entry-toggle-icon" aria-hidden="true">' +
      (isExpanded ? "−" : "+") +
      "</span>" +
      "</button>" +
      '<div class="entry-card-panel' +
      (isExpanded ? " is-open" : "") +
      '">' +
      '<div class="entry-card-main">' +
      '<div class="entry-heading">' +
      '<h3 class="entry-title"><button class="entry-title-button" type="button" data-home-point-key="' +
      escapeHtml(summaryKey) +
      '">' +
      escapeHtml(term.titleEn) +
      "</button></h3>" +
      '<p class="entry-context">' +
      escapeHtml(term.titleZhOrContext) +
      "</p>" +
      "</div>" +
      '<div class="entry-path-block">' +
      '<div class="entry-visual-path entry-visual-path-compact">' +
      renderPathMarkup(term.pathSteps, "entry-path-segment") +
      "</div>" +
      "</div>" +
      '<div class="timeline home-timeline">' +
      previewPoints +
      "</div>" +
      '<div class="entry-actions">' +
      '<a class="entry-link" href="term.html?slug=' +
      encodeURIComponent(term.slug) +
      '">Open entry</a>' +
      "</div>" +
      "</div>" +
      "</div>" +
      "</article>"
    );
  }

  // Keep zoom within the allowed range.
  function clampZoom(zoom) {
    return Math.min(Math.max(zoom, OVERVIEW_MIN_ZOOM), OVERVIEW_MAX_ZOOM);
  }

  // Calculate how far the user can pan without leaving empty space.
  function getMaxPan(viewport, canvas, zoom) {
    var scaledViewportWidth;
    var scaledViewportHeight;

    if (!viewport || !canvas) {
      return { x: 0, y: 0 };
    }

    scaledViewportWidth = viewport.clientWidth / zoom;
    scaledViewportHeight = viewport.clientHeight / zoom;

    return {
      x: Math.max(canvas.offsetWidth - scaledViewportWidth, 0),
      y: Math.max(canvas.offsetHeight - scaledViewportHeight, 0)
    };
  }

  // Start the map near the upper-left so the layout feels balanced on load.
  function setInitialPan(viewport, canvas, zoom) {
    var maxPan;

    if (!viewport || !canvas) {
      return { x: 0, y: 0 };
    }

    maxPan = getMaxPan(viewport, canvas, zoom);

    return {
      x: Math.min(Math.max(maxPan.x * 0.18, 0), maxPan.x),
      y: Math.min(Math.max(maxPan.y * 0.08, 0), maxPan.y)
    };
  }

  // Limit panning so the canvas stays inside the viewport.
  function clampPan(viewport, canvas, position, zoom) {
    var maxPan = getMaxPan(viewport, canvas, zoom);

    return {
      x: Math.min(Math.max(position.x, 0), maxPan.x),
      y: Math.min(Math.max(position.y, 0), maxPan.y)
    };
  }

  // Apply pan and zoom to the overview canvas.
  function applyViewTransform(canvas, view) {
    if (!canvas) {
      return;
    }

    canvas.style.transform =
      "scale(" +
      String(view.zoom) +
      ") translate(" +
      String(-view.x) +
      "px, " +
      String(-view.y) +
      "px)";
  }

  // Move the map so the selected node is easier to see on larger screens.
  function centerSelection(viewport, canvas, overviewRoot, selectedKey, currentView) {
    var zoom;
    var targetPan;

    if (!viewport || !canvas || !overviewRoot || window.innerWidth <= MOBILE_BREAKPOINT) {
      return currentView;
    }

    var selectedNode = Array.prototype.slice
      .call(overviewRoot.querySelectorAll("[data-node-key]"))
      .find(function (node) {
        return node.getAttribute("data-node-key") === selectedKey;
      });

    if (!selectedNode) {
      return currentView;
    }

    var left = parseFloat(selectedNode.style.left) || 0;
    var top = parseFloat(selectedNode.style.top) || 0;
    zoom = currentView.zoom || OVERVIEW_DEFAULT_ZOOM;
    targetPan = clampPan(
      viewport,
      canvas,
      {
        x: left - (viewport.clientWidth * 0.45) / zoom,
        y: top - (viewport.clientHeight * 0.45) / zoom
      },
      zoom
    );

    return {
      x: targetPan.x,
      y: targetPan.y,
      zoom: zoom
    };
  }

  // Zoom toward the cursor position instead of always using the center point.
  function zoomAroundViewportPoint(viewport, canvas, currentView, nextZoom, originX, originY) {
    var clampedZoom = clampZoom(nextZoom);
    var safeOriginX = typeof originX === "number" ? originX : viewport.clientWidth / 2;
    var safeOriginY = typeof originY === "number" ? originY : viewport.clientHeight / 2;
    var contentX = currentView.x + safeOriginX / currentView.zoom;
    var contentY = currentView.y + safeOriginY / currentView.zoom;
    var nextView = {
      x: contentX - safeOriginX / clampedZoom,
      y: contentY - safeOriginY / clampedZoom,
      zoom: clampedZoom
    };

    return {
      x: clampPan(viewport, canvas, nextView, clampedZoom).x,
      y: clampPan(viewport, canvas, nextView, clampedZoom).y,
      zoom: clampedZoom
    };
  }

  // Refresh the zoom percentage shown in the controls.
  function updateZoomReadout(viewport, zoom) {
    var readout;

    if (!viewport) {
      return;
    }

    readout = viewport.querySelector("[data-overview-zoom-readout]");

    if (readout) {
      readout.textContent = Math.round(zoom * 100) + "%";
    }
  }

  // Add drag-to-pan and wheel-to-zoom behavior to the overview viewport.
  function bindPanAndZoom(viewport, canvas, getView, setView) {
    if (!viewport || !canvas) {
      return;
    }

    var dragState = null;

    // Ignore drag gestures that start on buttons or zoom controls.
    viewport.onpointerdown = function (event) {
      if (
        event.target.closest(".map-node") ||
        event.target.closest(".overview-zoom-controls")
      ) {
        return;
      }

      dragState = {
        id: event.pointerId,
        startX: event.clientX,
        startY: event.clientY,
        origin: getView()
      };

      viewport.classList.add("is-dragging");
      if (viewport.setPointerCapture) {
        try {
          viewport.setPointerCapture(event.pointerId);
        } catch (error) {
        }
      }
    };

    // Update the current pan position while the pointer moves.
    viewport.onpointermove = function (event) {
      var nextView;

      if (!dragState || dragState.id !== event.pointerId) {
        return;
      }

      nextView = {
        x:
          dragState.origin.x -
          (event.clientX - dragState.startX) / dragState.origin.zoom,
        y:
          dragState.origin.y -
          (event.clientY - dragState.startY) / dragState.origin.zoom,
        zoom: dragState.origin.zoom
      };
      nextView = {
        x: clampPan(viewport, canvas, nextView, nextView.zoom).x,
        y: clampPan(viewport, canvas, nextView, nextView.zoom).y,
        zoom: nextView.zoom
      };

      setView(nextView);
      applyViewTransform(canvas, nextView);
    };

    // Clear dragging state when the pointer is released or cancelled.
    function releaseDrag(event) {
      if (!dragState || dragState.id !== event.pointerId) {
        return;
      }

      dragState = null;
      viewport.classList.remove("is-dragging");
      try {
        if (viewport.hasPointerCapture && viewport.hasPointerCapture(event.pointerId)) {
          viewport.releasePointerCapture(event.pointerId);
        }
      } catch (error) {
      }
    }

    viewport.onpointerup = releaseDrag;
    viewport.onpointercancel = releaseDrag;
    // Use the mouse wheel for zooming on desktop screens.
    viewport.onwheel = function (event) {
      var currentView;
      var delta;
      var nextView;
      var rect;

      if (window.innerWidth <= MOBILE_BREAKPOINT) {
        return;
      }

      event.preventDefault();

      currentView = getView();
      delta = event.deltaY < 0 ? OVERVIEW_ZOOM_STEP : -OVERVIEW_ZOOM_STEP;
      rect = viewport.getBoundingClientRect();
      nextView = zoomAroundViewportPoint(
        viewport,
        canvas,
        currentView,
        currentView.zoom + delta,
        event.clientX - rect.left,
        event.clientY - rect.top
      );

      setView(nextView);
      applyViewTransform(canvas, nextView);
      updateZoomReadout(viewport, nextView.zoom);
    };
  }

  // Render the home page: map, detail panel, search, and entry list.
  function renderHome() {
    var listRoot = document.querySelector("[data-term-list]");
    var countRoot = document.querySelector("[data-count]");
    var overviewRoot = document.querySelector("[data-overview-map]");
    var detailRoot = document.querySelector("[data-map-detail]");
    var viewport = document.querySelector("[data-overview-viewport]");
    var searchInput = document.querySelector("[data-search-input]");

    if (!listRoot || !countRoot || !overviewRoot || !detailRoot || !viewport || !searchInput) {
      return;
    }

    // These values store the current UI state for filtering and navigation.
    var overviewModel = buildOverviewModel(terms);
    var selectedKey = buildSelectionKey(terms[0].slug, "outcome", "outcome");
    var searchQuery = "";
    var manuallyExpandedSlugs = {};
    var manuallyCollapsedSlugs = {};
    var autoExpandedSlug = null;
    var overviewView = { x: 0, y: 0, zoom: OVERVIEW_DEFAULT_ZOOM };
    var panIsInitialized = false;

    // Track which card should auto-open based on the current selection.
    function setAutoExpanded(slug) {
      if (!slug) {
        return;
      }

      autoExpandedSlug = slug;
    }

    // Manual open/close choices should override the automatic state.
    function isExpanded(slug) {
      if (manuallyExpandedSlugs[slug]) {
        return true;
      }

      if (manuallyCollapsedSlugs[slug]) {
        return false;
      }

      return autoExpandedSlug === slug;
    }

    // Repaint the visible parts of the home page whenever state changes.
    function renderSelection(shouldCenterSelection) {
      var visibleTerms = getFilteredTerms(terms, searchQuery);
      var parts;
      var termSlug;
      var nodeType;
      var nodeId;
      var selectedTerm;
      var canvas;
      var zoomControlsMarkup;

      // When there is no match, replace the normal interface with empty states.
      if (!visibleTerms.length) {
        if (viewport.querySelector("[data-overview-zoom-controls]")) {
          viewport.querySelector("[data-overview-zoom-controls]").remove();
        }
        overviewRoot.innerHTML =
          '<div class="overview-empty">No cases match the current search.</div>';
        detailRoot.innerHTML =
          '<div class="point-detail-copy"><p class="detail-kicker">Search</p><h3>No match found</h3><p>Try searching by origin, outcome, process label, or explanation text.</p></div>';
        listRoot.innerHTML =
          '<div class="empty-state">No index entries match the current search.</div>';
        countRoot.textContent = "0 entries";
        return;
      }

      // Keep the selected node, detail panel, and list cards in sync.
      selectedKey = findBestSelection(visibleTerms, searchQuery, selectedKey);
      parts = selectedKey.split(":");
      termSlug = parts[0];
      nodeType = parts[1];
      nodeId = parts[2];
      selectedTerm = overviewModel.termsBySlug[termSlug].term;

      setAutoExpanded(termSlug);
      overviewRoot.innerHTML = renderOverviewMap(
        overviewModel,
        selectedKey,
        visibleTerms.map(function (term) {
          return term.slug;
        })
      );
      zoomControlsMarkup = renderOverviewZoomControls(overviewView.zoom);
      viewport.querySelector("[data-overview-zoom-controls]") &&
        viewport.querySelector("[data-overview-zoom-controls]").remove();
      viewport.insertAdjacentHTML("beforeend", zoomControlsMarkup);
      updateOverviewLines(
        overviewRoot,
        overviewModel,
        selectedKey,
        visibleTerms.map(function (term) {
          return term.slug;
        })
      );
      overviewRoot.classList.add("is-focus-mode");

      listRoot.innerHTML = visibleTerms
        .map(function (entry) {
          return renderHomePanel(entry, selectedKey, isExpanded(entry.slug));
        })
        .join("");
      countRoot.textContent = visibleTerms.length + " entries";

      if (nodeType === "point") {
        detailRoot.innerHTML = renderPointDetail(getPointById(selectedTerm, nodeId));
      } else {
        detailRoot.innerHTML = renderTermSummaryDetail(selectedTerm, nodeType);
      }

      canvas = overviewRoot.querySelector(".overview-canvas");

      // Initialize the map view once, then preserve the user's pan and zoom.
      if (canvas) {
        if (!panIsInitialized || shouldCenterSelection) {
          if (!panIsInitialized) {
            var initialPan = setInitialPan(viewport, canvas, overviewView.zoom);
            overviewView = {
              x: initialPan.x,
              y: initialPan.y,
              zoom: overviewView.zoom
            };
            panIsInitialized = true;
          }
          overviewView = centerSelection(
            viewport,
            canvas,
            overviewRoot,
            selectedKey,
            overviewView
          );
        } else {
          var clampedPan = clampPan(viewport, canvas, overviewView, overviewView.zoom);
          overviewView = {
            x: clampedPan.x,
            y: clampedPan.y,
            zoom: overviewView.zoom
          };
        }

        applyViewTransform(canvas, overviewView);
        updateZoomReadout(viewport, overviewView.zoom);

        bindPanAndZoom(
          viewport,
          canvas,
          function () {
            return overviewView;
          },
          function (nextView) {
            overviewView = nextView;
          }
        );
      }

      // Bind all newly rendered buttons after the DOM has been replaced.
      Array.prototype.slice
        .call(viewport.querySelectorAll("[data-zoom-action]"))
        .forEach(function (button) {
          button.addEventListener("click", function () {
            var action = button.getAttribute("data-zoom-action");
            var delta = action === "in" ? OVERVIEW_ZOOM_STEP : -OVERVIEW_ZOOM_STEP;
            var nextView = zoomAroundViewportPoint(
              viewport,
              canvas,
              overviewView,
              overviewView.zoom + delta
            );

            overviewView = nextView;
            applyViewTransform(canvas, overviewView);
            updateZoomReadout(viewport, overviewView.zoom);
          });
        });

      Array.prototype.slice
        .call(overviewRoot.querySelectorAll("[data-node-key]"))
        .forEach(function (button) {
          button.addEventListener("click", function () {
            selectedKey = button.getAttribute("data-node-key");
            renderSelection(true);
          });
        });

      Array.prototype.slice
        .call(listRoot.querySelectorAll("[data-home-point-key]"))
        .forEach(function (button) {
          button.addEventListener("click", function () {
            selectedKey = button.getAttribute("data-home-point-key");
            renderSelection(true);
          });
        });

      Array.prototype.slice
        .call(listRoot.querySelectorAll("[data-toggle-slug]"))
        .forEach(function (button) {
          button.addEventListener("click", function () {
            var slug = button.getAttribute("data-toggle-slug");
            if (isExpanded(slug)) {
              delete manuallyExpandedSlugs[slug];
              manuallyCollapsedSlugs[slug] = true;
            } else {
              manuallyExpandedSlugs[slug] = true;
              delete manuallyCollapsedSlugs[slug];
            }
            renderSelection(false);
          });
        });
    }

    // Refilter the archive as the user types.
    searchInput.addEventListener("input", function () {
      searchQuery = normalize(searchInput.value);
      renderSelection(true);
    });

    renderSelection(true);

    // Recalculate the map view when the viewport size changes.
    window.addEventListener("resize", function () {
      panIsInitialized = false;
      renderSelection(false);
    });
  }

  // Render a single detail page based on the slug in the URL.
  function renderTerm() {
    var root = document.querySelector("[data-term-detail]");

    if (!root) {
      return;
    }

    var slug = getQueryParam("slug");
    var term = terms.find(function (item) {
      return item.slug === slug;
    });

    // Show a simple fallback message if the slug does not match any entry.
    if (!term) {
      root.innerHTML =
        '<div class="not-found">' +
        "<h1>entry not found</h1>" +
        '<p>The requested archive entry is unavailable.</p>' +
        '<a class="back-link" href="index.html">Return to index</a>' +
        "</div>";
      return;
    }

    // Build the detail page and activate the first point by default.
    var stepsMarkup = renderPathMarkup(term.pathSteps, "detail-path-segment");
    var pointsMarkup = (term.points || [])
      .map(function (point, index) {
        return (
          '<button class="point-button detail-point-button' +
          (index === 0 ? " is-active" : "") +
          '" type="button" data-point-id="' +
          escapeHtml(point.id) +
          '">' +
          '<span class="point-dot" aria-hidden="true"></span>' +
          '<span class="point-text">' +
          escapeHtml(point.label) +
          "</span>" +
          "</button>"
        );
      })
      .join("");

    root.innerHTML =
      '<header class="detail-header">' +
      '<div class="detail-heading">' +
      '<p class="detail-label">Archive Entry</p>' +
      "<h1>" +
      escapeHtml(term.titleEn) +
      "</h1>" +
      '<p class="detail-zh">' +
      escapeHtml(term.titleZhOrContext) +
      "</p>" +
      "</div>" +
      '<div class="detail-meta">' +
      '<a class="back-link" href="index.html">Back to archive</a>' +
      "</div>" +
      "</header>" +
      '<section class="detail-section detail-intro">' +
      '<div class="info-grid">' +
      '<div class="info-block">' +
      "<h2>" +
      escapeHtml(term.originLabel) +
      "</h2>" +
      "<p>" +
      escapeHtml(term.titleZhOrContext) +
      "</p>" +
      "</div>" +
      '<div class="info-block info-block-process">' +
      "<h2>Transformation Process</h2>" +
      '<div class="path-preview path-preview-detail">' +
      stepsMarkup +
      "</div>" +
      "</div>" +
      '<div class="info-block">' +
      "<h2>" +
      escapeHtml(term.outcomeLabel) +
      "</h2>" +
      "<p>" +
      escapeHtml(term.titleEn) +
      "</p>" +
      "</div>" +
      "</div>" +
      '<p class="detail-summary">' +
      escapeHtml(term.shortExplanation) +
      "</p>" +
      "</section>" +
      '<section class="detail-section timeline-section">' +
      "<h2>Clickable Factors</h2>" +
      '<div class="timeline detail-timeline" data-point-list>' +
      pointsMarkup +
      "</div>" +
      '<div class="point-detail point-detail-strong" data-point-detail>' +
      renderPointDetail(term.points[0]) +
      "</div>" +
      "</section>";

    var pointList = root.querySelector("[data-point-list]");
    var pointDetail = root.querySelector("[data-point-detail]");

    if (!pointList || !pointDetail) {
      return;
    }

    // Swap the detail panel when a user clicks a different factor.
    pointList.addEventListener("click", function (event) {
      var button = event.target.closest("[data-point-id]");
      var selectedPoint;

      if (!button) {
        return;
      }

      selectedPoint = getPointById(term, button.getAttribute("data-point-id"));

      if (!selectedPoint) {
        return;
      }

      Array.prototype.slice
        .call(pointList.querySelectorAll(".detail-point-button"))
        .forEach(function (item) {
          item.classList.remove("is-active");
        });

      button.classList.add("is-active");
      pointDetail.innerHTML = renderPointDetail(selectedPoint);
    });
  }

  // Run the correct renderer for whichever page is currently open.
  document.addEventListener("DOMContentLoaded", function () {
    renderHome();
    renderTerm();
  });
})();
