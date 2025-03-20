
export type Component = 'L' | 'T' | 'P' | 'S';
export type ComponentPercentage = {
  component: Component;
  percentage: number;
  enabled: boolean;
};

export type AttendanceStatus = 'promoted' | 'condonation' | 'detained';

export function calculateAttendance(components: ComponentPercentage[]): number {
  const enabledComponents = components.filter(c => c.enabled);
  
  if (enabledComponents.length === 0) {
    return 0;
  }
  
  const sum = enabledComponents.reduce((acc, curr) => acc + curr.percentage, 0);
  return sum / enabledComponents.length;
}

export function getAttendanceStatus(attendance: number): AttendanceStatus {
  if (attendance > 85) {
    return 'promoted';
  } else if (attendance >= 75) {
    return 'condonation';
  } else {
    return 'detained';
  }
}

export function getStatusLabel(status: AttendanceStatus): string {
  switch (status) {
    case 'promoted':
      return 'Promoted';
    case 'condonation':
      return 'Condonation (₹500 Fine)';
    case 'detained':
      return 'Detained';
    default:
      return '';
  }
}

export function getStatusIcon(status: AttendanceStatus): string {
  switch (status) {
    case 'promoted':
      return '✓';
    case 'condonation':
      return '₹';
    case 'detained':
      return '✕';
    default:
      return '';
  }
}

export function getComponentLabel(component: Component): string {
  switch (component) {
    case 'L':
      return 'Lectures';
    case 'T':
      return 'Tutorials';
    case 'P':
      return 'Practicals';
    case 'S':
      return 'Skills';
    default:
      return '';
  }
}
