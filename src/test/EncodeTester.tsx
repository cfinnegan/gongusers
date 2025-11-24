import { useState } from 'react';
import { encode } from '../../utils/encode';
import { useFirebase } from '../services/firebase';

function EncodeTester() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [encoded, setEncoded] = useState('');

  const { users, secrets } = useFirebase();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setEncoded(encode(email, password));
  };

  console.log('users', users);
  console.log('secrets', secrets);

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
      {encoded && <div>Encoded: {encoded}</div>}
    </div>
  );
}

export default EncodeTester;
