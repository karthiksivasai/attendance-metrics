
import { AttendanceCalculator } from '@/components/AttendanceCalculator';
import { ThemeToggle } from '@/components/ThemeToggle';
import { ThemeProvider } from '@/hooks/useTheme';
import { Button } from '@/components/ui/button';
import { ArrowRight, BarChart, CheckCircle, History } from 'lucide-react';
import { useRef } from 'react';
import { UserMenu } from '@/components/UserMenu';
import { Link } from 'react-router-dom';

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
        {/* Header */}
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

        {/* Main content */}
        <main className="flex-1">
          <section className="w-full py-12 md:py-24 lg:py-32">
            <div className="container px-4 md:px-6 space-y-10 md:space-y-16">
              <div className="flex flex-col items-center justify-center space-y-4 text-center">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                  Track Your Attendance. <br className="hidden sm:inline" />
                  Stay on Top of Your Classes.
                </h1>
                <p className="text-lg text-muted-foreground max-w-2xl">
                  Stay on top of your classes with our easy-to-use attendance calculator. Never worry about attendance shortage again.
                </p>
                <Button size="lg" className="mt-4 group" onClick={scrollToCalculator}>
                  Calculate Now <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </div>
              
              <div ref={calculatorRef}>
                <AttendanceCalculator />
              </div>
              
              <div className="mt-20 w-full max-w-xl space-y-8 animate-fade-in">
                <h2 className="text-2xl font-bold text-center">Why Use Our Calculator?</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="flex flex-col items-center text-center p-4">
                    <div className="rounded-full bg-primary/10 p-3 mb-4">
                      <CheckCircle className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="text-lg font-semibold">Accurate Calculation</h3>
                    <p className="text-sm text-muted-foreground">Get precise attendance percentage calculations</p>
                  </div>
                  <div className="flex flex-col items-center text-center p-4">
                    <div className="rounded-full bg-primary/10 p-3 mb-4">
                      <History className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="text-lg font-semibold">Track Progress</h3>
                    <p className="text-sm text-muted-foreground">Monitor your attendance over time</p>
                  </div>
                  <div className="flex flex-col items-center text-center p-4">
                    <div className="rounded-full bg-primary/10 p-3 mb-4">
                      <BarChart className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="text-lg font-semibold">Visual Reports</h3>
                    <p className="text-sm text-muted-foreground">See your attendance data visualized</p>
                  </div>
                </div>
              </div>
            </div>
          </section>
          
          {/* Testimonials */}
          <section className="bg-muted py-12 md:py-20">
            <div className="container px-4 md:px-6">
              <h2 className="text-2xl font-bold text-center mb-10">What Our Users Say</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-card p-6 rounded-lg shadow-sm">
                  <p className="italic text-muted-foreground mb-4">"This calculator saved me from attendance trouble. I always know exactly where I stand now."</p>
                  <p className="font-semibold">- Sarah K.</p>
                </div>
                <div className="bg-card p-6 rounded-lg shadow-sm">
                  <p className="italic text-muted-foreground mb-4">"So easy to use and super helpful for keeping track of all my classes."</p>
                  <p className="font-semibold">- James L.</p>
                </div>
                <div className="bg-card p-6 rounded-lg shadow-sm">
                  <p className="italic text-muted-foreground mb-4">"I recommend this to all my classmates. It's become essential for our attendance tracking."</p>
                  <p className="font-semibold">- Mia T.</p>
                </div>
              </div>
            </div>
          </section>
        </main>

        {/* Footer */}
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
                  <a href="#" className="text-muted-foreground hover:text-foreground">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
                      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                    </svg>
                  </a>
                  <a href="#" className="text-muted-foreground hover:text-foreground">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
                      <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
                    </svg>
                  </a>
                  <a href="#" className="text-muted-foreground hover:text-foreground">
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
