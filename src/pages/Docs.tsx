import { type FC } from 'react';
import { motion } from 'framer-motion';

const Docs: FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen bg-gray-900 text-white"
    >
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-mono font-bold mb-4">Documentation</h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Learn how to use Aurora Terminal Agent effectively
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-gray-800 rounded-lg p-6 mb-8">
            <h2 className="text-2xl font-mono mb-4">Getting Started</h2>
            <p className="text-gray-300 mb-4">
              This page is under construction. Full documentation will be available soon.
            </p>
            <div className="bg-black rounded p-4 font-mono">
              <p className="text-green-400">$ npm install -g aurora-terminal-agent</p>
              <p className="text-white">Installing Aurora Terminal Agent...</p>
              <p className="text-white">Successfully installed Aurora Terminal Agent!</p>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Docs; 