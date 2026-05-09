import Image from "next/image";

export default function Navbar() {
  return (
    <header className="flex items-center justify-between px-8 py-6 border-b border-[#1E3A8A] bg-[#02154A] sticky top-0 z-50">

      {/* Logo */}
      <div className="flex items-center gap-4">

        <Image
          src="/logo.svg"
          alt="Global Investissement Logo"
          width={80}
          height={80}
          className="object-contain"
        />

        <div>
          <h1 className="text-3xl font-bold tracking-wide text-white">
            GLOBAL
          </h1>

          <p className="text-[#D4A63A] tracking-[4px] text-sm">
            INVESTISSEMENT
          </p>
        </div>
      </div>

      {/* Menu */}
      <nav className="hidden md:flex gap-8 text-lg">
        <a href="/" className="hover:text-[#D4A63A] transition-colors">
          Accueil
        </a>

        <a href="/investissements" className="hover:text-[#D4A63A] transition-colors">
          Investissements
        </a>

        <a href="/pricing" className="hover:text-[#D4A63A] transition-colors">
          Tarifs
        </a>

        <a href="/success-stories" className="hover:text-[#D4A63A] transition-colors">
          Succès
        </a>

        <a href="/faq" className="hover:text-[#D4A63A] transition-colors">
          Support
        </a>
      </nav>
    </header>
  );
}