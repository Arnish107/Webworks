/**
 * Local photo paths for Washington's Wharf.
 *
 * Right now these point at branded SVG placeholders.
 * Swap any path to a real .jpg/.png with the same basename when you have shots.
 *
 * PHOTO CHECKLIST (replace placeholders with real photos):
 * [ ] /images/hero/fish-and-chips.jpg
 * [ ] /images/hero/cta-banner.jpg
 * [ ] /images/interior/dining-room.jpg
 * [ ] /images/interior/bar.jpg
 * [ ] /images/interior/phone-booth.jpg
 * [ ] /images/menu/fish-and-chips.jpg
 * [ ] /images/menu/shrimp-and-chips.jpg
 * [ ] /images/menu/chicken-tenders.jpg
 * [ ] /images/menu/wings.jpg
 * [ ] /images/menu/pretzel-beer-cheese.jpg
 * [ ] /images/menu/uk-beers.jpg
 * [ ] /images/gallery/01-fish-and-chips.jpg ... 12-exterior-or-storefront.jpg
 * [ ] /images/groups/*.jpg
 * [ ] /images/instagram/01.jpg ... 06.jpg
 * [ ] /images/og/social-share.jpg
 * [ ] /menu/washingtons-wharf-menu.pdf
 */

export const photos = {
  hero: "/images/hero/fish-and-chips.svg",
  ctaBanner: "/images/hero/cta-banner.svg",
  diningRoom: "/images/interior/dining-room.svg",
  bar: "/images/interior/bar.svg",
  phoneBooth: "/images/interior/phone-booth.svg",
  fishAndChips: "/images/menu/fish-and-chips.svg",
  shrimpAndChips: "/images/menu/shrimp-and-chips.svg",
  chickenTenders: "/images/menu/chicken-tenders.svg",
  wings: "/images/menu/wings.svg",
  pretzelBeerCheese: "/images/menu/pretzel-beer-cheese.svg",
  ukBeers: "/images/menu/uk-beers.svg",
  og: "/images/og/social-share.svg",
  menuPdf: "/menu/washingtons-wharf-menu.pdf",
  gallery: [
    "/images/gallery/01-fish-and-chips.svg",
    "/images/gallery/02-dining-room.svg",
    "/images/gallery/03-shrimp.svg",
    "/images/gallery/04-bar-pints.svg",
    "/images/gallery/05-pretzel.svg",
    "/images/gallery/06-tenders.svg",
    "/images/gallery/07-chips.svg",
    "/images/gallery/08-wings.svg",
    "/images/gallery/09-table.svg",
    "/images/gallery/10-cocktails.svg",
    "/images/gallery/11-group.svg",
    "/images/gallery/12-exterior-or-storefront.svg",
  ],
  groups: {
    birthday: "/images/groups/birthday.svg",
    office: "/images/groups/office-lunch.svg",
    gameDay: "/images/groups/game-day.svg",
    family: "/images/groups/family.svg",
    takeout: "/images/groups/takeout.svg",
  },
  instagram: [
    "/images/instagram/01.svg",
    "/images/instagram/02.svg",
    "/images/instagram/03.svg",
    "/images/instagram/04.svg",
    "/images/instagram/05.svg",
    "/images/instagram/06.svg",
  ],
} as const;

export const PLACEHOLDER_SRC = "/images/placeholder.svg";
