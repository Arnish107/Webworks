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
import { photos } from "@/data/images";

/**
 * CONTENT ACCURACY NOTES (confirm before launch)
 * CONFIRMED:
 * - Name, Cumming City Center location, Suite H101 address
 * - Phone (470) 533-2140
 * - Hours Mon-Thu/Sun 11:30-7, Fri-Sat 11:30-9
 * - Fish & Chips $16.95, Shrimp & Chips $11.95 (from published guest writeups)
 * - Menu items exist: pretzel + beer cheese, tenders, wings, tots, cheese sticks, mushy peas, gravy, bar
 * - Instagram @washingtonswharf
 * - Reviews paraphrased from public Google/Grubbio guest reviews
 *
 * UNVERIFIED / PLACEHOLDER (do not treat as final):
 * - Email hello@washingtonswharf.com (no public confirmation found)
 * - Facebook / X profile URLs
 * - Prices other than fish ($16.95) and shrimp ($11.95)
 * - Desserts / wine glass prices
 * - Exact "Fish Bites" / "Wing Basket" naming
 * - Private dining room (none confirmed; groups = call-ahead + dining room)
 */

export const siteConfig = {
  name: "Washington's Wharf",
  tagline: "British fish & chips in Cumming City Center.",
  description:
    "Washington's Wharf is a fish and chips spot in Cumming City Center with crispy battered fish, British chips, pretzel and beer cheese, UK beers, and a casual bar. 451 Vision Dr, Ste H101, Cumming, GA.",
  url: "https://washingtonswharf.com",
  // TODO: confirm this email with ownership before launch
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
    instagram: "https://www.instagram.com/washingtonswharf/",
    // TODO: confirm Facebook / X handles before promoting
    facebook: "https://www.facebook.com/washingtonswharf",
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
      "The plate people drive across town for. Fresh white fish, crisp batter, and chips that still taste British.",
    image: photos.fishAndChips,
  },
  {
    id: "shrimp",
    title: "Shrimp & Chips",
    description:
      "Golden shrimp with chips and your pick of tartar or curry sauce.",
    image: photos.shrimpAndChips,
  },
  {
    id: "tenders",
    title: "Chicken Tenders",
    description:
      "Huge tenders. Parents order them for the kids, then finish half the basket themselves.",
    image: photos.chickenTenders,
  },
  {
    id: "wings",
    title: "Wings",
    description:
      "Saucy wings for sharing while you wait on another round of chips.",
    image: photos.wings,
  },
  {
    id: "pretzel",
    title: "Pretzel & Beer Cheese",
    description:
      "Soft, chewy pretzel with a crisp edge. Guests call the beer cheese the best bite in the building.",
    image: photos.pretzelBeerCheese,
  },
  {
    id: "bar",
    title: "UK Beers & Bar",
    description:
      "A proper bar tucked into the room, with UK pours and cocktails that actually go with fried fish.",
    image: photos.ukBeers,
  },
];

export const harborExperiences: HarborExperience[] = [
  {
    id: "classic",
    title: "Batter that holds up to UK comparisons",
    description:
      "Guests who eat fish and chips in Britain keep saying this plate holds its own. Flaky fish, crisp batter, and chips worth arguing about (British cut vs American fries).",
    image: photos.fishAndChips,
  },
  {
    id: "vibes",
    title: "80s hits, not dinner-party jazz",
    description:
      "The room plays 80s tracks at a volume you can still talk over. Counter service, comfortable seats, and a phone booth that always gets a comment.",
    image: photos.diningRoom,
  },
  {
    id: "bar",
    title: "A bar that belongs with the food",
    description:
      "UK beers on draft, cocktails, and wine by the glass. Sit at the bar for a pint and pretzel, or pull a table for the full basket.",
    image: photos.bar,
  },
  {
    id: "center",
    title: "Right in Cumming City Center",
    description:
      "Suite H101 on Vision Drive, by the amphitheatre and the parking garage. Easy walk from free parking, open daily from 11:30.",
    image: photos.gallery[11],
  },
];

