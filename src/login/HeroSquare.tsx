function HeroSquare() {
  const squareSize = '100vh';

  return (
    <div
      style={{
        width: squareSize,
        height: squareSize,
        backgroundColor: '#190851',
        borderRadius: '50px',
        transform: 'rotate(45deg)',
      }}
    />
  );
}

export default HeroSquare;
