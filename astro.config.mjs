import { defineConfig } from "astro/config";
import react from "@astrojs/react";
import tailwindcss from "@tailwindcss/vite";

const pages = process.env.GITHUB_PAGES === "true";

export default defineConfig({
  site: "https://markush0f.github.io",
  base: pages ? "/portfolio-base" : "/",
  integrations: [react()],
  vite: {
    plugins: [tailwindcss()],
  },
});
