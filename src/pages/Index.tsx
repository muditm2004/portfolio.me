
import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Featured from '@/components/Featured';
import Timeline from '@/components/Timeline';
import Projects from '@/components/Projects';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

const Index = () => {
  const experienceData = [
    {
      id: '1',
      title: 'Internal Product Management Intern',
      organization: 'Finsol',
      startDate: 'Dec 2024',
      endDate: 'May 2024',
      logo: 'https://res.cloudinary.com/dnakv3uwo/image/upload/v1745739875/finlogo_qwyoyu.png',
      description: 'Led the creation of 2 tools, one of which reduced the 2-day work to 15 minutes, and another streamlined the client lifecycle, ultimately enhancing the efficiency and productivity.'
    },
    {
      id: '2',
      title: 'Writer',
      organization: 'Medium',
      startDate: 'Oct 2023',
      endDate: 'Present',
      logo: 'https://res.cloudinary.com/dnakv3uwo/image/upload/v1737734798/medium-round-icon_htbsml.webp',
      description: 'Writing around Product, Business, Tech and UX. Got first publication in just 2nd article.'
    },
    {
      id: '3',
      title: 'Design Coordinator',
      organization: 'CodeHub- Competitive Programming Club of JKLU',
      startDate: 'Oct 2023',
      endDate: 'Sep 2024',
      logo: 'https://res.cloudinary.com/dnakv3uwo/image/upload/v1737730270/codehub_ypxnq7.png',
      description: 'Led the design team to deliver visually engaging posters, event banners, and social media graphics.'
    },
    {
      id: '4',
      title: 'BCA Academic Coordinator',
      organization: 'JK Lakshmipat University (JKLU)',
      startDate: 'Nov 2022',
      endDate: 'May 2023',
      logo: 'https://res.cloudinary.com/dnakv3uwo/image/upload/v1736669123/JKLU_bgvkdy.png',
      description: 'Facilitated seamless communication between faculty and students by organizing schedules, managing academic resources, and ensuring adherence to course timelines.'
    }
  ];

  const educationData = [
    {
      id: '1',
      title: 'BCA (Bachelors of Computer Applications)',
      organization: 'JK Lakshmipat University',
      startDate: 'Aug 2022',
      endDate: 'Jun 2025',
      logo: 'https://res.cloudinary.com/dnakv3uwo/image/upload/v1736669123/JKLU_bgvkdy.png',
      description: 'Selected as the Academic Coordinator of BCA.'
    },
    {
      id: '2',
      title: 'Higher Secondary',
      organization: 'Subodh Public School',
      startDate: '2022 Passout',
      endDate: '',
      logo: 'https://res.cloudinary.com/dnakv3uwo/image/upload/v1736669178/images_xqll7h.png',
      description: 'In the student council along with being the Vice Captain of my house. Qualified the regional and national level "French Word Power" in 2019 and backed 2nd Position in Inter-school Tech fest organized by MGD School, Jaipur in 2021. '
    }
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <About />
      <Featured />
      <Timeline items={experienceData} title="Experience" id="experience" />
      <Timeline items={educationData} title="Education" id="education" />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
