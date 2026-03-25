import { useState } from "react";
import { Menu, X, Phone } from "lucide-react";
import mgLogo from "@/assets/mg-logo.png";

const navLinks = [
  { label: "HOME", href: "#home" },
  { label: "HOW IT WORKS", href: "#how-it-works" },
  { label: "WHAT WE BUY", href: "#what-we-buy" },
  { label: "CONTACT", href: "#contact" },
  { label: "GET QUOTE", href: "#contact" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur border-b border-border">
      <div className="container mx-auto flex items-center justify-between py-3 px-4">
        <a href="#home">
          <img src={mgLogo} alt="Mobile Gold Dealer" className="h-12 w-auto" />
        </a>

        {/* Desktop nav */}
        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                className="text-sm font-body font-medium tracking-wider text-gold hover:text-gold-light transition-colors"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href="tel:303-968-3222"
          className="hidden md:flex items-center gap-2 border border-gold px-5 py-2 text-sm font-body font-semibold text-primary hover:bg-primary hover:text-primary-foreground transition-all"
        >
          <Phone className="h-4 w-4" />
          CALL US
        </a>

        {/* Mobile toggle */}
        <button onClick={() => setOpen(!open)} className="md:hidden text-gold">
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-background border-t border-border px-4 pb-4">
          <ul className="flex flex-col gap-4 pt-4">
            {navLinks.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="text-sm font-body font-medium tracking-wider text-gold"
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li>
              <a
                href="tel:303-968-3222"
                className="flex items-center gap-2 text-sm font-body font-semibold text-primary"
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

export default Navbar;
