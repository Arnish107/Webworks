/**
 * Photo sources for Washington's Wharf.
 *
 * Temporary Unsplash stand-ins until real H101 shots are uploaded under /public/images.
 * Swap any URL to a local .jpg/.png path when you have the real file.
 */

export const photos = {
  hero: "https://images.unsplash.com/photo-1579208030886-b937da0925dc?w=1600&q=80",
  ctaBanner:
    "https://images.unsplash.com/photo-1514933651103-005eec06c04b?w=1600&q=80",
  diningRoom:
    "https://images.unsplash.com/photo-1514933651103-005eec06c04b?w=1200&q=80",
  bar: "https://images.unsplash.com/photo-1572116469696-31de0f17cc34?w=1200&q=80",
  phoneBooth:
    "https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?w=900&q=80",
  fishAndChips:
    "https://images.unsplash.com/photo-1579208030886-b937da0925dc?w=1000&q=80",
  shrimpAndChips:
    "https://images.unsplash.com/photo-1559742811-822873691df8?w=1000&q=80",
  chickenTenders:
    "https://images.unsplash.com/photo-1562967914-608f82629710?w=1000&q=80",
  wings: "https://images.unsplash.com/photo-1527477396000-e27163b481c2?w=1000&q=80",
  pretzelBeerCheese:
    "https://images.unsplash.com/photo-1555507036-ab1f4038808a?w=1000&q=80",
  ukBeers: "https://images.unsplash.com/photo-1436076863939-06870fe779c2?w=1000&q=80",
  og: "https://images.unsplash.com/photo-1579208030886-b937da0925dc?w=1200&q=80",
  menuPdf: "/menu/washingtons-wharf-menu.pdf",
  gallery: [
    "https://images.unsplash.com/photo-1579208030886-b937da0925dc?w=900&q=80",
    "https://images.unsplash.com/photo-1514933651103-005eec06c04b?w=700&q=80",
    "https://images.unsplash.com/photo-1559742811-822873691df8?w=700&q=80",
    "https://images.unsplash.com/photo-1436076863939-06870fe779c2?w=700&q=80",
    "https://images.unsplash.com/photo-1555507036-ab1f4038808a?w=900&q=80",
    "https://images.unsplash.com/photo-1562967914-608f82629710?w=700&q=80",
    "https://images.unsplash.com/photo-1572116469696-31de0f17cc34?w=700&q=80",
    "https://images.unsplash.com/photo-1527477396000-e27163b481c2?w=700&q=80",
    "https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?w=700&q=80",
    "https://images.unsplash.com/photo-1470337458703-46ad1756a187?w=700&q=80",
    "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=700&q=80",
    "https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec?w=700&q=80",
  ],
  groups: {
    birthday:
      "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?w=900&q=80",
    office:
      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=900&q=80",
    gameDay:
      "https://images.unsplash.com/photo-1527477396000-e27163b481c2?w=900&q=80",
    family:
      "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=900&q=80",
    takeout:
      "https://images.unsplash.com/photo-1559742811-822873691df8?w=900&q=80",
  },
  instagram: [
    "https://images.unsplash.com/photo-1579208030886-b937da0925dc?w=600&q=80",
    "https://images.unsplash.com/photo-1555507036-ab1f4038808a?w=600&q=80",
    "https://images.unsplash.com/photo-1436076863939-06870fe779c2?w=600&q=80",
    "https://images.unsplash.com/photo-1562967914-608f82629710?w=600&q=80",
    "https://images.unsplash.com/photo-1559742811-822873691df8?w=600&q=80",
    "https://images.unsplash.com/photo-1514933651103-005eec06c04b?w=600&q=80",
  ],
} as const;

/** Local branded fallback if a remote image fails to load. */
export const PLACEHOLDER_SRC = "/images/placeholder.svg";
