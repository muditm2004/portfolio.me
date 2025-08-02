
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { FiMail, FiPhone, FiMapPin, FiSend } from 'react-icons/fi';
import { FaGithub, FaLinkedin, FaTwitter, FaBehance, FaMedium } from 'react-icons/fa';
import { useToast } from '@/hooks/use-toast';


const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    msg: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
          const resp = fetch("https://api-portfolio-taupe.vercel.app/submit-form", {
            method: "POST",
            headers: {
              "Content-Type": "application/JSON",
            },
            body: JSON.stringify(formData),
          }).then((response) => {
            if (response.ok) {
              toast({
                title: "Message sent successfully!",
                description: "Thank you for reaching out. I'll get back to you soon.",
              });
            } else {
              toast({
                title: "Error!",
                description: "Something went wrong. Please try to reach out directly.",
              });
            }

            setFormData({
              name: '',
              email: '',
              subject: '',
              msg: ''
            })

            
            // setContactFormVisible(false);

          });
        } catch {
          toast({
            title: "Error! ",
            description: "Something went wrong. Try reaching out directly",
          })
        }

    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000));

    

    setFormData({
      name: '',
      email: '',
      subject: '',
      msg: ''
    });
    setIsSubmitting(false);
  };

  const contactInfo = [
    {
      icon: FiMail,
      label: 'Email',
      value: 'mudit.mehta@example.com',
      href: 'mailto:mudit.mehta@example.com'
    },
    {
      icon: FiPhone,
      label: 'Phone',
      value: '+1 (555) 123-4567',
      href: 'tel:+15551234567'
    },
    {
      icon: FiMapPin,
      label: 'Location',
      value: 'San Francisco, CA',
      href: '#'
    }
  ];

  const socialLinks = [
    { icon: FaGithub, href: 'https://github.com/muditm2004', label: 'GitHub' },
    { icon: FaLinkedin, href: 'https://www.linkedin.com/in/muditmehtaa/', label: 'LinkedIn' },
    { icon: FaTwitter, href: 'https://twitter.com/mudit-mehta', label: 'Twitter' },
    { icon: FaBehance, href: 'https://www.behance.net/muditmehta', label: 'Behance' },
    { icon: FaMedium, href: 'https://medium.com/@mudit.mehtaa', label: 'Medium' },
  ];

  return (
    <section id="contact" className="py-20 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-montserrat text-3xl md:text-4xl font-bold text-foreground mb-6">
            Get In Touch
          </h2>
          <div className="w-24 h-1 gradient-primary mx-auto rounded-full mb-4"></div>
          <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto">
            Have a project in mind or want to discuss product opportunities? 
            I'd love to hear from you. Let's create something amazing together.
          </p>
        </div>

        <div className="flex flex-col gap-12">
          {/* Contact Information */}
          

          {/* Contact Form */}
          <div className="animate-slide-up" style={{ animationDelay: '0.2s' }}>
            <div className="bg-card p-6 rounded-2xl border border-primary/20">
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                      Name
                    </label>
                    <Input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-3 py-2 bg-background/50 border border-primary/30 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all text-foreground"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                      Email
                    </label>
                    <Input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-3 py-2 bg-background/50 border border-primary/30 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all text-foreground"
                      placeholder="your.email@example.com"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-foreground mb-2">
                    Subject
                  </label>
                  <Input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    required
                    className="w-full px-3 py-2 bg-background/50 border border-primary/30 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all text-foreground"
                    placeholder="What's this about?"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                    Message
                  </label>
                  <Textarea
                    id="msg"
                    name="msg"
                    value={formData.msg}
                    onChange={handleInputChange}
                    required
                    rows={5}
                    className="w-full px-3 py-2 bg-background/50 border border-primary/30 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all resize-none text-foreground"
                    placeholder="Tell me about your project or idea..."
                  />
                </div>

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full gradient-primary text-white py-3 px-6 rounded-lg font-medium hover-lift transition-all duration-300 flex items-center justify-center gap-2"
                >
                  {isSubmitting ? (
                    <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                  ) : (
                    <>
                      <FiSend size={16} />
                      Send Message
                    </>
                  )}
                </Button>
              </form>
            </div>
          </div>
          <div className="animate-slide-up">
            <h3 className="font-montserrat text-2xl font-semibold text-foreground mb-6">
              Let's Connect
            </h3>

            

            {/* Social Links */}
            <div>
              <div className="flex space-x-3">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-xl bg-card border border-primary/20 hover:border-primary/40 hover-lift transition-all duration-300 group"
                    aria-label={social.label}
                  >
                    <social.icon className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
