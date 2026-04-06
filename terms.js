// Archive data used by both the overview page and the detail page.
// Each object stores labels, map nodes, connections, and explanation text.
window.TERMS = [
  {
    slug: "zhongguo-china",
    titleEn: "China",
    titleZhOrContext: "中国 / Zhongguo",
    originLabel: "Original Chinese term",
    outcomeLabel: "Western outcome",
    previewPath:
      "中国 / Zhongguo -> Outside Naming -> Sanskrit / Persian / Portuguese Transmission -> China",
    pathSteps: [
      "中国 / Zhongguo",
      "Outside Naming",
      "Sanskrit / Persian / Portuguese Transmission",
      "China"
    ],
    shortExplanation:
      "This entry shows that China is not a direct translation of 中国, but a Western exonym shaped through long-distance naming and transmission. Later, trade added another layer by linking china with porcelain.",
    overviewOriginLabel: "中国 / Zhongguo",
    overviewOutcomeLabel: "China",
    overviewProcessNodes: [
      { id: "outside-naming", label: "Outside Naming", x: 760, y: 180, group: "naming" },
      { id: "transmission", label: "Sanskrit / Persian / Portuguese Transmission", x: 1400, y: 180, group: "transmission" },
      { id: "porcelain-trade", label: "Porcelain Trade", x: 1780, y: 272, group: "trade" }
    ],
    overviewConnections: [
      { from: "origin", to: "outside-naming", type: "primary" },
      { from: "outside-naming", to: "transmission", type: "primary" },
      { from: "transmission", to: "outcome", type: "primary" },
      { from: "porcelain-trade", to: "outcome", type: "secondary" }
    ],
    points: [
      {
        id: "outside-naming",
        label: "Outside Naming",
        title: "Outside Naming / 外部命名",
        body:
          "China is not a direct translation of 中国. It is an outside name used by other cultures, which means the English term already reflects a history of external naming rather than a one-to-one equivalence."
      },
      {
        id: "transmission",
        label: "Sanskrit / Persian / Portuguese Transmission",
        title: "Transmission Across Languages / 跨语言传播",
        body:
          "The English word China is usually traced through Sanskrit, Persian, and Portuguese forms before entering English. Many scholars also connect the chain to Qin, showing how the name arrived through historical transmission rather than direct translation."
      },
      {
        id: "porcelain-trade",
        label: "Porcelain Trade",
        title: "Side Point: Porcelain Trade / 旁支节点",
        body:
          "Later, European trade with Chinese porcelain helped china also become a common English word for fine porcelain. Trade did not create the country name, but it added a second commercial meaning around the same word.",
        sidePoint: "china as porcelain"
      }
    ]
  },
  {
    slug: "loong-chinese-dragon",
    titleEn: "Chinese Dragon",
    titleZhOrContext: "龙 / loong",
    originLabel: "Original Chinese term",
    outcomeLabel: "Western outcome",
    previewPath:
      '龙 / loong -> Translation as "Dragon" -> Western Fantasy Image Overlap -> Chinese Dragon',
    pathSteps: [
      "龙 / loong",
      'Translation as "Dragon"',
      "Western Fantasy Image Overlap",
      "Chinese Dragon"
    ],
    shortExplanation:
      "This entry shows how 龙 becomes Chinese Dragon through a translation shortcut. Once the word is placed under dragon, it also picks up Western fantasy meanings and loses some of its original cultural context.",
    overviewOriginLabel: "龙 / loong",
    overviewOutcomeLabel: "Chinese Dragon",
    overviewProcessNodes: [
      { id: "translated-dragon", label: 'Translation as "Dragon"', x: 760, y: 460, group: "translation" },
      { id: "fantasy-overlap", label: "Western Fantasy Image Overlap", x: 1400, y: 460, group: "fantasy" },
      { id: "regional-compression", label: "Regional Compression", x: 1780, y: 552, group: "compression" }
    ],
    overviewConnections: [
      { from: "origin", to: "translated-dragon", type: "primary" },
      { from: "translated-dragon", to: "fantasy-overlap", type: "primary" },
      { from: "fantasy-overlap", to: "outcome", type: "primary" },
      { from: "regional-compression", to: "outcome", type: "secondary" }
    ],
    points: [
      {
        id: "translated-dragon",
        label: 'Translation as "Dragon"',
        title: 'Translated as "Dragon" / 被译为 dragon',
        body:
          "The word 龙 is often translated as dragon for convenience, but this works more like a shortcut than a neutral match. The translation makes the term immediately legible in English while also shifting it into a different conceptual frame."
      },
      {
        id: "fantasy-overlap",
        label: "Western Fantasy Image Overlap",
        title: "Fantasy Image Overlap / 西方奇幻图像叠加",
        body:
          "In many Western contexts, dragon suggests a fire-breathing monster tied to danger or evil. In Chinese culture, 龙 is more often linked to power, auspiciousness, weather, and transformation, so the imported image changes the semantic field."
      },
      {
        id: "regional-compression",
        label: "Regional Compression",
        title: "Regional Compression / 区域压缩",
        body:
          "Using one English label can compress Chinese, Korean, Japanese, and other traditions into one broad Western-facing category. This is simplification, not just translation, because distinct lineages are folded into a single familiar term."
      }
    ]
  },
  {
    slug: "fortune-cookie",
    titleEn: "Fortune Cookie",
    titleZhOrContext: "No Direct Chinese Term",
    originLabel: "Original context",
    outcomeLabel: "Western outcome",
    previewPath:
      "No Direct Chinese Term -> Diaspora Fortune-Cracker Tradition -> California Restaurant Circulation -> Chinese-American Restaurant Adoption -> Fortune Cookie",
    pathSteps: [
      "No Direct Chinese Term",
      "Diaspora Fortune-Cracker Tradition",
      "California Restaurant Circulation",
      "Chinese-American Restaurant Adoption",
      "Fortune Cookie"
    ],
    shortExplanation:
      "This entry shows that the fortune cookie is not a direct Chinese original. It became Chinese in popular understanding through migration, restaurant culture, and repeated commercial association in the U.S.",
    overviewOriginLabel: "No Direct Chinese Term",
    overviewOutcomeLabel: "Fortune Cookie",
    overviewProcessNodes: [
      { id: "diaspora-tradition", label: "Diaspora Fortune-Cracker Tradition", x: 620, y: 740, group: "diaspora" },
      { id: "california-circulation", label: "California Restaurant Circulation", x: 1080, y: 740, group: "circulation" },
      { id: "chinese-american-adoption", label: "Chinese-American Restaurant Adoption", x: 1540, y: 740, group: "adoption" },
      { id: "commercial-association", label: "Commercial Association", x: 1820, y: 832, group: "association" }
    ],
    overviewConnections: [
      { from: "origin", to: "diaspora-tradition", type: "primary" },
      { from: "diaspora-tradition", to: "california-circulation", type: "primary" },
      { from: "california-circulation", to: "chinese-american-adoption", type: "primary" },
      { from: "chinese-american-adoption", to: "outcome", type: "primary" },
      { from: "commercial-association", to: "outcome", type: "secondary" }
    ],
    points: [
      {
        id: "diaspora-tradition",
        label: "Diaspora Fortune-Cracker Tradition",
        title: "Diaspora Food Tradition / 离散饮食传统",
        body:
          "Historians often trace the fortune cookie more closely to Japanese immigrant traditions than to food from China itself. The origin point is therefore a mixed diaspora context, not a direct export from China."
      },
      {
        id: "california-circulation",
        label: "California Restaurant Circulation",
        title: "California Restaurant Circulation / 加州餐馆流通",
        body:
          "These cookies circulated in California through immigrant food businesses and local restaurant culture. Regional circulation made the form familiar before it was strongly fixed to a single ethnic identity."
      },
      {
        id: "chinese-american-adoption",
        label: "Chinese-American Restaurant Adoption",
        title: "Chinese-American Restaurant Adoption / 中餐馆采纳",
        body:
          "Over time, fortune cookies became strongly associated with Chinese-American restaurants, especially in the United States. Repetition inside that dining context encouraged customers to read them as naturally Chinese."
      },
      {
        id: "commercial-association",
        label: "Commercial Association",
        title: "Commercial Association / 商业关联",
        body:
          "Because they were repeatedly served in Chinese restaurant settings, people began to read them as Chinese culture even though their history is more mixed. Commercial repetition turned a diaspora object into a simplified cultural symbol."
      }
    ]
  },
  {
    slug: "chop-suey-font",
    titleEn: "Chop Suey Font",
    titleZhOrContext: "No Direct Chinese Term",
    originLabel: "Original context",
    outcomeLabel: "Western outcome",
    previewPath:
      "No Direct Chinese Term -> Display Type Imitation -> Restaurant / Poster Repetition -> Chop Suey Font",
    pathSteps: [
      "No Direct Chinese Term",
      "Display Type Imitation",
      "Restaurant / Poster Repetition",
      "Chop Suey Font"
    ],
    shortExplanation:
      "This entry shows that Chop Suey Font is not a translation of 汉字. It is a Western-made visual imitation that became linked to Chinese restaurants and Oriental branding through repeated commercial use.",
    overviewOriginLabel: "No Direct Chinese Term",
    overviewOutcomeLabel: "Chop Suey Font",
    overviewProcessNodes: [
      { id: "display-imitation", label: "Display Type Imitation", x: 760, y: 1020, group: "visual" },
      { id: "late-19th-design", label: "Late 19th-Century Design", x: 760, y: 1112, group: "history" },
      { id: "poster-repetition", label: "Restaurant / Poster Repetition", x: 1400, y: 1020, group: "branding" },
      { id: "orientalist-branding", label: "Orientalist Branding", x: 1800, y: 1112, group: "branding" }
    ],
    overviewConnections: [
      { from: "origin", to: "display-imitation", type: "primary" },
      { from: "display-imitation", to: "poster-repetition", type: "primary" },
      { from: "poster-repetition", to: "outcome", type: "primary" },
      { from: "late-19th-design", to: "display-imitation", type: "secondary" },
      { from: "orientalist-branding", to: "outcome", type: "secondary" }
    ],
    points: [
      {
        id: "display-imitation",
        label: "Display Type Imitation",
        title: "Display Type Imitation / 模仿式字体设计",
        body:
          "Chop suey fonts are not real Chinese writing. They are Latin-letter display styles made to look Chinese to Western viewers, translating visual impression into a marketable graphic shortcut."
      },
      {
        id: "late-19th-design",
        label: "Late 19th-Century Design",
        title: "Late 19th-Century Design / 十九世纪末设计前身",
        body:
          "A precursor style appeared in the late nineteenth century, when foundries created decorative typefaces such as Mandarin that mimicked an imagined East Asian look. The effect came from graphic fantasy rather than linguistic accuracy."
      },
      {
        id: "poster-repetition",
        label: "Restaurant / Poster Repetition",
        title: "Restaurant and Poster Repetition / 餐馆与海报重复使用",
        body:
          "By the 1930s, chop suey lettering was widely used to advertise Chinese restaurants in the United States. Repetition across signs, menus, and posters helped turn it into a recognizable stereotype."
      },
      {
        id: "orientalist-branding",
        label: "Orientalist Branding",
        title: "Orientalist Branding / 东方主义品牌化",
        body:
          "These fonts circulated as part of Western commercial design, where Chinese-ness was reduced to a quick visual signal. The style functions less as translation and more as branding through visual simplification."
      }
    ]
  }
];
