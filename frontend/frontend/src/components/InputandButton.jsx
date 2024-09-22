import React from 'react';
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { ReloadIcon, GitHubLogoIcon } from "@radix-ui/react-icons";

export default function InputandButton({ username, setUsername, loading, analyzeGitHub }) {
  return (
    <div className="flex space-x-2">
      <Input
        type="text"
        placeholder="Enter GitHub username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        className="border-purple-300 focus:border-purple-500 focus:ring-purple-500"
      />
      <Button 
        onClick={analyzeGitHub} 
        disabled={loading}
        className="bg-purple-600 hover:bg-purple-700 text-white"
      >
        {loading ? (
          <ReloadIcon className="mr-2 h-4 w-4 animate-spin" />
        ) : (
          <GitHubLogoIcon className="mr-2 h-4 w-4" />
        )}
        {loading ? 'Analyzing...' : 'Analyze'}
      </Button>
    </div>
  );
}
