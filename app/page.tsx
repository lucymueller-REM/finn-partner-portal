import { Header } from "@/components/sections/Header";
import { Hero } from "@/components/sections/Hero";
import { BuyerSupplierOverview } from "@/components/sections/BuyerSupplierOverview";
import { LiveTracker } from "@/components/sections/LiveTracker";
import { HomeTestimonials } from "@/components/sections/HomeTestimonials";
import { PartnerLogos } from "@/components/sections/PartnerLogos";
import { Footer } from "@/components/sections/Footer";

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <BuyerSupplierOverview />
        <LiveTracker />
        <HomeTestimonials />
        <PartnerLogos />
      </main>
      <Footer />
    </>
  );
}
