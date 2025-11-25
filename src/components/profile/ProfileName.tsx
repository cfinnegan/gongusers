import type { User } from '../../types/users';

function ProfileName({
  user,
  isLight,
}: {
  user: User | null;
  isLight?: boolean;
}) {
  return (
    <div style={{ fontSize: '14px', color: isLight ? 'white' : 'black' }}>
      {user ? `${user.firstName} ${user.lastName}` : 'Guest'}
    </div>
  );
}

export default ProfileName;
