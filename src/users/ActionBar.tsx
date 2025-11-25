import type { UserNode } from '../types/users';
import AddUserButton from './AddUserButton';
import UserCountText from './UserCountText';
import ExpandCollapseButton from './ExpandCollapseButton';

interface ActionBarProps {
  tree: UserNode[];
  totalCount: number;
  onExpandAll: () => void;
  onCollapseAll: () => void;
  hasExpandedItems: boolean;
}

function ActionBar({
  tree,
  totalCount,
  onExpandAll,
  onCollapseAll,
  hasExpandedItems,
}: ActionBarProps) {
  const numRootUsers = tree.length;
  const numUsers = totalCount;

  const handleExpandCollapseAll = () => {
    if (hasExpandedItems) {
      onCollapseAll();
    } else {
      onExpandAll();
    }
  };

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
          onExpandCollapseAll={handleExpandCollapseAll}
          hasExpandedItems={hasExpandedItems}
        />
        <UserCountText numRootUsers={numRootUsers} numUsers={numUsers} />
      </div>
      <AddUserButton />
    </div>
  );
}

export default ActionBar;
