import React from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

export default function Card({ header, description, children }) {
  return (
    <Card className="bg-white shadow-xl">
      <CardHeader className="bg-purple-600 text-white rounded-t-lg">
        <CardTitle className="text-2xl font-bold text-center">{header}</CardTitle>
        <CardDescription className="text-center text-purple-100">
          {description}
        </CardDescription>
      </CardHeader>
      <CardContent className="pt-6">{children}</CardContent>
    </Card>
  );
}
