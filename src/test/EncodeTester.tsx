import { useState } from 'react';
import { encode } from '../../utils/encode';

function EncodeTester() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [encoded, setEncoded] = useState('');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setEncoded(encode(email, password));
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
      {encoded && <div>Encoded: {encoded}</div>}
    </div>
  );
}

export default EncodeTester;
