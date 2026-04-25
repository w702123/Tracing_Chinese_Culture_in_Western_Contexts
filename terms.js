// Archive data used by both the overview page and the detail page.
// Each object stores labels, map nodes, connections, and explanation text.
window.TERMS = [
  {
    slug: "zhongguo-china",
    titleEn: "China",
    titleZhOrContext: "中国 / Zhongguo",
    pathSteps: [
      "中国 / Zhongguo",
      "Outside Naming Through Foreign Exonyms",
      "Cina / Sina Transmission",
      "China"
    ],
    shortExplanation:
      "This entry shows that China is not a direct translation of 中国, but an outside name linked to foreign exonyms, Sanskrit / Latin forms such as Cina and Sina, and later European standardization.",
    overviewOriginLabel: "中国 / Zhongguo",
    overviewOutcomeLabel: "China",
    overviewProcessNodes: [
      { id: "outside-naming", label: "Outside Naming Through Foreign Exonyms", group: "naming" },
      { id: "linked-forms", label: "Cina and Sina Transmission", group: "transmission" },
      { id: "standardization", label: "European Standardization", group: "standardization" }
    ],
    overviewConnections: [
      { from: "origin", to: "outside-naming", type: "primary" },
      { from: "outside-naming", to: "linked-forms", type: "primary" },
      { from: "linked-forms", to: "standardization", type: "primary" },
      { from: "standardization", to: "outcome", type: "primary" }
    ],
    points: [
      {
        id: "outside-naming",
        label: "Outside Naming Through Foreign Exonyms",
        title: "Outside Naming Through Foreign Exonyms / 外部他称命名",
        body:
          "中国 is a self-name, but China is an outside-facing name shaped by foreign exonyms rather than direct self-translation. The international label carries the history of external naming."
      },
      {
        id: "linked-forms",
        label: "Cina and Sina Transmission",
        title: "Cina and Sina Transmission / 传播链条",
        body:
          "Forms such as Cina and Sina linked the name to routes of trade, travel, and writing across languages, probably including routes associated with Qin. The international term emerged through this chain rather than from direct lexical equivalence."
      },
      {
        id: "standardization",
        label: "European Standardization",
        title: "European Standardization / 欧洲标准化",
        body:
          "European standardization fixed China as the dominant international name and separated it from the self-name Zhōngguó. What looks stable today is the result of historical naming consolidation."
      }
    ]
  },
  {
    slug: "long-dragon",
    titleEn: "Chinese dragon",
    titleZhOrContext: "龙 / Long",
    pathSteps: [
      "龙 / Long",
      "Translation into \"dragon\"",
      "Western monster frame",
      "Chinese dragon"
    ],
    shortExplanation:
      "This entry shows how 龙 is translated into the existing Western category dragon, whose monstrous or malevolent imagery can override Chinese associations with rain, beneficence, cosmic power, and rulership.",
    overviewOriginLabel: "龙 / Long",
    overviewOutcomeLabel: "Chinese dragon",
    overviewProcessNodes: [
      { id: "category-translation", label: "Translation into Existing \"Dragon\" Category", group: "translation" },
      { id: "monster-frame", label: "Western Dragon Imagery", group: "imagery" },
      { id: "semantic-override", label: "Chinese Associations Overridden", group: "meaning" }
    ],
    overviewConnections: [
      { from: "origin", to: "category-translation", type: "primary" },
      { from: "category-translation", to: "monster-frame", type: "primary" },
      { from: "monster-frame", to: "semantic-override", type: "primary" },
      { from: "semantic-override", to: "outcome", type: "primary" }
    ],
    points: [
      {
        id: "category-translation",
        label: "Category Translation",
        title: "Category Translation / 范畴式翻译",
        body:
          "龙 is often rendered as dragon because the English term is immediately legible. But that convenience places the concept inside an existing Western category instead of preserving its own cosmological frame."
      },
      {
        id: "monster-frame",
        label: "Monster Frame",
        title: "Monster Frame / 怪物化框架",
        body:
          "In many Western traditions, dragons are monstrous, fire-breathing, or malevolent. This imagery conflicts with Chinese associations of 龙 with rain, beneficence, cosmic power, and rulership."
      },
      {
        id: "semantic-override",
        label: "Overridden Meanings",
        title: "Overridden Meanings / 语义覆盖",
        body:
          "Once dragon becomes the dominant reference point, the Chinese term is read through imported fantasy assumptions. The result is not neutral translation but a shift in semantic priority toward the Western frame."
      }
    ]
  },
  {
    slug: "yinyang-yin-yang-symbol",
    titleEn: "Yin-yang symbol",
    titleZhOrContext: "阴阳 / Yinyang",
    pathSteps: [
      "阴阳 / Yinyang",
      "Simplified Symbolic Form",
      "Icon Remembered Faster Than Philosophy",
      "Yin-yang Symbol"
    ],
    shortExplanation:
      "This entry shows how 阴阳, a cosmological concept of complementary forces and continual transformation, is exported through a simplified symbolic form until global popular culture remembers the icon faster than the philosophy.",
    overviewOriginLabel: "阴阳 / Yinyang",
    overviewOutcomeLabel: "yin-yang symbol",
    overviewProcessNodes: [
      { id: "binary-reading", label: "Simplified Symbolic Form", group: "translation" },
      { id: "concept-simplification", label: "Icon Remembered Faster Than Philosophy", group: "meaning" },
      { id: "graphic-circulation", label: "Logo-like Sign", group: "symbol" }
    ],
    overviewConnections: [
      { from: "origin", to: "binary-reading", type: "primary" },
      { from: "binary-reading", to: "concept-simplification", type: "primary" },
      { from: "concept-simplification", to: "graphic-circulation", type: "primary" },
      { from: "graphic-circulation", to: "outcome", type: "primary" }
    ],
    points: [
      {
        id: "binary-reading",
        label: "Simplified Symbolic Form",
        title: "Simplified Symbolic Form / 简化的符号形式",
        body:
          "A cosmological concept of complementary forces and continual transformation is often exported through a simplified symbolic form. The symbol travels more easily than the philosophical system behind it."
      },
      {
        id: "concept-simplification",
        label: "Icon Remembered Faster Than Philosophy",
        title: "Icon Remembered Faster Than Philosophy / 图像先于哲学被记住",
        body:
          "In global popular culture, the icon is often remembered faster than the philosophy. Recognition attaches to the image before viewers encounter the concept's fuller cosmological meaning."
      },
      {
        id: "graphic-circulation",
        label: "Logo-like Sign",
        title: "Logo-like Sign / 标志化符号",
        body:
          "The result is that 阴阳 is flattened into a logo-like sign. The visual form becomes globally portable while the philosophy of transformation recedes into the background."
      }
    ]
  },
  {
    slug: "gongfu-kung-fu",
    titleEn: "Kung fu",
    titleZhOrContext: "功夫 / Gongfu",
    pathSteps: [
      "功夫 / Gongfu",
      "Martial-arts media",
      "Combat Specialization",
      "kung fu"
    ],
    shortExplanation:
      "This entry shows how a broad word for cultivated skill or mastery is narrowed through film and martial-arts media into a combat-specific global label.",
    overviewOriginLabel: "功夫 / Gongfu",
    overviewOutcomeLabel: "kung fu",
    overviewProcessNodes: [
      { id: "media-circulation", label: "Martial-arts Media", group: "media" },
      { id: "combat-fixation", label: "Combat Fixation", group: "meaning" },
      { id: "global-narrowing", label: "Global Narrowing", group: "circulation" }
    ],
    overviewConnections: [
      { from: "origin", to: "media-circulation", type: "primary" },
      { from: "media-circulation", to: "combat-fixation", type: "primary" },
      { from: "combat-fixation", to: "global-narrowing", type: "primary" },
      { from: "global-narrowing", to: "outcome", type: "primary" }
    ],
    points: [
      {
        id: "media-circulation",
        label: "Media Circulation",
        title: "Media Circulation / 媒介传播",
        body:
          "Film and martial-arts media strongly shaped how overseas audiences learned the word 功夫. Repeated exposure tied the term to fighting styles more than to broader ideas of cultivated ability."
      },
      {
        id: "combat-fixation",
        label: "Meaning Narrowed to Combat",
        title: "Meaning Narrowed to Combat / 语义收窄",
        body:
          "In Chinese usage, 功夫 can point to effort, practice, or mastery in a wider sense. In global circulation, that range is narrowed so that kung fu is heard mainly as martial combat."
      },
      {
        id: "global-narrowing",
        label: "Specialized Outcome",
        title: "Specialized Outcome / 专门化结果",
        body:
          "The international label feels familiar and stable, but it is a selective reading. A broad term for disciplined attainment becomes a genre name for Chinese martial arts."
      }
    ]
  },
  {
    slug: "fenghuang-phoenix",
    titleEn: "Phoenix",
    titleZhOrContext: "凤凰 / Fenghuang",
    pathSteps: [
      "凤凰 / Fenghuang",
      "Nearest mythic bird category",
      "Rebirth / fire lens",
      "Chinese phoenix"
    ],
    shortExplanation:
      "This entry shows how 凤凰 is translated through the nearest familiar mythic bird category, phoenix, even though the Chinese bird carries associations of harmony, paired symbolism, and rulership rather than rebirth through fire.",
    overviewOriginLabel: "凤凰 / Fenghuang",
    overviewOutcomeLabel: "Chinese phoenix",
    overviewProcessNodes: [
      { id: "nearest-category", label: "Nearest Familiar Mythic Bird Category", group: "translation" },
      { id: "rebirth-lens", label: "Western Phoenix Lens", group: "imagery" },
      { id: "paired-symbolism-loss", label: "Harmony / Paired Symbolism Reframed", group: "meaning" }
    ],
    overviewConnections: [
      { from: "origin", to: "nearest-category", type: "primary" },
      { from: "nearest-category", to: "rebirth-lens", type: "primary" },
      { from: "rebirth-lens", to: "paired-symbolism-loss", type: "primary" },
      { from: "paired-symbolism-loss", to: "outcome", type: "primary" }
    ],
    points: [
      {
        id: "nearest-category",
        label: "Nearest Familiar Category",
        title: "Nearest Familiar Category / 最近似类别",
        body:
          "凤凰 is often translated through the nearest familiar mythic bird term, phoenix. This creates readability, but it also implies equivalence where the symbolic systems are not the same."
      },
      {
        id: "rebirth-lens",
        label: "Western Phoenix Lens",
        title: "Western Phoenix Lens / 西方凤凰镜头",
        body:
          "The Western phoenix is often tied to fire and rebirth. That lens redirects attention away from the Chinese bird's associations with harmony, paired symbolism, and rulership."
      },
      {
        id: "paired-symbolism-loss",
        label: "Lost Local Associations",
        title: "Lost Local Associations / 在地含义流失",
        body:
          "Once labeled Chinese phoenix, 凤凰 is frequently understood as a local variant of a Western mythic template. Its own harmony, omen function, and paired symbolism become harder to see."
      }
    ]
  },
  {
    slug: "fortune-cookie",
    titleEn: "Fortune cookie",
    titleZhOrContext: "没有直接对应的中文词 / No direct chinese term",
    pathSteps: [
      "没有直接对应的中文词 / No direct chinese term",
      "Japanese-style Fortune-cracker Traditions",
      "Chinese Restaurant Circulation",
      "Fortune Cookie As \"Chinese\" Culture"
    ],
    shortExplanation:
      "This entry shows how the fortune cookie became legible as Chinese through restaurant circulation in the United States, despite its mixed and largely non-Chinese historical origin.",
    overviewOriginLabel: "没有直接对应的中文词 / No direct chinese term",
    overviewOutcomeLabel: "fortune cookie",
    overviewProcessNodes: [
      { id: "fortune-cracker-tradition", label: "Fortune-cracker Tradition", group: "diaspora" },
      { id: "restaurant-circulation", label: "U.S. Restaurant Circulation", group: "circulation" },
      { id: "cultural-reassignment", label: "Cultural Reassignment", group: "association" }
    ],
    overviewConnections: [
      { from: "origin", to: "fortune-cracker-tradition", type: "primary" },
      { from: "fortune-cracker-tradition", to: "restaurant-circulation", type: "primary" },
      { from: "restaurant-circulation", to: "cultural-reassignment", type: "primary" },
      { from: "cultural-reassignment", to: "outcome", type: "primary" }
    ],
    points: [
      {
        id: "fortune-cracker-tradition",
        label: "Mixed Origin Context",
        title: "Mixed Origin Context / 混合来源",
        body:
          "The object is more closely linked to Japanese-style fortune-cracker traditions in the United States than to food from China itself. Its starting point is therefore already diasporic and hybrid."
      },
      {
        id: "restaurant-circulation",
        label: "Restaurant Circulation",
        title: "Restaurant Circulation / 餐馆流通",
        body:
          "Repeated appearance in American Chinese restaurant culture made the cookie familiar to diners within a Chinese-coded setting. Contextual repetition did as much work as origin."
      },
      {
        id: "cultural-reassignment",
        label: "Read as Chinese",
        title: "Read as Chinese / 被读成中国文化",
        body:
          "Over time, many diners came to treat the fortune cookie as naturally Chinese. The outcome is a false but durable cultural association created through circulation and habit."
      }
    ]
  },
  {
    slug: "chop-suey-font",
    titleEn: "Chop Suey font",
    titleZhOrContext: "没有直接对应的中文词 / No direct chinese term",
    pathSteps: [
      "没有直接对应的中文词 / No direct chinese term",
      "Stereotyped \"Oriental\" Display Style",
      "Repeated Commercial Branding",
      "Chop Suey Font As \"Chinese\" Visual Culture"
    ],
    shortExplanation:
      "This entry shows how a fake display style, not real Chinese writing, became a fast visual shorthand for Chinese culture through branding and repetition.",
    overviewOriginLabel: "没有直接对应的中文词 / No direct chinese term",
    overviewOutcomeLabel: "Chop Suey font",
    overviewProcessNodes: [
      { id: "fake-display-style", label: "Stereotyped \"Oriental\" Display Style", group: "design" },
      { id: "branding-repetition", label: "Repeated Commercial Branding", group: "branding" },
      { id: "visual-shortcut", label: "Shortcut Identity", group: "association" }
    ],
    overviewConnections: [
      { from: "origin", to: "fake-display-style", type: "primary" },
      { from: "fake-display-style", to: "branding-repetition", type: "primary" },
      { from: "branding-repetition", to: "visual-shortcut", type: "primary" },
      { from: "visual-shortcut", to: "outcome", type: "primary" }
    ],
    points: [
      {
        id: "fake-display-style",
        label: "Graphic Imitation",
        title: "Graphic Imitation / 图像模仿",
        body:
          "Chop Suey fonts imitate a stereotyped Oriental look rather than any real Chinese writing system. What is being translated is not language but a marketable impression of Chinese-ness."
      },
      {
        id: "branding-repetition",
        label: "Repeated Commercial Use",
        title: "Repeated Commercial Use / 商业重复使用",
        body:
          "Restaurant signage, posters, and repeated branding made the style highly recognizable. Frequency turned a fake display convention into a familiar public code."
      },
      {
        id: "visual-shortcut",
        label: "Shortcut Identity",
        title: "Shortcut Identity / 快捷身份识别",
        body:
          "For many viewers, the style now instantly signals Chinese culture even though it is a Western graphic invention. The design works through stereotype, not script literacy."
      }
    ]
  },
  {
    slug: "chinese-checkers",
    titleEn: "Chinese checkers",
    titleZhOrContext: "没有直接对应的中文词 / No direct chinese term",
    pathSteps: [
      "没有直接对应的中文词 / No direct chinese term",
      "German-derived Halma Variation",
      "Exoticizing New Name",
      "Chinese Checkers As A \"Chinese\" Game"
    ],
    shortExplanation:
      "This entry shows how a German-derived game acquired a false Chinese identity through naming that promised marketable exotic appeal.",
    overviewOriginLabel: "没有直接对应的中文词 / No direct chinese term",
    overviewOutcomeLabel: "Chinese checkers",
    overviewProcessNodes: [
      { id: "halma-variation", label: "German-derived Halma Variation", group: "history" },
      { id: "market-renaming", label: "Renamed for Market Appeal", group: "naming" },
      { id: "false-association", label: "False Chinese Association", group: "association" }
    ],
    overviewConnections: [
      { from: "origin", to: "halma-variation", type: "primary" },
      { from: "halma-variation", to: "market-renaming", type: "primary" },
      { from: "market-renaming", to: "false-association", type: "primary" },
      { from: "false-association", to: "outcome", type: "primary" }
    ],
    points: [
      {
        id: "halma-variation",
        label: "Actual Lineage",
        title: "Actual Lineage / 实际谱系",
        body:
          "Chinese checkers did not originate in China. The game is a later market form of a Halma variation that reached the United States through European development."
      },
      {
        id: "market-renaming",
        label: "Renamed for Appeal",
        title: "Renamed for Appeal / 为销售改名",
        body:
          "The Chinese label created novelty and exotic appeal for consumers. Naming became a sales strategy rather than a truthful statement about origin."
      },
      {
        id: "false-association",
        label: "Invented Chinese Link",
        title: "Invented Chinese Link / 虚构的中国关联",
        body:
          "Because the label sounds specific and stable, many people assume a Chinese historical source. The cultural association is durable even though the historical basis is weak."
      }
    ]
  },
  {
    slug: "qilin-unicorn",
    titleEn: "Chinese unicorn",
    titleZhOrContext: "麒麟 / Qilin",
    pathSteps: [
      "麒麟 / Qilin",
      "Familiar Western Single-horned Creature Category",
      "Unicorn Equivalence",
      "Chinese unicorn"
    ],
    shortExplanation:
      "This entry shows how 麒麟 is simplified into a unicorn equivalent by being filtered through the nearest familiar Western creature category.",
    overviewOriginLabel: "麒麟 / Qilin",
    overviewOutcomeLabel: "Chinese unicorn",
    overviewProcessNodes: [
      { id: "single-horn-category", label: "Familiar Western Creature Category", group: "translation" },
      { id: "auspicious-complexity-loss", label: "Complex Auspicious Creature Simplified", group: "meaning" },
      { id: "simplified-equivalence", label: "Unicorn Equivalent", group: "association" }
    ],
    overviewConnections: [
      { from: "origin", to: "single-horn-category", type: "primary" },
      { from: "single-horn-category", to: "auspicious-complexity-loss", type: "primary" },
      { from: "auspicious-complexity-loss", to: "simplified-equivalence", type: "primary" },
      { from: "simplified-equivalence", to: "outcome", type: "primary" }
    ],
    points: [
      {
        id: "single-horn-category",
        label: "Nearest Creature Match",
        title: "Nearest Creature Match / 近似神兽匹配",
        body:
          "麒麟 is often interpreted through the familiar Western category of the unicorn because both can be imagined as rare auspicious creatures. The shortcut invites comparison but reduces specificity."
      },
      {
        id: "auspicious-complexity-loss",
        label: "Lost Complexity",
        title: "Lost Complexity / 复杂性流失",
        body:
          "Qilin carries a more layered cluster of meanings tied to omen, virtue, and auspicious appearance. Those associations are harder to retain once the creature is forced into a unicorn frame."
      },
      {
        id: "simplified-equivalence",
        label: "Read as Variant",
        title: "Read as Variant / 被读成变体",
        body:
          "The result is not exact translation but simplified equivalence. 麒麟 becomes legible as a Chinese unicorn instead of being encountered on its own terms."
      }
    ]
  },
  {
    slug: "tian-heaven",
    titleEn: "Heaven",
    titleZhOrContext: "天 / Tian",
    pathSteps: [
      "天 / Tian",
      "Heaven As Familiar Religious-cosmic Equivalent",
      "Theistic / Christian-readable Frame",
      "Heaven"
    ],
    shortExplanation:
      "This entry shows how 天 is translated as Heaven, a familiar English equivalent that pulls a broader Chinese term toward a more theistic and Christian-readable frame.",
    overviewOriginLabel: "天 / Tian",
    overviewOutcomeLabel: "Heaven",
    overviewProcessNodes: [
      { id: "cosmic-equivalent", label: "Heaven As Familiar Equivalent", group: "translation" },
      { id: "theistic-frame", label: "Christian-readable Frame", group: "meaning" },
      { id: "moral-order-loss", label: "Moral / Cosmic / Political Range Reduced", group: "meaning" }
    ],
    overviewConnections: [
      { from: "origin", to: "cosmic-equivalent", type: "primary" },
      { from: "cosmic-equivalent", to: "theistic-frame", type: "primary" },
      { from: "theistic-frame", to: "moral-order-loss", type: "primary" },
      { from: "moral-order-loss", to: "outcome", type: "primary" }
    ],
    points: [
      {
        id: "cosmic-equivalent",
        label: "Equivalent but Not Identical",
        title: "Equivalent but Not Identical / 对应而非等同",
        body:
          "Heaven feels like a natural English counterpart for 天 because both can name a cosmic upper order. Yet the match is partial, since 天 can also indicate sky, impersonal order, and legitimacy."
      },
      {
        id: "theistic-frame",
        label: "Pulled Toward Theism",
        title: "Pulled Toward Theism / 被拉向神学读法",
        body:
          "Once translated as Heaven, the term often becomes more readable through Christian or strongly theistic assumptions. That narrows how readers approach the concept."
      },
      {
        id: "moral-order-loss",
        label: "Range Compressed",
        title: "Range Compressed / 范围压缩",
        body:
          "The translation can downplay meanings tied to moral order, cosmic process, and the source of political legitimacy. What remains visible is only one slice of a larger field."
      }
    ]
  },
  {
    slug: "chinoiserie",
    titleEn: "Chinoiserie",
    titleZhOrContext: "没有直接对应的中文词 / No direct chinese term",
    pathSteps: [
      "没有直接对应的中文词 / No direct chinese term",
      "European Trade In Porcelain, Lacquer, And Luxury Goods",
      "Mixed East Asian Motifs Recomposed",
      "chinoiserie"
    ],
    shortExplanation:
      "This entry shows how European imitation and fantasy recomposed mixed East Asian motifs into an imagined decorative Chinese style for European consumption.",
    overviewOriginLabel: "没有直接对应的中文词 / No direct chinese term",
    overviewOutcomeLabel: "chinoiserie",
    overviewProcessNodes: [
      { id: "luxury-trade", label: "Trade In Porcelain, Lacquer, And Luxury Goods", group: "trade" },
      { id: "motif-mixing", label: "Mixed East Asian Motifs Recomposed", group: "design" },
      { id: "fantasy-style", label: "Imagined Decorative Chinese Style", group: "association" }
    ],
    overviewConnections: [
      { from: "origin", to: "luxury-trade", type: "primary" },
      { from: "luxury-trade", to: "motif-mixing", type: "primary" },
      { from: "motif-mixing", to: "fantasy-style", type: "primary" },
      { from: "fantasy-style", to: "outcome", type: "primary" }
    ],
    points: [
      {
        id: "luxury-trade",
        label: "Trade as Catalyst",
        title: "Trade as Catalyst / 贸易催化",
        body:
          "European demand for porcelain, lacquer, and other luxury goods created sustained interest in Chinese and East Asian material culture. Consumption prepared the ground for imitation."
      },
      {
        id: "motif-mixing",
        label: "Mixed Motifs",
        title: "Mixed Motifs / 图像拼接",
        body:
          "Designers freely recomposed motifs from different East Asian sources into a single decorative field. Accuracy mattered less than the production of exotic atmosphere."
      },
      {
        id: "fantasy-style",
        label: "European Fantasy Style",
        title: "European Fantasy Style / 欧洲想象风格",
        body:
          "Chinoiserie is therefore not a direct Chinese style but a European fantasy of Chinese-ness. The category names an imagined visual consumption of China."
      }
    ]
  },
  {
    slug: "tanghulu-viral-snack",
    titleEn: "Tanghulu",
    titleZhOrContext: "糖葫芦 / Tanghulu",
    pathSteps: [
      "糖葫芦 / Tanghulu",
      "Viral Social-media Trend Circulation",
      "Pan-East-Asian / Korean-adjacent Framing",
      "Often Mistaken As Korean Or \"Asian\" Trend Candy"
    ],
    shortExplanation:
      "This entry shows how a traditional Chinese candied-fruit snack gained new viral circulation through Korean and broader social-media trend culture, so many overseas viewers now meet it first as a Korean-adjacent or just Asian trend candy.",
    overviewOriginLabel: "糖葫芦 / Tanghulu",
    overviewOutcomeLabel: "often mistaken as Korean or just \"Asian\" trend candy",
    overviewProcessNodes: [
      { id: "viral-circulation", label: "Viral Trend Circulation", group: "media" },
      { id: "pan-asian-framing", label: "Korean-adjacent Framing", group: "circulation" },
      { id: "origin-misrecognition", label: "Origin Misrecognition", group: "association" }
    ],
    overviewConnections: [
      { from: "origin", to: "viral-circulation", type: "primary" },
      { from: "viral-circulation", to: "pan-asian-framing", type: "primary" },
      { from: "pan-asian-framing", to: "origin-misrecognition", type: "primary" },
      { from: "origin-misrecognition", to: "outcome", type: "primary" }
    ],
    points: [
      {
        id: "viral-circulation",
        label: "Platform Circulation",
        title: "Platform Circulation / 平台传播",
        body:
          "Tanghulu gained renewed visibility through short-form social media and food trend videos. Many viewers first meet it through trend circulation rather than through Chinese cultural context."
      },
      {
        id: "pan-asian-framing",
        label: "Trend-first Framing",
        title: "Trend-first Framing / 趋势优先框架",
        body:
          "Once detached from context, the snack is often framed broadly as Asian trend candy or as Korean-adjacent internet food. The category becomes regional, trendy, and vague."
      },
      {
        id: "origin-misrecognition",
        label: "Source Blurred",
        title: "Source Blurred / 来源被模糊",
        body:
          "The result is not absence of circulation but circulation without origin clarity. The snack becomes visible globally while its Chinese provenance becomes easier to miss or misrecognize."
      }
    ]
  },
  {
    slug: "jianbing-chinese-crepe",
    titleEn: "Chinese crepe",
    titleZhOrContext: "煎饼 / Jianbing",
    pathSteps: [
      "煎饼 / Jianbing",
      "Familiar Comparison Term",
      "French-derived Food Frame",
      "Chinese crepe"
    ],
    shortExplanation:
      "This entry shows how 煎饼 is made quickly legible to English readers through the label Chinese crepe, which helps recognition while reframing a regionally specific northern Chinese breakfast through a French-derived category.",
    overviewOriginLabel: "煎饼 / Jianbing",
    overviewOutcomeLabel: "Chinese crepe",
    overviewProcessNodes: [
      { id: "comparison-label", label: "Instantly Legible Comparison Term", group: "translation" },
      { id: "food-frame", label: "French-derived Food Frame", group: "meaning" },
      { id: "regional-loss", label: "Regional Specificity Loss", group: "meaning" }
    ],
    overviewConnections: [
      { from: "origin", to: "comparison-label", type: "primary" },
      { from: "comparison-label", to: "food-frame", type: "primary" },
      { from: "food-frame", to: "regional-loss", type: "primary" },
      { from: "regional-loss", to: "outcome", type: "primary" }
    ],
    points: [
      {
        id: "comparison-label",
        label: "Fast Legibility",
        title: "Fast Legibility / 快速可读性",
        body:
          "Food writing often uses comparison labels to help readers quickly imagine texture and form. Calling 煎饼 a Chinese crepe offers immediate entry through a familiar reference point."
      },
      {
        id: "food-frame",
        label: "Imported Category",
        title: "Imported Category / 借来的食物范畴",
        body:
          "The word crepe brings a French-derived category with its own culinary expectations. That frame can make the food easier to market, but it reorganizes how the item is mentally classified."
      },
      {
        id: "regional-loss",
        label: "Specificity Reduced",
        title: "Specificity Reduced / 地域性被削弱",
        body:
          "Jianbing is a regionally specific northern Chinese breakfast with its own preparation logic. The shortcut label helps recognition while smoothing out that local specificity."
      }
    ]
  },
  {
    slug: "putonghua-mandarin",
    titleEn: "Mandarin",
    titleZhOrContext: "普通话 / Putonghua",
    pathSteps: [
      "普通话 / Putonghua",
      "Broader Outside Label",
      "Category Collapse",
      "Mandarin"
    ],
    shortExplanation:
      "This entry shows how 普通话 is often collapsed into the broader outside label Mandarin, even though Putonghua is the standardized PRC national form within a larger Mandarin group.",
    overviewOriginLabel: "普通话 / Putonghua",
    overviewOutcomeLabel: "Mandarin",
    overviewProcessNodes: [
      { id: "outside-label", label: "Broader Outside Label", group: "naming" },
      { id: "standard-form-loss", label: "Standard-form Specificity Loss", group: "meaning" },
      { id: "category-collapse", label: "Category Collapse", group: "association" }
    ],
    overviewConnections: [
      { from: "origin", to: "outside-label", type: "primary" },
      { from: "outside-label", to: "standard-form-loss", type: "primary" },
      { from: "standard-form-loss", to: "category-collapse", type: "primary" },
      { from: "category-collapse", to: "outcome", type: "primary" }
    ],
    points: [
      {
        id: "outside-label",
        label: "Outside-facing Naming",
        title: "Outside-facing Naming / 面向外部的命名",
        body:
          "Western usage often centers Mandarin because it is a broadly recognized label. That familiar term becomes the default even when a more precise local name is available."
      },
      {
        id: "standard-form-loss",
        label: "Specific Standard Lost",
        title: "Specific Standard Lost / 标准语特性流失",
        body:
          "Putonghua names the standardized national language form in the PRC, based on Beijing speech within the larger Mandarin group. That distinction tends to disappear once all references are collapsed into Mandarin."
      },
      {
        id: "category-collapse",
        label: "Grouped as the Same",
        title: "Grouped as the Same / 被视作完全相同",
        body:
          "The outcome feels harmless because the terms are related, but the relation is not identical. A broad language family label stands in for a specific standardized form."
      }
    ]
  },
  {
    slug: "roujiamo-chinese-hamburger",
    titleEn: "Chinese hamburger",
    titleZhOrContext: "肉夹馍 / Roujiamo",
    pathSteps: [
      "肉夹馍 / Roujiamo",
      "Sandwich / burger analogy",
      "Fast Western Legibility",
      "Chinese hamburger"
    ],
    shortExplanation:
      "This entry shows how 肉夹馍 is recoded through a sandwich or burger framework so that a Shaanxi street food becomes instantly readable to Western audiences.",
    overviewOriginLabel: "肉夹馍 / Roujiamo",
    overviewOutcomeLabel: "Chinese hamburger",
    overviewProcessNodes: [
      { id: "burger-analogy", label: "Sandwich / Burger Analogy", group: "translation" },
      { id: "street-food-recoding", label: "Street-food Recoding", group: "meaning" },
      { id: "fast-legibility", label: "Fast Western Legibility", group: "circulation" }
    ],
    overviewConnections: [
      { from: "origin", to: "burger-analogy", type: "primary" },
      { from: "burger-analogy", to: "street-food-recoding", type: "primary" },
      { from: "street-food-recoding", to: "fast-legibility", type: "primary" },
      { from: "fast-legibility", to: "outcome", type: "primary" }
    ],
    points: [
      {
        id: "burger-analogy",
        label: "Analogy as Access",
        title: "Analogy as Access / 类比带来可读性",
        body:
          "Food writing often maps unfamiliar items onto a familiar sandwich or burger framework. That analogy gives readers a quick entry point even when the culinary lineage is different."
      },
      {
        id: "street-food-recoding",
        label: "Recoded Street Food",
        title: "Recoded Street Food / 被重编码的街头食物",
        body:
          "Roujiamo is a Shaanxi flatbread-and-meat food with its own local history and texture. The burger frame recodes it into a Western comparison system rather than describing it on its own terms."
      },
      {
        id: "fast-legibility",
        label: "Readable but Reduced",
        title: "Readable but Reduced / 易懂但被缩减",
        body:
          "Chinese hamburger is efficient as explanation, but it narrows how the food is imagined. The label favors instant recognition over regional specificity."
      }
    ]
  },
  {
    slug: "dumpling-bucket",
    titleEn: "Dumpling",
    titleZhOrContext: "饺子、锅贴、小笼包、馄饨、汤圆 / jiǎozi, guōtiē, xiǎolóngbāo, húntun, tāngyuán",
    pathSteps: [
      "饺子、锅贴、小笼包、馄饨、汤圆 / jiǎozi, guōtiē, xiǎolóngbāo, húntun, tāngyuán",
      "Broad Category Label",
      "Local Distinctions Compressed",
      "dumpling"
    ],
    shortExplanation:
      "This entry shows how very different Chinese foods are compressed into one English bucket, dumpling, even though their doughs, fillings, cooking methods, and sweet or savory logic differ greatly.",
    overviewOriginLabel: "饺子、锅贴、小笼包、馄饨、汤圆 / jiǎozi, guōtiē, xiǎolóngbāo, húntun, tāngyuán",
    overviewOutcomeLabel: "dumpling",
    overviewProcessNodes: [
      { id: "broad-bucket", label: "Broad Category Label", group: "translation" },
      { id: "distinction-compression", label: "Distinction Compression", group: "meaning" },
      { id: "dictionary-overreach", label: "Dictionary Overreach", group: "association" }
    ],
    overviewConnections: [
      { from: "origin", to: "broad-bucket", type: "primary" },
      { from: "broad-bucket", to: "distinction-compression", type: "primary" },
      { from: "distinction-compression", to: "dictionary-overreach", type: "primary" },
      { from: "dictionary-overreach", to: "outcome", type: "primary" }
    ],
    points: [
      {
        id: "broad-bucket",
        label: "Bucket Term",
        title: "Bucket Term / 桶状术语",
        body:
          "Cross-cultural translation often favors a broad umbrella word that feels easy to understand. Dumpling becomes that umbrella for many different Chinese foods."
      },
      {
        id: "distinction-compression",
        label: "Differences Flattened",
        title: "Differences Flattened / 差异被压平",
        body:
          "Jiaozi, guotie, xiaolongbao, huntun, and tangyuan differ by dough, filling, cooking method, and even sweet-versus-savory logic. Those differences disappear when all are grouped under the same English bucket."
      },
      {
        id: "dictionary-overreach",
        label: "English Bucket Too Wide",
        title: "English Bucket Too Wide / 英语分类过宽",
        body:
          "English dictionary meanings of dumpling are themselves very broad, which makes the category flexible but imprecise. The translation works as convenience rather than careful culinary description."
      }
    ]
  },
  {
    slug: "weiqi-go",
    titleEn: "Go",
    titleZhOrContext: "围棋 / Weiqi",
    pathSteps: [
      "围棋 / Weiqi",
      "Japanese-mediated circulation",
      "Name Dominance",
      "Go"
    ],
    shortExplanation:
      "This entry shows how a Chinese-origin game is often globally identified through the Japanese name Go because that name became dominant in international circulation.",
    overviewOriginLabel: "围棋 / Weiqi",
    overviewOutcomeLabel: "Go",
    overviewProcessNodes: [
      { id: "japanese-circulation", label: "Japanese-mediated Circulation", group: "circulation" },
      { id: "name-dominance", label: "Name Dominance", group: "naming" },
      { id: "origin-shadowed", label: "Chinese Origin Shadowed", group: "meaning" }
    ],
    overviewConnections: [
      { from: "origin", to: "japanese-circulation", type: "primary" },
      { from: "japanese-circulation", to: "name-dominance", type: "primary" },
      { from: "name-dominance", to: "origin-shadowed", type: "primary" },
      { from: "origin-shadowed", to: "outcome", type: "primary" }
    ],
    points: [
      {
        id: "japanese-circulation",
        label: "Circulation Through Japan",
        title: "Circulation Through Japan / 经由日本传播",
        body:
          "Although the game originated in China, many Western learners encountered it through Japanese institutions, books, and clubs. The route of circulation shaped the dominant name."
      },
      {
        id: "name-dominance",
        label: "Dominant Public Name",
        title: "Dominant Public Name / 主导名称",
        body:
          "Once Go became the familiar international label, it started to feel like the natural name of the game. Naming authority followed the route through which outsiders first learned it."
      },
      {
        id: "origin-shadowed",
        label: "Origin Still There, but Reframed",
        title: "Origin Still There, but Reframed / 来源仍在但被改框",
        body:
          "The issue is not that the Chinese origin disappears completely, but that it becomes secondary to a Japanese-mediated public frame. The name guides cultural recognition."
      }
    ]
  },
  {
    slug: "guardian-lions-foo-dogs",
    titleEn: "Foo dogs",
    titleZhOrContext: "石狮、石狮子 / Chinese guardian lions",
    pathSteps: [
      "石狮、石狮子 / Chinese guardian lions",
      "Animal Category Renamed",
      "Lion Identity Obscured",
      "foo dogs"
    ],
    shortExplanation:
      "This entry shows how Chinese guardian lions were repeatedly mislabeled as foo dogs, obscuring both the lion identity and the ritual-architectural role of the sculptures.",
    overviewOriginLabel: "石狮、石狮子 / Chinese guardian lions",
    overviewOutcomeLabel: "foo dogs",
    overviewProcessNodes: [
      { id: "category-renaming", label: "Animal Category Renamed", group: "naming" },
      { id: "lion-identity-loss", label: "Lion Identity Obscured", group: "meaning" },
      { id: "ritual-role-obscured", label: "Ritual-architectural Role Obscured", group: "meaning" }
    ],
    overviewConnections: [
      { from: "origin", to: "category-renaming", type: "primary" },
      { from: "category-renaming", to: "lion-identity-loss", type: "primary" },
      { from: "lion-identity-loss", to: "ritual-role-obscured", type: "primary" },
      { from: "ritual-role-obscured", to: "outcome", type: "primary" }
    ],
    points: [
      {
        id: "category-renaming",
        label: "Renamed as Dogs",
        title: "Renamed as Dogs / 被改称为狗",
        body:
          "Western naming changed the animal category itself by calling the sculptures foo dogs. That relabeling is more than descriptive error because it changes the basic object identity."
      },
      {
        id: "lion-identity-loss",
        label: "Lion Identity Obscured",
        title: "Lion Identity Obscured / 狮的身份被遮蔽",
        body:
          "The sculptures are guardian lions, not dogs. Once the mistaken label becomes common, the lion identity becomes less visible to viewers who meet the objects through English only."
      },
      {
        id: "ritual-role-obscured",
        label: "Architectural Function Reduced",
        title: "Architectural Function Reduced / 建筑礼仪功能被削弱",
        body:
          "The misnaming also obscures the protective ritual and architectural role of the sculptures. The outcome is an exotic decorative object rather than a guardian figure in context."
      }
    ]
  },
  {
    slug: "hongbao-red-envelope",
    titleEn: "Red envelope",
    titleZhOrContext: "红包 / Hongbao",
    pathSteps: [
      "红包 / Hongbao",
      "Descriptive Translation",
      "Object Foregrounded Over Ritual Context",
      "red envelope"
    ],
    shortExplanation:
      "This entry shows how 红包 becomes red envelope through a descriptive translation that foregrounds the visible object while simplifying blessing, kinship, and lucky-money practice.",
    overviewOriginLabel: "红包 / Hongbao",
    overviewOutcomeLabel: "red envelope",
    overviewProcessNodes: [
      { id: "descriptive-translation", label: "Descriptive Translation", group: "translation" },
      { id: "object-foregrounding", label: "Object Foregrounded Over Practice", group: "meaning" },
      { id: "ritual-reduction", label: "Blessing / Kinship / Festival Exchange Simplified", group: "meaning" }
    ],
    overviewConnections: [
      { from: "origin", to: "descriptive-translation", type: "primary" },
      { from: "descriptive-translation", to: "object-foregrounding", type: "primary" },
      { from: "object-foregrounding", to: "ritual-reduction", type: "primary" },
      { from: "ritual-reduction", to: "outcome", type: "primary" }
    ],
    points: [
      {
        id: "descriptive-translation",
        label: "Visible Object Named",
        title: "Visible Object Named / 命名可见物件",
        body:
          "Red envelope is a clear descriptive translation because it tells the viewer what the item looks like. It privileges visible form over social and ritual meaning."
      },
      {
        id: "object-foregrounding",
        label: "Object over Practice",
        title: "Object over Practice / 物件盖过实践",
        body:
          "Hongbao involves exchange, blessing, kinship, timing, and lucky money, not just an envelope. The English label foregrounds the container more than the practice."
      },
      {
        id: "ritual-reduction",
        label: "Practice Simplified",
        title: "Practice Simplified / 礼俗被简化",
        body:
          "The outcome is not wrong, but it is thinner. A ritual and social act becomes a neutral object description that travels easily across contexts."
      }
    ]
  }
];
