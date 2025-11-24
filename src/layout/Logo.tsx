import GongLogo from '../assets/gong-logo.svg';

function Logo() {
  return (
    <div style={{ display: 'flex', alignItems: 'center' }}>
      <img src={GongLogo} alt="Gong Logo" style={{ height: '30px' }} />
    </div>
  );
}

export default Logo;

