// @ts-check
import { defineConfig } from "astro/config";

import tailwindcss from "@tailwindcss/vite";
import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  site: "https://zarate-magdalena.netlify.app",
  integrations: [sitemap()],
  vite: {
    plugins: [tailwindcss()],
    build: {
      // VIBRANIUM LEVEL: Disable module preloading entirely.
      // This ensures that deferred scripts (dynamic imports) are NOT downloaded
      // until they are actually requested by the IntersectionObserver.
      modulePreload: false,
      polyfillModulePreload: false,
    },
  },
  build: {
    inlineStylesheets: "always",
  },
});