export const eventTypes: EventType[] = [
  {
    id: "birthdays",
    title: "Birthday tables",
    description:
      "We are not a banquet hall. We are a great place to plant 8 to 12 people on baskets, tenders, wings, and pints.",
    image: photos.groups.birthday,
  },
  {
    id: "office",
    title: "Office pickup orders",
    description:
      "Call ahead for a mixed takeout run: fish, shrimp, pretzels, and tenders. Hot food, fast handoff.",
    image: photos.groups.office,
  },
  {
    id: "game-day",
    title: "Game-day takeout",
    description:
      "Wings, chips, and cold drinks staged for pickup before kickoff. Tell us your headcount when you call.",
    image: photos.groups.gameDay,
  },
  {
    id: "family",
    title: "Family dinners",
    description:
      "High chairs, kid-sized appetites met with giant tenders, and enough sides that nobody leaves hungry.",
    image: photos.groups.family,
  },
  {
    id: "takeout",
    title: "Large takeout runs",
    description:
      "No private event kitchen on site. For bigger groups, we build the order for pickup. Call (470) 533-2140.",
    image: photos.groups.takeout,
  },
];

export const featuredMenu: FeaturedMenuCard[] = [
  {
    id: "fish",
    category: "Signature",
    name: "Fish & Chips",
    description: "Crispy battered fish with British-style chips.",
    price: "$16.95",
    image: photos.fishAndChips,
    details: "Confirmed menu price from guest writeups. Confirm still current.",
  },
  {
    id: "shrimp",
    category: "Signature",
    name: "Shrimp & Chips",
    description: "Golden shrimp, chips, and choice of sauce.",
    price: "$11.95",
    image: photos.shrimpAndChips,
    details: "Confirmed menu price from guest writeups. Confirm still current.",
  },
  {
    id: "pretzel",
    category: "Starters",
    name: "Pretzel & Beer Cheese",
    description: "Warm soft pretzel with rich beer cheese.",
    // TODO: confirm price with restaurant
    price: "$9.95",
    image: photos.pretzelBeerCheese,
    details: "Price needs confirmation. Dish itself is a documented guest favorite.",
  },
  {
    id: "tenders",
    category: "Mains",
    name: "Chicken Tenders",
    description: "Huge tenders with dipping sauce.",
    // TODO: confirm price with restaurant
    price: "$12.95",
    image: photos.chickenTenders,
    details: "Price needs confirmation.",
  },
  {
    id: "beer",
    category: "Drinks",
    name: "UK Draft Beer",
    description: "Rotating British and craft pours at the bar.",
    // TODO: confirm starting price with restaurant
    price: "Ask at bar",
    image: photos.ukBeers,
    details: "Do not publish a guessed beer price. Confirm on site.",
  },
];

export const galleryImages: GalleryImage[] = [
  {
    id: "g1",
    src: photos.gallery[0],
    alt: "Fish and chips from Washington's Wharf",
    category: "food",
    span: "wide",
  },
  {
    id: "g2",
    src: photos.gallery[1],
    alt: "Dining room at Washington's Wharf",
    category: "dining",
    span: "tall",
  },
  {
    id: "g3",
    src: photos.gallery[2],
    alt: "Shrimp and chips",
    category: "food",
  },
  {
    id: "g4",
    src: photos.gallery[3],
    alt: "Pints at the bar",
    category: "cocktails",
  },
  {
    id: "g5",
    src: photos.gallery[4],
    alt: "Pretzel and beer cheese",
    category: "food",
    span: "wide",
  },
  {
    id: "g6",
    src: photos.gallery[5],
    alt: "Chicken tenders",
    category: "food",
    span: "tall",
  },
  {
    id: "g7",
    src: photos.gallery[6],
    alt: "British-style chips",
    category: "food",
  },
  {
    id: "g8",
    src: photos.gallery[7],
    alt: "Wings",
    category: "food",
  },
  {
    id: "g9",
    src: photos.gallery[8],
    alt: "Table seating",
    category: "dining",
  },
  {
    id: "g10",
    src: photos.gallery[9],
    alt: "Cocktails from the bar",
    category: "cocktails",
  },
  {
    id: "g11",
    src: photos.gallery[10],
    alt: "Guests at Washington's Wharf",
    category: "events",
    span: "wide",
  },
  {
    id: "g12",
    src: photos.gallery[11],
    alt: "Washington's Wharf storefront in Cumming City Center",
    category: "dining",
  },
];

