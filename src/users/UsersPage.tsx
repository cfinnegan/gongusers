import { useMemo, useState, useCallback } from 'react';
import { useUsers } from './UsersContext';
import { buildTree } from '../../utils/treeBuilder';
import UserList from './UserList';
import PageHeader from '../components/PageHeader';
import ActionBar from './ActionBar';

function UsersPage() {
  const { users } = useUsers();
  const { tree, totalCount, allUserIds } = useMemo(
    () => buildTree(users),
    [users]
  );
  const [expandedIds, setExpandedIds] = useState<Set<number>>(new Set());

  const isExpanded = useCallback(
    (id: number) => {
      return expandedIds.has(id);
    },
    [expandedIds]
  );

  const toggleExpanded = useCallback((id: number) => {
    setExpandedIds((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(id)) {
        newSet.delete(id);
      } else {
        newSet.add(id);
      }
      return newSet;
    });
  }, []);

  const expandAll = useCallback(() => {
    setExpandedIds(new Set(allUserIds));
  }, [allUserIds]);

  const collapseAll = useCallback(() => {
    setExpandedIds(new Set());
  }, []);

  const hasExpandedItems = expandedIds.size > 0;

  return (
    <div>
      <PageHeader
        title="Users"
        description="Browse your team's organisational structure and understand how your company is organised."
      />
      <ActionBar
        tree={tree}
        totalCount={totalCount}
        onExpandAll={expandAll}
        onCollapseAll={collapseAll}
        hasExpandedItems={hasExpandedItems}
      />
      <UserList
        users={tree}
        isRootLevel={true}
        isExpanded={isExpanded}
        onToggle={toggleExpanded}
      />
    </div>
  );
}

export default UsersPage;
