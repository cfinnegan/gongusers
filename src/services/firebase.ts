import { useEffect, useState } from 'react';
import type { Secrets, User } from '../types/users';

const firebaseUrl = 'https://gongfetest.firebaseio.com/.json';

export const useFirebase = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [secrets, setSecrets] = useState<Secrets>({});

  const fetchData = async () => {
    const response = await fetch(firebaseUrl);
    const data = await response.json();
    setUsers(data.users);
    setSecrets(data.secrets);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return { users, secrets };
};
