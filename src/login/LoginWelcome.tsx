import gongWelcome from '../assets/gong-welcome.svg';

function LoginWelcome() {
  return (
    <>
      <img
        src={gongWelcome}
        alt="Welcome"
        style={{
          marginBottom: '30px',
        }}
      />
      <div
        style={{
          marginBottom: '50px',
          color: 'white',
          fontSize: '19px',
        }}
      >
        The Gong Revenue AI Platform
      </div>
    </>
  );
}

export default LoginWelcome;
