interface LoginInputProps {
  type: 'email' | 'password' | 'text';
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder: string;
}

function LoginInput({ type, value, onChange, placeholder }: LoginInputProps) {
  return (
    <>
      <style>
        {`
          .login-input::placeholder {
            color: #666;
          }
        `}
      </style>
      <input
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="login-input"
        style={{
          backgroundColor: '#cfbcf5',
          border: 'none',
          borderRadius: '24px',
          padding: '12px 20px',
          fontSize: '16px',
          outline: 'none',
          width: '100%',
          boxSizing: 'border-box',
          color: 'black',
        }}
        onFocus={(e) => {
          e.target.style.backgroundColor = 'white';
        }}
        onBlur={(e) => {
          e.target.style.backgroundColor = '#cfbcf5';
        }}
      />
    </>
  );
}

export default LoginInput;
