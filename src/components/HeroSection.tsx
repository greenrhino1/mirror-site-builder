import heroImg from "@/assets/hero-gold.jpg";
import mgLogo from "@/assets/mg-logo.png";

const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <img
        src={heroImg}
        alt="Gold bars and coins"
        className="absolute inset-0 w-full h-full object-cover"
        width={1920}
        height={1080}
      />
      <div className="absolute inset-0 bg-background/60" />

      {/* Content */}
      <div className="relative z-10 text-center px-4 flex flex-col items-center gap-6">
        <img src={mgLogo} alt="MG Logo" className="w-48 md:w-72 h-auto drop-shadow-2xl" />
        <h1 className="text-3xl md:text-5xl lg:text-6xl font-heading font-bold text-gold-gradient uppercase tracking-wide">
          Mobile Gold Dealer-Buyer
        </h1>
        <a
          href="#contact"
          className="mt-4 inline-block border-2 border-gold px-10 py-3 text-sm font-body font-semibold tracking-widest text-primary hover:bg-primary hover:text-primary-foreground transition-all"
        >
          GET QUOTE
        </a>
      </div>
    </section>
  );
};

export default HeroSection;
