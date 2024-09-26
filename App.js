import React from 'react';
import { useSelector } from 'react-redux';
import LoginForm from './components/LoginForm';
import LogoutButton from './components/LogoutButton';

function App() {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const user = useSelector((state) => state.auth.user);

  return (
    <div className="App">
      {isAuthenticated ? (
        <div>
          <h1>Welcome, {user.username}!</h1>
          <LogoutButton />
        </div>
      ) : (
        <LoginForm />
      )}
    </div>
  );
}

export default App;