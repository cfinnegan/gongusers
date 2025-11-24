import Profile from './Profile';
import LogoutButton from './LogoutButton';
import Logo from './Logo';

function AppTopBar() {
  return (
    <div
      style={{
        width: '100%',
        backgroundColor: '#190851',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '0 16px',
        height: '64px',
        boxSizing: 'border-box',
      }}
    >
      <Logo />
      <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
        <Profile />
        <LogoutButton />
      </div>
    </div>
  );
}

export default AppTopBar;
