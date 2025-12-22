import AboutSection from "@/components/Sections/AboutSection/AboutSection";
import { FeaturedProductsSection } from "@/components/Sections/FeaturedProductsSection/FeaturedProductsSection";
import HeroSection from "@/components/Sections/HeroSection/HeroSection";
import HitSection from "@/components/Sections/HitSection/HitSection";
import InfoSection from "@/components/Sections/InfoSection/InfoSection";
import ProductsSection from "@/components/Sections/ProductsSection/ProductsSection";
import TestimonialsSection from "@/components/Sections/TestimonialsSection/TestimonialsSection";
import { TeamSection } from "@/components/Team/TeamSection";
import { unstable_setRequestLocale } from "next-intl/server";
import FaqSection from "@/components/Sections/FAQSection";
import { client } from "@/sanity/lib/client";
import { SERVICES_QUERY } from "@/sanity/queries/service.query";
import Link from "next/link";

const options = { next: { revalidate: 30 } };

export default async function Home({ params: { locale } }: any) {
  // Enable static rendering
  unstable_setRequestLocale(locale);

  return (
    <>
      <HeroSection />
      <FeaturedProductsSection />
      <AboutSection />
      <ProductsSection />
      <TeamSection />
      <HitSection />
      <TestimonialsSection />
      <FaqSection />
      <InfoSection locale={locale} />
    </>
  );
}
