import React from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { CrossCircledIcon, RocketIcon } from "@radix-ui/react-icons";

export default function Message({ message, generateMessage }) {
  return (
    <Tabs defaultValue="roast" className="w-full">
      <TabsList className="grid w-full grid-cols-2 bg-purple-100">
        <TabsTrigger value="roast" className="data-[state=active]:bg-purple-600 data-[state=active]:text-white">Roast Me</TabsTrigger>
        <TabsTrigger value="motivate" className="data-[state=active]:bg-purple-600 data-[state=active]:text-white">Motivate Me</TabsTrigger>
      </TabsList>
      <TabsContent value="roast">
        <div>
          <p className="italic text-red-600">{message.type === 'roast' ? `"${message.content}"` : 'Click the button below to get roasted!'}</p>
          <Button onClick={() => generateMessage('roast')} className="w-full bg-red-500 hover:bg-red-600 text-white">
            <CrossCircledIcon className="mr-2 h-4 w-4" /> Generate Roast
          </Button>
        </div>
      </TabsContent>
      <TabsContent value="motivate">
        <div>
          <p className="italic text-green-600">{message.type === 'motivation' ? `"${message.content}"` : 'Click the button below to get motivated!'}</p>
          <Button onClick={() => generateMessage('motivation')} className="w-full bg-green-500 hover:bg-green-600 text-white">
            <RocketIcon className="mr-2 h-4 w-4" /> Generate Motivation
          </Button>
        </div>
      </TabsContent>
    </Tabs>
  );
}
