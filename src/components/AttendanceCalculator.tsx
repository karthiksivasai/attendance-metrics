
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { ResultCard } from './ResultCard';
import { EmojiConfetti } from './EmojiConfetti';
import { AttendanceInputRow } from './AttendanceInputRow';
import { useAttendanceCalculator } from '@/hooks/useAttendanceCalculator';

export const AttendanceCalculator = () => {
  const {
    components,
    attendance,
    status,
    inputValues,
    showCelebration,
    confettiType,
    handlePercentageChange,
    handleToggleComponent
  } = useAttendanceCalculator();

  return (
    <div className="w-full max-w-xl mx-auto space-y-6 section-fade-in">
      {showCelebration && confettiType && (
        <EmojiConfetti type={confettiType} />
      )}
      
      <Card className="overflow-hidden border-0 shadow-sm">
        <CardHeader className="pb-2">
          <CardTitle className="text-xl text-center">Attendance Calculator</CardTitle>
          <CardDescription className="text-center text-xs">
            Toggle components and set percentages
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-2">
            {components.map((component, index) => (
              <AttendanceInputRow
                key={component.component}
                component={component}
                index={index}
                inputValue={inputValues[index]}
                onPercentageChange={handlePercentageChange}
                onToggleComponent={handleToggleComponent}
              />
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
