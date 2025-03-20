
import { cn } from '@/lib/utils';
import { AttendanceStatus } from '@/utils/calculatorUtils';
import { AlertCircle, AlertTriangle, CheckCircle } from 'lucide-react';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';

interface ImprovementMessageProps {
  attendance: number;
  status: AttendanceStatus;
  className?: string;
}

export const ImprovementMessage = ({ attendance, status, className }: ImprovementMessageProps) => {
  const lostPercentage = Math.round((100 - attendance) * 10) / 10;
  const requiredPercentage = Math.max(0, Math.round((85 - attendance) * 10) / 10);
  
  const renderMessage = () => {
    switch (status) {
      case 'detained':
        return (
          <Alert className="border-detained/30 bg-detained/5">
            <AlertCircle className="h-5 w-5 text-detained" />
            <AlertTitle className="text-detained font-semibold">Attendance Improvement Needed</AlertTitle>
            <AlertDescription className="mt-2 space-y-2">
              <p>❌ You have lost {lostPercentage}% attendance till now (100% - {attendance}%).</p>
              <p>🚨 To get promoted, you need to increase your attendance by {requiredPercentage}%.</p>
            </AlertDescription>
          </Alert>
        );
      case 'condonation':
        return (
          <Alert className="border-condonation/30 bg-condonation/5">
            <AlertTriangle className="h-5 w-5 text-condonation" />
            <AlertTitle className="text-condonation font-semibold">Almost There!</AlertTitle>
            <AlertDescription className="mt-2 space-y-2">
              <p>⚠️ You have lost {lostPercentage}% attendance till now (100% - {attendance}%).</p>
              <p>🏆 You need just {requiredPercentage}% more to get promoted!</p>
            </AlertDescription>
          </Alert>
        );
      case 'promoted':
        return (
          <Alert className="border-promoted/30 bg-promoted/5">
            <CheckCircle className="h-5 w-5 text-promoted" />
            <AlertTitle className="text-promoted font-semibold">Great Job!</AlertTitle>
            <AlertDescription className="mt-2 space-y-2">
              <p>✅ You have lost {lostPercentage}% attendance till now (100% - {attendance}%).</p>
              <p>🎉 Congratulations! You are promoted.</p>
            </AlertDescription>
          </Alert>
        );
      default:
        return null;
    }
  };
  
  return (
    <div className={cn('w-full', className)}>
      {renderMessage()}
    </div>
  );
};
