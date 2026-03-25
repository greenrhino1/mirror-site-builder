import { Instagram, Facebook, Twitter } from "lucide-react";

const LOGO_URL = "https://irp.cdn-website.com/d54730bd/dms3rep/multi/logo-large-3.gif";

const SiteFooter = () => {
  return (
    <footer className="bg-background border-t border-border py-12 px-4">
      <div className="max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
        {/* Logo */}
        <div className="flex justify-center md:justify-start">
          <img src={LOGO_URL} alt="Mobile Gold Dealer" className="h-16 w-auto" />
        </div>

        {/* Contact info */}
        <div className="text-center md:text-left">
          <h4 className="text-lg font-lato italic text-foreground mb-3">Contact</h4>
          <div className="space-y-1 text-sm font-lato">
            <p className="text-gold">MOBILE GOLD DEALER-BUYER</p>
            <p className="text-gold">HIGHLANDS RANCH, CO, USA</p>
            <p className="text-gold">Katy, TX, USA</p>
            <p>
              <span className="text-gold">Tel:</span>{" "}
              <a href="tel:303-968-3222" className="text-foreground hover:text-gold transition-colors">
                303-968-3222
              </a>
            </p>
          </div>
        </div>

        {/* Social links */}
        <div className="flex justify-center md:justify-end items-center gap-4">
          <a
            href="http://instagram.com/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="w-10 h-10 rounded-full border border-foreground flex items-center justify-center text-foreground hover:text-gold hover:border-gold transition-colors"
          >
            <Instagram className="h-5 w-5" />
          </a>
          <a
            href="https://facebook.com/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook"
            className="w-10 h-10 rounded-full border border-foreground flex items-center justify-center text-foreground hover:text-gold hover:border-gold transition-colors"
          >
            <Facebook className="h-5 w-5" />
          </a>
          <a
            href="https://twitter.com/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Twitter"
            className="w-10 h-10 rounded-full border border-foreground flex items-center justify-center text-foreground hover:text-gold hover:border-gold transition-colors"
          >
            <Twitter className="h-5 w-5" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default SiteFooter;
