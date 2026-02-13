"use client";

import { useLanguage } from "@/i18n/LanguageContext";

export function Hero() {
  const { locale, t } = useLanguage();

  return (
    <section className="bg-white pt-32 pb-16 sm:pt-40 sm:pb-20">
      <div className={`mx-auto px-4 text-center sm:px-6 ${locale === 'de' ? 'max-w-6xl' : 'max-w-4xl'}`}>
        <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl lg:text-6xl">
          {t.home.hero.headlinePart1}
          <span className="text-[#0087eb]">{t.home.hero.headlineHighlight}</span>
          {t.home.hero.headlinePart2}
        </h1>
        <p className={`mx-auto mt-6 text-lg text-gray-500 sm:text-xl ${locale === 'de' ? 'max-w-4xl' : 'max-w-2xl'}`}>
          {t.home.hero.description}
        </p>
      </div>
    </section>
  );
}
