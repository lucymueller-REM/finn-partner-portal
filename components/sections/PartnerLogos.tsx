"use client";

import Image from "next/image";
import Link from "next/link";
import { useLanguage } from "@/i18n/LanguageContext";

const partners = [
  { name: "Cloppenburg", logo: "/Partner_Logo_Cloppenburg.png", url: "https://www.cloppenburg-gruppe.de/", scale: "scale-100" },
  { name: "Dosch", logo: "/Partner_Logo_Dosch.png", url: "https://home.mobile.de/DOSCHAUTOMOBILE", scale: "scale-100" },
  { name: "Bald", logo: "/Partner_Logo_bald.png.png", url: "https://www.bald.de/", scale: "scale-150" },
  { name: "AH Cuntz", logo: "/Partner_Logo_cuntz.png", url: "https://www.autohaus-cuntz.de/", scale: "scale-100" },
  { name: "LIZY", logo: "/Partner_Logo_lizy.png.png", url: "https://www.lizy.be/nl", scale: "scale-100" },
  { name: "AH Koch", logo: "/Partner_Logo_ah_koch.png.png", url: "https://koch-autogruppe.de/", scale: "scale-100" },
  { name: "Gerhard Schuster GmbH", logo: "/Partner_Logo_schuster.png", url: "https://www.schuster-automobile.de/", scale: "scale-100" },
];

function LogoItem({ partner }: { partner: { name: string; logo: string; url: string; scale: string } }) {
  return (
    <Link
      href={partner.url}
      target="_blank"
      rel="noopener noreferrer"
      className="mx-6 flex h-10 w-28 flex-shrink-0 items-center justify-center overflow-hidden"
    >
      <div className={`relative h-8 w-24 ${partner.scale}`}>
        <Image
          src={partner.logo}
          alt={partner.name}
          fill
          className="object-contain grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
          unoptimized
        />
      </div>
    </Link>
  );
}

export function PartnerLogos() {
  const { t } = useLanguage();

  return (
    <section className="overflow-hidden bg-white py-6 border-t border-gray-100">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <p className="text-center text-[10px] font-medium uppercase tracking-widest text-gray-400">
          {t.home.partners}
        </p>
      </div>

      {/* Scrolling container */}
      <div className="relative mt-6 overflow-hidden">
        <div className="logo-scroll flex">
          {/* Render logos 4 times for seamless infinite loop */}
          {[...Array(4)].map((_, setIndex) =>
            partners.map((partner, i) => (
              <LogoItem key={`${setIndex}-${i}`} partner={partner} />
            ))
          )}
        </div>
      </div>

      <style jsx global>{`
        @keyframes logo-scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-25%);
          }
        }
        .logo-scroll {
          animation: logo-scroll 20s linear infinite;
          width: max-content;
        }
      `}</style>
    </section>
  );
}
