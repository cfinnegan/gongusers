import type { User } from '../../types/users';
import { Badge } from '@/components/ui/badge';

function ProfileEmail({
  user,
  isLight,
}: {
  user: User | null;
  isLight?: boolean;
}) {
  return (
    <Badge variant={isLight ? 'secondary' : 'outline'} className="bg-gray-200">
      {user ? `${user.email}` : 'Guest'}
    </Badge>
  );
}

export default ProfileEmail;
