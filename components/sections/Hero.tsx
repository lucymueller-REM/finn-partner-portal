"use client";

import { useLanguage } from "@/i18n/LanguageContext";

export function Hero() {
  const { t } = useLanguage();

  return (
    <section className="bg-white pt-32 pb-16 sm:pt-40 sm:pb-20">
      <div className="mx-auto max-w-4xl px-4 text-center sm:px-6">
        <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl lg:text-6xl">
          {t.home.hero.headline}
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-lg text-gray-500 sm:text-xl">
          {t.home.hero.description}
        </p>
      </div>
    </section>
  );
}
