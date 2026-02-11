"use client";

import Image from "next/image";
import Link from "next/link";
import { useLanguage } from "@/i18n/LanguageContext";

function SplitPanel({
  image,
  kicker,
  headline,
  bullets,
  href,
  cta,
}: {
  image: string;
  kicker: string;
  headline: string;
  bullets: string[];
  href: string;
  cta: string;
}) {
  return (
    <Link
      href={href}
      className="group relative block h-[380px] w-full overflow-hidden rounded-xl sm:h-[420px]"
    >
      {/* Background image with hover zoom */}
      <div className="absolute inset-0 z-0">
        <Image
          src={image}
          alt=""
          fill
          className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
          sizes="(max-width: 1024px) 100vw, 50vw"
          priority
          unoptimized
        />
      </div>
      {/* Gradient overlay for readability */}
      <div
        className="absolute inset-0 z-10 bg-gradient-to-t from-black/75 via-black/40 to-black/20"
        aria-hidden
      />
      {/* Content */}
      <div className="relative z-20 flex h-full flex-col justify-end p-6 sm:p-8">
        <p className="text-[10px] font-semibold uppercase tracking-widest text-white">
          {kicker}
        </p>
        <h2 className="mt-1.5 text-2xl font-bold text-white sm:text-3xl">
          {headline}
        </h2>
        <ul className="mt-3 space-y-1.5">
          {bullets.map((b) => (
            <li
              key={b}
              className="flex items-center gap-2 text-xs text-white/90 sm:text-sm"
            >
              <svg className="h-4 w-4 shrink-0 text-[#0087eb]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
              {b}
            </li>
          ))}
        </ul>
        <span className="mt-6 inline-flex w-fit items-center justify-center rounded-lg bg-[#0087eb] px-5 py-2 text-xs font-medium text-white transition group-hover:bg-[#006fc7]">
          {cta}
        </span>
      </div>
    </Link>
  );
}

export function BuyerSupplierOverview() {
  const { t } = useLanguage();

  return (
    <section className="bg-white py-4 sm:py-6">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="grid gap-8 lg:grid-cols-2">
          <SplitPanel
            image="/hero-buyer.jpg"
            kicker={t.home.dealer.kicker}
            headline={t.home.dealer.headline}
            bullets={t.home.dealer.bullets}
            href="/buyer"
            cta={t.home.dealer.cta}
          />
          <SplitPanel
            image="/hero-supplier.jpg"
            kicker={t.home.supplier.kicker}
            headline={t.home.supplier.headline}
            bullets={t.home.supplier.bullets}
            href="/supplier"
            cta={t.home.supplier.cta}
          />
        </div>
      </div>
    </section>
  );
}
