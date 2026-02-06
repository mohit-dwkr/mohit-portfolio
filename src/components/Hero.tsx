import profilePhoto from '@/assets/mohit-photo.jpg';

const Hero = () => {
  const handleNavClick = (e: React.MouseEvent<HTMLButtonElement>, href: string) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleWhatsApp = () => {
    const phone = '919630955951'; // Aapka number
    const message = encodeURIComponent("Hello Mohit! I saw your portfolio and I'd like to connect.");
    window.open(`https://wa.me/${phone}?text=${message}`, '_blank');
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center section-padding pt-32"
    >
      <div className="container-narrow">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Text Content */}
          <div className="order-2 lg:order-1 space-y-8">
            <div
              className="opacity-0 animate-fade-in"
              style={{ animationDelay: '0.1s' }}
            >
              <span className="text-small uppercase tracking-widest">
                Full Stack Developer
              </span>
            </div>

            <h1
              className="heading-display opacity-0 animate-fade-in leading-[1.1] tracking-tight mb-4"
              style={{ animationDelay: '0.2s' }}
            >
              I build modern websites
              <br />
              <span className="text-muted-foreground italic font-normal">
                and systems for businesses & individuals.
              </span>
            </h1>

            <p
              className="text-body max-w-lg opacity-0 animate-fade-in text-zinc-500 leading-snug mt-2"
              style={{ animationDelay: '0.3s' }}
            >
              Hi, I'm <span className="font-semibold text-zinc-900">Mohit</span>. I build clean, fast, and professional websites that help your business grow and look great on every screen.
            </p>

            <div
              className="flex flex-wrap gap-4 opacity-0 animate-fade-in"
              style={{ animationDelay: '0.4s' }}
            >
              <button
                onClick={(e) => handleNavClick(e, '#projects')}
                className="btn-primary"
              >
                View Projects
              </button>
              <button
                onClick={handleWhatsApp}
                className="btn-secondary"
              >
                WhatsApp Me
              </button>
            </div>
          </div>

          {/* Profile Image */}
          <div
            className="order-1 lg:order-2 flex justify-center lg:justify-end opacity-0 animate-scale-in"
            style={{ animationDelay: '0.3s' }}
          >
            <div className="relative">
              <div className="w-72 h-72 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-3xl overflow-hidden">
                <img
                  src={profilePhoto}
                  alt="Alex Chen - Full Stack Developer"
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Decorative elements */}
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-secondary rounded-2xl -z-10" />
              <div className="absolute -top-4 -left-4 w-16 h-16 border-2 border-border rounded-xl -z-10" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
