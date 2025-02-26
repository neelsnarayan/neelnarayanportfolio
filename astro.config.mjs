import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import vercel from "@astrojs/vercel";
import robotsTxt from "astro-robots-txt";
import UnoCSS from "@unocss/astro";
import icon from "astro-icon";
import react from "@astrojs/react";
import solidJs from "@astrojs/solid-js";
import { remarkReadingTime } from "./src/lib/remark-reading-time.mjs";

import svelte from "@astrojs/svelte";

// https://astro.build/config
export default defineConfig({
  site: "https://neelnarayan.com/",
  integrations: [
    sitemap(),
    robotsTxt({
      sitemap: [
        "https://neelnarayan.com/sitemap-index.xml",
        "https://neelnarayan.com/sitemap-0.xml",
      ],
    }),
    solidJs({
      include: ['**/solid/**/*.{jsx,tsx}', '**/TimeZoneCard.astro']
    }),
    UnoCSS({ injectReset: true }),
    icon(),
    svelte(),
    react({
      include: ['**/react/**/*.{jsx,tsx}', '**/Analytics.{jsx,tsx}']
    }),
  ],
  markdown: {
    remarkPlugins: [remarkReadingTime],
  },
  output: "static",
  adapter: vercel({
    analytics: true
  }),
  vite: {
    assetsInclude: "**/*.riv",
    ssr: {
      noExternal: ['solid-js']
    }
  },
});
