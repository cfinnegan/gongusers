import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { encode } from '../../utils/encode';
import { useAuth } from '../auth/AuthContext';
import { lookupUser } from '../auth/utils';
import { useUsers } from '../users/UsersContext';

function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [attemptedLogin, setAttemptedLogin] = useState(false);
  const { users, secrets } = useUsers();
  const navigate = useNavigate();

  const { user, setUser } = useAuth();

  useEffect(() => {
    if (user) {
      navigate('/users');
    }
  }, [user, navigate]);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const secret = encode(email, password);
    const foundUser = lookupUser(secret, users, secrets);
    setUser(foundUser || null);
    setAttemptedLogin(true);
  };

  return (
    <div>
      {!user && (
        <>
        <form onSubmit={handleSubmit}>
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            placeholder="Email"
          />
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            placeholder="Password"
          />
          <button type="submit">Login</button>
        </form>
          {attemptedLogin && (
        <div className="text-red-500 text-sm font-bold">User not found</div>
          )}
        </>
      )}
    </div>
  );
}

export default LoginPage;
