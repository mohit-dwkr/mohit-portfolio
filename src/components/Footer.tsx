const Footer = () => {
  return (
    <footer className="py-8 border-t border-border">
      <div className="container-narrow">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-small">
            © {new Date().getFullYear()} Alex Chen. All rights reserved.
          </p>
          <p className="text-small">
            Built with React & Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
