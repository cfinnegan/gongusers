import type { UserNode } from '../types/users';
import ProfileImage from '../layout/ProfileImage';
import ProfileName from '../layout/ProfileName';

const UserCard = ({ user }: { user: UserNode }) => {
  return (
    <div
      style={{
        boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
        whiteSpace: 'nowrap',
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        display: 'flex',
        alignItems: 'center',
        gap: '8px',
      }}
    >
      <ProfileImage user={user} />
      <ProfileName user={user} />
    </div>
  );
};

export default UserCard;
