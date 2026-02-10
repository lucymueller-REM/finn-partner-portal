import { Header } from "@/components/sections/Header";
import { Hero } from "@/components/sections/Hero";
import { BuyerSupplierOverview } from "@/components/sections/BuyerSupplierOverview";
import { LiveTracker } from "@/components/sections/LiveTracker";
import { Footer } from "@/components/sections/Footer";

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <BuyerSupplierOverview />
        <LiveTracker />
      </main>
      <Footer />
    </>
  );
}
