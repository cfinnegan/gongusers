import { UserRound } from 'lucide-react';
import type { User } from '../../types/users';
import { useAuth } from '../../auth/AuthContext';

function ProfileLoggedInIndicator({ user }: { user: User | null }) {
  const { user: loggedInUser } = useAuth();

  const isLoggedInUser = user && loggedInUser && user.id === loggedInUser.id;

  if (!isLoggedInUser) {
    return null;
  }

  return (
    <div
      style={{
        position: 'absolute',
        top: '-4px',
        right: '-4px',
        backgroundColor: '#e4348d',
        borderRadius: '50%',
        width: '16px',
        height: '16px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 10,
        border: '1px solid white',
      }}
    >
      <UserRound size={10} color="white" />
    </div>
  );
}

export default ProfileLoggedInIndicator;
