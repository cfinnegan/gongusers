import { useMemo, useState } from 'react';
import { useUsers } from './UsersContext';
import { buildTree } from '../../utils/treeBuilder';
import UserList from './UserList';
import PageHeader from '../components/PageHeader';
import ActionBar from './ActionBar';

function UsersPage() {
  const { users } = useUsers();
  const { tree, totalCount } = useMemo(() => buildTree(users), [users]);
  const [hasExpandedItems, setHasExpandedItems] = useState(false);

  const handleExpandCollapseAll = () => {
    // TODO: Implement expand/collapse all functionality
    setHasExpandedItems((prev) => !prev);
  };

  return (
    <div>
      <PageHeader
        title="Users"
        description="Browse your team's organisational structure and understand how your company is organised."
      />
      <ActionBar
        tree={tree}
        totalCount={totalCount}
        onExpandCollapseAll={handleExpandCollapseAll}
        hasExpandedItems={hasExpandedItems}
      />
      <UserList users={tree} />
    </div>
  );
}

export default UsersPage;
