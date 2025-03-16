import { type FC } from 'react';
import { motion } from 'framer-motion';

const Community: FC = () => {
  const communityLinks = [
    {
      title: 'GitHub',
      description: 'Contribute to Aurora development, report issues, or explore the source code.',
      icon: 'github',
      url: 'https://github.com'
    },
    {
      title: 'Discord',
      description: 'Join our community chat to get help, share ideas, and connect with other users.',
      icon: 'discord',
      url: 'https://discord.com'
    },
    {
      title: 'Twitter',
      description: 'Follow us for the latest updates, tips, and announcements.',
      icon: 'twitter',
      url: 'https://twitter.com'
    },
    {
      title: 'Stack Overflow',
      description: 'Find answers to common questions or help others with their Aurora questions.',
      icon: 'stackoverflow',
      url: 'https://stackoverflow.com'
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
          <h1 className="text-5xl font-mono font-bold mb-4">Community</h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Join the Aurora community and connect with other terminal enthusiasts
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-16">
          {communityLinks.map((link, index) => (
            <motion.a
              key={index}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-gray-800 p-6 rounded-lg hover:bg-gray-700 transition-colors"
            >
              <h3 className="text-xl font-mono mb-3">{link.title}</h3>
              <p className="text-gray-300 mb-4">{link.description}</p>
              <span className="text-purple-400">Join now →</span>
            </motion.a>
          ))}
        </div>

        <div className="bg-gray-800 rounded-lg p-8 max-w-4xl mx-auto">
          <h2 className="text-2xl font-mono mb-6 text-center">Get Involved</h2>
          <p className="text-gray-300 mb-6 text-center">
            Aurora is an open-source project and we welcome contributions from everyone. 
            Whether you're a developer, designer, or documentation writer, there are many ways to help.
          </p>
          <div className="flex justify-center">
            <a 
              href="#" 
              className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-3 px-6 rounded-lg"
            >
              Contribute to Aurora
            </a>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Community; 