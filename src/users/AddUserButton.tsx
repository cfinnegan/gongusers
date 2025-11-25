function AddUserButton() {
  return (
    <button
      disabled
      style={{
        padding: '8px 16px',
        borderRadius: '4px',
        border: '1px solid #ccc',
        backgroundColor: '#f5f5f5',
        color: '#999',
        cursor: 'not-allowed',
        fontSize: '14px',
      }}
    >
      Add User
    </button>
  );
}

export default AddUserButton;
