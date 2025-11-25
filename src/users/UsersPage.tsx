import { useMemo } from 'react';
import { useUsers } from './UsersContext';
import { buildTree } from '../../utils/treeBuilder';
import UserList from './UserList';
import PageHeader from '../components/PageHeader';
import ActionBar from './ActionBar';

function UsersPage() {
  const { users } = useUsers();
  const { tree, totalCount } = useMemo(() => buildTree(users), [users]);

  return (
    <div>
      <PageHeader
        title="Users"
        description="Browse your team's organisational structure and understand how your company is organised."
      />
      <ActionBar tree={tree} totalCount={totalCount} />
      <UserList users={tree} isRootLevel={true} />
    </div>
  );
}

export default UsersPage;
