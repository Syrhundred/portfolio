import type { Dictionary } from "@/i18n/types";

export const en: Dictionary = {
  name: "SYRKHAN MADIYEV",
  role: "FRONTEND DEVELOPER 2026",
  nav: { work: "WORK", projects: "PROJECTS", about: "ABOUT" },
  actions: {
    view: "VIEW",
    back: "BACK",
    cv: "CV",
    linkedin: "LINKEDIN",
  },
  casePage: {
    role: "ROLE",
    stack: "STACK",
    highlights: "WHAT I DID",
    nextProject: "NEXT PROJECT",
  },
  cases: {
    "globerce-capital": {
      company: "GLOBERCE CAPITAL",
      project: "CARDKIOSK — CARD ISSUANCE TERMINAL",
      summary: "CARDKIOSK — TAURI, RUST, REACT",
      dates: "JAN 2026 — PRESENT",
      role: "MIDDLE FRONTEND DEVELOPER",
      highlights: [
        "CROSS-PLATFORM KIOSK DESKTOP APP FOR SELF-SERVICE INSTANT CARD ISSUANCE",
        "END-TO-END FLOW: OTP, BIOMETRIC LIVENESS CHECK, DOCUMENT SCANNING (REGULA SDK), 3D CARD DESIGN SELECTOR, CARD PRINTING",
        "CARD PRINTER / EMBOSSER VIA RUST SERIAL-PORT PLUGINS, NATIVE CAMERA (MEDIA FOUNDATION)",
        "OPENAPI CLIENT GENERATION FOR RTK QUERY, ROUTING WITH TANSTACK ROUTER",
        "INACTIVITY AUTO-RESET, JWT AUTH, SECURE SINGLE-INSTANCE MODE",
        "SEMANTIC-RELEASE IN GITLAB CI/CD, BIOME + LEFTHOOK",
      ],
    },
    "jaryq-lab": {
      company: "JARYQ LAB",
      project: "CLIENT WEB APPLICATIONS",
      summary: "NEXT.JS, ZUSTAND, STORYBOOK",
      dates: "AUG 2025 — JAN 2026",
      role: "FRONTEND DEVELOPER",
      highlights: [
        "BUILT AND MAINTAINED CLIENT WEB APPLICATIONS WITH REACT (NEXT.JS)",
        "STATE MANAGEMENT WITH PINIA, REDUX SAGA AND ZUSTAND",
        "TANSTACK QUERY AND RTK QUERY FOR DATA FETCHING AND CLIENT-SIDE CACHING",
        "STANDARDIZED UI WORK WITH STORYBOOK AND CHROMATIC, SPEEDING UP FEATURE DELIVERY",
      ],
    },
    mindwave: {
      company: "MINDWAVE",
      project: "EDUCATIONAL PLATFORM",
      summary: "NUXT.JS EDUCATION PLATFORM",
      dates: "AUG 2024 — AUG 2025",
      role: "FRONTEND DEVELOPER",
      highlights: [
        "INTERACTIVE INTERFACES AND RESPONSIVE LANDING PAGES WITH NUXT.JS, TYPESCRIPT AND TAILWINDCSS",
        "SEMANTIC HTML AND SCSS FOR CLEAN, MAINTAINABLE STYLING",
        "REUSABLE UI COMPONENTS WITH ANT DESIGN AND CUSTOM ANIMATIONS",
        "OPTIMIZED ASSET LOADING AND BUNDLE SIZE FOR BETTER PERFORMANCE AND ACCESSIBILITY",
      ],
    },
  },
  about: {
    intro:
      "FRONTEND DEVELOPER WITH 2+ YEARS OF EXPERIENCE BUILDING WEB AND DESKTOP APPLICATIONS — FROM SELF-SERVICE KIOSKS CONNECTED TO REAL HARDWARE TO FAST, CAREFUL WEB INTERFACES.",
    fields: [
      { label: "BASED IN", lines: ["ALMATY, KAZAKHSTAN"] },
      {
        label: "EDUCATION",
        lines: [
          "SULEYMAN DEMIREL UNIVERSITY",
          "BACHELOR OF INFORMATION SYSTEMS, 2025",
        ],
      },
      {
        label: "FRONTEND & DESKTOP",
        lines: ["REACT 18, NEXT.JS, VUE, NUXT.JS, TAURI (RUST), TYPESCRIPT"],
      },
      {
        label: "STATE & ROUTING",
        lines: [
          "REDUX TOOLKIT, RTK QUERY, TANSTACK QUERY, TANSTACK ROUTER, ZUSTAND, PINIA",
        ],
      },
      {
        label: "STYLING & FORMS",
        lines: [
          "TAILWINDCSS, SCSS, ANT DESIGN, MATERIAL UI, REACT HOOK FORM, VALIBOT",
        ],
      },
      {
        label: "HARDWARE & TOOLS",
        lines: [
          "REGULA SDK, SERIAL PORT, MEDIA FOUNDATION, GITLAB CI/CD, SEMANTIC-RELEASE, STORYBOOK, BIOME",
        ],
      },
      {
        label: "LANGUAGES",
        lines: ["KAZAKH, RUSSIAN — NATIVE", "ENGLISH — UPPER-INTERMEDIATE"],
      },
    ],
    contact: "CONTACT",
  },
  projectsPage: {
    filters: {
      all: "ALL",
      apps: "APPS",
      websites: "WEBSITES",
      other: "OTHER",
    },
    count: { one: "{count} PROJECT", other: "{count} PROJECTS" },
    screenshot: "SCREENSHOT",
    items: {
      "project-1": {
        name: "PROJECT NAME",
        type: "WEB APP",
        description: "SHORT ONE-LINE DESCRIPTION OF WHAT IT DOES.",
      },
      "project-2": {
        name: "PROJECT NAME",
        type: "WEBSITE",
        description: "LANDING PAGE OR SITE BUILT FOR A CLIENT.",
      },
      "project-3": {
        name: "PROJECT NAME",
        type: "DESKTOP APP",
        description: "TAURI APP, TOOL OR UTILITY.",
      },
      "project-4": {
        name: "PROJECT NAME",
        type: "MOBILE APP",
        description: "SHORT ONE-LINE DESCRIPTION OF WHAT IT DOES.",
      },
      "project-5": {
        name: "PROJECT NAME",
        type: "WEBSITE",
        description: "LANDING PAGE OR SITE BUILT FOR A CLIENT.",
      },
      "project-6": {
        name: "PROJECT NAME",
        type: "OPEN SOURCE",
        description: "LIBRARY, PLUGIN OR EXPERIMENT.",
      },
    },
  },
  footer: {
    inquiries: "FOR ALL INQUIRIES PLEASE EMAIL {email}",
    cv: "CV.PDF",
    language: "Language",
  },
  meta: {
    home: {
      title: "Syrkhan Madiyev — Frontend Developer",
      description:
        "Frontend developer building web and desktop applications — from self-service kiosks to fast, careful web interfaces.",
    },
    about: "About — Syrkhan Madiyev",
    projects: "Projects — Syrkhan Madiyev",
    case: "{company} — Syrkhan Madiyev",
  },
};
