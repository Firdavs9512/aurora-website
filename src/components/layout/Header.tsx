import { type FC, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Header: FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [userOS, setUserOS] = useState<string | null>(null);
  const [userArch, setUserArch] = useState<string | null>(null);

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

  // Detect user's OS and architecture
  useEffect(() => {
    // Detect OS
    const userAgent = window.navigator.userAgent.toLowerCase();
    let detectedOS = null;

    if (userAgent.indexOf("win") !== -1) detectedOS = "windows";
    else if (userAgent.indexOf("mac") !== -1) detectedOS = "macos";
    else if (userAgent.indexOf("linux") !== -1) detectedOS = "linux";
    else if (userAgent.indexOf("android") !== -1) detectedOS = "android";
    else if (userAgent.indexOf("ios") !== -1) detectedOS = "ios";

    setUserOS(detectedOS);

    // Detect architecture (simplified)
    let detectedArch = null;
    if (
      userAgent.indexOf("arm") !== -1 ||
      userAgent.indexOf("aarch64") !== -1
    ) {
      detectedArch = "arm";
    } else {
      detectedArch = "amd64"; // Default to amd64/x86_64
    }

    setUserArch(detectedArch);
  }, []);

  const navItems = [
    { name: "services", path: "#services" },
    { name: "providers", path: "#providers" },
    { name: "demo", path: "#demo" },
    { name: "contact", path: "#contact" },
  ];

  const scrollToSection = (sectionId: string) => {
    const section = document.querySelector(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      setIsMenuOpen(false);
    }
  };

  const handleDownload = (e: React.MouseEvent) => {
    e.preventDefault();

    // Base GitHub releases URL
    const githubReleasesUrl =
      "https://github.com/Firdavs9512/aurora-agent/releases";

    // If we can't detect OS or it's not a desktop OS, redirect to GitHub releases page
    if (!userOS || userOS === "android" || userOS === "ios") {
      window.open(githubReleasesUrl, "_blank");
      return;
    }

    // Construct download URL based on OS and architecture
    let downloadUrl = `${githubReleasesUrl}/latest/download/aurora-agent-`;

    switch (userOS) {
      case "windows":
        downloadUrl += `windows-${userArch}.zip`;
        break;
      case "macos":
        downloadUrl += `darwin-${userArch}.tar.gz`;
        break;
      case "linux":
        downloadUrl += `linux-${userArch}.tar.gz`;
        break;
      default:
        // Fallback to releases page
        window.open(githubReleasesUrl, "_blank");
        return;
    }

    // Initiate download
    window.open(downloadUrl, "_blank");
  };

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
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToSection(item.path);
                    }}
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
              href="#"
              className="bg-[#000011]/60 hover:bg-[#000011]/80 border border-white/10 text-white px-5 py-2.5 rounded-lg text-sm font-medium transition-all duration-300 flex items-center"
              onClick={handleDownload}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 mr-2"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                />
              </svg>
              Download{userOS ? ` for ${userOS}` : ""}
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
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection(item.path);
                }}
              >
                {item.name}
              </a>
            ))}
            <div className="pt-4 pb-2">
              <a
                href="#"
                className=" w-full bg-[#000011]/60 hover:bg-[#000011]/80 border border-white/10 text-white px-4 py-2 rounded-lg text-base font-medium text-center flex items-center justify-center"
                onClick={handleDownload}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 mr-2"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                  />
                </svg>
                Download{userOS ? ` for ${userOS}` : ""}
              </a>
            </div>
          </div>
        </motion.div>
      )}
    </motion.header>
  );
};

export default Header;
