"use client";

const partners = [
  { name: "Partner 1" },
  { name: "Partner 2" },
  { name: "Partner 3" },
  { name: "Partner 4" },
  { name: "Partner 5" },
  { name: "Partner 6" },
  { name: "Partner 7" },
  { name: "Partner 8" },
];

export function PartnerLogos() {
  return (
    <section className="overflow-hidden bg-white py-10 border-t border-gray-100">
      <div className="mx-auto max-w-screen-2xl px-4 sm:px-6 lg:px-8">
        <p className="text-center text-xs font-medium uppercase tracking-widest text-gray-400">
          Unsere Partner
        </p>
      </div>

      {/* Scrolling container */}
      <div className="relative mt-6">
        <div className="flex animate-scroll">
          {/* First set of logos */}
          {partners.map((partner, i) => (
            <div
              key={`a-${i}`}
              className="mx-8 flex h-12 w-32 flex-shrink-0 items-center justify-center rounded-lg bg-gray-100"
            >
              <span className="text-sm font-medium text-gray-400">
                {partner.name}
              </span>
            </div>
          ))}
          {/* Duplicate for seamless loop */}
          {partners.map((partner, i) => (
            <div
              key={`b-${i}`}
              className="mx-8 flex h-12 w-32 flex-shrink-0 items-center justify-center rounded-lg bg-gray-100"
            >
              <span className="text-sm font-medium text-gray-400">
                {partner.name}
              </span>
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
          animation: scroll 25s linear infinite;
        }
        .animate-scroll:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
}
