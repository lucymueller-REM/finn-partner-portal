"use client";

import { useLanguage } from "@/i18n/LanguageContext";

export function LanguageSwitcher() {
  const { locale, setLocale } = useLanguage();

  return (
    <div className="flex items-center gap-1 rounded-lg border border-gray-200 bg-white p-0.5">
      <button
        onClick={() => setLocale('de')}
        className={`px-2 py-1 text-xs font-medium rounded-md transition-all ${
          locale === 'de'
            ? 'bg-[#0087eb] text-white'
            : 'text-gray-500 hover:text-gray-900'
        }`}
      >
        DE
      </button>
      <button
        onClick={() => setLocale('en')}
        className={`px-2 py-1 text-xs font-medium rounded-md transition-all ${
          locale === 'en'
            ? 'bg-[#0087eb] text-white'
            : 'text-gray-500 hover:text-gray-900'
        }`}
      >
        EN
      </button>
    </div>
  );
}
