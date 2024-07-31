const Footer = () => {
  return (
    <footer className="w-full">
      <div className="mx-auto max-w-7xl px-3 py-6 sm:px-6 lg:px-8">
        <p>&copy; {new Date().getFullYear()} John Store. All rights reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
