import type {
  EventSpace,
  EventType,
  FaqItem,
  FeaturedMenuCard,
  GalleryImage,
  HarborExperience,
  HoursBlock,
  MenuItem,
  NavLink,
  SignatureDining,
  Stat,
  Testimonial,
} from "@/types";

export const siteConfig = {
  name: "Washington's Wharf",
  tagline: "Authentic Fish & Chips. Good Vibes.",
  description:
    "Washington's Wharf serves crispy British-style fish and chips, comfort classics, cold beer, and great vibes in Cumming City Center, Cumming, GA.",
  url: "https://washingtonswharf.com",
  phone: "(470) 533-2140",
  email: "hello@washingtonswharf.com",
  eventsEmail: "hello@washingtonswharf.com",
  address: {
    street: "451 Vision Dr, Ste H101",
    city: "Cumming",
    state: "GA",
    zip: "30040",
    full: "451 Vision Dr, Ste H101, Cumming, GA 30040",
  },
  social: {
    instagram: "https://instagram.com/washingtonswharf",
    facebook: "https://facebook.com/washingtonswharf",
    twitter: "https://twitter.com/washingtonswharf",
  },
  coordinates: {
    lat: 34.2206,
    lng: -84.1378,
  },
};

export const navLinks: NavLink[] = [
  { href: "/", label: "Home" },
  { href: "/menu", label: "Menu" },
  { href: "/private-events", label: "Groups" },
  { href: "/about", label: "About" },
  { href: "/gallery", label: "Gallery" },
  { href: "/reservations", label: "Reservations" },
  { href: "/contact", label: "Contact" },
];

export const hours: HoursBlock[] = [
  { days: "Monday - Thursday", hours: "11:30 AM - 7:00 PM" },
  { days: "Friday - Saturday", hours: "11:30 AM - 9:00 PM" },
  { days: "Sunday", hours: "11:30 AM - 7:00 PM" },
];

export const signatureDining: SignatureDining[] = [
  {
    id: "fish-chips",
    title: "Fish & Chips",
    description:
      "Crispy battered fish, flaky and tender, with golden chips made the British way.",
    image:
      "https://images.unsplash.com/photo-1579208030886-b937da0925dc?w=800&q=80",
  },
  {
    id: "shrimp",
    title: "Shrimp Basket",
    description:
      "A golden shrimp basket with your choice of sauce, from tartar to curry.",
    image:
      "https://images.unsplash.com/photo-1559742811-822873691df8?w=800&q=80",
  },
  {
    id: "tenders",
    title: "Chicken Tenders",
    description:
      "Huge, juicy tenders that kids and grown-ups order again and again.",
    image:
      "https://images.unsplash.com/photo-1562967914-608f82629710?w=800&q=80",
  },
  {
    id: "wings",
    title: "Saucy Wings",
    description:
      "Wings that hit the spot, perfect for sharing with a cold pint.",
    image:
      "https://images.unsplash.com/photo-1527477396000-e27163b481c2?w=800&q=80",
  },
  {
    id: "pretzel",
    title: "Pretzel & Beer Cheese",
    description:
      "Warm, soft pretzel with a slightly crisp exterior and rich beer cheese.",
    image:
      "https://images.unsplash.com/photo-1555507036-ab1f4038808a?w=800&q=80",
  },
  {
    id: "bar",
    title: "Beer & Cocktails",
    description:
      "A welcoming bar with UK beers, cocktails, and easygoing 80s hits.",
    image:
      "https://images.unsplash.com/photo-1436076863939-06870fe779c2?w=800&q=80",
  },
];

export const harborExperiences: HarborExperience[] = [
  {
    id: "classic",
    title: "British-Style Classics",
    description:
      "From fish and chips to mushy peas and gravy, we keep the comfort food comforting and the batter crisp.",
    image:
      "https://images.unsplash.com/photo-1579208030886-b937da0925dc?w=1200&q=80",
  },
  {
    id: "vibes",
    title: "Good Eats, Good Vibes",
    description:
      "Casual seating, friendly faces, and 80s hits that never get too loud. A cozy Cumming City Center favorite.",
    image:
      "https://images.unsplash.com/photo-1514933651103-005eec06c04b?w=1200&q=80",
  },
  {
    id: "bar",
    title: "Bar Worth Lingering At",
    description:
      "Cold beer, solid cocktails, and UK pours that pair perfectly with a hot basket of chips.",
    image:
      "https://images.unsplash.com/photo-1572116469696-31de0f17cc34?w=1200&q=80",
  },
  {
    id: "family",
    title: "Made for Sharing",
    description:
      "Families, friends, solo lunchers, and groups all fit here. Counter-friendly, kid-friendly, and full of flavor.",
    image:
      "https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec?w=1200&q=80",
  },
];

