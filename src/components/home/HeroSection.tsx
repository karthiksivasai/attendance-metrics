
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

interface HeroSectionProps {
  scrollToCalculator: () => void;
}

export const HeroSection = ({ scrollToCalculator }: HeroSectionProps) => {
  return (
    <div className="flex flex-col items-center justify-center space-y-4 text-center px-2">
      <h1 className="text-2xl sm:text-3xl font-bold tracking-tighter md:text-4xl lg:text-5xl xl:text-6xl/none overflow-visible mb-4">
        <span className="modern-text-animation block">Track Your Attendance</span>
        <span className="modern-text-animation block mt-2" style={{ animationDelay: '0.5s' }}>Stay on Top of Your Classes</span>
      </h1>
      <p className="text-base sm:text-lg text-muted-foreground max-w-2xl animate-fade-in opacity-0" style={{ animationDelay: '0.8s', animationFillMode: 'forwards' }}>
        Stay on top of your classes with our easy-to-use attendance calculator. Never worry about attendance shortage again.
      </p>
      <Button size="lg" className="mt-4 group animate-scale-in opacity-0" style={{ animationDelay: '1.2s', animationFillMode: 'forwards' }} onClick={scrollToCalculator}>
        Calculate Now <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
      </Button>
    </div>
  );
};
