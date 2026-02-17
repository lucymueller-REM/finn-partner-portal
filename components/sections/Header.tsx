"use client";

import Link from "next/link";
import Image from "next/image";
import { LanguageSwitcher } from "@/components/ui/LanguageSwitcher";
import { useLanguage } from "@/i18n/LanguageContext";

interface HeaderProps {
  variant?: "home" | "subpage" | "buyer" | "supplier";
}

export function Header({ variant = "home" }: HeaderProps) {
  const { t } = useLanguage();

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

        <div className="flex items-center gap-3">
          <LanguageSwitcher />
          
          {variant === "home" ? (
            <nav className="flex items-center justify-end gap-3 w-[320px]">
              <a
                href="https://partners.one.finn.auto/p/login"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-[2px] border border-[#1A1A1A] bg-transparent px-4 py-1.5 text-xs font-semibold text-[#1A1A1A] transition hover:bg-[#1A1A1A] hover:text-white min-w-[115px]"
              >
                {t.header.loginForPartner}
              </a>
              <Link
                href="/registrierung/haendler"
                className="inline-flex items-center justify-center rounded-[2px] bg-[#0072ea] px-4 py-1.5 text-xs font-semibold text-white transition hover:bg-[#0167D4] min-w-[165px]"
              >
                {t.header.requestAccess}
              </Link>
            </nav>
          ) : variant === "buyer" ? (
            <nav className="flex items-center justify-end gap-3 w-[320px]">
              <a
                href="https://partners.one.finn.auto/p/login"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-[2px] border border-[#1A1A1A] bg-transparent px-4 py-1.5 text-xs font-semibold text-[#1A1A1A] transition hover:bg-[#1A1A1A] hover:text-white min-w-[115px]"
              >
                {t.header.loginForDealer}
              </a>
              <Link
                href="/registrierung/haendler"
                className="inline-flex items-center justify-center rounded-[2px] bg-[#0072ea] px-4 py-1.5 text-xs font-semibold text-white transition hover:bg-[#0167D4] min-w-[165px]"
              >
                {t.header.requestAccess}
              </Link>
            </nav>
          ) : variant === "supplier" ? (
            <nav className="flex items-center justify-end gap-3 w-[320px]">
              <a
                href="https://partners.one.finn.auto/p/login"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-[2px] border border-[#1A1A1A] bg-transparent px-4 py-1.5 text-xs font-semibold text-[#1A1A1A] transition hover:bg-[#1A1A1A] hover:text-white min-w-[115px]"
              >
                {t.header.loginForSupplier}
              </a>
              <Link
                href="/registrierung/einlieferer"
                className="inline-flex items-center justify-center rounded-[2px] bg-[#0072ea] px-4 py-1.5 text-xs font-semibold text-white transition hover:bg-[#0167D4] min-w-[165px]"
              >
                {t.header.requestAccess}
              </Link>
            </nav>
          ) : (
            <nav className="flex items-center gap-4">
              <a
                href="https://partners.one.finn.auto/p/login"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-medium text-gray-600 transition-colors hover:text-gray-900"
              >
                {t.header.login}
              </a>
            </nav>
          )}
        </div>
      </div>
    </header>
  );
}
