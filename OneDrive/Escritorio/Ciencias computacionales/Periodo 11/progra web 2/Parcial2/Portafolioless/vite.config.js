import { defineConfig } from "vite";
import purgeCss from "vite-plugin-purgecss";

export default defineConfig({
  base: "/BiografiaMiguelSanchez/",
  plugins: [purgeCss()],
  build: {
    minify: "esbuild",
  },
});