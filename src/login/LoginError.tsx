interface LoginErrorProps {
  show: boolean;
}

function LoginError({ show }: LoginErrorProps) {
  return (
    <div
      style={{
        marginTop: '18px',
        color: '#ff6b6b',
        fontSize: '14px',
        fontWeight: 'bold',
        visibility: show ? 'visible' : 'hidden',
        height: show ? 'auto' : '20px',
      }}
    >
      User not found
    </div>
  );
}

export default LoginError;
