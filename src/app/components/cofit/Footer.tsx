interface FooterLink {
  label: string;
  href: string;
}

interface FooterColumn {
  heading: string;
  links: FooterLink[];
}

interface FooterProps {
  columns: FooterColumn[];
  copyright: string;
}

export default function Footer({ columns, copyright }: FooterProps) {
  const gridCols =
    columns.length === 4 ? "grid-cols-4" : columns.length === 3 ? "grid-cols-3" : "grid-cols-2";

  return (
    <footer className="bg-gradient-to-br from-[#1a2233] to-[#004F51] text-white py-16">
      <div className="max-w-7xl mx-auto px-8">
        <div className={`grid ${gridCols} gap-12 mb-12 max-md:grid-cols-1`}>
          {columns.map((col) => (
            <div key={col.heading}>
              <h4 className="font-bold mb-4 text-lg">{col.heading}</h4>
              <ul className="space-y-2 text-sm opacity-80">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="hover:opacity-100 hover:underline transition-opacity"
                      target={link.href.startsWith('http') ? '_blank' : undefined}
                      rel={link.href.startsWith('http') ? 'noreferrer' : undefined}
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="pt-8 border-t border-white/10 text-center">
          <p className="opacity-50 text-sm">{copyright}</p>
        </div>
      </div>
    </footer>
  );
}
