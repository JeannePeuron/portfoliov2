export default function Footer() {
  return (
    <footer
      className="border-t"
      style={{ backgroundColor: "#592D13", color: "#FDF8F2" }}
    >
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-8 px-4 py-12">
        {/* Navigation */}
        <div className="flex flex-wrap items-center justify-center gap-6 text-sm font-medium">
          <FooterItem label="Accueil" />
          <FooterItem label="À propos" />
          <FooterItem label="Projets" />
          <FooterItem label="Contact" />
          <FooterItem label="Télécharger mon CV" />
        </div>

        {/* Réseaux sociaux */}
        <div className="flex items-center gap-6">
          {/* LinkedIn */}
          <Icon>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 24 24"
              className="h-6 w-6"
            >
              <path d="M4.98 3.5C4.98 4.88 3.86 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5zM.5 8.5h4v15h-4v-15zM8.5 8.5h3.8v2.05h.05c.53-1 1.83-2.05 3.77-2.05 4.03 0 4.78 2.65 4.78 6.1v8.9h-4v-7.9c0-1.88-.03-4.3-2.62-4.3-2.63 0-3.03 2.05-3.03 4.17v8.03h-4v-15z" />
            </svg>
          </Icon>

          {/* GitHub */}
          <Icon>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 24 24"
              className="h-6 w-6"
            >
              <path d="M12 .5C5.73.5.5 5.74.5 12.02c0 5.1 3.29 9.43 7.86 10.96.58.11.79-.25.79-.56v-2.04c-3.2.7-3.87-1.54-3.87-1.54-.53-1.36-1.29-1.72-1.29-1.72-1.05-.72.08-.71.08-.71 1.16.08 1.77 1.2 1.77 1.2 1.03 1.77 2.7 1.26 3.36.96.1-.75.4-1.26.72-1.55-2.55-.29-5.23-1.28-5.23-5.7 0-1.26.45-2.3 1.2-3.11-.12-.3-.52-1.52.11-3.16 0 0 .98-.31 3.2 1.19a11.1 11.1 0 0 1 5.82 0c2.22-1.5 3.2-1.19 3.2-1.19.63 1.64.23 2.86.11 3.16.75.81 1.2 1.85 1.2 3.11 0 4.43-2.69 5.4-5.25 5.68.41.35.77 1.04.77 2.1v3.11c0 .31.21.68.8.56A11.52 11.52 0 0 0 23.5 12C23.5 5.74 18.27.5 12 .5z" />
            </svg>
          </Icon>
        </div>

        {/* Copyright */}
        <p className="text-xs opacity-80">
          © {new Date().getFullYear()} Jeanne PEURON. Tous droits réservés.
        </p>
      </div>
    </footer>
  );
}

function FooterItem({ label }: { label: string }) {
  return <span>{label}</span>;
}

function Icon({ children }: { children: React.ReactNode }) {
  return <span className="cursor-pointer">{children}</span>;
}
