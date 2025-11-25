import ExpandCollapseButton from './ExpandCollapseButton';
import UserCountText from './UserCountText';
import AddUserButton from './AddUserButton';
import type { UserNode } from '../types/users';

interface ActionBarProps {
  tree: UserNode[];
  totalCount: number;
  onExpandCollapseAll: () => void;
  hasExpandedItems: boolean;
}

function ActionBar({
  tree,
  totalCount,
  onExpandCollapseAll,
  hasExpandedItems,
}: ActionBarProps) {
  const numRootUsers = tree.length;
  const numUsers = totalCount;

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: '24px',
        padding: '16px 0',
      }}
    >
      <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
        <ExpandCollapseButton
          onExpandCollapseAll={onExpandCollapseAll}
          hasExpandedItems={hasExpandedItems}
        />
        <UserCountText numRootUsers={numRootUsers} numUsers={numUsers} />
      </div>
      <AddUserButton />
    </div>
  );
}

export default ActionBar;
