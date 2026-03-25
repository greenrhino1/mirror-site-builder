import { useState } from "react";

const VAN_IMAGE = "https://lirp.cdn-website.com/d54730bd/dms3rep/multi/opt/mgd-van-2-665w.png";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact" className="bg-background py-16 px-4">
      <div className="max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Contact Form */}
        <div>
          <hr className="w-16 border-muted-foreground mb-6" />
          {!submitted ? (
            <div>
              <h3 className="text-xl font-lato font-bold text-foreground mb-6">Contact Us</h3>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-sm font-lato text-foreground mb-1">Name:</label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full bg-input border border-border px-3 py-2 text-foreground font-lato focus:outline-none focus:border-primary"
                  />
                </div>
                <div>
                  <label className="block text-sm font-lato text-foreground mb-1">Email:</label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full bg-input border border-border px-3 py-2 text-foreground font-lato focus:outline-none focus:border-primary"
                  />
                </div>
                <div>
                  <label className="block text-sm font-lato text-foreground mb-1">Phone:</label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full bg-input border border-border px-3 py-2 text-foreground font-lato focus:outline-none focus:border-primary"
                  />
                </div>
                <div>
                  <label className="block text-sm font-lato text-foreground mb-1">Message:</label>
                  <textarea
                    required
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full bg-input border border-border px-3 py-2 text-foreground font-lato focus:outline-none focus:border-primary resize-none"
                  />
                </div>
                <button
                  type="submit"
                  className="bg-primary text-primary-foreground px-8 py-2 font-lato font-bold uppercase tracking-wider hover:opacity-90 transition-opacity"
                >
                  Send Message
                </button>
              </form>
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-foreground font-lato text-lg">
                Thank you for contacting us.<br />
                We will get back to you as soon as possible.
              </p>
            </div>
          )}
        </div>

        {/* Van image + text */}
        <div className="flex flex-col items-center justify-center">
          <img
            src={VAN_IMAGE}
            alt="Mobile Gold Dealer Van"
            loading="lazy"
            className="w-full max-w-md"
          />
          <h1 className="text-xl md:text-2xl font-lato font-bold text-foreground text-center mt-6">
            We Will Come To Your Location!
          </h1>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
