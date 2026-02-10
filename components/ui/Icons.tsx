const iconClass = "w-5 h-5 shrink-0";

export function CheckIcon({ className }: { className?: string }) {
  return (
    <svg className={className ?? iconClass} viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="M16.667 5L7.5 14.167 3.333 10" />
    </svg>
  );
}

export function CrossIcon({ className }: { className?: string }) {
  return (
    <svg className={className ?? iconClass} viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="M15 5L5 15M5 5l10 10" />
    </svg>
  );
}

/** Echtzeit-Inventar */
export function IconInventory({ className }: { className?: string }) {
  return (
    <svg className={className ?? iconClass} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
    </svg>
  );
}

/** Dokumenten-Management */
export function IconDocument({ className }: { className?: string }) {
  return (
    <svg className={className ?? iconClass} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" />
      <path d="M14 2v6h6M16 13H8M16 17H8M10 9H8" />
    </svg>
  );
}

/** Performance & Reporting */
export function IconChart({ className }: { className?: string }) {
  return (
    <svg className={className ?? iconClass} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="M3 3v18h18" />
      <path d="M18 9v4M13 5v12M8 12v5" />
    </svg>
  );
}

/** Digitale Transaktionsabwicklung */
export function IconTransaction({ className }: { className?: string }) {
  return (
    <svg className={className ?? iconClass} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83" />
      <circle cx="12" cy="12" r="3" />
    </svg>
  );
}
