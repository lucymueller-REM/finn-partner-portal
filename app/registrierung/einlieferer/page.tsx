"use client";

import { useState } from "react";
import Link from "next/link";
import { Header } from "@/components/sections/Header";
import { Footer } from "@/components/sections/Footer";

const GOOGLE_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbzjZ3dAOU46J8RTYEXZ634QOzm4uOZn8vpScy4a06T2XT0Ie0AguBwODhUpTEOjEYwLnQ/exec";

export default function EinliefererRegistrierungPage() {
  const [formData, setFormData] = useState({
    firmenname: "",
    vorname: "",
    nachname: "",
    email: "",
    telefon: "",
    plz: "",
    ort: "",
    land: "Deutschland",
    nachricht: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError("");

    try {
      const response = await fetch(GOOGLE_SCRIPT_URL, {
        method: "POST",
        mode: "no-cors",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          partnerType: "Einlieferer",
          companyName: formData.firmenname,
          firstName: formData.vorname,
          lastName: formData.nachname,
          email: formData.email,
          phone: formData.telefon,
          location: `${formData.plz} ${formData.ort}`,
          country: formData.land,
          message: formData.nachricht,
        }),
      });

      // Da wir no-cors verwenden, können wir die Response nicht lesen
      // Wir nehmen an, dass es erfolgreich war
      setSubmitted(true);
    } catch (err) {
      setError("Es ist ein Fehler aufgetreten. Bitte versuchen Sie es erneut.");
      console.error(err);
    } finally {
      setIsSubmitting(false);
    }
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
                className="mt-8 inline-flex items-center bg-[#0072ea] px-6 py-3 text-sm font-medium text-white transition hover:bg-[#005fc4]"
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
            <Link href="/supplier" className="text-sm text-[#0072ea] hover:underline">
              ← Zurück zur Einlieferer-Übersicht
            </Link>
            <p className="mt-6 text-sm font-medium uppercase tracking-widest text-[#0072ea]">
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
                    className="mt-1 block w-full rounded-lg border border-gray-300 px-4 py-3 text-gray-900 focus:border-[#0072ea] focus:ring-[#0072ea]"
                  />
                </div>
                <div>
                  <label htmlFor="vorname" className="block text-sm font-medium text-gray-700">
                    Vorname *
                  </label>
                  <input
                    type="text"
                    name="vorname"
                    id="vorname"
                    required
                    value={formData.vorname}
                    onChange={handleChange}
                    className="mt-1 block w-full rounded-lg border border-gray-300 px-4 py-3 text-gray-900 focus:border-[#0072ea] focus:ring-[#0072ea]"
                  />
                </div>
                <div>
                  <label htmlFor="nachname" className="block text-sm font-medium text-gray-700">
                    Nachname *
                  </label>
                  <input
                    type="text"
                    name="nachname"
                    id="nachname"
                    required
                    value={formData.nachname}
                    onChange={handleChange}
                    className="mt-1 block w-full rounded-lg border border-gray-300 px-4 py-3 text-gray-900 focus:border-[#0072ea] focus:ring-[#0072ea]"
                  />
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
                    className="mt-1 block w-full rounded-lg border border-gray-300 px-4 py-3 text-gray-900 focus:border-[#0072ea] focus:ring-[#0072ea]"
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
                    className="mt-1 block w-full rounded-lg border border-gray-300 px-4 py-3 text-gray-900 focus:border-[#0072ea] focus:ring-[#0072ea]"
                  />
                </div>
                <div>
                  <label htmlFor="plz" className="block text-sm font-medium text-gray-700">
                    PLZ
                  </label>
                  <input
                    type="text"
                    name="plz"
                    id="plz"
                    value={formData.plz}
                    onChange={handleChange}
                    className="mt-1 block w-full rounded-lg border border-gray-300 px-4 py-3 text-gray-900 focus:border-[#0072ea] focus:ring-[#0072ea]"
                  />
                </div>
                <div>
                  <label htmlFor="ort" className="block text-sm font-medium text-gray-700">
                    Ort
                  </label>
                  <input
                    type="text"
                    name="ort"
                    id="ort"
                    value={formData.ort}
                    onChange={handleChange}
                    className="mt-1 block w-full rounded-lg border border-gray-300 px-4 py-3 text-gray-900 focus:border-[#0072ea] focus:ring-[#0072ea]"
                  />
                </div>
                <div className="sm:col-span-2">
                  <label htmlFor="land" className="block text-sm font-medium text-gray-700">
                    Land
                  </label>
                  <select
                    name="land"
                    id="land"
                    value={formData.land}
                    onChange={handleChange}
                    className="mt-1 block w-full rounded-lg border border-gray-300 px-4 py-3 text-gray-900 focus:border-[#0072ea] focus:ring-[#0072ea]"
                  >
                    <option value="Deutschland">Deutschland</option>
                    <option value="Österreich">Österreich</option>
                    <option value="Schweiz">Schweiz</option>
                    <option value="Niederlande">Niederlande</option>
                    <option value="Belgien">Belgien</option>
                    <option value="Luxemburg">Luxemburg</option>
                    <option value="Frankreich">Frankreich</option>
                    <option value="Italien">Italien</option>
                    <option value="Spanien">Spanien</option>
                    <option value="Polen">Polen</option>
                    <option value="Tschechien">Tschechien</option>
                    <option value="Dänemark">Dänemark</option>
                    <option value="Sonstiges">Sonstiges</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Nachricht */}
            <div className="rounded-2xl border border-gray-100 bg-gray-50/50 p-6">
              <h2 className="text-lg font-semibold text-gray-900 mb-6">Nachricht</h2>
              <div>
                <label htmlFor="nachricht" className="block text-sm font-medium text-gray-700">
                  Ihre Nachricht (optional)
                </label>
                <textarea
                  name="nachricht"
                  id="nachricht"
                  rows={4}
                  value={formData.nachricht}
                  onChange={handleChange}
                  className="mt-1 block w-full rounded-lg border border-gray-300 px-4 py-3 text-gray-900 focus:border-[#0072ea] focus:ring-[#0072ea]"
                  placeholder="Beschreiben Sie kurz Ihre Remarketing-Anforderungen oder stellen Sie Fragen."
                />
              </div>
            </div>

            {/* Error Message */}
            {error && (
              <div className="rounded-lg bg-red-50 border border-red-200 p-4 text-red-700 text-sm">
                {error}
              </div>
            )}

            {/* Submit */}
            <div className="flex items-center justify-between">
              <p className="text-sm text-gray-500">* Pflichtfelder</p>
              <button
                type="submit"
                disabled={isSubmitting}
                className="inline-flex items-center bg-[#0072ea] px-8 py-3 text-sm font-medium text-white transition hover:bg-[#005fc4] disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? "Wird gesendet..." : "Anfrage absenden"}
              </button>
            </div>
          </form>
        </div>
      </main>
      <Footer />
    </>
  );
}
