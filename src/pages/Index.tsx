
import { AttendanceCalculator } from '@/components/AttendanceCalculator';
import { ThemeToggle } from '@/components/ThemeToggle';
import { ThemeProvider } from '@/hooks/useTheme';

const Index = () => {
  return (
    <ThemeProvider>
      <div className="min-h-screen w-full flex flex-col items-center justify-center bg-background transition-colors duration-300 px-4 py-12">
        <div className="fixed top-5 right-5 z-10">
          <ThemeToggle />
        </div>
        
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
          
          <footer className="mt-16 text-center text-sm text-muted-foreground animate-fade-in">
            <p>
              Enter your attendance percentages for each component.
              Only enabled components will be used in the calculation.
            </p>
          </footer>
        </div>
      </div>
    </ThemeProvider>
  );
};

export default Index;
