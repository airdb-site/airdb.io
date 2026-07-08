import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

export default defineConfig({
  site: "https://airdb.io",
  output: "static",
  publicDir: "static",
  integrations: [
    sitemap({
      // Legacy nonprofit content awaiting rewrite; keep it out of search.
      filter: (page) => !page.includes("/zh/") && !page.includes("/cc/"),
    }),
  ],
});
