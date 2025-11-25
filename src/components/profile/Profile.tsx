import { useAuth } from '../../auth/AuthContext';
import type { User } from '../../types/users';
import ProfileImage from './ProfileImage';
import ProfileName from './ProfileName';

function Profile({ user, isLight }: { user: User | null; isLight?: boolean }) {
  const {} = useAuth();
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
      <ProfileImage user={user} />
      <ProfileName user={user} isLight={isLight} />
    </div>
  );
}

export default Profile;
