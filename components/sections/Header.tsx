import Link from "next/link";
import Image from "next/image";

interface HeaderProps {
  variant?: "home" | "subpage";
}

export function Header({ variant = "home" }: HeaderProps) {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-gray-200 bg-white/95 backdrop-blur-sm">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6">
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/FINN_Logo_Black_Test.jpg"
            alt="FINN"
            width={100}
            height={32}
            className="h-8 w-auto"
            priority
          />
        </Link>

        {variant === "home" ? (
          <nav className="flex items-center gap-3">
            <Link
              href="/login/buyer"
              className="inline-flex items-center rounded-xl bg-[#0087eb] px-5 py-2 text-sm font-medium text-white transition hover:bg-[#006fc7]"
            >
              Login für Händler
            </Link>
            <Link
              href="/login/supplier"
              className="inline-flex items-center rounded-xl bg-[#0087eb] px-5 py-2 text-sm font-medium text-white transition hover:bg-[#006fc7]"
            >
              Login für Einlieferer
            </Link>
          </nav>
        ) : (
          <nav className="flex items-center gap-4">
            <Link
              href="#login"
              className="text-sm font-medium text-gray-600 transition-colors hover:text-gray-900"
            >
              Login für bestehende Partner
            </Link>
            <Link
              href="#partner-werden"
              className="inline-flex items-center rounded-xl bg-[#0087eb] px-5 py-2 text-sm font-medium text-white transition hover:bg-[#006fc7]"
            >
              Partnerzugang anfragen
            </Link>
          </nav>
        )}
      </div>
    </header>
  );
}
