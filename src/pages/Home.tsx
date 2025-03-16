import { type FC } from 'react';
import { motion } from 'framer-motion';

const Home: FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen bg-gray-900 text-white"
    >
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-mono font-bold mb-4">Aurora Terminal Agent</h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            AI-powered terminal assistant that helps you navigate the command line with ease
          </p>
          <div className="mt-8">
            <button className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-3 px-6 rounded-lg mr-4">
              Get Started
            </button>
            <button className="border border-purple-600 text-purple-400 hover:bg-purple-900/20 font-bold py-3 px-6 rounded-lg">
              View Demo
            </button>
          </div>
        </div>

        <div className="bg-gray-800 rounded-lg p-6 mb-16">
          <h2 className="text-2xl font-mono mb-4">Terminal Demo</h2>
          <div className="bg-black rounded p-4 font-mono text-green-400">
            <p>$ aurora</p>
            <p className="text-white">Welcome to Aurora Terminal Agent! How can I help you today?</p>
            <p>$ help me find large files in my system</p>
            <p className="text-white">I can help with that. Try this command:</p>
            <p className="text-yellow-400">find / -type f -size +100M -exec ls -lh {} \; 2&gt; /dev/null | sort -rh</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="bg-gray-800 p-6 rounded-lg">
            <h3 className="text-xl font-mono mb-3">Smart Command Suggestions</h3>
            <p className="text-gray-300">Get intelligent command suggestions based on your needs and context.</p>
          </div>
          <div className="bg-gray-800 p-6 rounded-lg">
            <h3 className="text-xl font-mono mb-3">Natural Language Interface</h3>
            <p className="text-gray-300">Interact with your terminal using natural language instead of memorizing commands.</p>
          </div>
          <div className="bg-gray-800 p-6 rounded-lg">
            <h3 className="text-xl font-mono mb-3">Command Explanations</h3>
            <p className="text-gray-300">Get detailed explanations of what commands do before you run them.</p>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Home; 