
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Switch } from '@/components/ui/switch';
import { Component, ComponentPercentage, getComponentLabel } from '@/utils/calculatorUtils';
import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';

interface AttendanceInputRowProps {
  component: ComponentPercentage;
  index: number;
  inputValue: string;
  onPercentageChange: (index: number, value: string) => void;
  onToggleComponent: (index: number) => void;
}

export const AttendanceInputRow = ({
  component,
  index,
  inputValue,
  onPercentageChange,
  onToggleComponent
}: AttendanceInputRowProps) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.2, delay: index * 0.05 }}
      className={cn(
        "flex items-center justify-between rounded-lg py-3 px-4 transition-all duration-200",
        component.enabled 
          ? "bg-secondary/30" 
          : "bg-background opacity-70"
      )}
    >
      {/* Component Label */}
      <Label 
        htmlFor={`toggle-${component.component}`}
        className="font-medium text-sm cursor-pointer"
      >
        {getComponentLabel(component.component)}
      </Label>
      
      {/* Input and Switch in a group */}
      <div className="flex items-center gap-3">
        <div className="relative w-16">
          <Input
            id={`percentage-${component.component}`}
            type="text"
            inputMode="decimal"
            value={inputValue}
            onChange={(e) => onPercentageChange(index, e.target.value)}
            disabled={!component.enabled}
            className={cn(
              "h-8 px-2 text-sm font-medium text-right pr-5 transition-opacity",
              !component.enabled ? "opacity-50" : "border-primary/20",
              component.percentage > 85 && component.enabled && "text-promoted",
              component.percentage >= 75 && component.percentage <= 85 && component.enabled && "text-condonation",
              component.percentage < 75 && component.enabled && "text-detained"
            )}
            maxLength={5}
            onBlur={() => {
              if (inputValue === '') {
                onPercentageChange(index, component.percentage.toString());
              }
            }}
          />
          <div className="absolute inset-y-0 right-2 flex items-center pointer-events-none">
            <span className="text-xs text-muted-foreground">%</span>
          </div>
        </div>
        
        <Switch 
          id={`toggle-${component.component}`}
          checked={component.enabled}
          onCheckedChange={() => onToggleComponent(index)}
        />
      </div>
    </motion.div>
  );
};
