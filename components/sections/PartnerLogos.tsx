"use client";

import Image from "next/image";

const partners = [
  // Gemischt: Händler + OEMs/LB gleichmäßig verteilt
  { name: "AHG", logo: "/Partner_Logo_ahg.png", scale: "scale-100" },
  { name: "Assenheimer", logo: "/Partner_Logo_Assenheimer.png", scale: "scale-100" },
  { name: "Baltes", logo: "/Partner_Logo_Baltes.png", scale: "scale-100" },
  { name: "Nissan", logo: "/Partner_Logo_nissan.png", scale: "scale-100" },
  { name: "BHG", logo: "/Partner_Logo_bhg.png", scale: "scale-100" },
  { name: "Bierschneider", logo: "/Partner_Logo_Bierschneider.png", scale: "scale-100" },
  { name: "Cloppenburg", logo: "/Partner_Logo_Cloppenburg.png", scale: "scale-100" },
  { name: "Polestar", logo: "/Partner_Logo_polestar.png", scale: "scale-100" },
  { name: "Dosch", logo: "/Partner_Logo_Dosch.png", scale: "scale-100" },
  { name: "Elspass", logo: "/Partner_Logo_Elspass.png", scale: "scale-100" },
  { name: "Credit Agricole Autobank", logo: "/Partner_Logo_autobank.png", scale: "scale-150" },
  { name: "Euler", logo: "/Partner_Logo_euler.png", scale: "scale-150" },
  { name: "Häusler", logo: "/Partner_Logo_Häusler.png", scale: "scale-150" },
  { name: "Leasys", logo: "/Partner_Logo_leasy.png", scale: "scale-100" },
  { name: "Scherer", logo: "/Partner_Logo_Scherer.png", scale: "scale-150" },
  { name: "Unterberger", logo: "/Partner_Logo_Unterberger.png", scale: "scale-100" },
];

function LogoItem({ partner }: { partner: { name: string; logo: string; scale: string } }) {
  return (
    <div className="mx-10 flex h-16 w-40 flex-shrink-0 items-center justify-center overflow-hidden">
      <div className={`relative h-14 w-36 ${partner.scale}`}>
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
          animation: logo-scroll 50s linear infinite;
          width: max-content;
        }
      `}</style>
    </section>
  );
}
