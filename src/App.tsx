import './App.css';
import LoginForm from './login/LoginForm';
import { useFirebase } from './services/firebase';

function App() {
  const { users, secrets } = useFirebase();

  return <LoginForm users={users} secrets={secrets} />;
}

export default App;
