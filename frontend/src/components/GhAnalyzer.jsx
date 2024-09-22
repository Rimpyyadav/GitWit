import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaGithub, FaRobot, FaLaugh, FaHeart } from 'react-icons/fa';

const GitHubAIAnalyzer = () => {
  const [username, setUsername] = useState('');
  const [loading, setLoading] = useState(false);
  const [userData, setUserData] = useState(null);
  const [activeTab, setActiveTab] = useState('roast');

  const handleAnalyze = async () => {
    setLoading(true);
    // Simulating API call
    await new Promise(resolve => setTimeout(resolve, 2000));
    setUserData({
      name: 'Sample User',
      repos: 15,
      followers: 100,
      contributions: 500
    });
    setLoading(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-600 to-indigo-800 flex items-center justify-center p-4">
      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-md"
      >
        <div className="bg-white dark:bg-gray-800 shadow-2xl rounded-lg overflow-hidden">
          <div className="p-6 space-y-6">
            <div className="flex items-center justify-center space-x-3">
              <FaGithub className="text-4xl text-purple-600 dark:text-purple-400" />
              <h2 className="text-2xl font-bold text-gray-800 dark:text-white">GitHub AI Analyzer</h2>
            </div>
            <p className="text-center text-gray-600 dark:text-gray-300">
              Get AI-powered insights based on your GitHub activity!
            </p>
            <div className="flex space-x-2">
              <input
                type="text"
                placeholder="Enter GitHub username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="border-2 border-purple-300 focus:border-purple-500 dark:border-purple-700 dark:focus:border-purple-500 rounded-lg p-2 flex-grow bg-white dark:bg-gray-700 text-gray-800 dark:text-white"
              />
              <button
                onClick={handleAnalyze}
                disabled={loading}
                className="bg-purple-600 hover:bg-purple-700 text-white p-2 rounded-lg transition-colors duration-300 flex items-center justify-center w-24"
              >
                {loading ? (
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                  >
                    <FaRobot className="text-xl" />
                  </motion.div>
                ) : (
                  'Analyze'
                )}
              </button>
            </div>
            
            <AnimatePresence>
              {userData && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="bg-purple-100 dark:bg-purple-900 rounded-lg p-4 space-y-3">
                    <h3 className="font-semibold text-lg text-purple-800 dark:text-purple-200">
                      {userData.name}'s GitHub Stats
                    </h3>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="bg-white dark:bg-gray-700 p-3 rounded-lg text-center">
                        <p className="text-sm text-gray-600 dark:text-gray-300">Repositories</p>
                        <p className="text-xl font-bold text-purple-600 dark:text-purple-400">{userData.repos}</p>
                      </div>
                      <div className="bg-white dark:bg-gray-700 p-3 rounded-lg text-center">
                        <p className="text-sm text-gray-600 dark:text-gray-300">Followers</p>
                        <p className="text-xl font-bold text-purple-600 dark:text-purple-400">{userData.followers}</p>
                      </div>
                      <div className="bg-white dark:bg-gray-700 p-3 rounded-lg text-center col-span-2">
                        <p className="text-sm text-gray-600 dark:text-gray-300">Contributions (Year)</p>
                        <p className="text-xl font-bold text-purple-600 dark:text-purple-400">{userData.contributions}</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="mt-6">
                    <div className="flex rounded-lg overflow-hidden">
                      <button
                        onClick={() => setActiveTab('roast')}
                        className={`flex-1 py-2 px-4 text-center transition-colors duration-300 ${
                          activeTab === 'roast' 
                            ? 'bg-red-500 text-white' 
                            : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                        }`}
                      >
                        <FaLaugh className="inline mr-2" /> Roast Me
                      </button>
                      <button
                        onClick={() => setActiveTab('motivate')}
                        className={`flex-1 py-2 px-4 text-center transition-colors duration-300 ${
                          activeTab === 'motivate' 
                            ? 'bg-green-500 text-white' 
                            : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                        }`}
                      >
                        <FaHeart className="inline mr-2" /> Motivate Me
                      </button>
                    </div>
                    <div className="mt-4 p-4 bg-white dark:bg-gray-700 rounded-lg min-h-[150px]">
                      <p className="text-gray-600 dark:text-gray-300 text-center">
                        {activeTab === 'roast' 
                          ? "Ready for a roast based on your GitHub activity?" 
                          : "Need some motivation for your coding journey?"}
                      </p>
                      {/* AI-generated content would go here */}
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default GitHubAIAnalyzer;