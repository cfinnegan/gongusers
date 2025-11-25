import { useMemo } from 'react';
import { useUsers } from './UsersContext';
import { buildTree } from '../../utils/treeBuilder';
import UserList from './UserList';

function UsersPage() {
  const { users } = useUsers();
  const tree = useMemo(() => buildTree(users), [users]);

  console.log('tree', tree);

  return (
    <div>
      <div> Users Page </div>
      <UserList users={tree} />
    </div>
  );
}

export default UsersPage;
