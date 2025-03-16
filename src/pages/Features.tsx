import { type FC } from 'react';
import { motion } from 'framer-motion';

const Features: FC = () => {
  const features = [
    {
      title: 'Smart Command Suggestions',
      description: 'Aurora analyzes your needs and suggests the most appropriate commands, saving you time and effort.',
      icon: '🔍'
    },
    {
      title: 'Natural Language Interface',
      description: 'Communicate with your terminal in plain English. No need to memorize complex command syntax.',
      icon: '💬'
    },
    {
      title: 'Command Explanations',
      description: 'Get detailed explanations of what commands do before you run them, perfect for learning and safety.',
      icon: '📝'
    },
    {
      title: 'History Analysis',
      description: 'Aurora learns from your command history to provide more personalized suggestions over time.',
      icon: '📊'
    },
    {
      title: 'Multi-platform Support',
      description: 'Works seamlessly across Linux, macOS, and Windows (WSL) environments.',
      icon: '🖥️'
    },
    {
      title: 'Customizable Experience',
      description: 'Tailor Aurora to your specific needs with customizable settings and preferences.',
      icon: '⚙️'
    }
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen bg-gray-900 text-white"
    >
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-mono font-bold mb-4">Features</h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Discover how Aurora can transform your terminal experience
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-gray-800 p-6 rounded-lg"
            >
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-mono mb-3">{feature.title}</h3>
              <p className="text-gray-300">{feature.description}</p>
            </motion.div>
          ))}
        </div>

        <div className="bg-gray-800 rounded-lg p-8 mb-16">
          <h2 className="text-2xl font-mono mb-6 text-center">Compare Modes</h2>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-700">
                  <th className="py-3 px-4 text-left">Feature</th>
                  <th className="py-3 px-4 text-center">Terminal Mode</th>
                  <th className="py-3 px-4 text-center">Chat Mode</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-gray-700">
                  <td className="py-3 px-4">Command Execution</td>
                  <td className="py-3 px-4 text-center">✅</td>
                  <td className="py-3 px-4 text-center">❌</td>
                </tr>
                <tr className="border-b border-gray-700">
                  <td className="py-3 px-4">Natural Language Input</td>
                  <td className="py-3 px-4 text-center">✅</td>
                  <td className="py-3 px-4 text-center">✅</td>
                </tr>
                <tr className="border-b border-gray-700">
                  <td className="py-3 px-4">Command Suggestions</td>
                  <td className="py-3 px-4 text-center">✅</td>
                  <td className="py-3 px-4 text-center">✅</td>
                </tr>
                <tr className="border-b border-gray-700">
                  <td className="py-3 px-4">Detailed Explanations</td>
                  <td className="py-3 px-4 text-center">✅</td>
                  <td className="py-3 px-4 text-center">✅</td>
                </tr>
                <tr>
                  <td className="py-3 px-4">System Integration</td>
                  <td className="py-3 px-4 text-center">✅</td>
                  <td className="py-3 px-4 text-center">❌</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Features; 