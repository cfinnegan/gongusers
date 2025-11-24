import { useAuth } from '../auth/AuthContext';

function ProfileName() {
  const { user } = useAuth();

  // Mock component - will be replaced with shadcn later
  return (
    <div style={{ color: 'white', fontSize: '14px' }}>
      {user ? `${user.firstName} ${user.lastName}` : 'Guest'}
    </div>
  );
}

export default ProfileName;
