import { CopyMinus, CopyPlus } from 'lucide-react';

function ExpandCollapseButton({
  onExpandCollapseAll,
  hasExpandedItems,
}: {
  onExpandCollapseAll: () => void;
  hasExpandedItems: boolean;
}) {
  return (
    <button
      onClick={onExpandCollapseAll}
      style={{
        padding: '8px',
        borderRadius: '4px',
        border: '1px solid #ccc',
        backgroundColor: 'white',
        cursor: 'pointer',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
      title={hasExpandedItems ? 'Collapse All' : 'Expand All'}
    >
      {hasExpandedItems ? <CopyMinus size={18} /> : <CopyPlus size={18} />}
    </button>
  );
}

export default ExpandCollapseButton;
