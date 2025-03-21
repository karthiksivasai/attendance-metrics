
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Switch } from '@/components/ui/switch';
import { Component, ComponentPercentage, getComponentLabel } from '@/utils/calculatorUtils';
import { cn } from '@/lib/utils';

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
    <div 
      className={cn(
        "grid grid-cols-3 sm:grid-cols-4 items-center gap-4 p-4 rounded-lg transition-all duration-300",
        component.enabled 
          ? "bg-secondary/50" 
          : "bg-secondary/20 opacity-70"
      )}
    >
      <div className="flex items-center space-x-2">
        <Switch 
          id={`toggle-${component.component}`}
          checked={component.enabled}
          onCheckedChange={() => onToggleComponent(index)}
        />
        <Label 
          htmlFor={`toggle-${component.component}`}
          className="font-medium cursor-pointer"
        >
          {getComponentLabel(component.component)}
        </Label>
      </div>
      
      <div className="col-span-2 sm:col-span-3">
        <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4">
          <div className="w-full sm:w-full">
            <div className="relative">
              <Input
                id={`percentage-${component.component}`}
                type="text"
                inputMode="decimal"
                value={inputValue}
                onChange={(e) => onPercentageChange(index, e.target.value)}
                disabled={!component.enabled}
                className={cn(
                  "pr-8 h-10 transition-opacity duration-200",
                  !component.enabled && "opacity-50"
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
                <span className="text-sm text-muted-foreground">%</span>
              </div>
            </div>
          </div>
          
          {/* Progress bar */}
          <div className="w-full hidden sm:block">
            <div className="h-2 bg-secondary rounded-full overflow-hidden">
              <div 
                className={cn(
                  "h-full rounded-full transition-all duration-500 ease-out",
                  component.enabled ? cn(
                    component.percentage > 85 && 'bg-promoted/60',
                    component.percentage >= 75 && component.percentage <= 85 && 'bg-condonation/60',
                    component.percentage < 75 && 'bg-detained/60'
                  ) : 'opacity-30'
                )}
                style={{ width: `${component.percentage}%` }}
              ></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
