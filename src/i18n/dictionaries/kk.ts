import type { Dictionary } from "@/i18n/types";

export const kk: Dictionary = {
  // Latin, as on the English page. Replace with "СЫРХАН МӘДИЕВ" if you prefer.
  name: "SYRKHAN MADIYEV",
  role: "ФРОНТЕНД-ӘЗІРЛЕУШІ 2026",
  nav: { work: "ТӘЖІРИБЕ", projects: "ЖОБАЛАР", about: "МЕН ТУРАЛЫ" },
  actions: {
    view: "КӨРУ",
    back: "АРТҚА",
    cv: "ТҮЙІНДЕМЕ",
    linkedin: "LINKEDIN",
  },
  casePage: {
    role: "ЛАУАЗЫМЫ",
    stack: "СТЕК",
    highlights: "АТҚАРҒАН ЖҰМЫСТАР",
    nextProject: "КЕЛЕСІ ЖОБА",
  },
  cases: {
    "globerce-capital": {
      company: "GLOBERCE CAPITAL",
      project: "CARDKIOSK — КАРТА ШЫҒАРУ ТЕРМИНАЛЫ",
      summary: "CARDKIOSK — TAURI, RUST, REACT",
      dates: "ҚАҢ 2026 — ҚАЗІРГЕ ДЕЙІН",
      role: "MIDDLE ФРОНТЕНД-ӘЗІРЛЕУШІ",
      highlights: [
        "ӨЗІНЕ-ӨЗІ ҚЫЗМЕТ КӨРСЕТУ КИОСКТЕРІНЕ АРНАЛҒАН, КАРТАНЫ ЛЕЗДЕ ШЫҒАРАТЫН КРОССПЛАТФОРМАЛЫҚ ДЕСКТОП ҚОСЫМША",
        "ТОЛЫҚ СЦЕНАРИЙ: OTP, БИОМЕТРИЯЛЫҚ ТІРІЛІКТІ ТЕКСЕРУ, ҚҰЖАТТЫ СКАНЕРЛЕУ (REGULA SDK), КАРТА ДИЗАЙНЫН 3D ТАҢДАУ, КАРТАНЫ БАСЫП ШЫҒАРУ",
        "КАРТА ПРИНТЕРІ МЕН ЭМБОССЕРІ RUST SERIAL-PORT ПЛАГИНДЕРІ АРҚЫЛЫ, НАТИВТІ КАМЕРА (MEDIA FOUNDATION)",
        "RTK QUERY ҮШІН OPENAPI КЛИЕНТІН ГЕНЕРАЦИЯЛАУ, TANSTACK ROUTER АРҚЫЛЫ МАРШРУТТАУ",
        "ӘРЕКЕТСІЗДІК БОЙЫНША АВТОМАТТЫ ҚАЛПЫНА КЕЛТІРУ, JWT АВТОРИЗАЦИЯСЫ, ҚОРҒАЛҒАН ЖАЛҒЫЗ ДАНА РЕЖИМІ",
        "GITLAB CI/CD ІШІНДЕ SEMANTIC-RELEASE, BIOME + LEFTHOOK",
      ],
    },
    "jaryq-lab": {
      company: "JARYQ LAB",
      project: "КЛИЕНТТІК ВЕБ ҚОСЫМШАЛАР",
      summary: "NEXT.JS, ZUSTAND, STORYBOOK",
      dates: "ТАМ 2025 — ҚАҢ 2026",
      role: "ФРОНТЕНД-ӘЗІРЛЕУШІ",
      highlights: [
        "REACT (NEXT.JS) НЕГІЗІНДЕ КЛИЕНТТІК ВЕБ ҚОСЫМШАЛАРДЫ ӘЗІРЛЕДІМ ЖӘНЕ ҚОЛДАДЫМ",
        "PINIA, REDUX SAGA ЖӘНЕ ZUSTAND АРҚЫЛЫ КҮЙДІ БАСҚАРУ",
        "ДЕРЕКТЕРДІ ЖҮКТЕУ ЖӘНЕ КЛИЕНТ ЖАҒЫНДА КЭШТЕУ ҮШІН TANSTACK QUERY МЕН RTK QUERY",
        "STORYBOOK ЖӘНЕ CHROMATIC АРҚЫЛЫ UI ЖҰМЫСЫН СТАНДАРТТАП, ФУНКЦИЯЛАРДЫ ЖЕТКІЗУДІ ЖЕДЕЛДЕТТІМ",
      ],
    },
    mindwave: {
      company: "MINDWAVE",
      project: "БІЛІМ БЕРУ ПЛАТФОРМАСЫ",
      summary: "NUXT.JS НЕГІЗІНДЕГІ БІЛІМ БЕРУ ПЛАТФОРМАСЫ",
      dates: "ТАМ 2024 — ТАМ 2025",
      role: "ФРОНТЕНД-ӘЗІРЛЕУШІ",
      highlights: [
        "NUXT.JS, TYPESCRIPT ЖӘНЕ TAILWINDCSS НЕГІЗІНДЕ ИНТЕРАКТИВТІ ИНТЕРФЕЙСТЕР МЕН БЕЙІМДЕЛГЕН ЛЕНДИНГТЕР",
        "ТАЗА ЖӘНЕ ҚОЛДАУҒА ЫҢҒАЙЛЫ СТИЛЬДЕР ҮШІН СЕМАНТИКАЛЫҚ HTML ЖӘНЕ SCSS",
        "ANT DESIGN НЕГІЗІНДЕГІ ҚАЙТА ПАЙДАЛАНЫЛАТЫН UI КОМПОНЕНТТЕРІ ЖӘНЕ ӨЗІНДІК АНИМАЦИЯЛАР",
        "ӨНІМДІЛІК ПЕН ҚОЛЖЕТІМДІЛІК ҮШІН РЕСУРСТАРДЫ ЖҮКТЕУ МЕН БАНДЛ КӨЛЕМІН ОҢТАЙЛАНДЫРДЫМ",
      ],
    },
  },
  about: {
    intro:
      "2 ЖЫЛДАН АСТАМ ТӘЖІРИБЕСІ БАР ФРОНТЕНД-ӘЗІРЛЕУШІ. ВЕБ ЖӘНЕ ДЕСКТОП ҚОСЫМШАЛАР ЖАСАЙМЫН — НАҚТЫ ЖАБДЫҚҚА ҚОСЫЛҒАН ӨЗІНЕ-ӨЗІ ҚЫЗМЕТ КӨРСЕТУ КИОСКТЕРІНЕН БАСТАП ЖЫЛДАМ ДА МҰҚИЯТ ВЕБ ИНТЕРФЕЙСТЕРГЕ ДЕЙІН.",
    fields: [
      { label: "ОРНАЛАСҚАН ЖЕРІ", lines: ["АЛМАТЫ, ҚАЗАҚСТАН"] },
      {
        label: "БІЛІМІ",
        lines: [
          "СҮЛЕЙМАН ДЕМИРЕЛЬ УНИВЕРСИТЕТІ",
          "АҚПАРАТТЫҚ ЖҮЙЕЛЕР БАКАЛАВРЫ, 2025",
        ],
      },
      {
        label: "ФРОНТЕНД ЖӘНЕ ДЕСКТОП",
        lines: ["REACT 18, NEXT.JS, VUE, NUXT.JS, TAURI (RUST), TYPESCRIPT"],
      },
      {
        label: "КҮЙ ЖӘНЕ МАРШРУТТАУ",
        lines: [
          "REDUX TOOLKIT, RTK QUERY, TANSTACK QUERY, TANSTACK ROUTER, ZUSTAND, PINIA",
        ],
      },
      {
        label: "СТИЛЬДЕР ЖӘНЕ ФОРМАЛАР",
        lines: [
          "TAILWINDCSS, SCSS, ANT DESIGN, MATERIAL UI, REACT HOOK FORM, VALIBOT",
        ],
      },
      {
        label: "ЖАБДЫҚ ЖӘНЕ ҚҰРАЛДАР",
        lines: [
          "REGULA SDK, SERIAL PORT, MEDIA FOUNDATION, GITLAB CI/CD, SEMANTIC-RELEASE, STORYBOOK, BIOME",
        ],
      },
      {
        label: "ТІЛДЕР",
        lines: [
          "ҚАЗАҚША, ОРЫСША — АНА ТІЛІ",
          "АҒЫЛШЫНША — UPPER-INTERMEDIATE",
        ],
      },
    ],
    contact: "БАЙЛАНЫС",
  },
  projectsPage: {
    filters: {
      all: "БАРЛЫҒЫ",
      apps: "ҚОСЫМШАЛАР",
      websites: "САЙТТАР",
      other: "БАСҚА",
    },
    // Kazakh nouns stay singular after a numeral.
    count: { other: "{count} ЖОБА" },
    screenshot: "СКРИНШОТ",
    items: {
      "project-1": {
        name: "ЖОБА АТАУЫ",
        type: "ВЕБ ҚОСЫМША",
        description: "НЕ ІСТЕЙТІНІ ТУРАЛЫ БІР ЖОЛДЫҚ ҚЫСҚА СИПАТТАМА.",
      },
      "project-2": {
        name: "ЖОБА АТАУЫ",
        type: "САЙТ",
        description: "КЛИЕНТКЕ АРНАЛҒАН ЛЕНДИНГ НЕМЕСЕ САЙТ.",
      },
      "project-3": {
        name: "ЖОБА АТАУЫ",
        type: "ДЕСКТОП ҚОСЫМША",
        description: "TAURI ҚОСЫМШАСЫ, ҚҰРАЛ НЕМЕСЕ УТИЛИТА.",
      },
      "project-4": {
        name: "ЖОБА АТАУЫ",
        type: "МОБИЛЬДІ ҚОСЫМША",
        description: "НЕ ІСТЕЙТІНІ ТУРАЛЫ БІР ЖОЛДЫҚ ҚЫСҚА СИПАТТАМА.",
      },
      "project-5": {
        name: "ЖОБА АТАУЫ",
        type: "САЙТ",
        description: "КЛИЕНТКЕ АРНАЛҒАН ЛЕНДИНГ НЕМЕСЕ САЙТ.",
      },
      "project-6": {
        name: "ЖОБА АТАУЫ",
        type: "OPEN SOURCE",
        description: "КІТАПХАНА, ПЛАГИН НЕМЕСЕ ЭКСПЕРИМЕНТ.",
      },
    },
  },
  footer: {
    inquiries: "БАРЛЫҚ СҰРАҚТАР БОЙЫНША ЖАЗЫҢЫЗ: {email}",
    cv: "CV.PDF",
    language: "Тіл",
  },
  meta: {
    home: {
      title: "Syrkhan Madiyev — Фронтенд-әзірлеуші",
      description:
        "Фронтенд-әзірлеуші: веб және десктоп қосымшалар — өзіне-өзі қызмет көрсету киосктерінен бастап жылдам да мұқият веб интерфейстерге дейін.",
    },
    about: "Мен туралы — Syrkhan Madiyev",
    projects: "Жобалар — Syrkhan Madiyev",
    case: "{company} — Syrkhan Madiyev",
  },
};
