"use client";

import { useLanguage } from "@/i18n/LanguageContext";

export function LiveTracker() {
  const { t } = useLanguage();

  return (
    <section className="bg-white py-16 sm:py-20">
      <div className="mx-auto max-w-5xl px-6 sm:px-8 lg:px-12">
        <p className="mb-8 text-center text-xs font-semibold uppercase tracking-widest text-[#0087eb]">
          {t.home.liveTracker.title}
        </p>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {t.home.liveTracker.stats.map((s, idx) => (
            <div key={idx} className="text-center">
              <p className="text-3xl font-bold text-gray-900 sm:text-4xl">
                {s.value}
              </p>
              <p className="mt-1 text-sm text-gray-500">{s.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
