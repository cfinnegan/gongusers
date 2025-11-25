import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../auth/AuthContext';
import HeroImage from './HeroImage';
import LoginForm from './LoginForm';
import GongLoginLogo from './GongLoginLogo';

function LoginPage() {
  const navigate = useNavigate();
  const { user } = useAuth();

  useEffect(() => {
    if (user) {
      navigate('/users');
    }
  }, [user, navigate]);

  return (
    <div
      style={{
        position: 'relative',
        height: '100vh',
        width: '100vw',
        overflow: 'hidden',
      }}
    >
      <GongLoginLogo />
      <HeroImage />
      <LoginForm />
    </div>
  );
}

export default LoginPage;
