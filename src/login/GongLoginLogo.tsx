import gongLogo from '../assets/gong-logo.svg';

const LOGO_SCALE = 2.8;

function GongLoginLogo() {
  const originalWidth = 86;
  const originalHeight = 30;

  return (
    <div
      style={{
        position: 'absolute',
        top: '70px',
        right: '100px',
        zIndex: 10,
      }}
    >
      <img
        src={gongLogo}
        alt="Gong Logo"
        style={{
          width: `${originalWidth * LOGO_SCALE}px`,
          height: `${originalHeight * LOGO_SCALE}px`,
          filter: 'brightness(0) invert(1)',
        }}
      />
    </div>
  );
}

export default GongLoginLogo;
