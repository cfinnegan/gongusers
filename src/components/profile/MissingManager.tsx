import type { UserNode } from '../../types/users';
import { Badge } from '@/components/ui/badge';
import { AlertTriangle } from 'lucide-react';

function MissingManager({ user }: { user: UserNode }) {
  // Only show if manager is missing
  if (user.managerStatus !== 'missing') {
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
      Missing Manager
    </Badge>
  );
}

export default MissingManager;
