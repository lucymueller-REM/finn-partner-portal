import Image from "next/image";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t border-gray-200 bg-white py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
          <Link href="/">
            <Image
              src="/FINN_Logo_Black_Test_zwei.jpg"
              alt="FINN"
              width={100}
              height={32}
              className="h-8 w-auto"
            />
          </Link>
          <p className="text-sm text-gray-500">
            © {new Date().getFullYear()} FINN Partner Portal. B2B Fahrzeughandel.
          </p>
        </div>
      </div>
    </footer>
  );
}
