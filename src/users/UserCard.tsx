import type { UserNode } from '../types/users';
import ProfileImage from '../components/profile/ProfileImage';
import ProfileName from '../components/profile/ProfileName';
import ProfileEmail from '../components/profile/ProfileEmail';
import ProfileIndicator from '../components/profile/ProfileIndicator';
import MissingManager from '../components/profile/MissingManager';
import CircularReferenceWarning from '../components/profile/CircularReferenceWarning';

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
      <MissingManager user={user} />
      <CircularReferenceWarning user={user} />
    </div>
  );
};

export default UserCard;
