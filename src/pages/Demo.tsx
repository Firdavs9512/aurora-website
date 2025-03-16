import { type FC, useState } from 'react';
import { motion } from 'framer-motion';

const Demo: FC = () => {
  const [input, setInput] = useState('');
  const [conversation, setConversation] = useState<Array<{ type: 'user' | 'aurora', text: string }>>([
    { type: 'aurora', text: 'Welcome to Aurora Terminal Agent! How can I help you today?' }
  ]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    // Add user input to conversation
    setConversation([...conversation, { type: 'user', text: input }]);

    // Simulate Aurora response
    setTimeout(() => {
      let response = '';
      
      if (input.toLowerCase().includes('find file')) {
        response = 'To find files, you can use the "find" command. For example:\n\nfind /path/to/search -name "filename" -type f';
      } else if (input.toLowerCase().includes('disk space')) {
        response = 'To check disk space usage, use the "df" command:\n\ndf -h';
      } else if (input.toLowerCase().includes('process')) {
        response = 'To view running processes, use the "ps" command:\n\nps aux | grep "process_name"';
      } else {
        response = 'I understand you need help with that. Could you provide more details about what you\'re trying to accomplish?';
      }
      
      setConversation(prev => [...prev, { type: 'aurora', text: response }]);
    }, 1000);

    setInput('');
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen bg-gray-900 text-white"
    >
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-mono font-bold mb-4">Interactive Demo</h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Experience Aurora in action with this interactive demo
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-gray-800 rounded-lg p-6 mb-8">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-2xl font-mono">Aurora Terminal</h2>
              <div className="flex space-x-2">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
              </div>
            </div>
            
            <div className="bg-black rounded p-4 font-mono h-96 overflow-y-auto mb-4">
              {conversation.map((message, index) => (
                <div key={index} className="mb-2">
                  {message.type === 'user' ? (
                    <div>
                      <span className="text-purple-400">$ </span>
                      <span className="text-green-400">{message.text}</span>
                    </div>
                  ) : (
                    <div className="text-white whitespace-pre-line">{message.text}</div>
                  )}
                </div>
              ))}
            </div>
            
            <form onSubmit={handleSubmit} className="flex">
              <span className="text-purple-400 font-mono self-center mr-2">$</span>
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                className="flex-1 bg-gray-900 text-green-400 font-mono p-2 rounded-l focus:outline-none"
                placeholder="Type your command or question..."
              />
              <button 
                type="submit"
                className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded-r"
              >
                Run
              </button>
            </form>
          </div>

          <div className="bg-gray-800 rounded-lg p-6">
            <h3 className="text-xl font-mono mb-4">Try these examples:</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <button 
                onClick={() => setInput('How do I find files in Linux?')}
                className="text-left bg-gray-700 hover:bg-gray-600 p-3 rounded"
              >
                How do I find files in Linux?
              </button>
              <button 
                onClick={() => setInput('Check disk space usage')}
                className="text-left bg-gray-700 hover:bg-gray-600 p-3 rounded"
              >
                Check disk space usage
              </button>
              <button 
                onClick={() => setInput('How to monitor running processes?')}
                className="text-left bg-gray-700 hover:bg-gray-600 p-3 rounded"
              >
                How to monitor running processes?
              </button>
              <button 
                onClick={() => setInput('Create a backup of my home directory')}
                className="text-left bg-gray-700 hover:bg-gray-600 p-3 rounded"
              >
                Create a backup of my home directory
              </button>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Demo; 