import { getCollection, type CollectionEntry } from "astro:content";

export type Lecture = CollectionEntry<"wyklad">;

export async function lectures() {
  const posts = await getCollection("wyklad");
  return posts.sort((a, b) => a.data.numer.localeCompare(b.data.numer));
}

export function formatDate(date: Date) {
  return new Intl.DateTimeFormat("pl-PL", {
    day: "numeric",
    month: "long",
    year: "numeric",
    timeZone: "UTC",
  }).format(date);
}
