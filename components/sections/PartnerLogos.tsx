"use client";

import Image from "next/image";

const partners = [
  { name: "AHG", logo: "/Partner_Logo_ahg.png" },
  { name: "Assenheimer", logo: "/Partner_Logo_Assenheimer.png" },
  { name: "Baltes", logo: "/Partner_Logo_Baltes.png" },
  { name: "BHG", logo: "/Partner_Logo_bhg.png" },
  { name: "Bierschneider", logo: "/Partner_Logo_Bierschneider.png" },
  { name: "Cloppenburg", logo: "/Partner_Logo_Cloppenburg.png" },
  { name: "Dosch", logo: "/Partner_Logo_Dosch.png" },
  { name: "Elspass", logo: "/Partner_Logo_Elspass.png" },
  { name: "Euler", logo: "/Partner_Logo_euler.png" },
  { name: "Häusler", logo: "/Partner_Logo_Häusler.png" },
  { name: "Scherer", logo: "/Partner_Logo_Scherer.png" },
  { name: "Unterberger", logo: "/Partner_Logo_Unterberger.png" },
];

function LogoItem({ partner }: { partner: { name: string; logo: string } }) {
  return (
    <div className="mx-8 flex h-12 w-32 flex-shrink-0 items-center justify-center">
      <div className="relative h-10 w-28">
        <Image
          src={partner.logo}
          alt={partner.name}
          fill
          className="object-contain grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
          unoptimized
        />
      </div>
    </div>
  );
}

export function PartnerLogos() {
  return (
    <section className="overflow-hidden bg-white py-6 border-t border-gray-100">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <p className="text-center text-[10px] font-medium uppercase tracking-widest text-gray-400">
          Unsere Partner
        </p>
      </div>

      {/* Scrolling container */}
      <div className="relative mt-4 overflow-hidden">
        <div className="logo-scroll flex">
          {/* First set of logos */}
          {partners.map((partner, i) => (
            <LogoItem key={`a-${i}`} partner={partner} />
          ))}
          {/* Duplicate for seamless loop */}
          {partners.map((partner, i) => (
            <LogoItem key={`b-${i}`} partner={partner} />
          ))}
        </div>
      </div>

      <style jsx global>{`
        @keyframes logo-scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .logo-scroll {
          animation: logo-scroll 40s linear infinite;
          width: max-content;
        }
      `}</style>
    </section>
  );
}
