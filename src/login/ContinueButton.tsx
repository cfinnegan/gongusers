interface ContinueButtonProps {
  type?: 'button' | 'submit' | 'reset';
  onClick?: () => void;
}

function ContinueButton({ type = 'submit', onClick }: ContinueButtonProps) {
  return (
    <button
      type={type}
      onClick={onClick}
      style={{
        backgroundColor: 'rgb(210, 45, 122)',
        color: 'white',
        border: 'none',
        borderRadius: '24px',
        padding: '12px 24px',
        fontSize: '16px',
        fontWeight: 500,
        cursor: 'pointer',
        width: '100%',
        marginTop: '8px',
      }}
    >
      Continue
    </button>
  );
}

export default ContinueButton;
