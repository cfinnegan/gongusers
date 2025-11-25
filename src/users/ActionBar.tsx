import type { UserNode } from '../types/users';
import AddUserButton from './AddUserButton';
import UserCountText from './UserCountText';

interface ActionBarProps {
  tree: UserNode[];
  totalCount: number;
}

function ActionBar({ tree, totalCount }: ActionBarProps) {
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
        <UserCountText numRootUsers={numRootUsers} numUsers={numUsers} />
      </div>
      <AddUserButton />
    </div>
  );
}

export default ActionBar;
