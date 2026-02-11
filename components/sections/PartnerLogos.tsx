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

export function PartnerLogos() {
  return (
    <section className="overflow-hidden bg-white py-6 border-t border-gray-100">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <p className="text-center text-[10px] font-medium uppercase tracking-widest text-gray-400">
          Unsere Partner
        </p>
      </div>

      {/* Scrolling container */}
      <div className="relative mt-4">
        <div className="flex animate-scroll">
          {/* First set of logos */}
          {partners.map((partner, i) => (
            <div
              key={`a-${i}`}
              className="mx-6 flex h-10 w-28 flex-shrink-0 items-center justify-center"
            >
              <Image
                src={partner.logo}
                alt={partner.name}
                width={100}
                height={40}
                className="h-8 w-auto object-contain grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition"
                unoptimized
              />
            </div>
          ))}
          {/* Duplicate for seamless loop */}
          {partners.map((partner, i) => (
            <div
              key={`b-${i}`}
              className="mx-6 flex h-10 w-28 flex-shrink-0 items-center justify-center"
            >
              <Image
                src={partner.logo}
                alt={partner.name}
                width={100}
                height={40}
                className="h-8 w-auto object-contain grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition"
                unoptimized
              />
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-scroll {
          animation: scroll 30s linear infinite;
        }
        .animate-scroll:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
}
