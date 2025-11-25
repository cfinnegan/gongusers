import type { UserNode } from '../types/users';

const UserCard = ({ user }: { user: UserNode }) => {
  return (
    <div
      style={{
        boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
        whiteSpace: 'nowrap',
        overflow: 'hidden',
        textOverflow: 'ellipsis',
      }}
    >
      {user.firstName} {user.lastName}
    </div>
  );
};

export default UserCard;
