import { type FC, useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const HeroSection: FC = () => {
  const [copied, setCopied] = useState(false);
  
  const installCommand = 'curl -fsSL https://aurora.the-box.dev/install.sh | sh';
  
  const copyToClipboard = () => {
    navigator.clipboard.writeText(installCommand).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-24 pb-10">
      <div className="max-w-5xl mx-auto text-center z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <motion.h1 
            className="text-5xl md:text-7xl font-bold mb-6 text-white halo-heading"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <span className="text-white">Aurora</span>{' '}
            <span className="text-sky-400">AI</span>{' '}
            <span className="text-white">terminal.</span>
          </motion.h1>
          
          <motion.p 
            className="text-xl md:text-2xl text-gray-300 mb-10 max-w-3xl mx-auto halo-text"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Biz terminal bilan ishlashni osonlashtirадиган AI yechimlarini yaratamiz.
          </motion.p>
          
          {/* O'rnatish uchun curl buyrug'i */}
          <motion.div
            className="mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <div className="flex flex-col sm:flex-row items-center justify-center bg-[#000011]/40 backdrop-blur-md rounded-lg border border-white/5 overflow-hidden max-w-3xl mx-auto">
              <div className="flex-grow p-3 sm:p-4 font-mono text-sm text-gray-300 text-left overflow-x-auto whitespace-nowrap">
                $ {installCommand}
              </div>
              <button
                onClick={copyToClipboard}
                className="w-full sm:w-auto px-4 py-3 bg-sky-500/20 hover:bg-sky-500/30 text-white text-sm font-medium transition-all duration-200 border-t sm:border-t-0 sm:border-l border-white/5 flex items-center justify-center"
              >
                {copied ? (
                  <>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Nusxalandi
                  </>
                ) : (
                  <>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3" />
                    </svg>
                    Nusxalash
                  </>
                )}
              </button>
            </div>
          </motion.div>
          
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <Link 
              to="/xizmatlar" 
              className="halo-button-primary px-8 py-3 rounded-lg text-white font-medium text-lg"
            >
              xizmatlarimiz
            </Link>
            
            <Link 
              to="/biz-haqimizda" 
              className="halo-button px-8 py-3 rounded-lg text-white font-medium text-lg"
            >
              biz bilan bog'lanish
            </Link>
          </motion.div>
        </motion.div>
        
        <motion.div 
          className="mt-16 card-glass p-6 rounded-xl max-w-4xl mx-auto grid-pattern"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <div className="bg-[#1a1a2e] rounded-lg p-4 font-mono text-sm text-gray-300 text-left">
            <div className="flex items-center mb-2">
              <div className="w-3 h-3 rounded-full bg-red-500 mr-2"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500 mr-2"></div>
              <div className="w-3 h-3 rounded-full bg-green-500"></div>
              <span className="ml-4 text-gray-400">Terminal</span>
            </div>
            <div className="space-y-2">
              <p><span className="text-green-400">user@aurora:~$</span> aurora --help</p>
              <p className="text-sky-400">Aurora AI Terminal v1.0.0</p>
              <p>Quyidagi buyruqlar mavjud:</p>
              <p>  <span className="text-yellow-400">analyze</span>    - Kod tahlili</p>
              <p>  <span className="text-yellow-400">optimize</span>   - Kodni optimallashtirish</p>
              <p>  <span className="text-yellow-400">generate</span>   - Yangi kod yaratish</p>
              <p>  <span className="text-yellow-400">explain</span>    - Kodni tushuntirish</p>
              <p><span className="text-green-400">user@aurora:~$</span> <span className="animate-pulse">_</span></p>
            </div>
          </div>
        </motion.div>
        
        {/* Halo template kabi qo'shimcha elementlar */}
        <div className="absolute bottom-10 left-0 right-0 flex justify-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="flex items-center space-x-2 text-sm text-gray-400"
          >
            <span>Scroll down</span>
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              className="h-4 w-4 animate-bounce" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </motion.div>
        </div>
        
        {/* Halo template kabi floating badges */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="absolute top-40 left-10 hidden lg:block"
        >
          <div className="card-glass px-3 py-2 rounded-full text-xs flex items-center space-x-1">
            <span className="w-2 h-2 rounded-full bg-green-400"></span>
            <span>AI Powered</span>
          </div>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 1.4 }}
          className="absolute top-60 right-10 hidden lg:block"
        >
          <div className="card-glass px-3 py-2 rounded-full text-xs flex items-center space-x-1">
            <span className="w-2 h-2 rounded-full bg-sky-400"></span>
            <span>Terminal</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection; 