import type { Dictionary } from "@/i18n/types";

export const ru: Dictionary = {
  // Latin, as on the English page. Replace with "СЫРХАН МАДИЕВ" if you prefer.
  name: "SYRKHAN MADIYEV",
  role: "ФРОНТЕНД-РАЗРАБОТЧИК 2026",
  nav: { work: "ОПЫТ", projects: "ПРОЕКТЫ", about: "ОБО МНЕ" },
  actions: {
    view: "СМОТРЕТЬ",
    back: "НАЗАД",
    cv: "РЕЗЮМЕ",
    linkedin: "LINKEDIN",
  },
  casePage: {
    role: "ДОЛЖНОСТЬ",
    stack: "СТЕК",
    highlights: "ЧТО Я ДЕЛАЛ",
    nextProject: "СЛЕДУЮЩИЙ ПРОЕКТ",
  },
  cases: {
    "globerce-capital": {
      company: "GLOBERCE CAPITAL",
      project: "CARDKIOSK — ТЕРМИНАЛ ВЫПУСКА КАРТ",
      summary: "CARDKIOSK — TAURI, RUST, REACT",
      dates: "ЯНВ 2026 — СЕЙЧАС",
      role: "MIDDLE ФРОНТЕНД-РАЗРАБОТЧИК",
      highlights: [
        "КРОССПЛАТФОРМЕННОЕ ДЕСКТОП-ПРИЛОЖЕНИЕ ДЛЯ КИОСКОВ САМООБСЛУЖИВАНИЯ С МГНОВЕННЫМ ВЫПУСКОМ КАРТ",
        "СКВОЗНОЙ СЦЕНАРИЙ: OTP, БИОМЕТРИЧЕСКАЯ ПРОВЕРКА ЖИВОСТИ, СКАНИРОВАНИЕ ДОКУМЕНТОВ (REGULA SDK), 3D-ВЫБОР ДИЗАЙНА КАРТЫ, ПЕЧАТЬ КАРТЫ",
        "ПРИНТЕР И ЭМБОССЕР КАРТ ЧЕРЕЗ RUST-ПЛАГИНЫ SERIAL-PORT, НАТИВНАЯ КАМЕРА (MEDIA FOUNDATION)",
        "ГЕНЕРАЦИЯ OPENAPI-КЛИЕНТА ДЛЯ RTK QUERY, МАРШРУТИЗАЦИЯ НА TANSTACK ROUTER",
        "АВТОСБРОС ПО БЕЗДЕЙСТВИЮ, АВТОРИЗАЦИЯ ПО JWT, ЗАЩИЩЁННЫЙ РЕЖИМ ОДНОГО ЭКЗЕМПЛЯРА",
        "SEMANTIC-RELEASE В GITLAB CI/CD, BIOME + LEFTHOOK",
      ],
    },
    "jaryq-lab": {
      company: "JARYQ LAB",
      project: "КЛИЕНТСКИЕ ВЕБ-ПРИЛОЖЕНИЯ",
      summary: "NEXT.JS, ZUSTAND, STORYBOOK",
      dates: "АВГ 2025 — ЯНВ 2026",
      role: "ФРОНТЕНД-РАЗРАБОТЧИК",
      highlights: [
        "РАЗРАБАТЫВАЛ И ПОДДЕРЖИВАЛ КЛИЕНТСКИЕ ВЕБ-ПРИЛОЖЕНИЯ НА REACT (NEXT.JS)",
        "УПРАВЛЕНИЕ СОСТОЯНИЕМ НА PINIA, REDUX SAGA И ZUSTAND",
        "TANSTACK QUERY И RTK QUERY ДЛЯ ЗАГРУЗКИ ДАННЫХ И КЛИЕНТСКОГО КЭШИРОВАНИЯ",
        "СТАНДАРТИЗИРОВАЛ РАБОТУ С UI ЧЕРЕЗ STORYBOOK И CHROMATIC, УСКОРИВ ВЫПУСК ФИЧ",
      ],
    },
    mindwave: {
      company: "MINDWAVE",
      project: "ОБРАЗОВАТЕЛЬНАЯ ПЛАТФОРМА",
      summary: "ОБРАЗОВАТЕЛЬНАЯ ПЛАТФОРМА НА NUXT.JS",
      dates: "АВГ 2024 — АВГ 2025",
      role: "ФРОНТЕНД-РАЗРАБОТЧИК",
      highlights: [
        "ИНТЕРАКТИВНЫЕ ИНТЕРФЕЙСЫ И АДАПТИВНЫЕ ЛЕНДИНГИ НА NUXT.JS, TYPESCRIPT И TAILWINDCSS",
        "СЕМАНТИЧНЫЙ HTML И SCSS ДЛЯ ЧИСТЫХ И ПОДДЕРЖИВАЕМЫХ СТИЛЕЙ",
        "ПЕРЕИСПОЛЬЗУЕМЫЕ UI-КОМПОНЕНТЫ НА ANT DESIGN И КАСТОМНЫЕ АНИМАЦИИ",
        "ОПТИМИЗИРОВАЛ ЗАГРУЗКУ РЕСУРСОВ И РАЗМЕР БАНДЛА РАДИ ПРОИЗВОДИТЕЛЬНОСТИ И ДОСТУПНОСТИ",
      ],
    },
  },
  about: {
    intro:
      "ФРОНТЕНД-РАЗРАБОТЧИК С ОПЫТОМ БОЛЕЕ 2 ЛЕТ. СОЗДАЮ ВЕБ- И ДЕСКТОП-ПРИЛОЖЕНИЯ — ОТ КИОСКОВ САМООБСЛУЖИВАНИЯ, ПОДКЛЮЧЁННЫХ К РЕАЛЬНОМУ ОБОРУДОВАНИЮ, ДО БЫСТРЫХ И АККУРАТНЫХ ВЕБ-ИНТЕРФЕЙСОВ.",
    fields: [
      { label: "ЛОКАЦИЯ", lines: ["АЛМАТЫ, КАЗАХСТАН"] },
      {
        label: "ОБРАЗОВАНИЕ",
        lines: [
          "УНИВЕРСИТЕТ СУЛЕЙМАНА ДЕМИРЕЛЯ",
          "БАКАЛАВР ИНФОРМАЦИОННЫХ СИСТЕМ, 2025",
        ],
      },
      {
        label: "ФРОНТЕНД И ДЕСКТОП",
        lines: ["REACT 18, NEXT.JS, VUE, NUXT.JS, TAURI (RUST), TYPESCRIPT"],
      },
      {
        label: "СОСТОЯНИЕ И МАРШРУТИЗАЦИЯ",
        lines: [
          "REDUX TOOLKIT, RTK QUERY, TANSTACK QUERY, TANSTACK ROUTER, ZUSTAND, PINIA",
        ],
      },
      {
        label: "СТИЛИ И ФОРМЫ",
        lines: [
          "TAILWINDCSS, SCSS, ANT DESIGN, MATERIAL UI, REACT HOOK FORM, VALIBOT",
        ],
      },
      {
        label: "ОБОРУДОВАНИЕ И ИНСТРУМЕНТЫ",
        lines: [
          "REGULA SDK, SERIAL PORT, MEDIA FOUNDATION, GITLAB CI/CD, SEMANTIC-RELEASE, STORYBOOK, BIOME",
        ],
      },
      {
        label: "ЯЗЫКИ",
        lines: [
          "КАЗАХСКИЙ, РУССКИЙ — РОДНЫЕ",
          "АНГЛИЙСКИЙ — UPPER-INTERMEDIATE",
        ],
      },
    ],
    contact: "КОНТАКТЫ",
  },
  projectsPage: {
    filters: {
      all: "ВСЕ",
      apps: "ПРИЛОЖЕНИЯ",
      websites: "САЙТЫ",
      other: "ДРУГОЕ",
    },
    count: {
      one: "{count} ПРОЕКТ",
      few: "{count} ПРОЕКТА",
      many: "{count} ПРОЕКТОВ",
      other: "{count} ПРОЕКТА",
    },
    screenshot: "СКРИНШОТ",
    items: {
      "project-1": {
        name: "НАЗВАНИЕ ПРОЕКТА",
        type: "ВЕБ-ПРИЛОЖЕНИЕ",
        description: "КОРОТКОЕ ОПИСАНИЕ В ОДНУ СТРОКУ.",
      },
      "project-2": {
        name: "НАЗВАНИЕ ПРОЕКТА",
        type: "САЙТ",
        description: "ЛЕНДИНГ ИЛИ САЙТ ДЛЯ КЛИЕНТА.",
      },
      "project-3": {
        name: "НАЗВАНИЕ ПРОЕКТА",
        type: "ДЕСКТОП-ПРИЛОЖЕНИЕ",
        description: "ПРИЛОЖЕНИЕ НА TAURI, ИНСТРУМЕНТ ИЛИ УТИЛИТА.",
      },
      "project-4": {
        name: "НАЗВАНИЕ ПРОЕКТА",
        type: "МОБИЛЬНОЕ ПРИЛОЖЕНИЕ",
        description: "КОРОТКОЕ ОПИСАНИЕ В ОДНУ СТРОКУ.",
      },
      "project-5": {
        name: "НАЗВАНИЕ ПРОЕКТА",
        type: "САЙТ",
        description: "ЛЕНДИНГ ИЛИ САЙТ ДЛЯ КЛИЕНТА.",
      },
      "project-6": {
        name: "НАЗВАНИЕ ПРОЕКТА",
        type: "OPEN SOURCE",
        description: "БИБЛИОТЕКА, ПЛАГИН ИЛИ ЭКСПЕРИМЕНТ.",
      },
    },
  },
  footer: {
    inquiries: "ПО ВСЕМ ВОПРОСАМ ПИШИТЕ НА {email}",
    cv: "CV.PDF",
    language: "Язык",
  },
  meta: {
    home: {
      title: "Syrkhan Madiyev — Фронтенд-разработчик",
      description:
        "Фронтенд-разработчик: веб- и десктоп-приложения — от киосков самообслуживания до быстрых и аккуратных веб-интерфейсов.",
    },
    about: "Обо мне — Syrkhan Madiyev",
    projects: "Проекты — Syrkhan Madiyev",
    case: "{company} — Syrkhan Madiyev",
  },
};
