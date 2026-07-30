import { HeroSection } from "@/sections/home/hero";
import { VisitStrip } from "@/sections/home/visit-strip";
import { WelcomeSection } from "@/sections/home/welcome";
import { SignatureDiningSection } from "@/sections/home/signature-dining";
import { HarborExperienceSection } from "@/sections/home/harbor-experience";
import { PrivateEventsPreview } from "@/sections/home/private-events-preview";
import { FeaturedMenuSection } from "@/sections/home/featured-menu";
import { GalleryPreviewSection } from "@/sections/home/gallery-preview";
import { TestimonialsSection } from "@/sections/home/testimonials";
import { InstagramSection } from "@/sections/home/instagram";
import { ReservationCtaSection } from "@/sections/home/reservation-cta";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <VisitStrip />
      <WelcomeSection />
      <SignatureDiningSection />
      <HarborExperienceSection />
      <PrivateEventsPreview />
      <FeaturedMenuSection />
      <GalleryPreviewSection />
      <TestimonialsSection />
      <InstagramSection />
      <ReservationCtaSection />
    </>
  );
}
