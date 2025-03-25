
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

interface HeroSectionProps {
  scrollToCalculator: () => void;
}

export const HeroSection = ({ scrollToCalculator }: HeroSectionProps) => {
  return (
    <div className="flex flex-col items-center justify-center space-y-4 text-center">
      <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none overflow-visible mb-4">
        <div className="electrified-text">
          <span className="main-text">Track Your Attendance.</span>
          <span className="lightning lightning-1"></span>
          <span className="lightning lightning-2"></span>
          <span className="glow">Track Your Attendance.</span>
          <span className="flicker">Track Your Attendance.</span>
        </div>
        <br className="hidden sm:inline" />
        <div className="electrified-text mt-2">
          <span className="main-text">Stay on Top of Your Classes.</span>
          <span className="lightning lightning-3"></span>
          <span className="lightning lightning-4"></span>
          <span className="glow">Stay on Top of Your Classes.</span>
          <span className="flicker">Stay on Top of Your Classes.</span>
        </div>
      </h1>
      <p className="text-lg text-muted-foreground max-w-2xl animate-fade-in opacity-0" style={{ animationDelay: '0.8s', animationFillMode: 'forwards' }}>
        Stay on top of your classes with our easy-to-use attendance calculator. Never worry about attendance shortage again.
      </p>
      <Button size="lg" className="mt-4 group animate-scale-in opacity-0" style={{ animationDelay: '1.2s', animationFillMode: 'forwards' }} onClick={scrollToCalculator}>
        Calculate Now <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
      </Button>
    </div>
  );
};