/** Paraphrased from public guest reviews (Grubbio / local listings). Keep attribution style casual. */
export const testimonials: Testimonial[] = [
  {
    id: "t1",
    quote:
      "I fancy myself a fish and chips connoisseur, and this place is incredible. My wife and I go to the UK every year and I eat fish and chips about ten times. This rivals any of the best I've had. Only complaint is it isn't closer to Acworth.",
    author: "Jason K.",
    detail: "Google / local review",
  },
  {
    id: "t2",
    quote:
      "Better than the previous spot. Tartar sauce has better flavor, fries and chips are both great, and the fish is the star: crispy, large portion, cooked right. Kids' tenders were huge. They added a bar area and the seats are actually comfortable. 80s hits, not too loud.",
    author: "Cameron",
    detail: "Local review",
  },
  {
    id: "t3",
    quote:
      "Lovely little spot. Fish was melt-in-your-mouth. The pretzel was wonderful. The woman working the front was so jovial and sweet. We will definitely be returning.",
    author: "Hannah McCurry",
    detail: "Local review",
  },
  {
    id: "t4",
    quote:
      "Fish and chips just like in the UK. Very fresh fish, great batter, perfect chips, reasonably priced. Integrating a bar with many UK beers was a masterstroke. It gets a bit noisy when busy, but quality is holding.",
    author: "Paul Littlewood",
    detail: "Local review",
  },
  {
    id: "t5",
    quote:
      "Takeout first visit and I was impressed. Chips were delicious. Beer cheese and pretzel might've been the best pretzel I've ever had: soft, chewy, slightly crispy outside. Support local!",
    author: "Ariel Boyer",
    detail: "Local review",
  },
  {
    id: "t6",
    quote:
      "Stumbled in on a Sunday and had one of the best lunches we've had in years. Fish was perfect, fries sizzling, shrimp juicy. Beers and cocktails just as good. Staff, food, drinks: 20/10.",
    author: "Hailey Thompson",
    detail: "Local review",
  },
];

export const stats: Stat[] = [
  { value: "4.8★", label: "Average guest rating" },
  { value: "11:30", label: "Open every day" },
  { value: "H101", label: "Cumming City Center" },
  { value: "UK", label: "Beers at the bar" },
];

export const eventSpaces: EventSpace[] = [
  {
    id: "dining",
    name: "Dining room tables",
    capacity: "Best for small groups",
    description:
      "Open dining room, not a private banquet suite. Great for birthdays and family tables when you want baskets on the table and conversation that stays easy.",
    image: photos.diningRoom,
  },
  {
    id: "bar",
    name: "Bar seats",
    capacity: "Walk-ins welcome",
    description:
      "Grab a stool for UK beer, a pretzel, and a quicker bite without waiting on a big table.",
    image: photos.bar,
  },
  {
    id: "takeout",
    name: "Call-ahead takeout",
    capacity: "Tell us your headcount",
    description:
      "For offices and game day, call (470) 533-2140 and we will stage a pickup order. No event catering kitchen on site.",
    image: photos.groups.takeout,
  },
];

export const faqs: FaqItem[] = [
  {
    question: "Where are you located?",
    answer:
      "451 Vision Dr, Suite H101, Cumming, GA 30040, inside Cumming City Center near the amphitheatre. Free parking in the garage and nearby lots.",
  },
  {
    question: "What are your hours?",
    answer:
      "Monday through Thursday and Sunday: 11:30 AM to 7:00 PM. Friday and Saturday: 11:30 AM to 9:00 PM.",
  },
  {
    question: "Do you take reservations?",
    answer:
      "Yes. Call (470) 533-2140 or use the reservations form. Walk-ins are welcome too, especially earlier in the day.",
  },
  {
    question: "Is there a bar?",
    answer:
      "Yes. UK beers, cocktails, and wine by the glass. Guests often mention the bar as a reason they stay longer.",
  },
  {
    question: "Can you handle a big group?",
    answer:
      "For larger parties, call ahead. We can seat smaller groups in the dining room and build takeout orders for offices and gatherings. We do not have a separate private event hall.",
  },
];

