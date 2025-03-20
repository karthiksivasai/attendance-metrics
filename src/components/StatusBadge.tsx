
import { cn } from '@/lib/utils';
import { AttendanceStatus, getStatusIcon, getStatusLabel } from '@/utils/calculatorUtils';

interface StatusBadgeProps {
  status: AttendanceStatus;
  className?: string;
  size?: 'sm' | 'md' | 'lg';
  showLabel?: boolean;
  showIcon?: boolean;
}

export const StatusBadge = ({
  status,
  className,
  size = 'md',
  showLabel = true,
  showIcon = true
}: StatusBadgeProps) => {
  const sizeClasses = {
    sm: 'text-xs py-0.5 px-2',
    md: 'text-sm py-1 px-3',
    lg: 'text-base py-1.5 px-4'
  };
  
  const statusClasses = {
    promoted: 'bg-promoted/10 text-promoted border-promoted/30',
    condonation: 'bg-condonation/10 text-condonation border-condonation/30',
    detained: 'bg-detained/10 text-detained border-detained/30'
  };
  
  return (
    <div
      className={cn(
        'inline-flex items-center justify-center gap-1.5 font-medium border rounded-full transition-all animate-fade-in',
        sizeClasses[size],
        statusClasses[status],
        className
      )}
    >
      {showIcon && <span className="text-current">{getStatusIcon(status)}</span>}
      {showLabel && <span className="text-current">{getStatusLabel(status)}</span>}
    </div>
  );
};
