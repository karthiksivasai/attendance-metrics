
import { ThemeProvider } from '@/hooks/useTheme';
import { ThemeToggle } from '@/components/ThemeToggle';

const Privacy = () => {
  return (
    <ThemeProvider>
      <div className="min-h-screen w-full flex flex-col bg-background transition-colors duration-300 px-4 py-12">
        <nav className="w-full max-w-6xl mx-auto flex justify-between items-center py-4">
          <h2 className="text-2xl font-bold">Attendance Calculator</h2>
          <div className="flex items-center gap-6">
            <a href="/" className="hover:underline">Home</a>
            <a href="/about" className="hover:underline">About</a>
            <a href="/contact" className="hover:underline">Contact</a>
            <a href="/blog" className="hover:underline">Blog</a>
            <ThemeToggle />
          </div>
        </nav>
        
        <div className="w-full max-w-3xl mx-auto mt-12">
          <div className="text-center mb-12 space-y-3 animate-fade-in">
            <h1 className="text-4xl font-bold tracking-tight">Privacy Policy</h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Last updated: {new Date().toLocaleDateString()}
            </p>
          </div>
          
          <div className="prose dark:prose-invert max-w-none animate-fade-in">
            <section className="mb-8">
              <p>
                At Attendance Calculator, we value your privacy and are committed to protecting your personal information. 
                This Privacy Policy explains how we collect, use, and safeguard your data when you use our website.
              </p>
            </section>
            
            <section className="mb-8">
              <h2>Information We Collect</h2>
              <p>
                <strong>Personal Information:</strong> When you contact us through our Contact form, we collect:
              </p>
              <ul>
                <li>Name</li>
                <li>Email address</li>
                <li>Any other information you choose to provide in your message</li>
              </ul>
              
              <p>
                <strong>Usage Data:</strong> We automatically collect certain information when you visit our website:
              </p>
              <ul>
                <li>IP address</li>
                <li>Browser type and version</li>
                <li>Device information</li>
                <li>Pages visited</li>
                <li>Time and date of your visit</li>
                <li>Time spent on pages</li>
                <li>Referring website address</li>
              </ul>
            </section>
            
            <section className="mb-8">
              <h2>How We Use Your Information</h2>
              <p>We use the information we collect for various purposes:</p>
              <ul>
                <li>To provide and maintain our website</li>
                <li>To respond to your inquiries and support requests</li>
                <li>To improve our website and user experience</li>
                <li>To analyze usage patterns and trends</li>
                <li>To detect, prevent, and address technical issues</li>
              </ul>
            </section>
            
            <section className="mb-8">
              <h2>Cookies and Tracking Technologies</h2>
              <p>
                We use cookies and similar tracking technologies to track activity on our website and store certain information. 
                Cookies are files with a small amount of data which may include an anonymous unique identifier.
              </p>
              <p>
                You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent. 
                However, if you do not accept cookies, you may not be able to use some portions of our website.
              </p>
            </section>
            
            <section className="mb-8">
              <h2>Google AdSense</h2>
              <p>
                We use Google AdSense, a service that places third-party advertisements on our website. 
                Google AdSense may use cookies and web beacons to collect information about your visits to this and other websites to provide targeted advertising.
              </p>
              <p>
                If you would like more information about this practice and to know your choices about not having this information used by Google AdSense, 
                please visit <a href="https://policies.google.com/technologies/ads" target="_blank" rel="noopener noreferrer">Google's Advertising Policy</a>.
              </p>
            </section>
            
            <section className="mb-8">
              <h2>Data Security</h2>
              <p>
                The security of your data is important to us but remember that no method of transmission over the Internet 
                or method of electronic storage is 100% secure. While we strive to use commercially acceptable means to protect 
                your personal information, we cannot guarantee its absolute security.
              </p>
            </section>
            
            <section className="mb-8">
              <h2>Changes to This Privacy Policy</h2>
              <p>
                We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page 
                and updating the "Last updated" date at the top of this page.
              </p>
              <p>
                You are advised to review this Privacy Policy periodically for any changes. Changes to this Privacy Policy are effective when they are posted on this page.
              </p>
            </section>
            
            <section className="mb-8">
              <h2>Contact Us</h2>
              <p>
                If you have any questions about this Privacy Policy, please contact us:
              </p>
              <ul>
                <li>By email: privacy@attendancecalculator.com</li>
                <li>By visiting our <a href="/contact">Contact page</a></li>
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

export default Privacy;
