import { type FC } from "react";

const Footer: FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white border-t border-gray-800">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center space-x-2 mb-4 md:mb-0">
            <span className="text-white font-bold text-xl">Aurora</span>
          </div>

          <p className="text-gray-400 text-sm">
            &copy; {currentYear} Aurora Terminal Agent.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
