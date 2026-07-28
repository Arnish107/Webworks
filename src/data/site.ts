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
  tagline: "Waterfront Dining. Unforgettable Views.",
  description:
    "Experience waterfront dining at its finest at Washington's Wharf - fresh seafood, handcrafted cocktails, spectacular harbor views, and unforgettable private events.",
  url: "https://washingtonswharf.com",
  phone: "(555) 482-1901",
  email: "reservations@washingtonswharf.com",
  eventsEmail: "events@washingtonswharf.com",
  address: {
    street: "18 Harbor Lane",
    city: "Alexandria",
    state: "VA",
    zip: "22314",
    full: "18 Harbor Lane, Alexandria, VA 22314",
  },
  social: {
    instagram: "https://instagram.com/washingtonswharf",
    facebook: "https://facebook.com/washingtonswharf",
    twitter: "https://twitter.com/washingtonswharf",
  },
  coordinates: {
    lat: 38.8048,
    lng: -77.0469,
  },
};

export const navLinks: NavLink[] = [
  { href: "/", label: "Home" },
  { href: "/menu", label: "Menu" },
  { href: "/private-events", label: "Private Events" },
  { href: "/about", label: "About" },
  { href: "/gallery", label: "Gallery" },
  { href: "/reservations", label: "Reservations" },
  { href: "/contact", label: "Contact" },
];

export const hours: HoursBlock[] = [
  { days: "Monday - Thursday", hours: "11:30 AM - 10:00 PM" },
  { days: "Friday - Saturday", hours: "11:30 AM - 11:00 PM" },
  { days: "Sunday", hours: "10:00 AM - 9:00 PM" },
  { days: "Sunday Brunch", hours: "10:00 AM - 2:00 PM" },
];

export const signatureDining: SignatureDining[] = [
  {
    id: "seafood",
    title: "Fresh Seafood",
    description:
      "Harbor-caught oysters, day-boat scallops, and seasonal catch prepared with coastal elegance.",
    image:
      "https://images.unsplash.com/photo-1615141982883-c7ad0e69fd62?w=800&q=80",
  },
  {
    id: "steaks",
    title: "Prime Steaks",
    description:
      "Dry-aged cuts finished over open flame, served with harbor-side refinement.",
    image:
      "https://images.unsplash.com/photo-1600891964092-4316c288032e?w=800&q=80",
  },
  {
    id: "seasonal",
    title: "Seasonal Specials",
    description:
      "A rotating tasting of the coast - ingredients at their peak, plated with intention.",
    image:
      "https://images.unsplash.com/photo-1579027989536-b7b1f875659b?w=800&q=80",
  },
  {
    id: "cocktails",
    title: "Craft Cocktails",
    description:
      "Spirit-forward pours and botanical infusions inspired by marina evenings.",
    image:
      "https://images.unsplash.com/photo-1470337458703-46ad1756a187?w=800&q=80",
  },
  {
    id: "brunch",
    title: "Weekend Brunch",
    description:
      "Slow mornings, sparkling pours, and waterfront light spilling across the table.",
    image:
      "https://images.unsplash.com/photo-1482049016688-2d3e1b311543?w=800&q=80",
  },
  {
    id: "patio",
    title: "Outdoor Patio Dining",
    description:
      "Open-air seating along the wharf - breeze, boats, and golden-hour ambiance.",
    image:
      "https://images.unsplash.com/photo-1592861956120-e524fc739696?w=800&q=80",
  },
];

export const harborExperiences: HarborExperience[] = [
  {
    id: "views",
    title: "Scenic Waterfront Views",
    description:
      "Floor-to-ceiling windows and open decks frame the marina in every season - sailboats at dawn, lantern light at dusk.",
    image:
      "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=1200&q=80",
  },
  {
    id: "music",
    title: "Live Music Evenings",
    description:
      "Intimate acoustic sets and jazz ensembles drift across the terrace on select evenings throughout the year.",
    image:
      "https://images.unsplash.com/photo-1511192336575-5a79af67a629?w=1200&q=80",
  },
  {
    id: "sunset",
    title: "Sunset Dining",
    description:
      "Reserve a waterfront table as the sky softens to rose and gold - an evening designed to linger.",
    image:
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1200&q=80",
  },
  {
    id: "events",
    title: "Seasonal Events",
    description:
      "From oyster festivals to holiday soirees, our calendar celebrates the rhythm of the harbor.",
    image:
      "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=1200&q=80",
  },
];

