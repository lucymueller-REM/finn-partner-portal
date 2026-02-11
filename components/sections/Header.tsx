import Link from "next/link";
import Image from "next/image";

interface HeaderProps {
  variant?: "home" | "subpage" | "buyer" | "supplier";
}

export function Header({ variant = "home" }: HeaderProps) {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-gray-200 bg-white/95 backdrop-blur-sm">
      <div className="mx-auto flex h-14 max-w-7xl items-center justify-between px-4 sm:px-6">
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/FINN_Logo_Black_Test_klein.jpg"
            alt="FINN"
            width={80}
            height={26}
            className="h-6 w-auto"
            priority
          />
        </Link>

        {variant === "home" ? (
          <nav className="flex items-center gap-3">
            <a
              href="https://partners.one.finn.auto/p/login"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center rounded-lg border border-gray-300 bg-white px-4 py-1.5 text-xs font-medium text-gray-700 transition hover:bg-gray-50"
            >
              Login
            </a>
            <a
              href="https://partners.one.finn.auto/p/login"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center rounded-lg bg-[#0087eb] px-4 py-1.5 text-xs font-medium text-white transition hover:bg-[#006fc7]"
            >
              Registrieren
            </a>
          </nav>
        ) : variant === "buyer" ? (
          <nav className="flex items-center gap-4">
            <a
              href="https://partners.one.finn.auto/p/login"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs font-medium text-gray-600 transition-colors hover:text-gray-900"
            >
              Login für Händler
            </a>
            <a
              href="https://partners.one.finn.auto/p/login"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center rounded-lg bg-[#0087eb] px-4 py-1.5 text-xs font-medium text-white transition hover:bg-[#006fc7]"
            >
              Partnerzugang anfragen
            </a>
          </nav>
        ) : variant === "supplier" ? (
          <nav className="flex items-center gap-4">
            <a
              href="https://partners.one.finn.auto/p/login"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs font-medium text-gray-600 transition-colors hover:text-gray-900"
            >
              Login für Einlieferer
            </a>
            <a
              href="https://partners.one.finn.auto/p/login"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center rounded-lg bg-[#0087eb] px-4 py-1.5 text-xs font-medium text-white transition hover:bg-[#006fc7]"
            >
              Partnerzugang anfragen
            </a>
          </nav>
        ) : (
          <nav className="flex items-center gap-4">
            <a
              href="https://partners.one.finn.auto/p/login"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs font-medium text-gray-600 transition-colors hover:text-gray-900"
            >
              Login
            </a>
          </nav>
        )}
      </div>
    </header>
  );
}
