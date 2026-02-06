import { Github, Linkedin, Instagram, Facebook, MessageSquare } from 'lucide-react';

const processSteps = [
  { number: '01', title: 'Plan', description: 'Discussing your goals and vision.' },
  { number: '02', title: 'Design', description: 'Creating a modern, custom look.' },
  { number: '03', title: 'Build', description: 'Coding with the latest technology.' },
  { number: '04', title: 'Launch', description: 'Final testing and going live.' },
];

const socialLinks = [
  { name: 'LinkedIn', icon: Linkedin, url: 'https://www.linkedin.com/in/mohit-a83472367?utm_source=share_via&utm_content=profile&utm_medium=member_android', color: 'hover:bg-[#0077b5] hover:text-white' },
  { name: 'GitHub', icon: Github, url: 'https://github.com/mohit-dwkr', color: 'hover:bg-[#333] hover:text-white' },
  { name: 'Instagram', icon: Instagram, url: 'https://instagram.com/code_by_mohit', color: 'hover:bg-[#e1306c] hover:text-white' },
  { name: 'Facebook', icon: Facebook, url: 'https://www.facebook.com/share/1GrGjwDjxm/', color: 'hover:bg-[#1877f2] hover:text-white' },
  { name: 'Discord', icon: MessageSquare, url: 'https://discord.gg/mohit_dwkr', color: 'hover:bg-[#5865F2] hover:text-white' },
];

const About = () => {
  return (
    <section id="about" className="section-padding bg-secondary/10"> {/* ID add ki hai navigation ke liye */}
      <div className="container-narrow">
        
        {/* Section Header */}
        <div className="text-center mb-16 md:mb-20">
          <span className="text-small uppercase tracking-widest text-muted-foreground">My Approach</span>
          <h2 className="heading-section mt-4 text-3xl md:text-4xl font-bold">How I Work</h2>
        </div>

        {/* Philosophy Text */}
        <div className="max-w-3xl mx-auto text-center mb-24">
          <p className="text-body text-lg md:text-xl leading-relaxed text-zinc-600 italic">
            "I don't just build websites; I build digital solutions that actually work. I focus on creating clean designs backed by solid code, ensuring your site looks professional today and stays reliable as your business grows tomorrow."
          </p>
        </div>

        {/* Work Process Cards */}
        <div className="mb-28">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <div
                key={step.number}
                className="relative p-6 rounded-2xl border border-transparent hover:border-zinc-200 transition-all duration-300 group text-center opacity-0 animate-fade-in"
                style={{ animationDelay: `${0.1 * index}s` }}
              >
                <div className="text-5xl md:text-6xl font-black text-zinc-100 group-hover:text-zinc-200 transition-colors mb-4">
                  {step.number}
                </div>
                <h3 className="text-xl font-bold mb-2 text-zinc-900">{step.title}</h3>
                <p className="text-sm text-zinc-500 leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Social Links Section */}
        <div className="pt-10 border-t border-zinc-100">
          <p className="text-center text-xs font-semibold text-muted-foreground mb-8 uppercase tracking-[0.2em]">
            Let's Connect
          </p>
          
         <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 max-w-4xl mx-auto">
  {socialLinks.map((social) => (
    <a
      key={social.name}
      href={social.url}
      target="_blank"
      rel="noopener noreferrer"
      className={`group flex flex-col items-center justify-center p-8 rounded-3xl border border-zinc-100 bg-white transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 ${social.color}`}
    >
      <social.icon className="w-8 h-8 mb-3 transition-transform duration-300 group-hover:scale-125" />
      <span className="text-xs font-bold tracking-widest uppercase opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        {social.name}
      </span>
    </a>
  ))}
</div>
        </div>
      </div>
    </section>
  );
};

export default About;