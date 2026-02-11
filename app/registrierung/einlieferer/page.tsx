"use client";

import { useState } from "react";
import Link from "next/link";
import { Header } from "@/components/sections/Header";
import { Footer } from "@/components/sections/Footer";

export default function EinliefererRegistrierungPage() {
  const [formData, setFormData] = useState({
    firmenname: "",
    ansprechpartner: "",
    email: "",
    telefon: "",
    strasse: "",
    plz: "",
    ort: "",
    unternehmensart: "",
    flottengroesse: "",
    nachricht: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Hier würde die Formular-Logik kommen
    setSubmitted(true);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  if (submitted) {
    return (
      <>
        <Header variant="subpage" />
        <main className="min-h-screen bg-white pt-16">
          <div className="mx-auto max-w-2xl px-4 py-24 sm:px-6 text-center">
            <div className="rounded-2xl border border-gray-100 bg-gray-50 p-12">
              <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-green-100">
                <svg className="h-8 w-8 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h1 className="text-2xl font-bold text-gray-900">Vielen Dank für Ihre Anfrage!</h1>
              <p className="mt-4 text-gray-600">
                Wir haben Ihre Anfrage erhalten und werden uns innerhalb von 24 Stunden bei Ihnen melden,
                um die nächsten Schritte zu besprechen.
              </p>
              <Link
                href="/supplier"
                className="mt-8 inline-flex items-center rounded-xl bg-[#0087eb] px-6 py-3 text-sm font-medium text-white transition hover:bg-[#006fc7]"
              >
                Zurück zur Einlieferer-Seite
              </Link>
            </div>
          </div>
        </main>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Header variant="subpage" />
      <main className="min-h-screen bg-white pt-16">
        <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6">
          {/* Header */}
          <div className="mb-12">
            <Link href="/supplier" className="text-sm text-[#0087eb] hover:underline">
              ← Zurück zur Einlieferer-Übersicht
            </Link>
            <p className="mt-6 text-sm font-medium uppercase tracking-widest text-[#0087eb]">
              Einlieferer-Registrierung
            </p>
            <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Partnerzugang beantragen
            </h1>
            <p className="mt-4 text-lg text-gray-600">
              Füllen Sie das Formular aus, um mit uns in Kontakt zu treten.
              Wir melden uns innerhalb von 24 Stunden, um die Zusammenarbeit zu besprechen.
            </p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-8">
            {/* Firmendaten */}
            <div className="rounded-2xl border border-gray-100 bg-gray-50/50 p-6">
              <h2 className="text-lg font-semibold text-gray-900 mb-6">Unternehmensdaten</h2>
              <div className="grid gap-6 sm:grid-cols-2">
                <div className="sm:col-span-2">
                  <label htmlFor="firmenname" className="block text-sm font-medium text-gray-700">
                    Unternehmensname *
                  </label>
                  <input
                    type="text"
                    name="firmenname"
                    id="firmenname"
                    required
                    value={formData.firmenname}
                    onChange={handleChange}
                    className="mt-1 block w-full rounded-lg border border-gray-300 px-4 py-3 text-gray-900 focus:border-[#0087eb] focus:ring-[#0087eb]"
                  />
                </div>
                <div>
                  <label htmlFor="ansprechpartner" className="block text-sm font-medium text-gray-700">
                    Ansprechpartner *
                  </label>
                  <input
                    type="text"
                    name="ansprechpartner"
                    id="ansprechpartner"
                    required
                    value={formData.ansprechpartner}
                    onChange={handleChange}
                    className="mt-1 block w-full rounded-lg border border-gray-300 px-4 py-3 text-gray-900 focus:border-[#0087eb] focus:ring-[#0087eb]"
                  />
                </div>
                <div>
                  <label htmlFor="unternehmensart" className="block text-sm font-medium text-gray-700">
                    Art des Unternehmens *
                  </label>
                  <select
                    name="unternehmensart"
                    id="unternehmensart"
                    required
                    value={formData.unternehmensart}
                    onChange={handleChange}
                    className="mt-1 block w-full rounded-lg border border-gray-300 px-4 py-3 text-gray-900 focus:border-[#0087eb] focus:ring-[#0087eb]"
                  >
                    <option value="">Bitte auswählen</option>
                    <option value="oem">OEM / Hersteller</option>
                    <option value="leasing">Leasinggesellschaft</option>
                    <option value="captive">Captive Bank</option>
                    <option value="autovermietung">Autovermietung</option>
                    <option value="fleet">Fleet Management</option>
                    <option value="sonstige">Sonstige</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Kontaktdaten */}
            <div className="rounded-2xl border border-gray-100 bg-gray-50/50 p-6">
              <h2 className="text-lg font-semibold text-gray-900 mb-6">Kontaktdaten</h2>
              <div className="grid gap-6 sm:grid-cols-2">
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                    E-Mail-Adresse *
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="mt-1 block w-full rounded-lg border border-gray-300 px-4 py-3 text-gray-900 focus:border-[#0087eb] focus:ring-[#0087eb]"
                  />
                </div>
                <div>
                  <label htmlFor="telefon" className="block text-sm font-medium text-gray-700">
                    Telefon *
                  </label>
                  <input
                    type="tel"
                    name="telefon"
                    id="telefon"
                    required
                    value={formData.telefon}
                    onChange={handleChange}
                    className="mt-1 block w-full rounded-lg border border-gray-300 px-4 py-3 text-gray-900 focus:border-[#0087eb] focus:ring-[#0087eb]"
                  />
                </div>
                <div className="sm:col-span-2">
                  <label htmlFor="strasse" className="block text-sm font-medium text-gray-700">
                    Straße und Hausnummer *
                  </label>
                  <input
                    type="text"
                    name="strasse"
                    id="strasse"
                    required
                    value={formData.strasse}
                    onChange={handleChange}
                    className="mt-1 block w-full rounded-lg border border-gray-300 px-4 py-3 text-gray-900 focus:border-[#0087eb] focus:ring-[#0087eb]"
                  />
                </div>
                <div>
                  <label htmlFor="plz" className="block text-sm font-medium text-gray-700">
                    PLZ *
                  </label>
                  <input
                    type="text"
                    name="plz"
                    id="plz"
                    required
                    value={formData.plz}
                    onChange={handleChange}
                    className="mt-1 block w-full rounded-lg border border-gray-300 px-4 py-3 text-gray-900 focus:border-[#0087eb] focus:ring-[#0087eb]"
                  />
                </div>
                <div>
                  <label htmlFor="ort" className="block text-sm font-medium text-gray-700">
                    Ort *
                  </label>
                  <input
                    type="text"
                    name="ort"
                    id="ort"
                    required
                    value={formData.ort}
                    onChange={handleChange}
                    className="mt-1 block w-full rounded-lg border border-gray-300 px-4 py-3 text-gray-900 focus:border-[#0087eb] focus:ring-[#0087eb]"
                  />
                </div>
              </div>
            </div>

            {/* Zusätzliche Infos */}
            <div className="rounded-2xl border border-gray-100 bg-gray-50/50 p-6">
              <h2 className="text-lg font-semibold text-gray-900 mb-6">Flotten-Informationen</h2>
              <div className="space-y-6">
                <div>
                  <label htmlFor="flottengroesse" className="block text-sm font-medium text-gray-700">
                    Geschätzte Flottengröße (Fahrzeuge pro Jahr)
                  </label>
                  <select
                    name="flottengroesse"
                    id="flottengroesse"
                    value={formData.flottengroesse}
                    onChange={handleChange}
                    className="mt-1 block w-full rounded-lg border border-gray-300 px-4 py-3 text-gray-900 focus:border-[#0087eb] focus:ring-[#0087eb]"
                  >
                    <option value="">Bitte auswählen</option>
                    <option value="unter-500">Unter 500 Fahrzeuge</option>
                    <option value="500-2000">500 - 2.000 Fahrzeuge</option>
                    <option value="2000-5000">2.000 - 5.000 Fahrzeuge</option>
                    <option value="5000-10000">5.000 - 10.000 Fahrzeuge</option>
                    <option value="ueber-10000">Über 10.000 Fahrzeuge</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="nachricht" className="block text-sm font-medium text-gray-700">
                    Nachricht (optional)
                  </label>
                  <textarea
                    name="nachricht"
                    id="nachricht"
                    rows={4}
                    value={formData.nachricht}
                    onChange={handleChange}
                    className="mt-1 block w-full rounded-lg border border-gray-300 px-4 py-3 text-gray-900 focus:border-[#0087eb] focus:ring-[#0087eb]"
                    placeholder="Beschreiben Sie kurz Ihre Remarketing-Anforderungen oder stellen Sie Fragen."
                  />
                </div>
              </div>
            </div>

            {/* Submit */}
            <div className="flex items-center justify-between">
              <p className="text-sm text-gray-500">* Pflichtfelder</p>
              <button
                type="submit"
                className="inline-flex items-center rounded-xl bg-[#0087eb] px-8 py-3 text-sm font-medium text-white transition hover:bg-[#006fc7]"
              >
                Anfrage absenden
              </button>
            </div>
          </form>
        </div>
      </main>
      <Footer />
    </>
  );
}