export const eventTypes: EventType[] = [
  {
    id: "weddings",
    title: "Weddings",
    description:
      "Exchange vows beside the water with candlelit receptions and tailored culinary journeys.",
    image:
      "https://images.unsplash.com/photo-1519741497674-611481863552?w=900&q=80",
  },
  {
    id: "corporate",
    title: "Corporate Events",
    description:
      "Executive dinners, product launches, and team celebrations in refined waterfront spaces.",
    image:
      "https://images.unsplash.com/photo-1511578314322-379afb476865?w=900&q=80",
  },
  {
    id: "rehearsal",
    title: "Rehearsal Dinners",
    description:
      "Intimate gatherings the night before - warm hospitality and unforgettable harbor light.",
    image:
      "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=900&q=80",
  },
  {
    id: "birthday",
    title: "Birthday Celebrations",
    description:
      "Milestone evenings crafted with custom menus, sparkling toasts, and private seating.",
    image:
      "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?w=900&q=80",
  },
  {
    id: "holiday",
    title: "Holiday Parties",
    description:
      "Festive soirees with seasonal cuisine, curated wine lists, and glowing marina views.",
    image:
      "https://images.unsplash.com/photo-1482517967863-00e15c9b44be?w=900&q=80",
  },
];

export const featuredMenu: FeaturedMenuCard[] = [
  {
    id: "oysters",
    category: "Appetizers",
    name: "East Coast Oysters",
    description: "Half dozen on the half shell with mignonette & lemon.",
    price: "$24",
    image:
      "https://images.unsplash.com/photo-1615141982883-c7ad0e69fd62?w=700&q=80",
    details: "Chef's selection of local and regional oysters, chilled to order.",
  },
  {
    id: "lobster",
    category: "Seafood",
    name: "Butter-Poached Lobster",
    description: "Maine lobster, saffron risotto, citrus beurre blanc.",
    price: "$58",
    image:
      "https://images.unsplash.com/photo-1566665797739-1674de7a421a?w=700&q=80",
    details: "Sustainably sourced, finished tableside with warm herb butter.",
  },
  {
    id: "ribeye",
    category: "Steaks",
    name: "Dry-Aged Ribeye",
    description: "16oz bone-in, roasted bone marrow, red wine jus.",
    price: "$72",
    image:
      "https://images.unsplash.com/photo-1600891964092-4316c288032e?w=700&q=80",
    details: "28-day dry-aged, grilled over hardwood charcoal.",
  },
  {
    id: "souffle",
    category: "Desserts",
    name: "Harbor Chocolate Souffle",
    description: "Valrhona dark chocolate, creme anglaise.",
    price: "$16",
    image:
      "https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=700&q=80",
    details: "Baked to order - please allow twenty minutes.",
  },
  {
    id: "marina",
    category: "Cocktails",
    name: "Marina Negroni",
    description: "Barrel-aged gin, vermouth, bitter orange, smoked salt.",
    price: "$18",
    image:
      "https://images.unsplash.com/photo-1551024709-8f23befc6f87?w=700&q=80",
    details: "Our signature stir - balanced, aromatic, and quietly bold.",
  },
];

