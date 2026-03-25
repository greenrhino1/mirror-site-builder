import { useState } from "react";
import { Menu, X, Phone } from "lucide-react";

const LOGO_URL = "https://irp.cdn-website.com/d54730bd/dms3rep/multi/logo-large-3.gif";

const navLinks = [
  { label: "HOME", href: "#home" },
  { label: "THIS HOW IT WORKS", href: "#how-it-works" },
  { label: "WHAT WE BUY", href: "#what-we-buy" },
  { label: "CONTACT", href: "#contact" },
  { label: "GET QUOTE", href: "#contact" },
];

const SiteHeader = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background border-b border-border">
      <div className="max-w-[1400px] mx-auto flex items-center justify-between py-2 px-4">
        <a href="#home">
          <img src={LOGO_URL} alt="Mobile Gold Dealer" className="h-10 md:h-14 w-auto" />
        </a>

        <ul className="hidden lg:flex items-center gap-6">
          {navLinks.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                className="text-xs font-lato font-bold tracking-wider text-foreground hover:text-gold transition-colors uppercase"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href="tel:303-968-3222"
          className="hidden lg:flex items-center gap-2 border border-foreground px-6 py-2 text-sm font-lato font-bold text-foreground hover:bg-foreground hover:text-background transition-all uppercase tracking-wider"
        >
          CALL US
        </a>

        <button onClick={() => setOpen(!open)} className="lg:hidden text-foreground">
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {open && (
        <div className="lg:hidden bg-background border-t border-border px-4 pb-4">
          <ul className="flex flex-col gap-4 pt-4">
            {navLinks.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="text-sm font-lato font-bold tracking-wider text-foreground uppercase"
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li>
              <a
                href="tel:303-968-3222"
                className="flex items-center gap-2 text-sm font-lato font-bold text-foreground"
              >
                <Phone className="h-4 w-4" />
                303-968-3222
              </a>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default SiteHeader;
