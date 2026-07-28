import { siteConfig } from "@/data/site";

export function restaurantJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": ["Restaurant", "LocalBusiness"],
    name: siteConfig.name,
    description: siteConfig.description,
    url: siteConfig.url,
    telephone: siteConfig.phone,
    email: siteConfig.email,
    image: `${siteConfig.url}/og-image.jpg`,
    servesCuisine: ["Fish and Chips", "British", "Seafood", "American", "Pub Food"],
    priceRange: "$$",
    address: {
      "@type": "PostalAddress",
      streetAddress: siteConfig.address.street,
      addressLocality: siteConfig.address.city,
      addressRegion: siteConfig.address.state,
      postalCode: siteConfig.address.zip,
      addressCountry: "US",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: siteConfig.coordinates.lat,
      longitude: siteConfig.coordinates.lng,
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Sunday"],
        opens: "11:30",
        closes: "19:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Friday", "Saturday"],
        opens: "11:30",
        closes: "21:00",
      },
    ],
    acceptsReservations: true,
    amenityFeature: [
      { "@type": "LocationFeatureSpecification", name: "Dine-in" },
      { "@type": "LocationFeatureSpecification", name: "Takeout" },
      { "@type": "LocationFeatureSpecification", name: "Full Bar" },
      { "@type": "LocationFeatureSpecification", name: "Kid Friendly" },
      { "@type": "LocationFeatureSpecification", name: "Free Parking" },
    ],
    sameAs: [
      siteConfig.social.instagram,
      siteConfig.social.facebook,
      siteConfig.social.twitter,
    ],
  };
}
