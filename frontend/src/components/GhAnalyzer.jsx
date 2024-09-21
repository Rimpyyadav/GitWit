import React, { useState } from 'react';
import CustomCard from './components/CustomCard';
import InputButton from './components/InputButton';
import MessageTabs from './components/MessageTabs';

const roasts = [
  // Add your roast messages here...
];

const motivations = [
  // Add your motivational messages here...
];

export default function GitHubAnalyzer() {
  const [username, setUsername] = useState('');
  const [loading, setLoading] = useState(false);
  const [userData, setUserData] = useState(null);
  const [message, setMessage] = useState({ type: '', content: '' });

  const analyzeGitHub = async () => {
    setLoading(true);
    await new Promise(resolve => setTimeout(resolve, 2000)); // Simulate API call
    setUserData({
      name: 'Sample User',
      repos: 15,
      contributions: 230,
      streak: 7
    });
    setLoading(false);
  };

  const generateMessage = (type) => {
    const messages = type === 'roast' ? roasts : motivations;
    const randomMessage = messages[Math.floor(Math.random() * messages.length)];
    setMessage({ type, content: randomMessage });
  };

  return (
    <div className="min-h-screen bg-purple-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md mx-auto">
        <CustomCard header="GitHub Roast & Motivate" description="Analyze your GitHub and get roasted or motivated!">
          <InputButton
            username={username}
            setUsername={setUsername}
            loading={loading}
            analyzeGitHub={analyzeGitHub}
          />
          {userData && (
            <>
              <h3 className="font-semibold text-lg mb-2 text-purple-800">{userData.name}'s GitHub Stats</h3>
              <p className="text-purple-600">Repositories: {userData.repos}</p>
              <p className="text-purple-600">Contributions this year: {userData.contributions}</p>
              <p className="text-purple-600">Current streak: {userData.streak} days</p>
              <MessageTabs message={message} generateMessage={generateMessage} />
            </>
          )}
        </CustomCard>
      </div>
    </div>
  );
}
