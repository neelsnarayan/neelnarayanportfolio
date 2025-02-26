import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import vercel from "@astrojs/vercel/static";
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
    solidJs(),
    UnoCSS({ injectReset: true }),
    icon(),
    svelte(),
    react(),
  ],
  markdown: {
    remarkPlugins: [remarkReadingTime],
  },
  output: "static",
  adapter: vercel(),
  vite: {
    assetsInclude: "**/*.riv",
  },
});
