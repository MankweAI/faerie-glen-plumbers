import Link from "next/link";
import { PhoneIcon } from "@heroicons/react/24/solid";

export default function Header() {
  return (
    <header className="bg-white shadow-sm sticky top-0 z-40">
      <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link
          href="/"
          className="text-2xl font-black text-brand-dark tracking-tight"
        >
          ABC<span className="text-brand-blue">Plumbing</span>
        </Link>
        <a
          href="tel:082-555-1234"
          className="hidden md:flex items-center gap-2 bg-brand-yellow text-brand-dark font-bold py-2 px-5 rounded-full hover:bg-yellow-400 transition-colors"
        >
          <PhoneIcon className="h-4 w-4" />
          082 555 1234
        </a>
      </nav>
    </header>
  );
}
