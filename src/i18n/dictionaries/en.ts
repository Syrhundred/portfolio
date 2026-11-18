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
        "CROSS-PLATFORM KIOSK APP (TAURI + RUST + REACT 18) THAT HANDS A CUSTOMER A FINISHED CARD IN A SINGLE VISIT, WITH NO BRANCH STAFF IN THE LOOP",
        "THE WHOLE ISSUANCE RUNS UNATTENDED: OTP, BIOMETRIC LIVENESS CHECK, DOCUMENT SCAN (REGULA SDK), 3D DESIGN SELECTOR, THEN PRINTING",
        "EMBOSSER, CARD PRINTER AND CAMERA DRIVEN FROM THE APP ITSELF — RUST SERIAL-PORT PLUGINS AND MEDIA FOUNDATION",
        "THE RTK QUERY CLIENT IS GENERATED FROM OPENAPI, SO API TYPES CANNOT DRIFT FROM THE BACKEND BY HAND; ROUTING ON TANSTACK ROUTER",
        "THE KIOSK RETURNS ITSELF TO A CLEAN STATE BETWEEN CUSTOMERS — INACTIVITY AUTO-RESET, JWT SESSIONS, SECURE SINGLE-INSTANCE MODE",
        "RELEASES CUT THEMSELVES FROM COMMIT MESSAGES IN GITLAB CI (SEMANTIC-RELEASE); BIOME + LEFTHOOK STOP BAD COMMITS BEFORE CI",
      ],
    },
    "jaryq-lab": {
      company: "JARYQ LAB",
      project: "CLIENT WEB APPLICATIONS",
      summary: "NEXT.JS, ZUSTAND, STORYBOOK",
      dates: "AUG 2025 — JAN 2026",
      role: "FRONTEND DEVELOPER",
      highlights: [
        "SHIPPED AND MAINTAINED CLIENT WEB APPLICATIONS ON REACT (NEXT.JS) IN AN OUTSOURCING TEAM",
        "KEPT STATE PREDICTABLE ACROSS BOTH REACT AND VUE CODEBASES WITH ZUSTAND, REDUX SAGA AND PINIA",
        "CUT REPEAT NETWORK CALLS BY SERVING SCREENS FROM THE TANSTACK QUERY / RTK QUERY CACHE",
        "UI REGRESSIONS GOT CAUGHT IN THE PULL REQUEST THROUGH STORYBOOK + CHROMATIC SCREENSHOT DIFFS, NOT AFTER RELEASE",
      ],
    },
    mindwave: {
      company: "MINDWAVE",
      project: "EDUCATIONAL PLATFORM",
      summary: "NUXT.JS EDUCATION PLATFORM",
      dates: "AUG 2024 — AUG 2025",
      role: "FRONTEND DEVELOPER",
      highlights: [
        "INTERACTIVE INTERFACES AND RESPONSIVE LANDING PAGES (NUXT.JS, TYPESCRIPT, TAILWINDCSS) THAT HOLD THEIR LAYOUT FROM PHONE TO DESKTOP",
        "SEMANTIC HTML AND SCSS KEPT THE PLATFORM KEYBOARD-NAVIGABLE AND THE STYLING MAINTAINABLE AS IT GREW",
        "A REUSABLE ANT DESIGN COMPONENT SET WITH CUSTOM ANIMATIONS, SO NEW PAGES WERE ASSEMBLED FROM EXISTING PARTS INSTEAD OF RESTYLED",
        "TRIMMED BUNDLE SIZE AND ASSET LOADING SO THE FIRST SCREEN RENDERED SOONER ON SLOW CONNECTIONS",
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
