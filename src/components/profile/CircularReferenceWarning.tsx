import type { UserNode } from '../../types/users';
import { Badge } from '@/components/ui/badge';
import { AlertTriangle } from 'lucide-react';

function CircularReferenceWarning({ user }: { user: UserNode }) {
  // Only show if there's a circular reference
  if (user.managerStatus !== 'circular') {
    return null;
  }

  return (
    <Badge
      className="bg-yellow-500 hover:bg-yellow-600 text-white border-transparent"
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: '4px',
      }}
    >
      <AlertTriangle size={14} />
      Circular Reference: {user.circularManagerId}
    </Badge>
  );
}

export default CircularReferenceWarning;
