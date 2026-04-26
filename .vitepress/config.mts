import { defineConfig } from "vitepress";

export default defineConfig({
  title: "Nepali Date Picker",
  description:
    "A ready-to-use Nepali (Bikram Sambat) date picker component for Vue 3, Vue 2, and React",
  outDir: "./build",
  sitemap: {
    hostname: "https://nepalidatepicker.sandip-ghimire.com.np/",
  },
  head: [
    [
      "meta",
      {
        name: "keywords",
        content:
          "nepali date picker, bikram sambat, BS date, nepali calendar, vue datepicker, vue2 datepicker, react datepicker, nepal, typescript, javascript",
      },
    ],
    ["meta", { name: "author", content: "Sandip Ghimire" }],
    [
      "link",
      {
        rel: "canonical",
        href: "https://nepalidatepicker.sandip-ghimire.com.np/",
      },
    ],
    ["meta", { property: "og:title", content: "Nepali Date Picker" }],
    [
      "meta",
      {
        property: "og:description",
        content:
          "A ready-to-use Nepali (Bikram Sambat) date picker component for Vue 3, Vue 2, and React",
      },
    ],
    ["meta", { property: "og:type", content: "website" }],
    [
      "meta",
      {
        property: "og:url",
        content: "https://nepalidatepicker.sandip-ghimire.com.np/",
      },
    ],
    [
      "meta",
      {
        property: "og:image",
        content: "https://nepalidatepicker.sandip-ghimire.com.np/logo.png",
      },
    ],
  ],
  themeConfig: {
    logo: "/logo.svg",
    nav: [
      { text: "Home", link: "/" },
      {
        text: "Vue 3",
        link: "/docs/Vue3/",
        activeMatch: "/docs/Vue3/",
      },
      {
        text: "Vue 2",
        link: "/docs/Vue2/",
        activeMatch: "/docs/Vue2/",
      },
    ],
    sidebar: {
      "/docs/Vue3/": [
        {
          text: "Introduction",
          items: [
            { text: "Overview", link: "/docs/Vue3/" },
            { text: "Getting Started", link: "/docs/Vue3/getting-started" },
          ],
        },
        {
          text: "Reference",
          items: [
            { text: "Overview", link: "/docs/Vue3/api/" },
            { text: "Props", link: "/docs/Vue3/reference/props" },
            { text: "Events", link: "/docs/Vue3/reference/events" },
            { text: "Example", link: "/docs/Vue3/reference/example" },
          ],
        },
        {
          text: "Changelog",
          items: [{ text: "v2+", link: "/docs/Vue3/changelog/v2" }],
        },
      ],
      "/docs/Vue2/": [
        {
          text: "Introduction",
          items: [
            { text: "Overview", link: "/docs/Vue2/" },
            { text: "Getting Started", link: "/docs/Vue2/getting-started" },
          ],
        },
        {
          text: "Reference",
          items: [
            { text: "Overview", link: "/docs/Vue2/api/" },
            { text: "Props", link: "/docs/Vue2/reference/props" },
            { text: "Events", link: "/docs/Vue2/reference/events" },
            { text: "Example", link: "/docs/Vue2/reference/example" },
          ],
        },
      ],
    },
    socialLinks: [
      {
        icon: "github",
        link: "https://github.com/SandipGhimire/",
      },
    ],
    footer: {
      message: "Released under the MIT License.",
      copyright: "Copyright © 2026-present Sandip Ghimire",
    },
    search: {
      provider: "local",
    },
  },
});
