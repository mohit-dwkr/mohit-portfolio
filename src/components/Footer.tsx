const Footer = () => {
  return (
    <footer className="py-8 border-t border-border">
      <div className="container-narrow">
        <div className="flex flex-col md:flex-row justify-center items-center gap-4">
          <p className="text-small">
            © {new Date().getFullYear()} Mohit Diwakar. All rights reserved.
          </p>
         
        </div>
      </div>
    </footer>
  );
};

export default Footer;
