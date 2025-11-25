import type { UserNode } from '../types/users';
import UserItem from './UserItem';

interface UserListProps {
  users: UserNode[];
  isRootLevel?: boolean;
  isExpanded?: (id: number) => boolean;
  onToggle?: (id: number) => void;
}

const UserList = ({
  users,
  isRootLevel = false,
  isExpanded,
  onToggle,
}: UserListProps) => {
  return (
    <div style={isRootLevel ? {} : { marginLeft: '50px' }}>
      {users.map((user) => (
        <UserItem
          key={user.id}
          user={user}
          isExpanded={isExpanded}
          onToggle={onToggle}
        />
      ))}
    </div>
  );
};

export default UserList;
