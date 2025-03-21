
import { Moon, Sun } from 'lucide-react';
import { useTheme } from '../hooks/useTheme';
import { Button } from './ui/button';
import { cn } from '@/lib/utils';
import { Switch } from './ui/switch';

interface ThemeToggleProps {
  className?: string;
}

export const ThemeToggle = ({ className }: ThemeToggleProps) => {
  const { theme, toggleTheme } = useTheme();
  const isLight = theme === 'light';

  return (
    <div className={cn('flex items-center gap-2', className)}>
      <Sun className={cn("h-[1.2rem] w-[1.2rem] transition-all", 
        isLight ? "text-primary" : "text-muted-foreground"
      )} />
      
      <Switch
        checked={!isLight}
        onCheckedChange={toggleTheme}
        aria-label="Toggle theme"
      />
      
      <Moon className={cn("h-[1.2rem] w-[1.2rem] transition-all", 
        !isLight ? "text-primary" : "text-muted-foreground"
      )} />
    </div>
  );
};
