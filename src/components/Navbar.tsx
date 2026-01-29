import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header
      className="sticky top-0 z-50 border-b"
      style={{ backgroundColor: "#FDF8F2", borderColor: "#D9A78C" }}
    >
      <div className="relative mx-auto flex max-w-7xl items-center px-4 py-3">
        {/* Logo à gauche */}
        <span className="text-lg font-semibold" style={{ color: "#592D13" }}>
          Jeanne
        </span>

        {/* Menu centré (desktop) */}
        <div className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-6 md:flex">
          <NavItem label="Accueil" />
          <NavItem label="À propos" />
          <NavItem label="Projets" />
          <NavItem label="Contact" />
        </div>

        {/* Bouton CV à droite */}
        <div className="ml-auto hidden md:block">
          <button
            className="rounded-md px-4 py-2 text-sm font-medium"
            style={{ backgroundColor: "#D9A78C", color: "#FDF8F2" }}
          >
            Télécharger mon CV
          </button>
        </div>

        {/* Bouton menu mobile */}
        <button
          onClick={() => setOpen(!open)}
          className="ml-auto md:hidden"
          style={{ color: "#592D13" }}
          aria-label="Menu"
        >
          ☰
        </button>
      </div>

      {/* Menu mobile (tout empilé) */}
      {open && (
        <div className="flex flex-col gap-4 px-4 pb-4 md:hidden">
          <NavItem label="Accueil" />
          <NavItem label="À propos" />
          <NavItem label="Projets" />
          <NavItem label="Contact" />

          <button
            className="rounded-md px-4 py-2 text-sm font-medium"
            style={{ backgroundColor: "#D9A78C", color: "#FDF8F2" }}
          >
            Télécharger mon CV
          </button>
        </div>
      )}
    </header>
  );
}

function NavItem({ label }: { label: string }) {
  return (
    <span className="text-sm font-medium" style={{ color: "#592D13" }}>
      {label}
    </span>
  );
}
