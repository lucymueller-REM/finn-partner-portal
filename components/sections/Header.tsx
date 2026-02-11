import Link from "next/link";
import Image from "next/image";

interface HeaderProps {
  variant?: "home" | "subpage" | "buyer" | "supplier";
}

export function Header({ variant = "home" }: HeaderProps) {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-gray-200 bg-white/95 backdrop-blur-sm">
      <div className="mx-auto flex h-16 max-w-screen-2xl items-center justify-between px-4 sm:px-6">
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/FINN_Logo_Black_Test_klein.jpg"
            alt="FINN"
            width={90}
            height={29}
            className="h-7 w-auto"
            priority
          />
        </Link>

        {variant === "home" ? (
          <nav className="flex items-center gap-3">
            <Link
              href="/login/haendler"
              className="inline-flex items-center rounded-xl bg-[#0087eb] px-5 py-2 text-sm font-medium text-white transition hover:bg-[#006fc7]"
            >
              Login für Händler
            </Link>
            <Link
              href="/login/einlieferer"
              className="inline-flex items-center rounded-xl bg-[#0087eb] px-5 py-2 text-sm font-medium text-white transition hover:bg-[#006fc7]"
            >
              Login für Einlieferer
            </Link>
          </nav>
        ) : variant === "buyer" ? (
          <nav className="flex items-center gap-4">
            <Link
              href="/login/haendler"
              className="text-sm font-medium text-gray-600 transition-colors hover:text-gray-900"
            >
              Login für Händler
            </Link>
            <Link
              href="/registrierung/haendler"
              className="inline-flex items-center rounded-xl bg-[#0087eb] px-5 py-2 text-sm font-medium text-white transition hover:bg-[#006fc7]"
            >
              Partnerzugang anfragen
            </Link>
          </nav>
        ) : variant === "supplier" ? (
          <nav className="flex items-center gap-4">
            <Link
              href="/login/einlieferer"
              className="text-sm font-medium text-gray-600 transition-colors hover:text-gray-900"
            >
              Login für Einlieferer
            </Link>
            <Link
              href="/registrierung/einlieferer"
              className="inline-flex items-center rounded-xl bg-[#0087eb] px-5 py-2 text-sm font-medium text-white transition hover:bg-[#006fc7]"
            >
              Partnerzugang anfragen
            </Link>
          </nav>
        ) : (
          <nav className="flex items-center gap-4">
            <Link
              href="/login/haendler"
              className="text-sm font-medium text-gray-600 transition-colors hover:text-gray-900"
            >
              Login
            </Link>
          </nav>
        )}
      </div>
    </header>
  );
}
