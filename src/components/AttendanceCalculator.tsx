
import { useState, useEffect } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Switch } from '@/components/ui/switch';
import { ResultCard } from './ResultCard';
import { ComponentPercentage, Component, calculateAttendance, getAttendanceStatus, getComponentLabel } from '@/utils/calculatorUtils';
import { cn } from '@/lib/utils';
import { PartyPopper } from 'lucide-react';

const DEFAULT_COMPONENTS: ComponentPercentage[] = [
  { component: 'L', percentage: 85, enabled: true },
  { component: 'T', percentage: 85, enabled: true },
  { component: 'P', percentage: 85, enabled: true },
  { component: 'S', percentage: 85, enabled: false }
];

export const AttendanceCalculator = () => {
  const [components, setComponents] = useState<ComponentPercentage[]>(DEFAULT_COMPONENTS);
  const [attendance, setAttendance] = useState<number>(85);
  const [isCalculating, setIsCalculating] = useState(false);
  const [inputValues, setInputValues] = useState<string[]>(DEFAULT_COMPONENTS.map(c => c.percentage.toString()));
  const [showCelebration, setShowCelebration] = useState(false);

  useEffect(() => {
    if (isCalculating) {
      setIsCalculating(false);
    }
    
    // Calculate the attendance based on enabled components
    const calculatedAttendance = calculateAttendance(components);
    setAttendance(calculatedAttendance);
    
    // Check if status is 'promoted' to show celebration
    const status = getAttendanceStatus(calculatedAttendance);
    if (status === 'promoted' && calculatedAttendance > 85) {
      setShowCelebration(true);
      
      // Hide celebration after 3 seconds
      const timer = setTimeout(() => {
        setShowCelebration(false);
      }, 3000);
      
      return () => clearTimeout(timer);
    }
  }, [components, isCalculating]);

  const handlePercentageChange = (index: number, value: string) => {
    // Only allow numbers (empty string is also allowed for backspace)
    if (value !== '' && !/^\d*\.?\d*$/.test(value)) {
      return;
    }
    
    // Update the input value first
    setInputValues(prev => {
      const newInputValues = [...prev];
      newInputValues[index] = value;
      return newInputValues;
    });
    
    // Only update the component if the value is valid
    if (value === '') {
      // When the field is empty, don't update the component yet
      return;
    }
    
    const newValue = parseFloat(value);
    
    if (isNaN(newValue) || newValue < 0 || newValue > 100) {
      return;
    }
    
    setIsCalculating(true);
    setComponents(prev => {
      const newComponents = [...prev];
      newComponents[index] = { ...newComponents[index], percentage: newValue };
      return newComponents;
    });
  };

  const handleToggleComponent = (index: number) => {
    setIsCalculating(true);
    setComponents(prev => {
      const newComponents = [...prev];
      newComponents[index] = { 
        ...newComponents[index], 
        enabled: !newComponents[index].enabled 
      };
      return newComponents;
    });
  };

  const status = getAttendanceStatus(attendance);

  return (
    <div className="w-full max-w-3xl mx-auto space-y-8 section-fade-in">
      {showCelebration && (
        <div className="fixed inset-0 flex items-center justify-center pointer-events-none z-50">
          <div className="animate-bounce">
            <PartyPopper className="h-24 w-24 text-promoted animate-scale-in" />
          </div>
        </div>
      )}
      
      <Card className="glass-card">
        <CardHeader className="pb-4">
          <CardTitle className="text-center">Attendance Calculator</CardTitle>
          <CardDescription className="text-center">
            Enter your attendance percentages for each component
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-6">
            {components.map((component, index) => (
              <div 
                key={component.component}
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
                    onCheckedChange={() => handleToggleComponent(index)}
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
                          value={inputValues[index]}
                          onChange={(e) => handlePercentageChange(index, e.target.value)}
                          disabled={!component.enabled}
                          className={cn(
                            "pr-8 h-10 transition-opacity duration-200",
                            !component.enabled && "opacity-50"
                          )}
                          onBlur={() => {
                            // If the field is empty when user leaves it, reset to the last valid value
                            if (inputValues[index] === '') {
                              setInputValues(prev => {
                                const newInputValues = [...prev];
                                newInputValues[index] = component.percentage.toString();
                                return newInputValues;
                              });
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
                            status === 'promoted' && 'bg-promoted/60',
                            status === 'condonation' && 'bg-condonation/60',
                            status === 'detained' && 'bg-detained/60',
                            !component.enabled && 'opacity-30'
                          )}
                          style={{ width: `${component.percentage}%` }}
                        ></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      <ResultCard 
        attendance={attendance} 
        status={status} 
      />
    </div>
  );
};
