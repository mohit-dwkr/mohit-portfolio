import { Linkedin, Github, Instagram } from 'lucide-react';

const processSteps = [
  { number: '01', title: 'Discover', description: 'Understanding your vision' },
  { number: '02', title: 'Design', description: 'Crafting the experience' },
  { number: '03', title: 'Develop', description: 'Building with precision' },
  { number: '04', title: 'Deploy', description: 'Launching to the world' },
];

const socialLinks = [
  { name: 'LinkedIn', icon: Linkedin, url: 'https://linkedin.com' },
  { name: 'GitHub', icon: Github, url: 'https://github.com' },
  { name: 'Instagram', icon: Instagram, url: 'https://instagram.com' },
];

const About = () => {
  return (
    <section className="section-padding bg-secondary/30">
      <div className="container-narrow">
        {/* Section Header */}
        <div className="text-center mb-16 md:mb-20">
          <span className="text-small uppercase tracking-widest">About</span>
          <h2 className="heading-section mt-4">Work Philosophy</h2>
        </div>

        {/* Philosophy Text */}
        <div className="max-w-3xl mx-auto text-center mb-20">
          <p className="text-body text-lg md:text-xl leading-relaxed">
            I believe that great digital experiences are born at the
            intersection of thoughtful design and robust engineering. Every
            project is an opportunity to create something meaningful—solutions
            that not only look exceptional but perform flawlessly and scale
            effortlessly.
          </p>
        </div>

        {/* Work Process */}
        <div className="mb-20">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
            {processSteps.map((step, index) => (
              <div
                key={step.number}
                className="text-center opacity-0 animate-fade-in"
                style={{ animationDelay: `${0.1 * index}s` }}
              >
                <div className="text-4xl md:text-5xl font-light text-border mb-4">
                  {step.number}
                </div>
                <h3 className="heading-card mb-2">{step.title}</h3>
                <p className="text-small">{step.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Social Links */}
        <div className="flex justify-center gap-6">
          {socialLinks.map((social) => (
            <a
              key={social.name}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:text-foreground hover:border-foreground transition-all duration-300"
              aria-label={social.name}
            >
              <social.icon className="w-5 h-5" />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
