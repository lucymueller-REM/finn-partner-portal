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
            <nav className="flex items-center gap-3">
              <a
                href="https://partners.one.finn.auto/p/login"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center rounded-lg border border-gray-300 bg-white px-4 py-1.5 text-xs font-medium text-gray-700 transition hover:bg-gray-50"
              >
                {t.header.loginForPartner}
              </a>
              <a
                href="https://partners.one.finn.auto/p/login"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center rounded-lg bg-[#0087eb] px-4 py-1.5 text-xs font-medium text-white transition hover:bg-[#006fc7]"
              >
                {t.header.requestAccess}
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
                {t.header.loginForDealer}
              </a>
              <a
                href="https://partners.one.finn.auto/p/login"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center rounded-lg bg-[#0087eb] px-4 py-1.5 text-xs font-medium text-white transition hover:bg-[#006fc7]"
              >
                {t.header.requestAccess}
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
                {t.header.loginForSupplier}
              </a>
              <a
                href="https://partners.one.finn.auto/p/login"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center rounded-lg bg-[#0087eb] px-4 py-1.5 text-xs font-medium text-white transition hover:bg-[#006fc7]"
              >
                {t.header.requestAccess}
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
                {t.header.login}
              </a>
            </nav>
          )}
        </div>
      </div>
    </header>
  );
}
