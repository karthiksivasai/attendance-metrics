
import { ThemeProvider } from '@/hooks/useTheme';
import { ThemeToggle } from '@/components/ThemeToggle';

const About = () => {
  return (
    <ThemeProvider>
      <div className="min-h-screen w-full flex flex-col bg-background transition-colors duration-300 px-4 py-12">
        <nav className="w-full max-w-6xl mx-auto flex justify-between items-center py-4">
          <h2 className="text-2xl font-bold">Attendance Calculator</h2>
          <div className="flex items-center gap-6">
            <a href="/" className="hover:underline">Home</a>
            <a href="/about" className="hover:underline font-medium">About</a>
            <a href="/contact" className="hover:underline">Contact</a>
            <a href="/blog" className="hover:underline">Blog</a>
            <ThemeToggle />
          </div>
        </nav>
        
        <div className="w-full max-w-3xl mx-auto mt-12">
          <div className="text-center mb-12 space-y-3 animate-fade-in">
            <h1 className="text-4xl font-bold tracking-tight">About Us</h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Understanding the importance of academic attendance.
            </p>
          </div>
          
          <div className="prose dark:prose-invert max-w-none animate-fade-in">
            <section className="mb-10">
              <h2>Our Mission</h2>
              <p>
                Our Attendance Calculator was created to help students easily track and calculate their academic attendance percentages across different course components. 
                We understand the struggle of maintaining proper attendance requirements, and we aim to provide a simple tool that helps students stay on track.
              </p>
            </section>
            
            <section className="mb-10">
              <h2>Why Attendance Matters</h2>
              <p>
                Regular attendance is a critical factor in academic success. It ensures:
              </p>
              <ul>
                <li>Better understanding of course material</li>
                <li>Active participation in discussions</li>
                <li>Access to information not available in textbooks</li>
                <li>Networking opportunities with peers and instructors</li>
                <li>Development of time management and discipline</li>
              </ul>
              <p>
                Many institutions set a minimum attendance requirement of 75-85% for students to qualify for examinations. 
                Our calculator helps you stay aware of your current standing and what you need to maintain to meet these requirements.
              </p>
            </section>
            
            <section className="mb-10">
              <h2>How It Works</h2>
              <p>
                Our calculator uses a weighted average formula that takes into account different components of your course:
              </p>
              <ul>
                <li><strong>Lectures (L):</strong> Theoretical classroom sessions</li>
                <li><strong>Tutorials (T):</strong> Problem-solving and discussion sessions</li>
                <li><strong>Practicals (P):</strong> Laboratory or hands-on sessions</li>
                <li><strong>Skills (S):</strong> Additional skill development classes</li>
              </ul>
              <p>
                The calculator determines if you are:
              </p>
              <ul>
                <li><strong>Promoted:</strong> Attendance above 85%</li>
                <li><strong>Condonation:</strong> Attendance between 75-85% (may require a fine payment)</li>
                <li><strong>Detained:</strong> Attendance below 75% (may not be eligible for exams)</li>
              </ul>
            </section>
          </div>
        </div>
        
        <footer className="mt-20 py-8 border-t">
          <div className="w-full max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} Attendance Calculator. All rights reserved.
            </p>
            <div className="flex gap-6 mt-4 md:mt-0">
              <a href="/privacy" className="text-sm text-muted-foreground hover:underline">Privacy Policy</a>
              <a href="/terms" className="text-sm text-muted-foreground hover:underline">Terms of Service</a>
            </div>
          </div>
        </footer>
      </div>
    </ThemeProvider>
  );
};

export default About;
