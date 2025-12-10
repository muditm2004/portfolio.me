
import { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';

interface FeaturedItem {
  id: string;
  title: string;
  image: string;
  href?: string;
  description?: string;
  caption: string;
}

const Featured = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const featuredItems: FeaturedItem[] = [
    {
      id: '-1',
      title: 'Work done for Scrivano (Florida, United States)',
      image: 'https://res.cloudinary.com/dnakv3uwo/image/upload/v1765395775/Scrivano_s4ftzm.png',
      href: '',
      description: '(Click on the image to view)',
      caption: 'Freelance Project Glimpse'
    },
    {
      id: '0',
      title: 'Work done for Petrone Associates (NY, United States)',
      image: 'https://res.cloudinary.com/dnakv3uwo/image/upload/v1765395734/PetroneAdmin_k1a2xs.png',
      href: '',
      description: '(Click on the image to view)',
      caption: 'Freelance Project Glimpse'
    },
    {
      id: '1',
      title: 'Recommendation from Last Internshpip',
      image: 'https://res.cloudinary.com/dnakv3uwo/image/upload/v1745645811/LoR_FInsol3_q9ijeb.jpg',
      href: '',
      description: '(Click on the image to see full LoR)',
      caption: 'Recommendation'
    },
    {
      id: '2',
      title: 'Recommendation from Atal Incubation Centre',
      image: 'https://res.cloudinary.com/dnakv3uwo/image/upload/v1745645811/lor_yldmpk.jpg',
      href: '',
      description: '(Click on the image to see full LoR)',
      caption: 'Recommendation'
    },
    {
      id: '5',
      title: 'Bank Statement Merger & Analyzer',
      image: 'https://res.cloudinary.com/dnakv3uwo/image/upload/v1745741968/FInProject_yszc99.png',
      href: 'https://medium.com/@mudit.mehtaa/internship-project-bank-statement-merger-analyzer-791f9d072bcc',
      description: '(Click on the image to view case study)',
      caption: 'Internship Project'
    },
    {
      id: '6',
      title: 'Client Lifecycle Management Tool',
      image: 'https://res.cloudinary.com/dnakv3uwo/image/upload/v1748405597/Client_Lifecycle_Management_Tool_fasxqn.png',
      href: 'https://medium.com/@mudit.mehtaa/internship-project-client-lifecycle-management-tool-72d8c250cdfd',
      description: '(Click on the image to view case study)',
      caption: 'Internship Project'
    },
    {
      id: '4',
      title: 'Duolingo: Case Study',
      image: 'https://res.cloudinary.com/dnakv3uwo/image/upload/v1748411145/1_sy97slF73nc3V9KQCaUGyQ_dblze2.webp',
      href: 'https://medium.com/@mudit.mehtaa/how-duolingo-disrupted-the-market-e793c687e326',
      description: '(Click on the image to view case study)',
      caption: 'Product Case Study'
    },
    {
      id: '3',
      title: 'Geeke: Academic Work Case Study ',
      image: 'https://res.cloudinary.com/dnakv3uwo/image/upload/v1748411145/GeekeL_rhfmpv.png',
      href: 'https://medium.com/@mudit.mehtaa/geeke-a-social-media-for-book-lovers-c1766828e537',
      description: '(Click on the image to view case study)',
      caption: 'Product Strategy'
    },
    {
      id: '7',
      title: 'Been the Academic Coordinator of BCA',
      image: 'https://res.cloudinary.com/dnakv3uwo/image/upload/v1736669817/1672878316946_j7gnol.jpg',
      href: '',
      description: 'Selected by showcasing my leadership skills',
      caption: 'Leadership'
    },
    {
      id: '8',
      title: 'Reached Top5 in National Hackathon',
      image: 'https://res.cloudinary.com/dnakv3uwo/image/upload/v1736669742/1707222683699_k9ifyw.jpg',
      href: 'https://www.linkedin.com/posts/muditmehtaa_jklu-mentoringdreams-mentors-activity-7163687295038992384-3GqO?utm_source=share&utm_medium=member_desktop&rcm=ACoAADBcUlEBNNo8wmbn2jlsdhe3PY1Ibs0K7Jg',
      description: '(Click on the image to view post by my university.)',
      caption: 'Team Building and Designing'
    },
    {
      id: '9',
      title: 'Organized Event of the First Tech Fest',
      image: 'https://res.cloudinary.com/dnakv3uwo/image/upload/v1737223319/Blind_Coding_upybsm.png',
      href: '',
      description: '(Click on the image to view)',
      caption: 'Leadership & Management'
    }
  ];

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % featuredItems.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + featuredItems.length) % featuredItems.length);
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <section id="featured" className="py-20 relative bg-gradient-to-br from-background to-muted/30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-montserrat text-3xl md:text-4xl font-bold text-foreground mb-6">
            Featured
          </h2>
          <div className="w-24 h-1 gradient-primary mx-auto rounded-full"></div>
        </div>

        {/* Premium Carousel Container */}
        <div className="relative">
          <PhotoProvider>
            <div className="overflow-hidden rounded-3xl bg-gradient-to-br from-background to-muted/20 border border-primary/10 shadow-2xl">
              <div
                className="flex transition-transform duration-700 ease-out"
                style={{ transform: `translateX(-${currentIndex * 100}%)` }}
              >
                {featuredItems.map((item, index) => (
                  <div
                    key={item.id}
                    className="w-full flex-shrink-0 p-8"
                  >
                    <div className="max-w-4xl mx-auto">
                      {item.href ? (
                        <a
                          href={item.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="relative overflow-hidden rounded-2xl cursor-pointer group"
                        >
                          <img
                            src={item.image}
                            alt={item.title}
                            className="w-full h-80 md:h-96 object-cover transition-transform duration-700 group-hover:scale-105"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                        </a>
                      ) : (
                        <PhotoView src={item.image}>
                          <div className="relative overflow-hidden rounded-2xl cursor-pointer group">
                            <img
                              src={item.image}
                              alt={item.title}
                              className="w-full h-80 md:h-96 object-cover transition-transform duration-700 group-hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                          </div>
                        </PhotoView>
                      )}



                      {/* Always visible premium caption */}
                      <div className="mt-6 text-center">
                        <div className="bg-gradient-to-r from-primary/10 to-purple-500/10 backdrop-blur-sm rounded-2xl p-6 border border-primary/20 shadow-lg">
                          <span className="text-xs font-semibold text-primary/80 uppercase tracking-wider block mb-2">
                            {item.caption}
                          </span>
                          <h3 className="text-2xl font-bold text-foreground mb-3">{item.title}</h3>
                          <p className="text-muted-foreground leading-relaxed max-w-2xl mx-auto">
                            {item.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </PhotoProvider>

          {/* Premium Navigation Arrows */}
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 -translate-y-1/2 p-4 bg-background/90 backdrop-blur-sm border border-primary/30 rounded-full text-foreground hover:bg-primary hover:text-white focus:bg-primary/80 active:bg-primary/80 focus:outline-none transition-all duration-300 shadow-lg"
          >
            <ChevronLeft size={24} />
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 -translate-y-1/2 p-4 bg-background/90 backdrop-blur-sm border border-primary/30 rounded-full text-foreground hover:bg-primary hover:text-white focus:bg-primary/80 active:bg-primary/80 focus:outline-nonetransition-all duration-300 shadow-lg"
          >
            <ChevronRight size={24} />
          </button>

          {/* Premium Dots Indicator */}
          <div className="flex justify-center mt-8 space-x-3">
            {featuredItems.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-4 h-4 rounded-full transition-all duration-300 border-2 ${index === currentIndex
                  ? 'bg-primary border-primary scale-110 shadow-lg'
                  : 'bg-transparent border-muted-foreground/30 hover:border-primary/50 hover:scale-105'
                  }`}
              />
            ))}
          </div>
        </div>
      </div >
    </section >
  );
};

export default Featured;
