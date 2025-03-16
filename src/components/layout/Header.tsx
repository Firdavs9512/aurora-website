import { type FC, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Header: FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Track scroll position
  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const navItems = [
    { name: "services", path: "#services" },
    { name: "process", path: "#process" },
    { name: "team", path: "#team" },
    { name: "pricing", path: "#pricing" },
    { name: "reviews", path: "#reviews" },
    { name: "FAQ", path: "#faq" },
    { name: "contact", path: "#contact" },
  ];

  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "py-4" : "py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link to="/" className="flex items-center group">
              <span className="text-2xl font-bold text-white group-hover:text-sky-400 transition-colors duration-300">
                <span className="text-sky-400">*</span> Aurora
              </span>
            </Link>
          </div>

          {/* Centered menu - desktop */}
          <div className="hidden md:block">
            <div className="bg-[#000011]/40 backdrop-blur-md rounded-full px-6 py-2.5 border border-white/5">
              <div className="flex items-center space-x-8">
                {navItems.map((item) => (
                  <a
                    key={item.name}
                    href={item.path}
                    className="text-gray-300 hover:text-white text-sm font-medium transition-all duration-200"
                  >
                    {item.name}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Right side button */}
          <div className="hidden md:block">
            <a
              href="#contact"
              className="bg-[#000011]/60 hover:bg-[#000011]/80 border border-white/10 text-white px-5 py-2.5 rounded-lg text-sm font-medium transition-all duration-300"
            >
              Download
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white focus:outline-none"
              aria-controls="mobile-menu"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {!isMenuOpen ? (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              ) : (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.3 }}
          className="md:hidden bg-[#000011]/90 backdrop-blur-xl border-t border-white/5 mt-2"
          id="mobile-menu"
        >
          <div className="px-4 pt-2 pb-3 space-y-1">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.path}
                className="text-gray-300 hover:text-white block px-3 py-2 text-base font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </a>
            ))}
            <div className="pt-4 pb-2">
              <a
                href="#contact"
                className="block w-full bg-[#000011]/60 hover:bg-[#000011]/80 border border-white/10 text-white px-4 py-2 rounded-lg text-base font-medium text-center"
                onClick={() => setIsMenuOpen(false)}
              >
                Download
              </a>
            </div>
          </div>
        </motion.div>
      )}
    </motion.header>
  );
};

export default Header;
