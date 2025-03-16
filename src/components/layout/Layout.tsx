import { type FC, type ReactNode } from 'react';
import Header from './Header';
import Footer from './Footer';
import BackgroundAnimation from '../common/BackgroundAnimation';

interface LayoutProps {
  children: ReactNode;
}

const Layout: FC<LayoutProps> = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen bg-[#0a0a0a] overflow-hidden relative">
      <BackgroundAnimation />
      <div className="gradient-overlay"></div>
      <Header />
      <main className="flex-grow relative z-1">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout; 