import HeroSquare from './HeroSquare';

function HeroImage() {
  return (
    <div
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        backgroundColor: '#190851',
      }}
    >
      <div
        style={{
          position: 'absolute',
          top: 0,
          right: 0,
          backgroundColor: 'rgb(118, 68, 215)',
          width: '50vw',
          height: '100vh',
        }}
      >
        <div
          style={{
            position: 'relative',
            width: '100%',
            height: '100%',
            overflow: 'hidden',
          }}
        >
          <div
            style={{
              position: 'absolute',
              left: '-60vh', // Position so half the square (80vh / 2 = 40vh) is offscreen
              top: '60%',
              transform: 'translateY(-50%)',
            }}
          >
            <HeroSquare />
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeroImage;
