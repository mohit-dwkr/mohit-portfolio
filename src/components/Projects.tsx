import { ExternalLink, Github } from 'lucide-react';

const projects = [
  {
    title: 'E-Commerce Platform',
    description:
      'A full-featured online store with cart functionality, payment integration, and responsive design.',
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop',
    liveUrl: '#',
    sourceUrl: '#',
  },
  {
    title: 'Task Management App',
    description:
      'Collaborative project management tool with real-time updates and intuitive drag-and-drop interface.',
    image: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=600&h=400&fit=crop',
    liveUrl: '#',
    sourceUrl: '#',
  },
  {
    title: 'Analytics Dashboard',
    description:
      'Interactive data visualization dashboard with customizable widgets and export capabilities.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop',
    liveUrl: '#',
    sourceUrl: '#',
  },
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
