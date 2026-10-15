import { defineConfig } from "astro/config";
import rehypeSlug from "rehype-slug";

export default defineConfig({
  site: "https://www.akademiamlm.pl",
  trailingSlash: "always",
  compressHTML: true,
  markdown: {
    smartypants: false,
    rehypePlugins: [rehypeSlug],
  },
});
