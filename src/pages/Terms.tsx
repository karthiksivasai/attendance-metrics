
import { ThemeProvider } from '@/hooks/useTheme';
import { ThemeToggle } from '@/components/ThemeToggle';

const Terms = () => {
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
            <h1 className="text-4xl font-bold tracking-tight">Terms of Service</h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Last updated: {new Date().toLocaleDateString()}
            </p>
          </div>
          
          <div className="prose dark:prose-invert max-w-none animate-fade-in">
            <section className="mb-8">
              <p>
                Please read these Terms of Service ("Terms", "Terms of Service") carefully before using the Attendance Calculator website.
              </p>
              <p>
                Your access to and use of the Service is conditioned on your acceptance of and compliance with these Terms. 
                These Terms apply to all visitors, users, and others who access or use the Service.
              </p>
              <p>
                By accessing or using the Service, you agree to be bound by these Terms. If you disagree with any part of the terms, 
                you may not access the Service.
              </p>
            </section>
            
            <section className="mb-8">
              <h2>Use of Service</h2>
              <p>
                The Attendance Calculator is provided for informational and educational purposes only. 
                The calculations and results should be considered as estimates and not as definitive academic advice.
              </p>
              <p>
                You agree to use the Service only for lawful purposes and in a way that does not infringe the rights of, 
                restrict or inhibit anyone else's use and enjoyment of the Service.
              </p>
            </section>
            
            <section className="mb-8">
              <h2>Intellectual Property</h2>
              <p>
                The Service and its original content, features, and functionality are and will remain the exclusive property of 
                Attendance Calculator and its licensors. The Service is protected by copyright, trademark, and other laws.
              </p>
              <p>
                Our trademarks and trade dress may not be used in connection with any product or service without the prior written consent.
              </p>
            </section>
            
            <section className="mb-8">
              <h2>User Content</h2>
              <p>
                When you create, upload, post, send, receive, store, or otherwise make available any content on our Service, 
                you grant us a non-exclusive, transferable, sub-licensable, royalty-free, worldwide license to use any IP content 
                that you post on or in connection with the Service.
              </p>
              <p>
                You are responsible for the content you post and any consequences that may arise from your post. 
                We do not endorse any User Content and have no control over User Content.
              </p>
            </section>
            
            <section className="mb-8">
              <h2>Links To Other Web Sites</h2>
              <p>
                Our Service may contain links to third-party web sites or services that are not owned or controlled by Attendance Calculator.
              </p>
              <p>
                Attendance Calculator has no control over, and assumes no responsibility for, the content, privacy policies, 
                or practices of any third party web sites or services. You further acknowledge and agree that Attendance Calculator shall not be 
                responsible or liable, directly or indirectly, for any damage or loss caused or alleged to be caused by or in connection 
                with use of or reliance on any such content, goods or services available on or through any such web sites or services.
              </p>
              <p>
                We strongly advise you to read the terms and conditions and privacy policies of any third-party web sites or services that you visit.
              </p>
            </section>
            
            <section className="mb-8">
              <h2>Termination</h2>
              <p>
                We may terminate or suspend access to our Service immediately, without prior notice or liability, 
                for any reason whatsoever, including without limitation if you breach the Terms.
              </p>
              <p>
                All provisions of the Terms which by their nature should survive termination shall survive termination, 
                including, without limitation, ownership provisions, warranty disclaimers, indemnity and limitations of liability.
              </p>
            </section>
            
            <section className="mb-8">
              <h2>Disclaimer</h2>
              <p>
                Your use of the Service is at your sole risk. The Service is provided on an "AS IS" and "AS AVAILABLE" basis. 
                The Service is provided without warranties of any kind, whether express or implied, including, but not limited to, 
                implied warranties of merchantability, fitness for a particular purpose, non-infringement or course of performance.
              </p>
            </section>
            
            <section className="mb-8">
              <h2>Contact Us</h2>
              <p>
                If you have any questions about these Terms, please contact us:
              </p>
              <ul>
                <li>By email: terms@attendancecalculator.com</li>
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

export default Terms;
