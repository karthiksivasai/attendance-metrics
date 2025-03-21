
import { AttendanceCalculator } from '@/components/AttendanceCalculator';
import { ThemeToggle } from '@/components/ThemeToggle';
import { ThemeProvider } from '@/hooks/useTheme';
import { Button } from '@/components/ui/button';

const Index = () => {
  return (
    <ThemeProvider>
      <div className="min-h-screen w-full flex flex-col bg-background transition-colors duration-300 px-4 py-12">
        <nav className="w-full max-w-6xl mx-auto flex justify-between items-center py-4">
          <h2 className="text-2xl font-bold">Attendance Calculator</h2>
          <div className="flex items-center gap-6">
            <a href="/" className="hover:underline font-medium">Home</a>
            <a href="/about" className="hover:underline">About</a>
            <a href="/contact" className="hover:underline">Contact</a>
            <a href="/blog" className="hover:underline">Blog</a>
            <ThemeToggle />
          </div>
        </nav>
        
        <div className="w-full max-w-3xl mx-auto flex flex-col items-center">
          <div className="text-center mb-12 space-y-3 animate-fade-in">
            <h1 className="text-4xl font-bold tracking-tight">
              Student Attendance Calculator
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl">
              Calculate your attendance across Lectures, Tutorials, Practicals, and Skills.
            </p>
          </div>
          
          <AttendanceCalculator />
          
          <div className="mt-12 w-full max-w-xl space-y-4 animate-fade-in">
            <h2 className="text-2xl font-bold text-center">Why Use Our Calculator?</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
              <div className="p-4 bg-secondary/30 rounded-lg">
                <h3 className="font-medium mb-2">Easy to Use</h3>
                <p className="text-sm text-muted-foreground">Simple interface that calculates your attendance instantly.</p>
              </div>
              <div className="p-4 bg-secondary/30 rounded-lg">
                <h3 className="font-medium mb-2">Accurate Results</h3>
                <p className="text-sm text-muted-foreground">Get precise calculations based on your institution's policies.</p>
              </div>
              <div className="p-4 bg-secondary/30 rounded-lg">
                <h3 className="font-medium mb-2">Multiple Components</h3>
                <p className="text-sm text-muted-foreground">Calculate attendance for lectures, tutorials, practicals, and skills.</p>
              </div>
              <div className="p-4 bg-secondary/30 rounded-lg">
                <h3 className="font-medium mb-2">Instant Feedback</h3>
                <p className="text-sm text-muted-foreground">Know immediately if you're promoted, eligible for condonation, or detained.</p>
              </div>
            </div>
            
            <div className="flex justify-center mt-8">
              <Button asChild className="px-8 py-6 text-lg font-medium">
                <a href="/about">Learn More About Attendance</a>
              </Button>
            </div>
          </div>
          
          <footer className="mt-16 text-center text-sm text-muted-foreground animate-fade-in w-full">
            <div className="mb-6">
              <p>
                Enter your attendance percentages for each component.
                Only enabled components will be used in the calculation.
              </p>
            </div>
            <div className="border-t pt-6 flex flex-col md:flex-row justify-between items-center">
              <p>© {new Date().getFullYear()} Attendance Calculator. All rights reserved.</p>
              <div className="flex gap-4 mt-4 md:mt-0">
                <a href="/privacy" className="hover:underline">Privacy Policy</a>
                <a href="/terms" className="hover:underline">Terms of Service</a>
              </div>
            </div>
          </footer>
        </div>
      </div>
    </ThemeProvider>
  );
};

export default Index;
