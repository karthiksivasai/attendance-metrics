
import { ThemeProvider } from '@/hooks/useTheme';
import { ThemeToggle } from '@/components/ThemeToggle';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Share2, Calendar, Clock, Facebook, Twitter, Linkedin, Mail } from 'lucide-react';
import { useState } from 'react';

interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  category: string;
  image: string;
}

const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: "How to Maintain 75% Attendance in College",
    excerpt: "Practical tips and strategies to ensure you meet the minimum attendance requirements for your course.",
    date: "2023-09-15",
    readTime: "5 min read",
    category: "Tips",
    image: "https://images.unsplash.com/photo-1517486808906-6ca8b3f8e7a4?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGNvbGxlZ2V8ZW58MHx8MHx8fDA%3D"
  },
  {
    id: 2,
    title: "Why Attendance Matters for Your Career",
    excerpt: "Discover how regular attendance in college can shape your professional habits and impact your future career prospects.",
    date: "2023-10-22",
    readTime: "7 min read",
    category: "Career",
    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Y2FyZWVyfGVufDB8fDB8fHww"
  },
  {
    id: 3,
    title: "Tips to Avoid Attendance Shortage",
    excerpt: "Learn effective strategies to manage your time and prioritize classes to avoid attendance shortage issues.",
    date: "2023-11-10",
    readTime: "6 min read",
    category: "Tips",
    image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8c3R1ZGVudHxlbnwwfHwwfHx8MA%3D%3D"
  },
  {
    id: 4,
    title: "Understanding College Attendance Policies",
    excerpt: "A breakdown of common attendance policies in colleges and universities, and what they mean for students.",
    date: "2023-12-05",
    readTime: "8 min read",
    category: "Education",
    image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8dW5pdmVyc2l0eXxlbnwwfHwwfHx8MA%3D%3D"
  }
];

const Blog = () => {
  const [showShareOptions, setShowShareOptions] = useState<number | null>(null);

  const toggleShareOptions = (postId: number) => {
    setShowShareOptions(showShareOptions === postId ? null : postId);
  };

  const sharePost = (platform: string, post: BlogPost) => {
    const url = window.location.href;
    const text = `Check out this article: ${post.title}`;
    
    let shareUrl = '';
    
    switch (platform) {
      case 'twitter':
        shareUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}&url=${encodeURIComponent(url)}`;
        break;
      case 'facebook':
        shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`;
        break;
      case 'linkedin':
        shareUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`;
        break;
      case 'email':
        shareUrl = `mailto:?subject=${encodeURIComponent(post.title)}&body=${encodeURIComponent(`I thought you might be interested in this article: ${text}\n\n${url}`)}`;
        break;
    }
    
    if (shareUrl) {
      window.open(shareUrl, '_blank');
    }
  };

  return (
    <ThemeProvider>
      <div className="min-h-screen w-full flex flex-col bg-background transition-colors duration-300 px-4 py-12">
        <nav className="w-full max-w-6xl mx-auto flex justify-between items-center py-4">
          <h2 className="text-2xl font-bold">Attendance Calculator</h2>
          <div className="flex items-center gap-6">
            <a href="/" className="hover:underline">Home</a>
            <a href="/about" className="hover:underline">About</a>
            <a href="/contact" className="hover:underline">Contact</a>
            <a href="/blog" className="hover:underline font-medium">Blog</a>
            <ThemeToggle />
          </div>
        </nav>
        
        <div className="w-full max-w-6xl mx-auto mt-12">
          <div className="text-center mb-12 space-y-3 animate-fade-in">
            <h1 className="text-4xl font-bold tracking-tight">Blog</h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Articles and resources about attendance and academic success.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 animate-fade-in">
            {blogPosts.map((post) => (
              <Card key={post.id} className="overflow-hidden glass-card hover:shadow-lg transition-shadow duration-300">
                <div className="aspect-video w-full overflow-hidden">
                  <img 
                    src={post.image} 
                    alt={post.title}
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                  />
                </div>
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <Badge variant="secondary" className="mb-2">{post.category}</Badge>
                    <Button 
                      variant="ghost" 
                      size="icon" 
                      className="h-8 w-8"
                      onClick={() => toggleShareOptions(post.id)}
                    >
                      <Share2 className="h-4 w-4" />
                    </Button>
                  </div>
                  <CardTitle className="text-xl">{post.title}</CardTitle>
                  <CardDescription>{post.excerpt}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center text-sm text-muted-foreground space-x-4">
                    <div className="flex items-center">
                      <Calendar className="mr-1 h-3 w-3" />
                      <span>{new Date(post.date).toLocaleDateString()}</span>
                    </div>
                    <div className="flex items-center">
                      <Clock className="mr-1 h-3 w-3" />
                      <span>{post.readTime}</span>
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="flex justify-between">
                  <Button variant="outline" className="w-full">Read More</Button>
                  
                  {showShareOptions === post.id && (
                    <div className="absolute right-4 bottom-14 bg-background shadow-lg rounded-lg p-2 flex space-x-2 border z-10">
                      <Button variant="ghost" size="icon" onClick={() => sharePost('twitter', post)}>
                        <Twitter className="h-4 w-4 text-[#1DA1F2]" />
                      </Button>
                      <Button variant="ghost" size="icon" onClick={() => sharePost('facebook', post)}>
                        <Facebook className="h-4 w-4 text-[#4267B2]" />
                      </Button>
                      <Button variant="ghost" size="icon" onClick={() => sharePost('linkedin', post)}>
                        <Linkedin className="h-4 w-4 text-[#0077B5]" />
                      </Button>
                      <Button variant="ghost" size="icon" onClick={() => sharePost('email', post)}>
                        <Mail className="h-4 w-4" />
                      </Button>
                    </div>
                  )}
                </CardFooter>
              </Card>
            ))}
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

export default Blog;
