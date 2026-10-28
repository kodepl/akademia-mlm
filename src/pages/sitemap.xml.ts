import type { APIRoute } from "astro";
import { lectures } from "../lib/lectures";

export const GET: APIRoute = async () => {
  const posts = await lectures();
  const origin = "https://www.akademiamlm.pl";
  const urls = [
    `${origin}/`,
    `${origin}/wyklad/`,
    `${origin}/lista/`,
    `${origin}/slowa/`,
    `${origin}/szkola/`,
    `${origin}/poczta/`,
    `${origin}/prywatnosc/`,
    ...posts.map((post) => `${origin}/wyklad/${post.slug}/`),
  ];
  const body = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.map((url) => `  <url><loc>${url}</loc></url>`).join("\n")}
</urlset>
`;
  return new Response(body, {
    headers: { "Content-Type": "application/xml; charset=utf-8" },
  });
};