/**
 * Menu items.
 * Fish $16.95 and shrimp $11.95 confirmed from published guest sources.
 * All other prices are estimates until ownership confirms a current menu sheet.
 */
export const menuItems: MenuItem[] = [
  {
    id: "m1",
    name: "Pretzel & Beer Cheese",
    description: "Warm soft pretzel with beer cheese",
    price: "Ask",
    category: "starters",
    featured: true,
  },
  {
    id: "m2",
    name: "Mozzarella Sticks",
    description: "Cheese sticks with marinara",
    price: "Ask",
    category: "starters",
  },
  {
    id: "m3",
    name: "Sweet Potato Tots",
    description: "Crispy tots for the table",
    price: "Ask",
    category: "starters",
  },
  {
    id: "m4",
    name: "British Chips & Mushy Peas",
    description: "Thick-cut chips with mushy peas",
    price: "Ask",
    category: "starters",
  },
  {
    id: "m5",
    name: "Wings",
    description: "Saucy wings made for sharing",
    price: "Ask",
    category: "starters",
  },
  {
    id: "m6",
    name: "Fish & Chips",
    description: "Crispy battered fish with British-style chips",
    price: "$16.95",
    category: "seafood",
    featured: true,
  },
  {
    id: "m7",
    name: "Shrimp & Chips",
    description: "Golden shrimp, chips, tartar or curry sauce",
    price: "$11.95",
    category: "seafood",
    featured: true,
  },
  {
    id: "m8",
    name: "Chicken Tenders",
    description: "Huge crispy tenders with dipping sauce",
    price: "Ask",
    category: "sandwiches",
    featured: true,
  },
  {
    id: "m9",
    name: "Add Mushy Peas",
    description: "Classic British side",
    price: "Ask",
    category: "pasta",
  },
  {
    id: "m10",
    name: "Add British Gravy",
    description: "For dipping chips or fish",
    price: "Ask",
    category: "pasta",
  },
  {
    id: "m11",
    name: "Add Beer Cheese",
    description: "The dip guests rave about",
    price: "Ask",
    category: "pasta",
  },
  {
    id: "m12",
    name: "UK Draft Beer",
    description: "Rotating British and craft pours",
    price: "Ask at bar",
    category: "cocktails",
    featured: true,
  },
  {
    id: "m13",
    name: "Cocktails",
    description: "Bar cocktails with your basket",
    price: "Ask at bar",
    category: "cocktails",
  },
  {
    id: "m14",
    name: "Wine by the Glass",
    description: "White or red",
    price: "Ask at bar",
    category: "wine",
  },
];

export const menuCategories: { id: MenuItem["category"]; label: string }[] = [
  { id: "starters", label: "Starters" },
  { id: "seafood", label: "Fish & Seafood" },
  { id: "sandwiches", label: "Baskets & Mains" },
  { id: "pasta", label: "Add-Ons" },
  { id: "cocktails", label: "Drinks" },
  { id: "wine", label: "Wine" },
];

export const instagramPosts = [
  {
    id: "ig1",
    image: photos.instagram[0],
    caption: "Tuesday fish & chips run. Batter still crackling.",
  },
  {
    id: "ig2",
    image: photos.instagram[1],
    caption: "Pretzel landed. Beer cheese did not survive long.",
  },
  {
    id: "ig3",
    image: photos.instagram[2],
    caption: "UK pint at the H101 bar before the amphitheatre show.",
  },
  {
    id: "ig4",
    image: photos.instagram[3],
    caption: "Tender count: ordered two, needed three.",
  },
  {
    id: "ig5",
    image: photos.instagram[4],
    caption: "Shrimp & chips with curry sauce, no notes.",
  },
  {
    id: "ig6",
    image: photos.instagram[5],
    caption: "Friday night in Cumming City Center. Come hungry.",
  },
];
