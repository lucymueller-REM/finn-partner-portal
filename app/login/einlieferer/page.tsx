"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Header } from "@/components/sections/Header";
import { Footer } from "@/components/sections/Footer";

export default function EinliefererLoginPage() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Hier würde die Login-Logik kommen
    alert("Login-Funktion wird noch implementiert.");
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <>
      <Header variant="subpage" />
      <main className="min-h-screen bg-white pt-16">
        <div className="flex min-h-[calc(100vh-4rem)]">
          {/* Left side - Login form */}
          <div className="flex flex-1 flex-col justify-center px-4 py-12 sm:px-6 lg:px-20 xl:px-24">
            <div className="mx-auto w-full max-w-sm">
              <div className="mb-10">
                <Link href="/" className="inline-block">
                  <Image
                    src="/FINN_Logo_Black_Test_klein.jpg"
                    alt="FINN"
                    width={100}
                    height={32}
                    className="h-8 w-auto"
                  />
                </Link>
                <p className="mt-6 text-sm font-medium uppercase tracking-widest text-[#0072ea]">
                  Einlieferer-Login
                </p>
                <h1 className="mt-2 text-2xl font-bold tracking-tight text-gray-900">
                  Willkommen zurück
                </h1>
                <p className="mt-2 text-sm text-gray-600">
                  Melden Sie sich an, um Ihre Flottenvermarktung zu verwalten.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                    E-Mail-Adresse
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="mt-1 block w-full rounded-lg border border-gray-300 px-4 py-3 text-gray-900 focus:border-[#0072ea] focus:ring-[#0072ea]"
                    placeholder="ihre@email.de"
                  />
                </div>

                <div>
                  <div className="flex items-center justify-between">
                    <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                      Passwort
                    </label>
                    <Link
                      href="#passwort-vergessen"
                      className="text-sm text-[#0072ea] hover:underline"
                    >
                      Passwort vergessen?
                    </Link>
                  </div>
                  <input
                    type="password"
                    name="password"
                    id="password"
                    required
                    value={formData.password}
                    onChange={handleChange}
                    className="mt-1 block w-full rounded-lg border border-gray-300 px-4 py-3 text-gray-900 focus:border-[#0072ea] focus:ring-[#0072ea]"
                    placeholder="••••••••"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-[#0072ea] px-4 py-3 text-sm font-medium text-white transition hover:bg-[#005fc4]"
                >
                  Anmelden
                </button>
              </form>

              <div className="mt-8 text-center">
                <p className="text-sm text-gray-600">
                  Noch kein Partner?{" "}
                  <Link href="/registrierung/einlieferer" className="font-medium text-[#0072ea] hover:underline">
                    Jetzt Kontakt aufnehmen
                  </Link>
                </p>
              </div>

              <div className="mt-8 border-t border-gray-200 pt-8">
                <Link
                  href="/supplier"
                  className="text-sm text-gray-500 hover:text-gray-700"
                >
                  ← Zurück zur Einlieferer-Übersicht
                </Link>
              </div>
            </div>
          </div>

          {/* Right side - Image/Branding */}
          <div className="hidden lg:block lg:flex-1 relative bg-gray-50">
            <div className="absolute inset-0 flex items-center justify-center p-12">
              <div className="max-w-md text-center">
                <div className="mx-auto mb-8 flex h-20 w-20 items-center justify-center rounded-2xl bg-[#0072ea]/10">
                  <svg className="h-10 w-10 text-[#0072ea]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
                <h2 className="text-xl font-semibold text-gray-900">
                  Ihr Remarketing Dashboard
                </h2>
                <p className="mt-4 text-gray-600">
                  Verfolgen Sie die Performance Ihrer Fahrzeuge, analysieren Sie Verkaufsdaten
                  und optimieren Sie Ihre Vermarktungsstrategie.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
