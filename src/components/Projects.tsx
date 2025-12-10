
import { ExternalLink, Github } from 'lucide-react';

interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  demoUrl?: string;
  githubUrl?: string;
}

const Projects = () => {
  const projects: Project[] = [
    {
      id: '1',
      title: 'How Duolingo Disrupted The market',
      description: 'A complete case study on Duolingo, the language learning platform.',
      image: 'https://res.cloudinary.com/dnakv3uwo/image/upload/v1748411145/1_sy97slF73nc3V9KQCaUGyQ_dblze2.webp',
      technologies: ['Product Research', 'User Research', 'Market Research'],
      demoUrl: 'https://medium.com/@mudit.mehtaa/how-duolingo-disrupted-the-market-e793c687e326',
    },
    {
      id: '2',
      title: 'Geeke - A Social Media For Book Lovers',
      description: 'Academic Case Study — Product Strategy, User Research & Business Model Development',
      image: 'https://res.cloudinary.com/dnakv3uwo/image/upload/v1748411145/GeekeL_rhfmpv.png',
      technologies: ['Product Thinking', 'Market Analysis', 'SWOT & Competitive Analysis', 'User Research', 'User Persona Creation'],
      demoUrl: 'https://medium.com/@mudit.mehtaa/geeke-a-social-media-for-book-lovers-c1766828e537',
    },
    {
      id: '2.5',
      title: 'LMS For Petrone Associates (NY, USA)',
      description: 'Led product management for the project of an international freelance client, Petrone Associates, a healthcare compliance company. I gathered requirements and prioritized features for a web-based LMS built with Anvil. Oversaw secure user authentication, role-based administration, course and test workflows, and structured navigation, ensuring an efficient and intuitive learning experience.',
      image: 'https://res.cloudinary.com/dnakv3uwo/image/upload/v1765395734/PetroneAdmin_k1a2xs.png',
      technologies: ['Product Thinking', 'Prioritization', 'Stakeholder Management', 'Programming'],
      demoUrl: '',
    },
    {
      id: '2.6',
      title: 'Scrivano (Florida, USA)',
      description: 'Managed an AI-powered note generation app for an international client. Coordinated requirements, did market research, prioritized features, and collaborated for smooth delivery',
      image: 'https://res.cloudinary.com/dnakv3uwo/image/upload/v1765395775/Scrivano_s4ftzm.png',
      technologies: ['Product Thinking', 'Prioritization', 'Market Research', 'Stakeholder Management', 'Programming'],
      demoUrl: '',
    },
    
    {
      id: '3',
      title: 'Internship Project - Bank Statement Merger & Analyzer',
      description: 'Case Study on Internship Project that enhanced the efficiency and reduced time',
      image: 'https://res.cloudinary.com/dnakv3uwo/image/upload/v1745741968/FInProject_yszc99.png',
      technologies: ['Problem Solving', 'Prioritization', 'Product Roadmapping', 'Stakeholder Management', 'Python programming'],
      demoUrl: 'https://medium.com/@mudit.mehtaa/internship-project-bank-statement-merger-analyzer-791f9d072bcc',
    },
    {
      id: '4',
      title: 'Client Lifecycle Management Tool ',
      description: 'Case Study on Internship Project that managed workflows of multiple stakeholders, and enhanced their efficiency',
      image: 'https://res.cloudinary.com/dnakv3uwo/image/upload/v1748405597/Client_Lifecycle_Management_Tool_fasxqn.png',
      technologies: ['Problem Solving', 'Prioritization', 'Product Roadmapping', 'Stakeholder management', 'Web Development'],
      demoUrl: 'https://medium.com/@mudit.mehtaa/internship-project-client-lifecycle-management-tool-72d8c250cdfd',
    }
  ];

  return (
    <section id="projects" className="py-32 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-montserrat text-5xl md:text-6xl font-bold text-foreground mb-8">
            Projects
          </h2>
          <div className="w-32 h-1 gradient-primary mx-auto rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className="gradient-card rounded-3xl shadow-lg overflow-hidden hover-lift animate-slide-up border border-primary/20"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative overflow-hidden group">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>

              <div className="p-8">
                <h3 className="font-montserrat text-2xl font-semibold text-foreground mb-3">
                  {project.title}
                </h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="mb-6">
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 text-sm font-medium bg-primary/10 text-primary rounded-full border border-primary/20"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Action buttons */}
                <div className="flex space-x-4">
                  {project.demoUrl && (
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 gradient-primary text-white rounded-lg hover:shadow-lg transition-all duration-300"
                    >
                      <ExternalLink size={16} />
                      View Case Study
                    </a>
                  )}
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 border border-primary/30 text-primary rounded-lg hover:bg-primary/10 transition-all duration-300"
                    >
                      <Github size={16} />
                      Code
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="flex justify-center">
  <a href="https://medium.com/@mudit.mehtaa/list/portfolio-projects-c8e8ed862a03" className="mt-8 text-sm text-gray-500 hover:text-gray-700 hover:underline transition-all duration-300">
    View all projects
  </a>
</div>
    </section>
  );
};

export default Projects;
