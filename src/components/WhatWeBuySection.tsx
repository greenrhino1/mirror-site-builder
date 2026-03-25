const galleryItems = [
  {
    image: "https://irp.cdn-website.com/d54730bd/dms3rep/multi/web-4.jpg",
    caption: "We Buy Gold Nuggets",
  },
  {
    image: "https://irp.cdn-website.com/d54730bd/dms3rep/multi/web-7.jpg",
    caption: "Sell Your Old Gold",
  },
  {
    image: "https://irp.cdn-website.com/d54730bd/dms3rep/multi/web-14.jpg",
    caption: "We Buy Gold Coins & Bars",
  },
  {
    image: "https://irp.cdn-website.com/d54730bd/dms3rep/multi/web-13.jpg",
    caption: "We Buy Gold & Silver",
  },
  {
    image: "https://irp.cdn-website.com/d54730bd/dms3rep/multi/web-11.jpg",
    caption: "We Test & Weigh Your Gold",
  },
  {
    image: "https://irp.cdn-website.com/d54730bd/dms3rep/multi/web-10.jpg",
    caption: "We Buy Gold Jewelry",
  },
];

const WhatWeBuySection = () => {
  return (
    <section id="what-we-buy" className="bg-background py-16 px-4">
      <div className="max-w-[1200px] mx-auto">
        <hr className="w-16 border-muted-foreground mb-6" />

        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-8 gap-4">
          <h2 className="text-2xl md:text-3xl font-lato font-bold text-gold uppercase">
            WHAT WE BUY
          </h2>
          <a
            href="tel:303-968-3222"
            className="inline-block border border-foreground px-6 py-2 text-sm font-lato font-bold text-foreground hover:bg-foreground hover:text-background transition-all uppercase tracking-wider text-center"
          >
            CALL US
          </a>
        </div>

        {/* Two bold text rows */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
          <div className="bg-secondary py-6 px-4">
            <p className="text-center text-xl md:text-2xl font-lato font-bold italic text-foreground">
              WE BUY ALL TYPES OF GOLD
            </p>
          </div>
          <div className="bg-secondary py-6 px-4">
            <p className="text-center text-xl md:text-2xl font-lato font-bold italic text-foreground">
              WE BUY TYPES OF GOLD COINS
            </p>
          </div>
        </div>

        {/* Photo gallery grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-1">
          {galleryItems.map((item, index) => (
            <div key={index} className="relative group overflow-hidden aspect-square">
              <img
                src={item.image}
                alt={item.caption}
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-background/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <p className="text-foreground font-lato font-bold text-lg text-center px-4">
                  {item.caption}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhatWeBuySection;
