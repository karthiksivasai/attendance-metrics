
import { Card, CardContent } from '@/components/ui/card';
import { AnimatedNumber } from './AnimatedNumber';
import { StatusBadge } from './StatusBadge';
import { cn } from '@/lib/utils';
import { AttendanceStatus } from '@/utils/calculatorUtils';
import { ImprovementMessage } from './ImprovementMessage';
import { Progress } from './ui/progress';

interface ResultCardProps {
  attendance: number;
  status: AttendanceStatus;
  className?: string;
}

export const ResultCard = ({ attendance, status, className }: ResultCardProps) => {
  return (
    <div className="w-full space-y-4">
      <Card className={cn('w-full overflow-hidden glass-card animate-scale-in', className)}>
        <CardContent className="p-6">
          <div className="space-y-4">
            <div className="flex flex-col items-center justify-center text-center space-y-2">
              <span className="text-sm font-medium text-muted-foreground">Your Attendance</span>
              <span className="flex items-baseline">
                <AnimatedNumber 
                  value={attendance} 
                  className={cn(
                    'text-4xl font-bold',
                    status === 'promoted' && 'text-promoted',
                    status === 'condonation' && 'text-condonation',
                    status === 'detained' && 'text-detained'
                  )}
                />
                <span className="ml-1 text-xl">%</span>
              </span>
              <StatusBadge status={status} size="lg" className="mt-1" />
            </div>

            <div className="relative pt-1">
              <Progress 
                value={Math.min(100, attendance)}
                className={cn(
                  "h-2 w-full",
                  status === 'promoted' && "bg-secondary [&>div]:bg-promoted",
                  status === 'condonation' && "bg-secondary [&>div]:bg-condonation",
                  status === 'detained' && "bg-secondary [&>div]:bg-detained"
                )}
              />
              <div className="flex justify-between mt-1 text-xs text-muted-foreground">
                <div>0%</div>
                <div>75%</div>
                <div>85%</div>
                <div>100%</div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <ImprovementMessage 
        attendance={attendance} 
        status={status} 
        className="animate-fade-in animate-delay-300"
      />
    </div>
  );
};
