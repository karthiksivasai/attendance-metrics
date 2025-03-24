
import React, { useRef } from 'react';
import { AttendanceCalculator } from '@/components/AttendanceCalculator';
import { ThemeToggle } from '@/components/ThemeToggle';
import { ThemeProvider } from '@/hooks/useTheme';
import { Button } from '@/components/ui/button';
import { ArrowRight, BarChart, CheckCircle, History, Star } from 'lucide-react';
import { UserMenu } from '@/components/UserMenu';
import { Link } from 'react-router-dom';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import { Card, CardContent } from '@/components/ui/card';
import { HoverCard, HoverCardContent, HoverCardTrigger } from '@/components/ui/hover-card';

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
        <header className="sticky top-0 z-10 w-full border-b bg-background/80 backdrop-blur-md">
          <div className="container flex h-16 items-center justify-between">
            <div className="flex items-center gap-6">
              <Link to="/" className="flex items-center gap-2 font-bold text-xl">
                <BarChart className="h-5 w-5" />
                AttendTracker
              </Link>
              <nav className="hidden md:flex gap-6">
                <Link to="/about" className="text-sm font-medium text-muted-foreground hover:text-foreground">
                  About
                </Link>
                <Link to="/contact" className="text-sm font-medium text-muted-foreground hover:text-foreground">
                  Contact
                </Link>
              </nav>
            </div>
            <div className="flex items-center gap-4">
              <ThemeToggle />
              <UserMenu />
            </div>
          </div>
        </header>

        <main className="flex-1">
          <section className="w-full py-12 md:py-24 lg:py-32">
            <div className="container px-4 md:px-6 space-y-10 md:space-y-16">
              <div className="flex flex-col items-center justify-center space-y-4 text-center">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none overflow-hidden">
                  <span className="inline-block animate-slide-down opacity-0" style={{ animationDelay: '0.1s', animationFillMode: 'forwards' }}>
                    Track Your Attendance.
                  </span>{' '}
                  <br className="hidden sm:inline" />
                  <span className="inline-block animate-slide-down opacity-0" style={{ animationDelay: '0.4s', animationFillMode: 'forwards' }}>
                    Stay on Top of Your Classes.
                  </span>
                </h1>
                <p className="text-lg text-muted-foreground max-w-2xl animate-fade-in opacity-0" style={{ animationDelay: '0.8s', animationFillMode: 'forwards' }}>
                  Stay on top of your classes with our easy-to-use attendance calculator. Never worry about attendance shortage again.
                </p>
                <Button size="lg" className="mt-4 group animate-scale-in opacity-0" style={{ animationDelay: '1.2s', animationFillMode: 'forwards' }} onClick={scrollToCalculator}>
                  Calculate Now <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </div>
              
              <div ref={calculatorRef}>
                <AttendanceCalculator />
              </div>
              
              <div className="mt-20 w-full max-w-6xl mx-auto space-y-8">
                <h2 className="text-2xl font-bold text-center mb-8 bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/70">
                  Why Use Our Calculator?
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  {[
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
                  ].map((feature, index) => (
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
            </div>
          </section>
          
          <section className="bg-muted/50 py-16 md:py-24">
            <div className="container px-4 md:px-6">
              <h2 className="text-2xl font-bold text-center mb-10 bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/70">
                What Our Users Say
              </h2>
              <Carousel className="max-w-4xl mx-auto">
                <CarouselContent>
                  {[
                    {
                      quote: "This calculator saved me from attendance trouble. I always know exactly where I stand now and can plan accordingly.",
                      author: "Sarah K.",
                      role: "Engineering Student"
                    },
                    {
                      quote: "So easy to use and super helpful for keeping track of all my classes. The visual reports make it simple to see where I need to improve.",
                      author: "James L.",
                      role: "Medical Student"
                    },
                    {
                      quote: "I recommend this to all my classmates. It's become essential for our attendance tracking and has helped us all maintain good academic standing.",
                      author: "Mia T.",
                      role: "Computer Science Major"
                    },
                    {
                      quote: "The interface is intuitive and the calculations are accurate. This tool has been a game-changer for managing my attendance requirements.",
                      author: "Alex R.",
                      role: "Business Student"
                    },
                  ].map((testimonial, index) => (
                    <CarouselItem key={index} className="md:basis-1/1 lg:basis-1/1">
                      <Card className="border-0 shadow-md bg-card hover:shadow-lg transition-all duration-300 h-full">
                        <CardContent className="p-6 md:p-8 flex flex-col h-full">
                          <div className="flex items-center gap-1 mb-4">
                            {[...Array(5)].map((_, i) => (
                              <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                            ))}
                          </div>
                          <p className="italic text-card-foreground/90 text-lg mb-6 flex-grow">"{testimonial.quote}"</p>
                          <div className="flex items-center mt-auto">
                            <div className="rounded-full bg-primary/20 w-10 h-10 flex items-center justify-center text-primary font-semibold">
                              {testimonial.author.charAt(0)}
                            </div>
                            <div className="ml-3">
                              <p className="font-semibold">{testimonial.author}</p>
                              <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <div className="flex items-center justify-center mt-8 gap-2">
                  <CarouselPrevious className="relative inset-0 translate-y-0 left-0" />
                  <CarouselNext className="relative inset-0 translate-y-0 right-0" />
                </div>
              </Carousel>
            </div>
          </section>
        </main>

        <footer className="w-full py-6 md:py-8 border-t">
          <div className="container px-4 md:px-6">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div className="space-y-3">
                <h3 className="text-lg font-semibold">AttendTracker</h3>
                <p className="text-sm text-muted-foreground">Stay on top of your attendance with ease.</p>
              </div>
              <div className="space-y-3">
                <h4 className="text-sm font-semibold">Pages</h4>
                <ul className="space-y-2">
                  <li>
                    <Link to="/" className="text-sm text-muted-foreground hover:text-foreground">Home</Link>
                  </li>
                  <li>
                    <Link to="/about" className="text-sm text-muted-foreground hover:text-foreground">About</Link>
                  </li>
                  <li>
                    <Link to="/contact" className="text-sm text-muted-foreground hover:text-foreground">Contact</Link>
                  </li>
                </ul>
              </div>
              <div className="space-y-3">
                <h4 className="text-sm font-semibold">Legal</h4>
                <ul className="space-y-2">
                  <li>
                    <Link to="/privacy" className="text-sm text-muted-foreground hover:text-foreground">Privacy Policy</Link>
                  </li>
                  <li>
                    <Link to="/terms" className="text-sm text-muted-foreground hover:text-foreground">Terms of Service</Link>
                  </li>
                </ul>
              </div>
              <div className="space-y-3">
                <h4 className="text-sm font-semibold">Connect</h4>
                <div className="flex space-x-3">
                  <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
                      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                    </svg>
                  </a>
                  <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
                      <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
                    </svg>
                  </a>
                  <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
                      <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
            <div className="mt-6 text-center text-sm text-muted-foreground">
              © {new Date().getFullYear()} AttendTracker. All rights reserved.
            </div>
          </div>
        </footer>
      </div>
    </ThemeProvider>
  );
};

export default Index;
