import Hero from "@/components/Hero";
import CompanyOverview from "@/components/CompanyOverview";
import ServicesPreview from "@/components/ServicesPreview";
import Testimonials from "@/components/Testimonials";
import Tagline from "@/components/Tagline";

export default function HomePage() {
  return (
    <main>
      <Hero />
      <CompanyOverview />
      <ServicesPreview />
      <Testimonials />
      <Tagline />
    </main>
  );
}
