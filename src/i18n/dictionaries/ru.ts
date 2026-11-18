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
        "КИОСК-ПРИЛОЖЕНИЕ (TAURI + RUST + REACT 18): КЛИЕНТ ПОЛУЧАЕТ ГОТОВУЮ КАРТУ ЗА ОДИН ВИЗИТ, БЕЗ СОТРУДНИКА ОТДЕЛЕНИЯ",
        "ВЕСЬ ВЫПУСК ПРОХОДИТ БЕЗ ОПЕРАТОРА: OTP, БИОМЕТРИЧЕСКАЯ ПРОВЕРКА ЖИВОСТИ, СКАНИРОВАНИЕ ДОКУМЕНТА (REGULA SDK), 3D-ВЫБОР ДИЗАЙНА И ПЕЧАТЬ",
        "ЭМБОССЕР, ПРИНТЕР КАРТ И КАМЕРА УПРАВЛЯЮТСЯ ИЗ САМОГО ПРИЛОЖЕНИЯ — RUST-ПЛАГИНЫ SERIAL-PORT И MEDIA FOUNDATION",
        "КЛИЕНТ RTK QUERY ГЕНЕРИРУЕТСЯ ИЗ OPENAPI, ПОЭТОМУ ТИПЫ НЕ РАСХОДЯТСЯ С БЭКЕНДОМ ВРУЧНУЮ; МАРШРУТИЗАЦИЯ НА TANSTACK ROUTER",
        "КИОСК САМ ВОЗВРАЩАЕТСЯ В ИСХОДНОЕ СОСТОЯНИЕ МЕЖДУ КЛИЕНТАМИ — АВТОСБРОС ПО БЕЗДЕЙСТВИЮ, JWT-СЕССИИ, ЗАЩИЩЁННЫЙ РЕЖИМ ОДНОГО ЭКЗЕМПЛЯРА",
        "РЕЛИЗЫ СОБИРАЮТСЯ ИЗ COMMIT-СООБЩЕНИЙ В GITLAB CI (SEMANTIC-RELEASE); BIOME + LEFTHOOK ОТСЕКАЮТ ПЛОХИЕ КОММИТЫ ДО CI",
      ],
    },
    "jaryq-lab": {
      company: "JARYQ LAB",
      project: "КЛИЕНТСКИЕ ВЕБ-ПРИЛОЖЕНИЯ",
      summary: "NEXT.JS, ZUSTAND, STORYBOOK",
      dates: "АВГ 2025 — ЯНВ 2026",
      role: "ФРОНТЕНД-РАЗРАБОТЧИК",
      highlights: [
        "ВЫПУСКАЛ И ПОДДЕРЖИВАЛ КЛИЕНТСКИЕ ВЕБ-ПРИЛОЖЕНИЯ НА REACT (NEXT.JS) В АУТСОРС-КОМАНДЕ",
        "СОСТОЯНИЕ ОСТАВАЛОСЬ ПРЕДСКАЗУЕМЫМ И В REACT-, И В VUE-КОДОВЫХ БАЗАХ: ZUSTAND, REDUX SAGA, PINIA",
        "СОКРАТИЛ ПОВТОРНЫЕ ЗАПРОСЫ, ОТДАВАЯ ЭКРАНЫ ИЗ КЕША TANSTACK QUERY / RTK QUERY",
        "РЕГРЕССИИ UI ЛОВИЛИСЬ В PULL REQUEST ПО СКРИНШОТ-ДИФФАМ STORYBOOK + CHROMATIC, А НЕ ПОСЛЕ РЕЛИЗА",
      ],
    },
    mindwave: {
      company: "MINDWAVE",
      project: "ОБРАЗОВАТЕЛЬНАЯ ПЛАТФОРМА",
      summary: "ОБРАЗОВАТЕЛЬНАЯ ПЛАТФОРМА НА NUXT.JS",
      dates: "АВГ 2024 — АВГ 2025",
      role: "ФРОНТЕНД-РАЗРАБОТЧИК",
      highlights: [
        "ИНТЕРАКТИВНЫЕ ИНТЕРФЕЙСЫ И АДАПТИВНЫЕ ЛЕНДИНГИ (NUXT.JS, TYPESCRIPT, TAILWINDCSS), ДЕРЖАЩИЕ ВЁРСТКУ ОТ ТЕЛЕФОНА ДО ДЕСКТОПА",
        "СЕМАНТИЧНЫЙ HTML И SCSS СОХРАНИЛИ ПЛАТФОРМУ ДОСТУПНОЙ С КЛАВИАТУРЫ, А СТИЛИ — ПОДДЕРЖИВАЕМЫМИ ПО МЕРЕ РОСТА",
        "НАБОР ПЕРЕИСПОЛЬЗУЕМЫХ КОМПОНЕНТОВ НА ANT DESIGN С КАСТОМНЫМИ АНИМАЦИЯМИ: НОВЫЕ СТРАНИЦЫ СОБИРАЛИСЬ ИЗ ГОТОВЫХ ЧАСТЕЙ",
        "УМЕНЬШИЛ ВЕС БАНДЛА И ЗАГРУЗКУ РЕСУРСОВ, ЧТОБЫ ПЕРВЫЙ ЭКРАН ПОЯВЛЯЛСЯ БЫСТРЕЕ НА МЕДЛЕННОЙ СВЯЗИ",
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
