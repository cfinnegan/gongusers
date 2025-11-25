import type { ReactNode } from 'react';

interface LoginFormContainerProps {
  children: ReactNode;
}

function LoginFormContainer({ children }: LoginFormContainerProps) {
  return (
    <div
      style={{
        position: 'relative',
        width: '100%',
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'flex-start',
        padding: '48px',
        color: 'white',
        marginLeft: 'calc(100vw / 4 - 48px)',
      }}
    >
      <div
        style={{
          width: 'calc(100vw / 3)',
          maxWidth: '400px',
          display: 'flex',
          alignItems: 'center',
          flexDirection: 'column',
          justifyContent: 'center',
        }}
      >
        {children}
      </div>
    </div>
  );
}

export default LoginFormContainer;
