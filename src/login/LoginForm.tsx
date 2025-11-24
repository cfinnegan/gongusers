import { useState } from 'react';
import { encode } from '../../utils/encode';
import type { Secrets, User } from '../types/users';
import { lookupUser } from '../services/auth';

function LoginForm({ users, secrets }: { users: User[]; secrets: Secrets }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [secret, setSecret] = useState('');
  const [user, setUser] = useState<User | null>(null);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const encoded = encode(email, password);
    setSecret(encoded);
    const user = lookupUser(encoded, users, secrets);
    setUser(user || null);
  };

  return (
    <div>
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
        <button type="submit">Encode</button>
      </form>
      {secret && user && (
        <div>
          User: {user?.firstName} {user?.lastName}
          <pre>{JSON.stringify(user, null, 2)}</pre>
        </div>
      )}
      {secret && !user && <div>User not found</div>}
    </div>
  );
}

export default LoginForm;
