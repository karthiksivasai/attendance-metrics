
import { AttendanceCalculator } from '@/components/AttendanceCalculator';
import { ThemeToggle } from '@/components/ThemeToggle';
import { ThemeProvider } from '@/hooks/useTheme';
import { Button } from '@/components/ui/button';
import { ArrowRight, BarChart, CheckCircle, History } from 'lucide-react';

const Index = () => {
  return (
    <ThemeProvider>
      <div className="min-h-screen w-full flex flex-col bg-background transition-colors duration-300">
        <header className="bg-background/80 backdrop-blur-sm sticky top-0 z-50 border-b border-border/40">
          <nav className="w-full max-w-6xl mx-auto flex justify-between items-center py-4 px-4">
            <div className="flex items-center">
              <BarChart className="mr-2 h-6 w-6 text-primary" />
              <h2 className="text-2xl font-bold bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent">Attendance Tracker</h2>
            </div>
            <div className="hidden md:flex items-center gap-6">
              <a href="/" className="relative hover:text-primary transition-colors after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-full after:origin-bottom-right after:scale-x-0 after:bg-primary after:transition-transform after:duration-300 hover:after:origin-bottom-left hover:after:scale-x-100">Home</a>
              <a href="/about" className="relative hover:text-primary transition-colors after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-full after:origin-bottom-right after:scale-x-0 after:bg-primary after:transition-transform after:duration-300 hover:after:origin-bottom-left hover:after:scale-x-100">About</a>
              <a href="/contact" className="relative hover:text-primary transition-colors after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-full after:origin-bottom-right after:scale-x-0 after:bg-primary after:transition-transform after:duration-300 hover:after:origin-bottom-left hover:after:scale-x-100">Contact</a>
              <a href="/blog" className="relative hover:text-primary transition-colors after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-full after:origin-bottom-right after:scale-x-0 after:bg-primary after:transition-transform after:duration-300 hover:after:origin-bottom-left hover:after:scale-x-100">Blog</a>
              <ThemeToggle />
            </div>
            <div className="md:hidden flex items-center">
              <ThemeToggle />
            </div>
          </nav>
        </header>
        
        <main className="flex-1">
          <section className="py-16 px-4">
            <div className="w-full max-w-3xl mx-auto flex flex-col items-center">
              <div className="text-center mb-12 space-y-4 animate-fade-in">
                <h1 className="text-4xl md:text-5xl font-bold tracking-tight bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
                  Track Your Attendance
                </h1>
                <p className="text-lg text-muted-foreground max-w-2xl">
                  Stay on top of your classes with our easy-to-use attendance calculator. Never worry about attendance shortage again.
                </p>
                <Button size="lg" className="mt-4 group">
                  Calculate Now <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </div>
              
              <AttendanceCalculator />
              
              <div className="mt-20 w-full max-w-xl space-y-8 animate-fade-in">
                <h2 className="text-2xl font-bold text-center">Why Use Our Calculator?</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
                  <div className="p-6 rounded-lg bg-card/60 backdrop-blur-sm border border-border/50 shadow-sm transition-all duration-300 hover:shadow-md hover:translate-y-[-2px]">
                    <div className="bg-primary/10 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                      <CheckCircle className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="font-medium text-lg mb-2">Accurate Calculation</h3>
                    <p className="text-sm text-muted-foreground">Get precise calculations based on your institution's policies.</p>
                  </div>
                  <div className="p-6 rounded-lg bg-card/60 backdrop-blur-sm border border-border/50 shadow-sm transition-all duration-300 hover:shadow-md hover:translate-y-[-2px]">
                    <div className="bg-primary/10 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                      <BarChart className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="font-medium text-lg mb-2">Visual Progress</h3>
                    <p className="text-sm text-muted-foreground">Track your attendance visually with our interactive dashboard.</p>
                  </div>
                  <div className="p-6 rounded-lg bg-card/60 backdrop-blur-sm border border-border/50 shadow-sm transition-all duration-300 hover:shadow-md hover:translate-y-[-2px]">
                    <div className="bg-primary/10 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                      <History className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="font-medium text-lg mb-2">Multiple Components</h3>
                    <p className="text-sm text-muted-foreground">Calculate for lectures, tutorials, practicals, and skills.</p>
                  </div>
                </div>
                
                <div className="flex justify-center mt-8">
                  <Button asChild variant="outline" className="px-8 py-6 text-lg font-medium">
                    <a href="/about">Learn More About Attendance</a>
                  </Button>
                </div>
              </div>
            </div>
          </section>
          
          <section className="py-12 px-4 bg-secondary/30">
            <div className="w-full max-w-3xl mx-auto text-center space-y-6">
              <h2 className="text-2xl font-bold">What Students Say</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                <div className="p-6 rounded-lg bg-card shadow-sm">
                  <p className="text-muted-foreground italic mb-4">"This calculator helped me track my attendance and avoid detention. Simple yet powerful!"</p>
                  <p className="font-medium">— Rahul K.</p>
                </div>
                <div className="p-6 rounded-lg bg-card shadow-sm">
                  <p className="text-muted-foreground italic mb-4">"I love how I can see exactly how much attendance I need to maintain to stay promoted."</p>
                  <p className="font-medium">— Priya S.</p>
                </div>
              </div>
            </div>
          </section>
        </main>
        
        <footer className="bg-secondary/50 border-t border-border/40 py-8 px-4">
          <div className="w-full max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
              <div>
                <h3 className="font-bold text-lg mb-4">Attendance Calculator</h3>
                <p className="text-sm text-muted-foreground">
                  The easiest way to track and calculate your college attendance.
                </p>
              </div>
              <div>
                <h3 className="font-semibold mb-4">Resources</h3>
                <ul className="space-y-2 text-sm">
                  <li><a href="/blog" className="text-muted-foreground hover:text-primary transition-colors">Blog</a></li>
                  <li><a href="/about" className="text-muted-foreground hover:text-primary transition-colors">About Us</a></li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold mb-4">Legal</h3>
                <ul className="space-y-2 text-sm">
                  <li><a href="/privacy" className="text-muted-foreground hover:text-primary transition-colors">Privacy Policy</a></li>
                  <li><a href="/terms" className="text-muted-foreground hover:text-primary transition-colors">Terms of Service</a></li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold mb-4">Contact</h3>
                <a href="/contact" className="text-sm text-muted-foreground hover:text-primary transition-colors">Contact Us</a>
              </div>
            </div>
            <div className="border-t border-border/40 pt-6 flex flex-col md:flex-row justify-between items-center text-sm text-muted-foreground">
              <p>© {new Date().getFullYear()} Attendance Calculator. All rights reserved.</p>
              <div className="flex gap-4 mt-4 md:mt-0">
                <a href="/privacy" className="hover:text-primary transition-colors">Privacy</a>
                <a href="/terms" className="hover:text-primary transition-colors">Terms</a>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </ThemeProvider>
  );
};

export default Index;