export const galleryImages: GalleryImage[] = [
  {
    id: "g1",
    src: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=900&q=80",
    alt: "Warm dining room overlooking the marina",
    category: "dining",
    span: "wide",
  },
  {
    id: "g2",
    src: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=700&q=80",
    alt: "Sailboats docked along the harbor",
    category: "waterfront",
    span: "tall",
  },
  {
    id: "g3",
    src: "https://images.unsplash.com/photo-1615141982883-c7ad0e69fd62?w=700&q=80",
    alt: "Fresh oysters on ice",
    category: "food",
  },
  {
    id: "g4",
    src: "https://images.unsplash.com/photo-1470337458703-46ad1756a187?w=700&q=80",
    alt: "Craft cocktail with citrus garnish",
    category: "cocktails",
  },
  {
    id: "g5",
    src: "https://images.unsplash.com/photo-1519741497674-611481863552?w=900&q=80",
    alt: "Waterfront wedding celebration",
    category: "weddings",
    span: "wide",
  },
  {
    id: "g6",
    src: "https://images.unsplash.com/photo-1579027989536-b7b1f875659b?w=700&q=80",
    alt: "Chef plating fresh seafood",
    category: "food",
    span: "tall",
  },
  {
    id: "g7",
    src: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=700&q=80",
    alt: "Sunset over the water",
    category: "waterfront",
  },
  {
    id: "g8",
    src: "https://images.unsplash.com/photo-1511578314322-379afb476865?w=700&q=80",
    alt: "Private corporate dinner",
    category: "events",
  },
  {
    id: "g9",
    src: "https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?w=700&q=80",
    alt: "Elegant table setting",
    category: "dining",
  },
  {
    id: "g10",
    src: "https://images.unsplash.com/photo-1551024709-8f23befc6f87?w=700&q=80",
    alt: "Wine and cocktail service",
    category: "cocktails",
  },
  {
    id: "g11",
    src: "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=700&q=80",
    alt: "Reception under string lights",
    category: "events",
    span: "wide",
  },
  {
    id: "g12",
    src: "https://images.unsplash.com/photo-1600891964092-4316c288032e?w=700&q=80",
    alt: "Prime steak presentation",
    category: "food",
  },
];

export const testimonials: Testimonial[] = [
  {
    id: "t1",
    quote:
      "Every detail felt intentional - from the first oyster to the last pour as the sun slipped behind the masts.",
    author: "Elena M.",
    detail: "Anniversary Dinner",
  },
  {
    id: "t2",
    quote:
      "Our wedding reception on the terrace was pure magic. The staff anticipated every need before we asked.",
    author: "James & Priya R.",
    detail: "Waterfront Wedding",
  },
  {
    id: "t3",
    quote:
      "The best harbor dining experience we've had. Impeccable seafood, quiet luxury, and views that stop conversation.",
    author: "Marcus T.",
    detail: "Weekend Brunch Guest",
  },
  {
    id: "t4",
    quote:
      "Washington's Wharf elevated our client dinner into something unforgettable. Flawless execution throughout.",
    author: "Sophia K.",
    detail: "Corporate Event",
  },
];

export const stats: Stat[] = [
  { value: "25+", label: "Years Serving Guests" },
  { value: "1000+", label: "Private Events Hosted" },
  { value: "4.8★", label: "Guest Rating" },
  { value: "365", label: "Days Open" },
];

export const eventSpaces: EventSpace[] = [
  {
    id: "terrace",
    name: "Harbor Terrace",
    capacity: "Up to 120 guests",
    description:
      "Open-air elegance with panoramic marina views - ideal for cocktail hours and sunset ceremonies.",
    image:
      "https://images.unsplash.com/photo-1592861956120-e524fc739696?w=1000&q=80",
  },
  {
    id: "ballroom",
    name: "Wharf Ballroom",
    capacity: "Up to 200 guests",
    description:
      "A luminous grand room with soaring windows, custom lighting, and full culinary service.",
    image:
      "https://images.unsplash.com/photo-1519167758481-83f29da8c2b0?w=1000&q=80",
  },
  {
    id: "private",
    name: "Captain's Private Dining",
    capacity: "8-24 guests",
    description:
      "An intimate wood-paneled suite for celebrations that call for discretion and refined hospitality.",
    image:
      "https://images.unsplash.com/photo-1424847651672-bf20a4b0982b?w=1000&q=80",
  },
];

export const faqs: FaqItem[] = [
  {
    question: "Do you offer valet parking?",
    answer:
      "Yes. Complimentary valet is available Friday through Sunday evenings, with self-parking in the adjacent Harbor Lane garage at all times.",
  },
  {
    question: "What is your dress code?",
    answer:
      "We welcome smart casual attire. Jackets are optional; swimwear and athletic wear are kindly declined in the dining rooms.",
  },
  {
    question: "Can you accommodate dietary restrictions?",
    answer:
      "Absolutely. Please note allergies and preferences when reserving - our chefs craft thoughtful alternatives without compromising the experience.",
  },
  {
    question: "How far in advance should I book a private event?",
    answer:
      "We recommend 3-6 months for weddings and peak-season celebrations. Corporate and intimate gatherings can often be arranged with shorter notice.",
  },
  {
    question: "Is the patio dog-friendly?",
    answer:
      "Well-behaved dogs are welcome on designated patio seating during daytime hours. Please request a pet-friendly table when booking.",
  },
];

