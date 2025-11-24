import './App.css';
import LoginForm from './login/LoginForm';
import { useUsers } from './services/useUsers';

function App() {
  const { users, secrets } = useUsers();

  return <LoginForm users={users} secrets={secrets} />;
}

export default App;
