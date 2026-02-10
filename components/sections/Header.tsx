import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/Button";

export function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-gray-200 bg-white/95 backdrop-blur-sm">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6">
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/FINN_Logo_Black_RGB.png"
            alt="FINN"
            width={100}
            height={32}
            className="h-8 w-auto"
            priority
          />
        </Link>
        <nav className="flex items-center gap-4">
          <Link
            href="#login"
            className="text-sm font-medium text-gray-600 transition-colors hover:text-gray-900"
          >
            Login für bestehende Partner
          </Link>
          <Button asChild className="bg-[#0087eb] text-white hover:bg-[#006fc7]">
            <Link href="#partnerzugang">Partnerzugang anfragen</Link>
          </Button>
        </nav>
      </div>
    </header>
  );
}
