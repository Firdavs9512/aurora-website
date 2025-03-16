import { type FC } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const NotFound: FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen bg-gray-900 text-white flex items-center justify-center"
    >
      <div className="text-center px-4">
        <h1 className="text-9xl font-mono font-bold text-purple-400">404</h1>
        <h2 className="text-4xl font-mono mb-8">Page Not Found</h2>
        <div className="bg-gray-800 p-6 rounded-lg mb-8 max-w-lg mx-auto">
          <div className="font-mono mb-4">
            <p className="text-purple-400">$ find /aurora -name "this-page"</p>
            <p className="text-white">find: No such file or directory</p>
            <p className="text-purple-400">$ cd /home</p>
          </div>
          <Link 
            to="/" 
            className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-3 px-6 rounded-lg inline-block"
          >
            Return Home
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

export default NotFound; 