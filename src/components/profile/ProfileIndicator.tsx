import type { UserNode } from '../../types/users';

function ProfileIndicator({
  user,
  isLight,
}: {
  user: UserNode | null;
  isLight?: boolean;
}) {
  // Mock component - will be replaced with shadcn later
  return (
    <div style={{ fontSize: '14px', color: isLight ? 'white' : 'black' }}>
      {(user?.reports?.length ?? 0) > 0 ? '+' : '-'}
    </div>
  );
}

export default ProfileIndicator;
