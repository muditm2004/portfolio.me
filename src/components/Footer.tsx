
const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black/50 backdrop-blur-xl border-t border-primary/20 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <div className="border-t border-primary/20 pt-8">
            <p className="text-muted-foreground/70">
              © {currentYear} Mudit Mehta. All rights reserved. Built with passion and precision.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
