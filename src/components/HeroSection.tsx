const HeroSection = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center bg-background"
      style={{
        backgroundImage: `url(https://irp.cdn-website.com/d54730bd/dms3rep/multi/landing-pic-3.gif)`,
        backgroundSize: "contain",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundAttachment: "fixed",
      }}
    >
      <div className="absolute inset-0 bg-background/40" />

      <div className="relative z-10 text-center px-4 flex flex-col items-center gap-4">
        {/* Diamond icon */}
        <svg
          viewBox="0 0 22 22"
          className="w-8 h-8 fill-foreground mb-2"
        >
          <path d="M10.73.89l-10,10,10,10,10-10ZM7.46,14.19V7.65H14v6.54Z" />
        </svg>

        <hr className="w-16 border-muted-foreground my-2" />

        <h2
          className="text-3xl md:text-5xl font-lato font-bold uppercase tracking-wide text-gold"
          style={{ textShadow: "0 0 10px rgba(0,0,0,0.8)" }}
        >
          MOBILE GOLD DEALER-BUYER
        </h2>

        <a
          href="#contact"
          className="mt-2 text-sm md:text-base font-bold text-foreground hover:text-gold transition-colors"
          style={{ textShadow: "0 0 8px rgba(0,0,0,0.8)" }}
        >
          GET QUOTE
        </a>
      </div>
    </section>
  );
};

export default HeroSection;
