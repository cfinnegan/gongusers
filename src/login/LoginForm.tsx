import { useState } from 'react';
import { encode } from '../../utils/encode';
import { useAuth } from '../auth/AuthContext';
import { lookupUser } from '../auth/utils';
import { useUsers } from '../users/UsersContext';
import ContinueButton from './ContinueButton';
import LoginInput from './LoginInput';
import LoginFormContainer from './LoginFormContainer';
import LoginError from './LoginError';
import LoginWelcome from './LoginWelcome';

function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [attemptedLogin, setAttemptedLogin] = useState(false);
  const { users, secrets } = useUsers();
  const { setUser } = useAuth();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const secret = encode(email, password);
    const foundUser = lookupUser(secret, users, secrets);
    setUser(foundUser || null);
    setAttemptedLogin(!foundUser);
  };

  return (
    <LoginFormContainer>
      <LoginWelcome />
      <form
        onSubmit={handleSubmit}
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '16px',
          width: '100%',
          maxWidth: '300px',
          marginLeft: 0,
        }}
      >
        <LoginInput
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
        />
        <LoginInput
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
        />
        <ContinueButton />
      </form>
      <LoginError show={attemptedLogin} />
    </LoginFormContainer>
  );
}

export default LoginForm;
