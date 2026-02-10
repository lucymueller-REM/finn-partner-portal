export function Footer() {
  return (
    <footer className="border-t border-gray-200 bg-white py-12">
      <div className="mx-auto max-w-screen-2xl px-4 sm:px-6">
        <div className="flex items-center justify-center">
          <p className="text-sm text-gray-500">
            © {new Date().getFullYear()} FINN Partner Portal. B2B Fahrzeughandel.
          </p>
        </div>
      </div>
    </footer>
  );
}
