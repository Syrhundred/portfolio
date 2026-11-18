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
        "КИОСК ҚОСЫМШАСЫ (TAURI + RUST + REACT 18): КЛИЕНТ БІР КЕЛГЕНДЕ ДАЙЫН КАРТА АЛАДЫ, БӨЛІМШЕ ҚЫЗМЕТКЕРІНСІЗ",
        "БҮКІЛ ШЫҒАРУ ОПЕРАТОРСЫЗ ӨТЕДІ: OTP, БИОМЕТРИЯЛЫҚ ТІРІЛІКТІ ТЕКСЕРУ, ҚҰЖАТТЫ СКАНЕРЛЕУ (REGULA SDK), ДИЗАЙНДЫ 3D ТАҢДАУ ЖӘНЕ БАСЫП ШЫҒАРУ",
        "ЭМБОССЕР, КАРТА ПРИНТЕРІ МЕН КАМЕРА ҚОСЫМШАНЫҢ ӨЗІНЕН БАСҚАРЫЛАДЫ — RUST SERIAL-PORT ПЛАГИНДЕРІ ЖӘНЕ MEDIA FOUNDATION",
        "RTK QUERY КЛИЕНТІ OPENAPI-ДАН ГЕНЕРАЦИЯЛАНАДЫ, СОНДЫҚТАН ТИПТЕР БЭКЕНДТЕН ҚОЛМЕН АЖЫРАМАЙДЫ; МАРШРУТТАУ — TANSTACK ROUTER",
        "КИОСК КЛИЕНТТЕР АРАСЫНДА ӨЗІН БАСТАПҚЫ КҮЙГЕ ҚАЙТАРАДЫ — ӘРЕКЕТСІЗДІК БОЙЫНША АВТОМАТТЫ ҚАЛПЫНА КЕЛТІРУ, JWT СЕССИЯЛАРЫ, ҚОРҒАЛҒАН ЖАЛҒЫЗ ДАНА РЕЖИМІ",
        "РЕЛИЗДЕР GITLAB CI-ДА COMMIT ХАБАРЛАМАЛАРЫНАН ЖИНАЛАДЫ (SEMANTIC-RELEASE); BIOME + LEFTHOOK НАШАР КОММИТТЕРДІ CI-ҒА ДЕЙІН ТОҚТАТАДЫ",
      ],
    },
    "jaryq-lab": {
      company: "JARYQ LAB",
      project: "КЛИЕНТТІК ВЕБ ҚОСЫМШАЛАР",
      summary: "NEXT.JS, ZUSTAND, STORYBOOK",
      dates: "ТАМ 2025 — ҚАҢ 2026",
      role: "ФРОНТЕНД-ӘЗІРЛЕУШІ",
      highlights: [
        "АУТСОРС КОМАНДАСЫНДА REACT (NEXT.JS) НЕГІЗІНДЕГІ КЛИЕНТТІК ВЕБ ҚОСЫМШАЛАРДЫ ШЫҒАРДЫМ ЖӘНЕ ҚОЛДАДЫМ",
        "REACT ЖӘНЕ VUE КОД БАЗАЛАРЫНЫҢ ЕКЕУІНДЕ ДЕ КҮЙ БОЛЖАМДЫ БОЛЫП ҚАЛДЫ: ZUSTAND, REDUX SAGA, PINIA",
        "ЭКРАНДАРДЫ TANSTACK QUERY / RTK QUERY КЭШІНЕН БЕРІП, ҚАЙТАЛАНАТЫН СҰРАУЛАРДЫ АЗАЙТТЫМ",
        "UI РЕГРЕССИЯЛАРЫ РЕЛИЗДЕН КЕЙІН ЕМЕС, PULL REQUEST ІШІНДЕ STORYBOOK + CHROMATIC СКРИНШОТ-ДИФФТЕРІ АРҚЫЛЫ ҰСТАЛДЫ",
      ],
    },
    mindwave: {
      company: "MINDWAVE",
      project: "БІЛІМ БЕРУ ПЛАТФОРМАСЫ",
      summary: "NUXT.JS НЕГІЗІНДЕГІ БІЛІМ БЕРУ ПЛАТФОРМАСЫ",
      dates: "ТАМ 2024 — ТАМ 2025",
      role: "ФРОНТЕНД-ӘЗІРЛЕУШІ",
      highlights: [
        "ИНТЕРАКТИВТІ ИНТЕРФЕЙСТЕР МЕН БЕЙІМДЕЛГЕН ЛЕНДИНГТЕР (NUXT.JS, TYPESCRIPT, TAILWINDCSS) — ТЕЛЕФОННАН ДЕСКТОПҚА ДЕЙІН ПІШІНІН САҚТАЙДЫ",
        "СЕМАНТИКАЛЫҚ HTML ЖӘНЕ SCSS ПЛАТФОРМАНЫ ПЕРНЕТАҚТАДАН ҚОЛЖЕТІМДІ, СТИЛЬДЕРДІ ҚОЛДАУҒА ЫҢҒАЙЛЫ ЕТІП ҰСТАДЫ",
        "ANT DESIGN НЕГІЗІНДЕГІ ҚАЙТА ПАЙДАЛАНЫЛАТЫН КОМПОНЕНТТЕР ЖИЫНЫ МЕН ӨЗІНДІК АНИМАЦИЯЛАР: ЖАҢА БЕТТЕР ДАЙЫН БӨЛШЕКТЕРДЕН ЖИНАЛДЫ",
        "БАНДЛ КӨЛЕМІ МЕН РЕСУРС ЖҮКТЕУІН АЗАЙТЫП, БАЯУ БАЙЛАНЫСТА БІРІНШІ ЭКРАН ТЕЗІРЕК ШЫҒАТЫН ЕТТІМ",
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
