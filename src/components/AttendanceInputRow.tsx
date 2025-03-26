
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
      transition={{ duration: 0.3, delay: index * 0.1 }}
      className={cn(
        "flex flex-col rounded-xl p-4 shadow-sm transition-all duration-300",
        component.enabled 
          ? "bg-secondary/80 border border-primary/10" 
          : "bg-secondary/20 border border-border/20 opacity-70"
      )}
    >
      {/* Component Label and Toggle */}
      <div className="flex items-center justify-between mb-4">
        <Label 
          htmlFor={`toggle-${component.component}`}
          className="font-medium text-base cursor-pointer"
        >
          {getComponentLabel(component.component)}
        </Label>
        
        <Switch 
          id={`toggle-${component.component}`}
          checked={component.enabled}
          onCheckedChange={() => onToggleComponent(index)}
          className="scale-110"
        />
      </div>
      
      {/* Percentage Input and Progress Bar */}
      <div className="space-y-3">
        <div className="relative">
          <Input
            id={`percentage-${component.component}`}
            type="text"
            inputMode="decimal"
            value={inputValue}
            onChange={(e) => onPercentageChange(index, e.target.value)}
            disabled={!component.enabled}
            className={cn(
              "pr-8 text-lg font-medium h-12 transition-opacity duration-200",
              !component.enabled ? "opacity-50" : "border-primary/20"
            )}
            maxLength={5}
            onBlur={() => {
              // If the field is empty when user leaves it, reset to the last valid value
              if (inputValue === '') {
                onPercentageChange(index, component.percentage.toString());
              }
            }}
          />
          <div className="absolute inset-y-0 right-3 flex items-center pointer-events-none">
            <span className="text-base text-muted-foreground">%</span>
          </div>
        </div>
        
        {/* Progress bar */}
        <div className="w-full">
          <div className="h-3 bg-secondary/70 rounded-full overflow-hidden">
            <motion.div 
              initial={{ width: 0 }}
              animate={{ width: `${component.percentage}%` }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className={cn(
                "h-full rounded-full transition-all duration-500 ease-out",
                component.enabled ? cn(
                  component.percentage > 85 && 'bg-promoted',
                  component.percentage >= 75 && component.percentage <= 85 && 'bg-condonation',
                  component.percentage < 75 && 'bg-detained'
                ) : 'bg-gray-400/30'
              )}
            ></motion.div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};
