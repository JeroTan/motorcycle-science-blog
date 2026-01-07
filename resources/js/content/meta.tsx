export type ItemBlogProps = {
  id: string,
  title: string,
  description: string,
  datePublished: string,
  image: string,
}

export const blogItemMeta: ItemBlogProps[] = [
  {
    id: "b20260106001",
    title: "The Rake of Motorcycle Forks: How It Affects Handling",
    description: "Explore how the rake angle of motorcycle forks influences handling characteristics, stability, and rider experience.",
    datePublished: "2026-01-06",
    image: "/images/articles/2026/01/chopper-with-long-rake.jpg",
  }
];

export function blogMetaSearchWithId(id: string): ItemBlogProps | null {
  return blogItemMeta.find(item => item.id === id) || null;
}

export function blogMetaSearchWithIdForce(id: string): ItemBlogProps {
  const item = blogItemMeta.find(item => item.id === id);
  if (!item) {
    throw new Error(`Blog item with ID ${id} not found.`);
  }
  return item;
}