export const eventTypes: EventType[] = [
  {
    id: "birthdays",
    title: "Birthday Gatherings",
    description:
      "Bring the crew for baskets, beers, and an easy celebration without the fuss.",
    image:
      "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?w=900&q=80",
  },
  {
    id: "office",
    title: "Office Lunches",
    description:
      "Feed the team with generous portions, fast service, and crowd-pleasing classics.",
    image:
      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=900&q=80",
  },
  {
    id: "game-day",
    title: "Game Day Groups",
    description:
      "Wings, tenders, chips, and cold drinks for the whole squad.",
    image:
      "https://images.unsplash.com/photo-1527477396000-e27163b481c2?w=900&q=80",
  },
  {
    id: "family",
    title: "Family Nights",
    description:
      "High chairs, kid favorites, and comfort food everyone can agree on.",
    image:
      "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=900&q=80",
  },
  {
    id: "takeout",
    title: "Group Takeout",
    description:
      "Call ahead for larger orders and pick up hot, crispy favorites to go.",
    image:
      "https://images.unsplash.com/photo-1559742811-822873691df8?w=900&q=80",
  },
];

export const featuredMenu: FeaturedMenuCard[] = [
  {
    id: "fish",
    category: "Signature",
    name: "Fish & Chips",
    description: "Crispy battered fish with British-style chips.",
    price: "$16.95",
    image:
      "https://images.unsplash.com/photo-1579208030886-b937da0925dc?w=700&q=80",
    details: "Generous portion, flaky fish, and a crisp golden batter.",
  },
  {
    id: "shrimp",
    category: "Signature",
    name: "Shrimp & Chips",
    description: "Golden shrimp with chips and your choice of sauce.",
    price: "$11.95",
    image:
      "https://images.unsplash.com/photo-1559742811-822873691df8?w=700&q=80",
    details: "Try it with tartar or savory curry sauce.",
  },
  {
    id: "pretzel",
    category: "Starters",
    name: "Pretzel & Beer Cheese",
    description: "Warm soft pretzel with rich beer cheese.",
    price: "$9.95",
    image:
      "https://images.unsplash.com/photo-1555507036-ab1f4038808a?w=700&q=80",
    details: "A guest favorite: soft, chewy, and perfectly crisp outside.",
  },
  {
    id: "tenders",
    category: "Mains",
    name: "Chicken Tenders",
    description: "Huge tenders with your choice of dipping sauce.",
    price: "$12.95",
    image:
      "https://images.unsplash.com/photo-1562967914-608f82629710?w=700&q=80",
    details: "Crispy, filling, and always a hit with the kids.",
  },
  {
    id: "beer",
    category: "Drinks",
    name: "UK Beers & Pints",
    description: "A rotating selection of cold beers and pub pours.",
    price: "From $6",
    image:
      "https://images.unsplash.com/photo-1436076863939-06870fe779c2?w=700&q=80",
    details: "Pair a pint with fish, wings, or pretzel and beer cheese.",
  },
];

export const galleryImages: GalleryImage[] = [
  {
    id: "g1",
    src: "https://images.unsplash.com/photo-1579208030886-b937da0925dc?w=900&q=80",
    alt: "Crispy fish and chips",
    category: "food",
    span: "wide",
  },
  {
    id: "g2",
    src: "https://images.unsplash.com/photo-1514933651103-005eec06c04b?w=700&q=80",
    alt: "Warm casual restaurant interior",
    category: "dining",
    span: "tall",
  },
  {
    id: "g3",
    src: "https://images.unsplash.com/photo-1559742811-822873691df8?w=700&q=80",
    alt: "Golden fried shrimp",
    category: "food",
  },
  {
    id: "g4",
    src: "https://images.unsplash.com/photo-1436076863939-06870fe779c2?w=700&q=80",
    alt: "Cold beer at the bar",
    category: "cocktails",
  },
  {
    id: "g5",
    src: "https://images.unsplash.com/photo-1555507036-ab1f4038808a?w=900&q=80",
    alt: "Soft pretzel with dipping sauce",
    category: "food",
    span: "wide",
  },
  {
    id: "g6",
    src: "https://images.unsplash.com/photo-1562967914-608f82629710?w=700&q=80",
    alt: "Crispy chicken tenders",
    category: "food",
    span: "tall",
  },
  {
    id: "g7",
    src: "https://images.unsplash.com/photo-1572116469696-31de0f17cc34?w=700&q=80",
    alt: "Welcoming bar seating",
    category: "dining",
  },
  {
    id: "g8",
    src: "https://images.unsplash.com/photo-1527477396000-e27163b481c2?w=700&q=80",
    alt: "Saucy chicken wings",
    category: "food",
  },
  {
    id: "g9",
    src: "https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?w=700&q=80",
    alt: "Casual table setting",
    category: "dining",
  },
  {
    id: "g10",
    src: "https://images.unsplash.com/photo-1470337458703-46ad1756a187?w=700&q=80",
    alt: "Cocktails ready to serve",
    category: "cocktails",
  },
  {
    id: "g11",
    src: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=700&q=80",
    alt: "Friends dining together",
    category: "events",
    span: "wide",
  },
  {
    id: "g12",
    src: "https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec?w=700&q=80",
    alt: "Thick-cut chips",
    category: "food",
  },
];