export const menuItems: MenuItem[] = [
  {
    id: "m1",
    name: "East Coast Oysters",
    description: "Half dozen, Champagne mignonette, lemon",
    price: "$24",
    category: "starters",
    dietary: ["GF"],
    featured: true,
  },
  {
    id: "m2",
    name: "Wharf Crab Cakes",
    description: "Jumbo lump crab, Old Bay aioli, micro greens",
    price: "$22",
    category: "starters",
  },
  {
    id: "m3",
    name: "Tuna Tartare",
    description: "Sesame, avocado, crispy wonton, yuzu",
    price: "$21",
    category: "starters",
    dietary: ["GF"],
  },
  {
    id: "m4",
    name: "Burrata & Heirloom Tomato",
    description: "Basil oil, aged balsamic, grilled sourdough",
    price: "$18",
    category: "starters",
    dietary: ["V"],
  },
  {
    id: "m5",
    name: "New England Clam Chowder",
    description: "Applewood bacon, chives, oyster crackers",
    price: "$14",
    category: "soups-salads",
  },
  {
    id: "m6",
    name: "Harbor Bisque",
    description: "Lobster, brandy cream, chervil",
    price: "$16",
    category: "soups-salads",
    dietary: ["GF"],
  },
  {
    id: "m7",
    name: "Little Gem Caesar",
    description: "Anchovy dressing, Parmigiano, sourdough crumb",
    price: "$15",
    category: "soups-salads",
  },
  {
    id: "m8",
    name: "Citrus & Fennel Salad",
    description: "Blood orange, toasted almonds, champagne vinaigrette",
    price: "$16",
    category: "soups-salads",
    dietary: ["VG", "GF"],
  },
  {
    id: "m9",
    name: "Butter-Poached Lobster",
    description: "Saffron risotto, citrus beurre blanc",
    price: "$58",
    category: "seafood",
    dietary: ["GF"],
    featured: true,
  },
  {
    id: "m10",
    name: "Pan-Seared Scallops",
    description: "Cauliflower puree, brown butter, capers",
    price: "$42",
    category: "seafood",
    dietary: ["GF"],
  },
  {
    id: "m11",
    name: "Grilled Branzino",
    description: "Herb salsa verde, charred lemon, seasonal vegetables",
    price: "$38",
    category: "seafood",
    dietary: ["GF"],
  },
  {
    id: "m12",
    name: "Shrimp & Grits",
    description: "Stone-ground grits, andouille, Creole butter",
    price: "$34",
    category: "seafood",
  },
  {
    id: "m13",
    name: "Dry-Aged Ribeye",
    description: "16oz bone-in, roasted marrow, red wine jus",
    price: "$72",
    category: "steaks",
    dietary: ["GF"],
    featured: true,
  },
  {
    id: "m14",
    name: "Filet Mignon",
    description: "8oz center cut, bearnaise, grilled asparagus",
    price: "$64",
    category: "steaks",
    dietary: ["GF"],
  },
  {
    id: "m15",
    name: "NY Strip",
    description: "14oz, peppercorn sauce, crispy shallots",
    price: "$58",
    category: "steaks",
    dietary: ["GF"],
  },
  {
    id: "m16",
    name: "Lobster Linguine",
    description: "Cherry tomato, chili flake, white wine",
    price: "$44",
    category: "pasta",
  },
  {
    id: "m17",
    name: "Wild Mushroom Tagliatelle",
    description: "Truffle cream, thyme, aged pecorino",
    price: "$32",
    category: "pasta",
    dietary: ["V"],
  },
  {
    id: "m18",
    name: "Seafood Fra Diavolo",
    description: "Mussels, shrimp, calamari, spicy tomato",
    price: "$36",
    category: "pasta",
  },
  {
    id: "m19",
    name: "Wharf Lobster Roll",
    description: "Warm buttered bun, drawn butter, kettle chips",
    price: "$32",
    category: "sandwiches",
  },
  {
    id: "m20",
    name: "Prime Burger",
    description: "Aged cheddar, caramelized onion, house pickles",
    price: "$24",
    category: "sandwiches",
  },
  {
    id: "m21",
    name: "Grilled Chicken Sandwich",
    description: "Avocado, aioli, arugula, focaccia",
    price: "$20",
    category: "sandwiches",
  },
  {
    id: "m22",
    name: "Harbor Chocolate Souffle",
    description: "Valrhona dark chocolate, creme anglaise",
    price: "$16",
    category: "desserts",
    featured: true,
  },
  {
    id: "m23",
    name: "Lemon Olive Oil Cake",
    description: "Berry compote, whipped mascarpone",
    price: "$14",
    category: "desserts",
    dietary: ["V"],
  },
  {
    id: "m24",
    name: "Vanilla Bean Panna Cotta",
    description: "Passion fruit, toasted coconut",
    price: "$13",
    category: "desserts",
    dietary: ["GF"],
  },
  {
    id: "m25",
    name: "Marina Negroni",
    description: "Barrel-aged gin, vermouth, bitter orange",
    price: "$18",
    category: "cocktails",
    featured: true,
  },
  {
    id: "m26",
    name: "Sunset Spritz",
    description: "Aperitivo, prosecco, blood orange, thyme",
    price: "$16",
    category: "cocktails",
  },
  {
    id: "m27",
    name: "Smoked Old Fashioned",
    description: "Bourbon, demerara, cherry wood smoke",
    price: "$18",
    category: "cocktails",
  },
  {
    id: "m28",
    name: "Harbor Martini",
    description: "Gin or vodka, dry vermouth, lemon oil",
    price: "$17",
    category: "cocktails",
  },
  {
    id: "m29",
    name: "Chablis Premier Cru",
    description: "Burgundy, France - mineral, citrus, elegant finish",
    price: "$78 / bottle",
    category: "wine",
  },
  {
    id: "m30",
    name: "Sonoma Coast Pinot Noir",
    description: "California - cherry, earth, silky tannins",
    price: "$68 / bottle",
    category: "wine",
  },
  {
    id: "m31",
    name: "Champagne Brut Reserve",
    description: "France - fine mousse, brioche, orchard fruit",
    price: "$95 / bottle",
    category: "wine",
  },
  {
    id: "m32",
    name: "Napa Cabernet Sauvignon",
    description: "California - cassis, cedar, polished structure",
    price: "$110 / bottle",
    category: "wine",
  },
];

