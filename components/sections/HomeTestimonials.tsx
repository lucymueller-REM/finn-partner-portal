"use client";

import { useLanguage } from "@/i18n/LanguageContext";

export function HomeTestimonials() {
  const { t } = useLanguage();

  return (
    <section className="bg-gray-50 py-14 sm:py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-xl font-bold tracking-tight text-gray-900 sm:text-2xl">
            {t.home.testimonials.headline}
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-sm text-gray-600">
            {t.home.testimonials.description}
          </p>
        </div>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {t.home.testimonials.items.map((testimonial, idx) => (
            <div
              key={idx}
              className="flex flex-col rounded-xl bg-white p-4 shadow-sm"
            >
              {/* Quote icon */}
              <svg
                className="h-5 w-5 text-[#0087eb]/30"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
              </svg>

              {/* Quote text */}
              <p className="mt-3 flex-1 text-xs leading-relaxed text-gray-700">
                &ldquo;{testimonial.quote}&rdquo;
              </p>

              {/* Author */}
              <div className="mt-4 border-t border-gray-100 pt-3">
                <p className="text-xs font-medium text-gray-900">{testimonial.name}</p>
                <p className="text-[10px] text-gray-500">{testimonial.role}</p>
                <span
                  className={`mt-1.5 inline-block rounded-full px-1.5 py-0.5 text-[10px] font-medium ${
                    testimonial.type === "buyer"
                      ? "bg-blue-50 text-[#0087eb]"
                      : "bg-emerald-50 text-emerald-600"
                  }`}
                >
                  {testimonial.type === "buyer" ? t.home.testimonials.dealerLabel : t.home.testimonials.supplierLabel}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
