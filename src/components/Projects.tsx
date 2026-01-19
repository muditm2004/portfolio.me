
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
      description: 'A **complete product case study** on Duolingo focused on gamification, competition, and user engagement.',
      image: 'https://res.cloudinary.com/dnakv3uwo/image/upload/v1748411145/1_sy97slF73nc3V9KQCaUGyQ_dblze2.webp',
      technologies: ['Product Research', 'User Research', 'Market Research'],
      demoUrl: 'https://medium.com/@mudit.mehtaa/how-duolingo-disrupted-the-market-e793c687e326',
    },
    {
      id: '2',
      title: 'Geeke - A Social Media For Book Lovers',
      description: 'Worked 0→1 on a social media platform by conducting **user research** with active readers and writers to identify key pain points and opportunities. Also, **translated those insights into product requirements** while supporting product strategy through market, competitive, and SWOT analysis. This work informed the Lean Canvas, business model, and overall product direction.',
      image: 'https://res.cloudinary.com/dnakv3uwo/image/upload/v1748411145/GeekeL_rhfmpv.png',
      technologies: ['Product Thinking', 'Market Analysis', 'SWOT & Competitive Analysis', 'User Research', 'User Persona Creation'],
      demoUrl: 'https://medium.com/@mudit.mehtaa/geeke-a-social-media-for-book-lovers-c1766828e537',
    },
    {
       id: '2.01',
      title: 'Camvas – AI-Powered Gesture Drawing Tool',
      description: 'Co-created **Camvas**, an AI-powered, webcam-based drawing tool that turns **natural hand gestures into real-time annotations for virtual meetings**. Conducted market research identifying a growing need for intuitive remote collaboration tools and leveraged AI for shape correction, enabling seamless idea-sharing without a mouse or pen.',
      image: 'https://res.cloudinary.com/dnakv3uwo/image/upload/v1768285595/1747130678420_rcfy9w.jpg',
      technologies: ['Product Thinking', 'Market Analysis', 'Feature Prioritization', 'User Research'],
      demoUrl: 'https://www.linkedin.com/posts/muditmehtaa_announcement-ai-productthinking-activity-7327997201886969856-PAJ-?utm_source=share&utm_medium=member_desktop&rcm=ACoAADBcUlEBNNo8wmbn2jlsdhe3PY1Ibs0K7Jg',
    },
    {
      id: '2.1',
      title: 'IoT-Based Gesture & Voice-Controlled Car',
      description: 'Led the development of a **gesture and voice-controlled car**, coordinating a cross-functional team while managing project timelines and technical implementation. Developed a web app with **Anvil** to process commands, integrated with **NodeMCU** and **Arduino NANO** for real-time car control, overcoming hardware and software challenges to deliver a functional prototype',
      image: 'https://res.cloudinary.com/dnakv3uwo/image/upload/v1736686934/Car_xbztut.png',
      technologies: ['Product Management', 'Technical Implementation', 'Team Coordination', 'Problem Solving', 'Prototyping'],
      demoUrl: 'https://www.linkedin.com/posts/muditmehtaa_hands-on-learning-learning-just-from-books-activity-7170078776708591616-Ullc?utm_source=share&utm_medium=member_desktop&rcm=ACoAADBcUlEBNNo8wmbn2jlsdhe3PY1Ibs0K7Jg',
    },
    {
      id: '2.2',
      title: 'Tabletop Manager for Content Creators',
      description: 'Led the design and development of the **Tabletop Manager**, a multifunctional desk organizer solving workspace clutter and organization issues for content creators. Applied **design thinking**, created a **3D-printed prototype**, and incorporated features like cable management, device holders, headphone stand, and pen organizer. Translated user insights into a tangible, practical product.',
      image: 'https://res.cloudinary.com/dnakv3uwo/image/upload/v1736699228/18a18901-25a5-48f0-8a7f-e049ecb41f3e.png',
      technologies: ['User-Centered Design', 'Design Thinking', 'Team Coordination', 'Problem Solving', 'Prototyping'],
      demoUrl: 'https://www.linkedin.com/posts/muditmehtaa_table-top-manager-activity-7238539075916308480-yUmk?utm_source=share&utm_medium=member_desktop&rcm=ACoAADBcUlEBNNo8wmbn2jlsdhe3PY1Ibs0K7Jg',
    },
    
    
    {
      id: '2.5',
      title: 'LMS For Petrone Associates (NY, USA)',
      description: 'Led product management for the project of an international freelance client, **Petrone Associates**, a healthcare compliance company. I **gathered requirements and prioritized features for a web-based LMS** built with Anvil.',
      image: 'https://res.cloudinary.com/dnakv3uwo/image/upload/v1765395734/PetroneAdmin_k1a2xs.png',
      technologies: ['Product Thinking', 'Prioritization', 'Stakeholder Management', 'Programming'],
      demoUrl: '',
    },
    {
      id: '2.6',
      title: 'Scrivano (Florida, USA)',
      description: 'Managed an **AI-powered note generation app** for an international client. Coordinated requirements, did market research, prioritized features, and collaborated for smooth delivery',
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

  function renderBoldText(text: string) {
  const parts = text.split("**"); // Split by ** markers
  return parts.map((part, index) =>
    index % 2 === 1 ? <strong key={index}>{part}</strong> : part
  );
}


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
                  {renderBoldText(project.description)}
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
