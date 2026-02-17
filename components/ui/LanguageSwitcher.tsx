"use client";

import { useLanguage } from "@/i18n/LanguageContext";

export function LanguageSwitcher() {
  const { locale, setLocale } = useLanguage();

  return (
    <div className="flex items-center gap-1 rounded-[2px] border border-[#E9EAEC] bg-white p-0.5">
      <button
        onClick={() => setLocale('de')}
        className={`rounded-[2px] px-2 py-1 text-xs font-semibold transition-all ${
          locale === 'de'
            ? 'bg-[#0072EA] text-white'
            : 'text-[#707070] hover:text-[#1A1A1A]'
        }`}
      >
        DE
      </button>
      <button
        onClick={() => setLocale('en')}
        className={`rounded-[2px] px-2 py-1 text-xs font-semibold transition-all ${
          locale === 'en'
            ? 'bg-[#0072EA] text-white'
            : 'text-[#707070] hover:text-[#1A1A1A]'
        }`}
      >
        EN
      </button>
    </div>
  );
}
