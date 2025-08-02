
const About = () => {
  const skills = [
    'Product Strategy',
    'User Research',
    'Data Analysis',
    'Programming',
    'Stakeholder Management',
    'Product Roadmapping',
    'Market Research',
    'Cross-functional Leadership'
  ];

  return (
    <section id="about" className="py-20 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-montserrat text-3xl md:text-4xl font-bold text-foreground mb-6">
            About Me
          </h2>
          <div className="w-24 h-1 gradient-primary mx-auto rounded-full"></div>
        </div>

        <div className="grid lg:grid-cols-1 gap-12">
          <div className="animate-slide-up text-center">
            <h3 className="font-montserrat text-2xl md:text-3xl font-semibold text-foreground mb-6">
              Passionate Product Manager
            </h3>
            <p className="text-base md:text-lg text-muted-foreground mb-6 leading-relaxed max-w-4xl mx-auto">
              Being passionate about creating user-centric products that balance business goals and technology, I specialize in translating complex business requirements into user-friendly solutions. My approach combines analytical thinking with creative problem-solving to deliver products that truly make a difference.
            </p>
            <p className="text-base md:text-lg text-muted-foreground mb-10 leading-relaxed max-w-4xl mx-auto">
              I believe in the power of data-driven decisions and user-centered design. My mission is to build products that not only meet business objectives but also create meaningful experiences for users.
            </p>

            <div>
              <h4 className="text-xl md:text-2xl font-semibold text-foreground mb-8">Core Skills</h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 max-w-5xl mx-auto justify-items-center">
                {skills.map((skill, index) => (
                  <div
                    key={index}
                    className="flex items-center p-3 rounded-xl gradient-card hover-lift transition-all duration-300 w-full max-w-xs"
                  >
                    <div className="w-2 h-2 gradient-primary rounded-full mr-3 flex-shrink-0"></div>
                    <span className="text-sm font-medium text-foreground text-center flex-1">{skill}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
