const HowItWorksSection = () => {
  return (
    <section id="how-it-works" className="bg-background py-16 px-4">
      <div className="max-w-[900px] mx-auto text-center">
        <hr className="w-16 border-muted-foreground mx-auto mb-8" />

        <h1 className="text-xl md:text-3xl font-lato font-bold text-gold uppercase mb-8">
          WE CARRY NO CASH AND MAKE ELECTRONIC PAYMENTS ONLY!
        </h1>

        <p className="text-base md:text-xl font-lato text-foreground leading-relaxed mb-6">
          We come to your location and will examine and test your gold, as you watch. We weigh it on a gold scale and give you an immediate appraisal of your gold's value. We will offer you a fair offer on your gold. If you decide you want to sell your gold to us we will make an electronic payment to you via PayPal, Cash App, &amp; Venmo. We carry no cash or any type of gold, jewelry, or any type of valuables when we come to your location to prevent robbery.
        </p>
        <p className="text-base md:text-xl font-lato text-foreground leading-relaxed mb-8">
          We have been in the gold buying business for over 20 years. We buy your old gold, gold coins, gold jewelry, gold &amp; silver Bullion, dental gold, anything that is gold.
        </p>

        <a
          href="tel:303-968-3222"
          className="text-2xl md:text-4xl font-lato font-bold text-gold hover:underline"
        >
          303-968-3222
        </a>
      </div>
    </section>
  );
};

export default HowItWorksSection;
