interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
}

export function GlassCard({ children, className = "" }: GlassCardProps) {
  return (
    <div
      className={`rounded-xl border border-glass-border bg-glass-bg backdrop-blur-glass ${className}`}
    >
      {children}
    </div>
  );
}
