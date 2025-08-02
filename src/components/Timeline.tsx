
interface TimelineItem {
  id: string;
  title: string;
  organization: string;
  startDate: string;
  endDate: string;
  logo?: string;
  description?: string;
}

interface TimelineProps {
  items: TimelineItem[];
  title: string;
  id: string;
}

const Timeline = ({ items, title, id }: TimelineProps) => {
  return (
    <section id={id} className="py-32 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-montserrat text-5xl md:text-6xl font-bold text-foreground mb-8">
            {title}
          </h2>
          <div className="w-32 h-1 gradient-primary mx-auto rounded-full"></div>
        </div>

        <div className="relative">
          {/* Timeline line connecting logos */}
          <div className="absolute left-8 md:left-16 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-purple-500 to-primary rounded-full opacity-70"></div>
          
          <div className="space-y-12">
            {items.map((item, index) => (
              <div key={item.id} className="relative flex items-center animate-slide-up" style={{ animationDelay: `${index * 0.1}s` }}>
                {/* Logo/Avatar */}
                <div className="relative z-10 flex-shrink-0">
                  <div className="lg:relative lg:left-[30%] w-16 h-16 md:w-20 md:h-20 rounded-full glass-effect flex items-center justify-center hover-lift border-2 border-primary/30">
                    {item.logo ? (
                      <img src={item.logo} alt={item.organization} className="w-10 h-10 md:w-12 md:h-12 rounded-full object-cover" />
                    ) : (
                      <div className="w-10 h-10 md:w-12 md:h-12 gradient-primary rounded-full flex items-center justify-center">
                        <span className="text-white font-bold text-lg">{item.organization.charAt(0)}</span>
                      </div>
                    )}
                  </div>
                </div>

                {/* Content */}
                <div className="ml-8 flex-1">
                  <div className="gradient-card p-6 rounded-2xl shadow-lg hover-lift">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-3">
                      <h3 className="text-xl font-semibold text-foreground mb-1 md:mb-0">{item.title}</h3>
                      <span className="text-sm font-medium text-primary bg-primary/10 px-3 py-1 rounded-full">
                        {item.endDate ? `${item.startDate} - ${item.endDate}` : item.startDate}
                      </span>
                    </div>
                    <p className="text-lg font-medium text-primary mb-3">{item.organization}</p>
                    {item.description && (
                      <p className="text-muted-foreground leading-relaxed">{item.description}</p>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Timeline;
