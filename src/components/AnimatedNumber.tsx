
import { useEffect, useState } from 'react';
import { cn } from '@/lib/utils';

interface AnimatedNumberProps {
  value: number;
  duration?: number;
  className?: string;
  formatter?: (value: number) => string;
}

export const AnimatedNumber = ({
  value,
  duration = 500,
  className,
  formatter = (val: number) => val.toFixed(1)
}: AnimatedNumberProps) => {
  const [displayValue, setDisplayValue] = useState(0);
  
  useEffect(() => {
    // Set start time
    const startTime = Date.now();
    const startValue = displayValue;
    const endValue = value;
    const change = endValue - startValue;
    
    // Update value with animation
    const animateValue = () => {
      const currentTime = Date.now();
      const elapsed = currentTime - startTime;
      
      if (elapsed < duration) {
        // Calculate new value based on easing function
        const progress = elapsed / duration;
        const easedProgress = easeOutQuart(progress);
        const newValue = startValue + change * easedProgress;
        
        setDisplayValue(newValue);
        requestAnimationFrame(animateValue);
      } else {
        // Animation complete, set to final value
        setDisplayValue(endValue);
      }
    };
    
    requestAnimationFrame(animateValue);
    
    // Cleanup animation on component unmount
    return () => {
      setDisplayValue(endValue);
    };
  }, [value, duration]);
  
  // Easing function for smooth animation
  const easeOutQuart = (t: number) => 1 - Math.pow(1 - t, 4);
  
  return (
    <span className={cn('transition-colors duration-300', className)}>
      {formatter(displayValue)}
    </span>
  );
};
