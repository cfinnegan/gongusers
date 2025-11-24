import { useAuth } from '../auth/AuthContext';

function ProfileImage() {
  const { user } = useAuth();

  // Mock component - will be replaced with shadcn later
  return (
    <div
      style={{
        width: '32px',
        height: '32px',
        borderRadius: '50%',
        backgroundColor: '#8039E9',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: 'white',
        fontSize: '14px',
        fontWeight: 'bold',
      }}
    >
      {user ? `${user.firstName[0]}${user.lastName[0]}`.toUpperCase() : '?'}
    </div>
  );
}

export default ProfileImage;
