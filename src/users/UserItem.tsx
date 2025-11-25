import type { UserNode } from '../types/users';
import UserCard from './UserCard';
import UserList from './UserList';

const UserItem = ({ user }: { user: UserNode }) => {
  return (
    <div>
      <UserCard user={user} />
      <UserList users={user.reports} />
    </div>
  );
};

export default UserItem;