export const testimonials: Testimonial[] = [
  {
    id: "t1",
    quote:
      "I fancy myself a fish and chips connoisseur, and this place is incredible. It rivals any of the best I've had in the UK.",
    author: "Jason K.",
    detail: "Regular Guest",
  },
  {
    id: "t2",
    quote:
      "The fish was melt-in-your-mouth amazing. The pretzel was wonderful, and the staff made us feel right at home.",
    author: "Hannah M.",
    detail: "First-Time Guest",
  },
  {
    id: "t3",
    quote:
      "Fish and chips just like in the UK. Very fresh fish, great batter, perfect chips, and a bar with many UK beers.",
    author: "Paul L.",
    detail: "Local Favorite",
  },
  {
    id: "t4",
    quote:
      "One of the best lunches we've had in years. The fish, fries, shrimp, beers, and cocktails were all fantastic.",
    author: "Hailey T.",
    detail: "Sunday Lunch",
  },
];

export const stats: Stat[] = [
  { value: "4.8★", label: "Guest Rating" },
  { value: "50+", label: "5-Star Reviews" },
  { value: "11:30", label: "Open Daily" },
  { value: "1", label: "Mission: Great Fish & Chips" },
];

export const eventSpaces: EventSpace[] = [
  {
    id: "dining",
    name: "Main Dining",
    capacity: "Groups welcome",
    description:
      "Casual tables, comfortable seats, and room for friends, families, and small celebrations.",
    image:
      "https://images.unsplash.com/photo-1514933651103-005eec06c04b?w=1000&q=80",
  },
  {
    id: "bar",
    name: "Bar Area",
    capacity: "Grab a seat",
    description:
      "Settle in for a pint, a pretzel, and easy conversation by the bar.",
    image:
      "https://images.unsplash.com/photo-1572116469696-31de0f17cc34?w=1000&q=80",
  },
  {
    id: "takeout",
    name: "Takeout & Pickup",
    capacity: "Call ahead",
    description:
      "Order for the office, the game, or family night and pick it up hot and ready.",
    image:
      "https://images.unsplash.com/photo-1579208030886-b937da0925dc?w=1000&q=80",
  },
];

export const faqs: FaqItem[] = [
  {
    question: "Where are you located?",
    answer:
      "We're in Cumming City Center at 451 Vision Dr, Suite H101, Cumming, GA 30040. Free parking is available nearby, including the parking garage.",
  },
  {
    question: "Do you take reservations?",
    answer:
      "Yes. We accept reservations. Call us at (470) 533-2140 or use the reservations form on this site.",
  },
  {
    question: "Is there a bar?",
    answer:
      "Yes. We have a welcoming bar area with beer, cocktails, and wine to go with your fish and chips.",
  },
  {
    question: "Is the restaurant kid-friendly?",
    answer:
      "Absolutely. We have high chairs, changing tables, and kid favorites like chicken tenders.",
  },
  {
    question: "Do you offer takeout?",
    answer:
      "Yes. Dine-in, takeaway, and delivery options are available. Call ahead for larger group orders.",
  },
];

