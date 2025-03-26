
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
    <div className="w-full max-w-3xl mx-auto space-y-8 section-fade-in">
      {showCelebration && confettiType && (
        <EmojiConfetti type={confettiType} />
      )}
      
      <Card className="glass-card">
        <CardHeader className="pb-4">
          <CardTitle className="text-center">Attendance Calculator</CardTitle>
          <CardDescription className="text-center">
            Enter your attendance percentages for each component
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4">
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
