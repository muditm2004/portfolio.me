
import { Button } from '@/components/ui/button';
import { Github, Linkedin, Twitter, Mail } from 'lucide-react';
import { FaGithub, FaLinkedin, FaBehance, FaMedium } from 'react-icons/fa';


const Hero = () => {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToProjects = () => {
    const element = document.getElementById('projects');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const socialLinks = [
    { icon: FaGithub, href: 'https://github.com/muditm2004', label: 'GitHub' },
    { icon: FaLinkedin, href: 'https://www.linkedin.com/in/muditmehtaa/', label: 'LinkedIn' },
    { icon: FaBehance, href: 'https://www.behance.net/muditmehta', label: 'Behance' },
    { icon: FaMedium, href: 'https://medium.com/@mudit.mehtaa', label: 'Medium' }
  ];

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden py-16">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-primary/20 rounded-full blur-3xl animate-float-slow"></div>
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-purple-500/20 rounded-full blur-3xl animate-float-slow" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/2 w-48 h-48 bg-indigo-500/20 rounded-full blur-3xl animate-float-slow" style={{ animationDelay: '4s' }}></div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="lg:mt-4 flex flex-col lg:flex-row gap-8 items-center">
          {/* Profile Image */}
          <div className="order-1 lg:order-1 flex justify-center lg:justify-start">
            <div className="w-48 h-48 relative">
              <img
                src="https://res.cloudinary.com/dnakv3uwo/image/upload/v1748378107/Brandimg_uxoki9.jpg"
                alt="Mudit Mehta"
                className="w-full h-full rounded-full object-cover border-4 p-1"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent rounded-full"></div>
            </div>
          </div>

          {/* Hero Content */}
          
          <div className="order-1 lg:order-2 text-center lg:text-left animate-fade-in">
            <h1 className="font-montserrat text-4xl md:text-6xl font-bold mb-6">
              <span className="block text-foreground mb-2">Hi, I'm</span>
              <span className="text-gradient animate-gradient-infinite">Mudit Mehta</span>
            </h1>
          </div>
        </div>
        <div className="order-1 flex flex-col items-center mt-6 text-center lg:text-left animate-fade-in">
            <p className="text-lg md:text-xl text-muted-foreground mb-8 font-light max-w-2xl leading-relaxed">
              Product Manager crafting exceptional digital experiences through strategic thinking, 
              data-driven decisions, and user-centered design
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-center mb-12">
              <Button 
                onClick={scrollToContact} 
                className="gradient-primary text-white px-8 py-3 text-base font-medium hover-lift rounded-xl"
              >
                Get In Touch
              </Button>
              <Button 
                onClick={scrollToProjects}
                variant="outline" 
                className="border-primary/50 text-primary hover:bg-primary/10 px-8 py-3 text-base font-medium rounded-xl border-2"
              >
                View My Work
              </Button>
            </div>

            {/* Social Links */}
            <div className="flex justify-center lg:justify-start space-x-6">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-xl glass-effect hover-lift transition-all duration-300 group"
                  aria-label={social.label}
                >
                  <social.icon className="w-6 h-6 text-muted-foreground group-hover:text-primary transition-colors" />
                </a>
              ))}
            </div>
          </div>
        </div>
      
    </section>
  );
};

export default Hero;
