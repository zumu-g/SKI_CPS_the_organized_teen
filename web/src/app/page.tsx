import { Navigation } from "@/components/navigation";
import { Hero } from "@/components/hero";
import { PainPoints } from "@/components/pain-points";
import { Curriculum } from "@/components/curriculum";
import { HowItWorks } from "@/components/how-it-works";
import { Pricing } from "@/components/pricing";
import { Testimonials } from "@/components/testimonials";
import { FAQ } from "@/components/faq";
import { CTA } from "@/components/cta";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <main className="relative">
      <Navigation />
      <Hero />
      <PainPoints />
      <Curriculum />
      <HowItWorks />
      <Testimonials />
      <Pricing />
      <FAQ />
      <CTA />
      <Footer />
    </main>
  );
}
