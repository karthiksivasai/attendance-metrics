
import { ThemeToggle } from '@/components/ThemeToggle';
import { Card, CardContent } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Separator } from '@/components/ui/separator';
import { StatusBadge } from '@/components/StatusBadge';
import { Award, BookOpen, Clock, Flag, Info, Users } from 'lucide-react';

const About = () => {
  return (
    <div className="min-h-screen w-full flex flex-col bg-background transition-colors duration-300">
      <nav className="w-full border-b sticky top-0 z-10 backdrop-blur-md bg-background/80">
        <div className="max-w-6xl mx-auto flex justify-between items-center py-4 px-4">
          <h2 className="text-2xl font-bold">Attendance Calculator</h2>
          <div className="flex items-center gap-6">
            <a href="/" className="hover:underline">Home</a>
            <a href="/about" className="hover:underline font-medium">About</a>
            <a href="/contact" className="hover:underline">Contact</a>
            <a href="/blog" className="hover:underline">Blog</a>
            <ThemeToggle />
          </div>
        </div>
      </nav>
      
      {/* Hero Section */}
      <div className="w-full bg-primary/5 py-20 px-4">
        <div className="max-w-3xl mx-auto text-center space-y-6 section-fade-in">
          <h1 className="text-5xl md:text-6xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/70">
            About Us
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Understanding the importance of academic attendance and helping students succeed.
          </p>
        </div>
      </div>
      
      <main className="flex-1 w-full max-w-4xl mx-auto px-4 py-16 space-y-24">
        {/* Mission Statement Section */}
        <section className="space-y-8 section-fade-in">
          <div className="text-center space-y-4">
            <div className="inline-flex items-center justify-center mb-4">
              <Flag className="h-6 w-6 mr-2 text-primary" />
              <h2 className="text-3xl font-bold">Our Mission</h2>
            </div>
            <Separator className="mx-auto w-24 bg-primary/50 h-1 rounded-full mb-6" />
          </div>
          
          <Card className="border-none shadow-lg bg-gradient-to-br from-card/50 to-card hover:shadow-xl transition-all duration-300">
            <CardContent className="p-8 text-center">
              <p className="text-lg leading-relaxed">
                Our Attendance Calculator was created to help students easily track and calculate 
                their academic attendance percentages across different course components. 
                We understand the struggle of maintaining proper attendance requirements, and we aim 
                to provide a simple tool that helps students stay on track.
              </p>
            </CardContent>
          </Card>
        </section>
        
        {/* Why Attendance Matters Section */}
        <section className="space-y-8 section-fade-in">
          <div className="text-center space-y-4">
            <div className="inline-flex items-center justify-center mb-4">
              <Info className="h-6 w-6 mr-2 text-primary" />
              <h2 className="text-3xl font-bold">Why Attendance Matters</h2>
            </div>
            <Separator className="mx-auto w-24 bg-primary/50 h-1 rounded-full mb-6" />
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Regular attendance is a critical factor in academic success. It ensures:
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "Better Understanding",
                description: "Comprehend course material more effectively through consistent attendance",
                icon: <BookOpen className="h-10 w-10 text-primary/80" />
              },
              {
                title: "Active Participation",
                description: "Engage in classroom discussions and collaborative learning",
                icon: <Users className="h-10 w-10 text-primary/80" />
              },
              {
                title: "Access to Information",
                description: "Gain insights not available in textbooks or online resources",
                icon: <Info className="h-10 w-10 text-primary/80" />
              },
              {
                title: "Networking Opportunities",
                description: "Connect with peers and instructors for academic growth",
                icon: <Users className="h-10 w-10 text-primary/80" />
              },
              {
                title: "Time Management",
                description: "Develop discipline and effective scheduling habits",
                icon: <Clock className="h-10 w-10 text-primary/80" />
              },
              {
                title: "Academic Requirements",
                description: "Meet institutional minimum attendance requirements (75-85%)",
                icon: <Award className="h-10 w-10 text-primary/80" />
              }
            ].map((item, index) => (
              <Card key={index} className="overflow-hidden border hover:shadow-md transition-all duration-300">
                <CardContent className="p-6 flex flex-col items-center text-center gap-4">
                  <div className="rounded-full bg-primary/10 p-4">
                    {item.icon}
                  </div>
                  <h3 className="text-xl font-semibold">{item.title}</h3>
                  <p className="text-muted-foreground">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
        
        {/* How It Works Section */}
        <section className="space-y-8 section-fade-in">
          <div className="text-center space-y-4">
            <div className="inline-flex items-center justify-center mb-4">
              <Info className="h-6 w-6 mr-2 text-primary" />
              <h2 className="text-3xl font-bold">How It Works</h2>
            </div>
            <Separator className="mx-auto w-24 bg-primary/50 h-1 rounded-full mb-6" />
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Our calculator uses a weighted average formula that takes into account different components of your course.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="overflow-hidden border hover:shadow-md transition-all duration-300">
              <CardContent className="p-0">
                <div className="bg-primary/10 p-4 font-semibold text-center">Course Components</div>
                <div className="p-6 space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="bg-primary/20 rounded-full w-8 h-8 flex items-center justify-center shrink-0 font-bold">L</div>
                    <div>
                      <h4 className="font-semibold">Lectures</h4>
                      <p className="text-sm text-muted-foreground">Theoretical classroom sessions</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="bg-primary/20 rounded-full w-8 h-8 flex items-center justify-center shrink-0 font-bold">T</div>
                    <div>
                      <h4 className="font-semibold">Tutorials</h4>
                      <p className="text-sm text-muted-foreground">Problem-solving and discussion sessions</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="bg-primary/20 rounded-full w-8 h-8 flex items-center justify-center shrink-0 font-bold">P</div>
                    <div>
                      <h4 className="font-semibold">Practicals</h4>
                      <p className="text-sm text-muted-foreground">Laboratory or hands-on sessions</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="bg-primary/20 rounded-full w-8 h-8 flex items-center justify-center shrink-0 font-bold">S</div>
                    <div>
                      <h4 className="font-semibold">Skills</h4>
                      <p className="text-sm text-muted-foreground">Additional skill development classes</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card className="overflow-hidden border hover:shadow-md transition-all duration-300">
              <CardContent className="p-0">
                <div className="bg-primary/10 p-4 font-semibold text-center">Attendance Status</div>
                <div className="p-6 space-y-6">
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="font-medium">Promoted (≥85%)</span>
                      <StatusBadge status="promoted" />
                    </div>
                    <Progress value={90} className="h-2 bg-secondary" />
                    <p className="text-sm text-muted-foreground">Attendance above 85% - You're good to go!</p>
                  </div>
                  
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="font-medium">Condonation (75-85%)</span>
                      <StatusBadge status="condonation" />
                    </div>
                    <Progress value={80} className="h-2 bg-secondary" />
                    <p className="text-sm text-muted-foreground">Attendance between 75-85% - May require a fine payment</p>
                  </div>
                  
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="font-medium">Detained (&lt;75%)</span>
                      <StatusBadge status="detained" />
                    </div>
                    <Progress value={65} className="h-2 bg-secondary" />
                    <p className="text-sm text-muted-foreground">Attendance below 75% - May not be eligible for exams</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>
      </main>
      
      <footer className="mt-auto py-8 border-t">
        <div className="w-full max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center px-4">
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
  );
};

export default About;
