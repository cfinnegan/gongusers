import { useMemo } from 'react';
import { useUsers } from './UsersContext';
import { buildTree } from '../../utils/treeBuilder';
import UserList from './UserList';
import PageHeader from '../components/PageHeader';

function UsersPage() {
  const { users } = useUsers();
  const tree = useMemo(() => buildTree(users), [users]);

  return (
    <div>
      <PageHeader
        title="Users"
        description="Browse your team's organisational structure and understand how your company is organised."
      />
      <UserList users={tree} />
    </div>
  );
}

export default UsersPage;
