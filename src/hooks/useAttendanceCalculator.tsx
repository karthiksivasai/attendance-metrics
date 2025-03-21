
import { useState, useEffect } from 'react';
import { ComponentPercentage, calculateAttendance, getAttendanceStatus } from '@/utils/calculatorUtils';

const DEFAULT_COMPONENTS: ComponentPercentage[] = [
  { component: 'L', percentage: 85, enabled: true },
  { component: 'T', percentage: 85, enabled: true },
  { component: 'P', percentage: 85, enabled: true },
  { component: 'S', percentage: 85, enabled: false }
];

export function useAttendanceCalculator() {
  const [components, setComponents] = useState<ComponentPercentage[]>(DEFAULT_COMPONENTS);
  const [attendance, setAttendance] = useState<number>(85);
  const [isCalculating, setIsCalculating] = useState(false);
  const [inputValues, setInputValues] = useState<string[]>(DEFAULT_COMPONENTS.map(c => c.percentage.toString()));
  const [showCelebration, setShowCelebration] = useState(false);
  const [confettiType, setConfettiType] = useState<'celebrate' | 'sad' | null>(null);

  useEffect(() => {
    if (isCalculating) {
      setIsCalculating(false);
    }
    
    // Calculate the attendance based on enabled components
    const calculatedAttendance = calculateAttendance(components);
    setAttendance(calculatedAttendance);
    
    // Check status to show appropriate celebration
    const status = getAttendanceStatus(calculatedAttendance);
    
    if (status === 'promoted' && calculatedAttendance > 85) {
      setShowCelebration(true);
      setConfettiType('celebrate');
      
      // Hide celebration after 5 seconds
      const timer = setTimeout(() => {
        setShowCelebration(false);
        setConfettiType(null);
      }, 5000);
      
      return () => clearTimeout(timer);
    }
  }, [components, isCalculating]);

  const handlePercentageChange = (index: number, value: string) => {
    // Only allow numbers (empty string is also allowed for backspace)
    if (value !== '' && !/^\d*\.?\d*$/.test(value)) {
      return;
    }
    
    // Limit to max 3 digits (0-100)
    if (value !== '' && value !== '.' && parseFloat(value) > 100) {
      return;
    }
    
    // Limit to 3 characters total (including decimal point)
    if (value.length > 3 && !value.includes('.')) {
      return;
    }

    // Limit to 5 characters if it includes a decimal (e.g., 99.9)
    if (value.includes('.') && value.length > 5) {
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

  return {
    components,
    attendance,
    status,
    inputValues,
    showCelebration,
    confettiType,
    handlePercentageChange,
    handleToggleComponent
  };
}
