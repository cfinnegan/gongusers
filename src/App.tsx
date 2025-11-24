import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import LoginPage from './login/LoginPage';
import UsersPage from './users/UsersPage';
import SettingsPage from './settings/SettingsPage';
import AppLayout from './layout/AppLayout';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route element={<AppLayout />}>
          <Route path="/users" element={<UsersPage />} />
          <Route path="/settings" element={<SettingsPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
