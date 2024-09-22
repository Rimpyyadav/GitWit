import React from 'react';

// Importing custom components
import GhAnalyzer from './components/GhAnalyzer';
import InputandButton from './components/InputandButton';
import Message from './components/Message';
import Cardtab from './components/Card';

export default function App() {
  return (
    <div className="min-h-screen bg-purple-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md mx-auto">
        {/* GitHub Analyzer Component */}
        <GhAnalyzer>
          {/* Input and Button for Username */}
          <InputandButton />

          {/* Message display (Roast/Motivation) */}
          <Message />
        </GhAnalyzer>

        {/* Card component can be used for displaying user info */}
        <Cardtab />
      </div>
    </div>
  );
}