export const menuItems: MenuItem[] = [
  {
    id: "m1",
    name: "Pretzel & Beer Cheese",
    description: "Warm soft pretzel with rich beer cheese",
    price: "$9.95",
    category: "starters",
    featured: true,
  },
  {
    id: "m2",
    name: "Mozzarella Sticks",
    description: "Melty cheese sticks with marinara",
    price: "$8.95",
    category: "starters",
  },
  {
    id: "m3",
    name: "Sweet Potato Tots",
    description: "Crispy tots perfect for sharing",
    price: "$7.95",
    category: "starters",
  },
  {
    id: "m4",
    name: "British Chips & Mushy Peas",
    description: "Thick-cut chips with classic mushy peas",
    price: "$6.95",
    category: "starters",
  },
  {
    id: "m5",
    name: "Wings",
    description: "Saucy wings made for sharing",
    price: "$12.95",
    category: "starters",
  },
  {
    id: "m6",
    name: "Side Salad",
    description: "Fresh greens with house dressing",
    price: "$5.95",
    category: "soups-salads",
  },
  {
    id: "m7",
    name: "Fish & Chips",
    description: "Crispy battered fish with British-style chips",
    price: "$16.95",
    category: "seafood",
    featured: true,
  },
  {
    id: "m8",
    name: "Shrimp & Chips",
    description: "Golden shrimp, chips, and choice of sauce",
    price: "$11.95",
    category: "seafood",
    featured: true,
  },
  {
    id: "m9",
    name: "Fish Bites",
    description: "Smaller portion of crispy battered fish",
    price: "$12.95",
    category: "seafood",
  },
  {
    id: "m10",
    name: "Chicken Tenders",
    description: "Huge crispy tenders with dipping sauce",
    price: "$12.95",
    category: "sandwiches",
    featured: true,
  },
  {
    id: "m11",
    name: "Wing Basket",
    description: "A fuller order of our saucy wings with chips",
    price: "$14.95",
    category: "sandwiches",
  },
  {
    id: "m12",
    name: "Add Mushy Peas",
    description: "Classic British side",
    price: "$2.50",
    category: "pasta",
  },
  {
    id: "m13",
    name: "Add British Gravy",
    description: "Rich gravy for dipping",
    price: "$2.50",
    category: "pasta",
  },
  {
    id: "m14",
    name: "Add Beer Cheese",
    description: "Our crowd-favorite cheese dip",
    price: "$3.00",
    category: "pasta",
  },
  {
    id: "m15",
    name: "Extra Tartar Sauce",
    description: "House tartar on the side",
    price: "$1.00",
    category: "pasta",
  },
  {
    id: "m16",
    name: "Chocolate Brownie",
    description: "Rich brownie for a sweet finish",
    price: "$5.95",
    category: "desserts",
  },
  {
    id: "m17",
    name: "Soft-Serve Cup",
    description: "A simple cold treat after your chips",
    price: "$3.95",
    category: "desserts",
  },
  {
    id: "m18",
    name: "UK Draft Beer",
    description: "Rotating British and craft pours",
    price: "From $6",
    category: "cocktails",
    featured: true,
  },
  {
    id: "m19",
    name: "House Cocktail",
    description: "Easy-drinking cocktails from the bar",
    price: "From $9",
    category: "cocktails",
  },
  {
    id: "m20",
    name: "Soft Drinks",
    description: "Fountain favorites",
    price: "$2.95",
    category: "cocktails",
  },
  {
    id: "m21",
    name: "House White Wine",
    description: "Chilled glass from the bar",
    price: "$7",
    category: "wine",
  },
  {
    id: "m22",
    name: "House Red Wine",
    description: "Easy-sipping red by the glass",
    price: "$7",
    category: "wine",
  },
];

export const menuCategories: { id: MenuItem["category"]; label: string }[] = [
  { id: "starters", label: "Starters" },
  { id: "soups-salads", label: "Salads" },
  { id: "seafood", label: "Fish & Seafood" },
  { id: "sandwiches", label: "Baskets & Mains" },
  { id: "pasta", label: "Add-Ons" },
  { id: "desserts", label: "Sweets" },
  { id: "cocktails", label: "Drinks" },
  { id: "wine", label: "Wine" },
];

export const instagramPosts = [
  {
    id: "ig1",
    image:
      "https://images.unsplash.com/photo-1579208030886-b937da0925dc?w=600&q=80",
    caption: "Crispy fish, golden chips.",
  },
  {
    id: "ig2",
    image:
      "https://images.unsplash.com/photo-1555507036-ab1f4038808a?w=600&q=80",
    caption: "Pretzel and beer cheese, always.",
  },
  {
    id: "ig3",
    image:
      "https://images.unsplash.com/photo-1436076863939-06870fe779c2?w=600&q=80",
    caption: "Pints ready at the bar.",
  },
  {
    id: "ig4",
    image:
      "https://images.unsplash.com/photo-1562967914-608f82629710?w=600&q=80",
    caption: "Tenders for the whole table.",
  },
  {
    id: "ig5",
    image:
      "https://images.unsplash.com/photo-1559742811-822873691df8?w=600&q=80",
    caption: "Shrimp basket, sorted.",
  },
  {
    id: "ig6",
    image:
      "https://images.unsplash.com/photo-1514933651103-005eec06c04b?w=600&q=80",
    caption: "Good eats and good vibes.",
  },
];
