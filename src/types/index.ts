export type NavLink = {
  href: string;
  label: string;
};

export type MenuItem = {
  id: string;
  name: string;
  description: string;
  price: string;
  category: MenuCategory;
  dietary?: ("GF" | "V" | "VG")[];
  featured?: boolean;
};

export type MenuCategory =
  | "starters"
  | "soups-salads"
  | "seafood"
  | "steaks"
  | "pasta"
  | "sandwiches"
  | "desserts"
  | "cocktails"
  | "wine";

export type SignatureDining = {
  id: string;
  title: string;
  description: string;
  image: string;
};

export type HarborExperience = {
  id: string;
  title: string;
  description: string;
  image: string;
};

export type EventType = {
  id: string;
  title: string;
  description: string;
  image: string;
};

export type FeaturedMenuCard = {
  id: string;
  category: string;
  name: string;
  description: string;
  price: string;
  image: string;
  details: string;
};

export type GalleryImage = {
  id: string;
  src: string;
  alt: string;
  category: GalleryCategory;
  span?: "tall" | "wide" | "normal";
};

export type GalleryCategory =
  | "all"
  | "dining"
  | "waterfront"
  | "food"
  | "cocktails"
  | "events"
  | "weddings";

export type Testimonial = {
  id: string;
  quote: string;
  author: string;
  detail: string;
};

export type Stat = {
  value: string;
  label: string;
};

export type EventSpace = {
  id: string;
  name: string;
  capacity: string;
  description: string;
  image: string;
};

export type FaqItem = {
  question: string;
  answer: string;
};

export type HoursBlock = {
  days: string;
  hours: string;
};
