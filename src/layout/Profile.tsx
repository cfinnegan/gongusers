import ProfileImage from './ProfileImage';
import ProfileName from './ProfileName';

function Profile() {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
      <ProfileImage />
      <ProfileName />
    </div>
  );
}

export default Profile;

