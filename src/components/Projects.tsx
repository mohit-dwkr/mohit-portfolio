import { ExternalLink, Github } from 'lucide-react';

const projects = [
 {
    title: 'Coaching Management System',
    description:
      "A modern, fully dynamic coaching website with secure admin panel, real-time database integration, and scalable architecture designed to simplify institute management.",
    image: 'og-image copy 2.png',
    liveUrl: 'https://coaching-class.netlify.app/',
    sourceUrl: 'https://github.com/mohit-dwkr/coaching',
  },

 {
    title: 'Cafe Shop Website',
    description:
      "A cafe website with secure admin authentication, real-time content management via Supabase, and responsive modern design.",
    image: 'og-image copy.png',
    liveUrl: 'https://cafe-shops.netlify.app/',
    sourceUrl: 'https://github.com/mohit-dwkr/cafe',
  },

  {
    title: 'E-Commerce Platform',
    description:
      'A full-featured online store with cart functionality, Login system, and responsive design.',
    image: 'p-1.png',
    liveUrl: 'https://icommerce-by-mohit.netlify.app/',
    sourceUrl: 'https://github.com/mohit-dwkr/icommerce',
  },
  {
    title: 'i Shop website',
    description:
      'A frontend e commerce website which is made with frontecnd technologies.',
    image: 'p-2.png',
    liveUrl: 'https://ishop-by-mohit.netlify.app/',
    sourceUrl: 'https://github.com/mohit-dwkr/iShop',
  },
  // {
  //   title: 'restaurant website',
  //   description:
  //     'A coffe shop website which is frontend website for cafes nad restaurants.',
  //   image: 'p-3.png',
  //   liveUrl: 'https://coffee-website-by-mohit.netlify.app/',
  //   sourceUrl: 'https://github.com/mohit-dwkr/coffee-website',
  // },
];

const Projects = () => {
  return (
    <section id="projects" className="section-padding">
      <div className="container-narrow">
        {/* Section Header */}
        <div className="text-center mb-16 md:mb-20">
          <span className="text-small uppercase tracking-widest">
            Portfolio
          </span>
          <h2 className="heading-section mt-4">Featured Projects</h2>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <article
              key={project.title}
              className="group card-elevated overflow-hidden opacity-0 animate-fade-in"
              style={{ animationDelay: `${0.15 * index}s` }}
            >
              {/* Project Image */}
              <div className="relative overflow-hidden aspect-[4/3]">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/5 transition-colors duration-300" />
              </div>

              {/* Project Info */}
              <div className="p-6 md:p-8">
                <h3 className="heading-card mb-3">{project.title}</h3>
                <p className="text-small mb-6 leading-relaxed">
                  {project.description}
                </p>

                {/* Links */}
                <div className="flex items-center gap-6">
                  <a
                    href={project.liveUrl}
                    className="inline-flex items-center gap-2 text-sm font-medium text-foreground hover:text-muted-foreground transition-colors"
                  >
                    <ExternalLink className="w-4 h-4" />
                    Live Demo
                  </a>
                  <a
                    href={project.sourceUrl}
                    className="inline-flex items-center gap-2 text-sm font-medium text-foreground hover:text-muted-foreground transition-colors"
                  >
                    <Github className="w-4 h-4" />
                    Source Code
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
