
import React from 'react';
import { Link } from 'react-router-dom';
import { BarChart } from 'lucide-react';
import { ThemeToggle } from '@/components/ThemeToggle';
import { UserMenu } from '@/components/UserMenu';
import { useIsMobile } from '@/hooks/use-mobile';

export const Header = () => {
  const isMobile = useIsMobile();
  
  return (
    <header className="sticky top-0 z-10 w-full border-b bg-background/80 backdrop-blur-md">
      <div className="container flex h-16 items-center justify-between px-2 sm:px-4">
        <div className="flex items-center gap-2 sm:gap-6">
          <Link to="/" className="flex items-center gap-1 sm:gap-2 font-bold text-base sm:text-xl truncate">
            <BarChart className="h-5 w-5 flex-shrink-0" />
            <span className="truncate">AttendTracker</span>
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
        <div className="flex items-center gap-2 sm:gap-4">
          <ThemeToggle />
          <UserMenu />
        </div>
      </div>
    </header>
  );