export const menuCategories: { id: MenuItem["category"]; label: string }[] = [
  { id: "starters", label: "Starters" },
  { id: "soups-salads", label: "Soups & Salads" },
  { id: "seafood", label: "Seafood" },
  { id: "steaks", label: "Steaks" },
  { id: "pasta", label: "Pasta" },
  { id: "sandwiches", label: "Sandwiches" },
  { id: "desserts", label: "Desserts" },
  { id: "cocktails", label: "Cocktails" },
  { id: "wine", label: "Wine List" },
];

export const instagramPosts = [
  {
    id: "ig1",
    image:
      "https://images.unsplash.com/photo-1615141982883-c7ad0e69fd62?w=600&q=80",
    caption: "Evening catch, plated with intention.",
  },
  {
    id: "ig2",
    image:
      "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=600&q=80",
    caption: "Golden hour on the harbor.",
  },
  {
    id: "ig3",
    image:
      "https://images.unsplash.com/photo-1470337458703-46ad1756a187?w=600&q=80",
    caption: "A Marina Negroni to begin.",
  },
  {
    id: "ig4",
    image:
      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=600&q=80",
    caption: "Tables dressed for the night.",
  },
  {
    id: "ig5",
    image:
      "https://images.unsplash.com/photo-1600891964092-4316c288032e?w=600&q=80",
    caption: "Prime cuts, open flame.",
  },
  {
    id: "ig6",
    image:
      "https://images.unsplash.com/photo-1519741497674-611481863552?w=600&q=80",
    caption: "Celebrations by the water.",
  },
];
