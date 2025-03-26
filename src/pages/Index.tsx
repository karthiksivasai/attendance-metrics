
import React, { useRef } from 'react';
import { AttendanceCalculator } from '@/components/AttendanceCalculator';
import { ThemeProvider } from '@/hooks/useTheme';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { HeroSection } from '@/components/home/HeroSection';
import { FeaturesSection } from '@/components/home/FeaturesSection';
import { TestimonialsSection } from '@/components/home/TestimonialsSection';

const Index = () => {
  const calculatorRef = useRef<HTMLDivElement>(null);

  const scrollToCalculator = () => {
    calculatorRef.current?.scrollIntoView({ 
      behavior: 'smooth',
      block: 'start'
    });
  };

  return (
    <ThemeProvider>
      <div className="min-h-screen w-full flex flex-col bg-background transition-colors duration-300">
        <Header />
        <main className="flex-1">
          <section className="w-full py-12 md:py-24 lg:py-32">
            <div className="container px-4 md:px-6 space-y-10 md:space-y-16">
              <HeroSection scrollToCalculator={scrollToCalculator} />
              <div ref={calculatorRef}>
                <AttendanceCalculator />
              </div>
              <FeaturesSection />
            </div>
          </section>
          <TestimonialsSection />
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
};

export default Index;
