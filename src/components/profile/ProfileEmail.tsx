import type { User } from '../../types/users';

function ProfileEmail({
  user,
  isLight,
}: {
  user: User | null;
  isLight?: boolean;
}) {
  // Mock component - will be replaced with shadcn later
  return (
    <div style={{ fontSize: '14px', color: isLight ? 'white' : 'black' }}>
      {user ? `${user.email}` : 'Guest'}
    </div>
  );
}

export default ProfileEmail;
