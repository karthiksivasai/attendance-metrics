
import React from 'react';
import { CheckCircle, History, BarChart } from 'lucide-react';
import { HoverCard, HoverCardContent, HoverCardTrigger } from '@/components/ui/hover-card';
import { Card, CardContent } from '@/components/ui/card';

const features = [
  {
    title: "Accurate Calculation",
    description: "Get precise attendance percentage calculations based on your class schedule",
    icon: <CheckCircle className="h-10 w-10" />
  },
  {
    title: "Track Progress",
    description: "Monitor your attendance trends over time with intuitive visualizations",
    icon: <History className="h-10 w-10" />
  },
  {
    title: "Visual Reports",
    description: "See your attendance data beautifully visualized with detailed analytics",
    icon: <BarChart className="h-10 w-10" />
  }
];

export const FeaturesSection = () => {
  return (
    <div className="mt-20 w-full max-w-6xl mx-auto space-y-8">
      <h2 className="text-2xl font-bold text-center mb-8 bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/70">
        Why Use Our Calculator?
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {features.map((feature, index) => (
          <HoverCard key={index}>
            <HoverCardTrigger asChild>
              <Card className="h-full overflow-hidden border-0 shadow-md bg-gradient-to-br from-card/50 via-card to-card/90 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                <CardContent className="p-8 flex flex-col items-center text-center space-y-4">
                  <div className="rounded-full p-4 bg-primary/10 text-primary ring-1 ring-primary/20 transition-all duration-300 hover:bg-primary/15 hover:scale-105">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-foreground">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            </HoverCardTrigger>
            <HoverCardContent className="w-80 p-0 bg-card/95 backdrop-blur-sm border">
              <div className="p-4 space-y-3">
                <h4 className="text-lg font-semibold flex items-center gap-2 text-primary">
                  {feature.icon && <span className="w-5 h-5">{React.cloneElement(feature.icon, { size: 20 })}</span>} 
                  {feature.title}
                </h4>
                <p className="text-sm text-card-foreground/90">{feature.description}</p>
                <p className="text-xs text-muted-foreground">Hover over cards to learn more about our features</p>
              </div>
            </HoverCardContent>
          </HoverCard>
        ))}
      </div>
    </div>
  );
};
