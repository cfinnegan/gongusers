import type { UserNode } from '../types/users';
import UserItem from './UserItem';

const UserList = ({ users }: { users: UserNode[] }) => {
  return (
    <div style={{ marginLeft: '50px' }}>
      {users.map((user) => (
        <UserItem user={user} />
      ))}
    </div>
  );
};

export default UserList;
