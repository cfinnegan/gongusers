import type { UserNode } from '../types/users';
import ProfileImage from '../components/profile/ProfileImage';
import ProfileName from '../components/profile/ProfileName';
import ProfileEmail from '../components/profile/ProfileEmail';
import ProfileIndicator from '../components/profile/ProfileIndicator';

const UserCard = ({ user }: { user: UserNode }) => {
  return (
    <div
      style={{
        whiteSpace: 'nowrap',
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        display: 'flex',
        alignItems: 'center',
        gap: '8px',
        padding: '10px',
      }}
    >
      <ProfileIndicator user={user} />
      <ProfileImage user={user} />
      <ProfileName user={user} />
      <ProfileEmail user={user} />
    </div>
  );
};

export default UserCard;
