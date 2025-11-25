import type { UserNode } from '../types/users';
import UserItem from './UserItem';

const UserList = ({
  users,
  isRootLevel = false,
}: {
  users: UserNode[];
  isRootLevel?: boolean;
}) => {
  return (
    <div style={isRootLevel ? {} : { marginLeft: '50px' }}>
      {users.map((user) => (
        <UserItem key={user.id} user={user} />
      ))}
    </div>
  );
};

export default UserList;
