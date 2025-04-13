import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './pages/Home';
import Login from './pages/Login';
import SignUp from './pages/SignUp';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [showLogin, setShowLogin] = useState(true); // toggle view

  const handleLogin = () => setIsAuthenticated(true);
  const handleSignupSuccess = () => setShowLogin(true); // after signup


  


  return (

    <div>
      {isAuthenticated ? (
        <Home />
      ) : showLogin ? (
        <>
          <Login onLogin={handleLogin} />
          <p>
            Don't have an account?{' '}
            <button onClick={() => setShowLogin(false)}>Sign Up</button>
          </p>
        </>
      ) : (
        <>
       
          <SignUp onSignupSuccess={handleSignupSuccess} />
          <p>
            Already have an account?{' '}
            <button onClick={() => setShowLogin(true)}>Login</button>
          </p>
        </>
      )}
    </div>
  )
}

export default App
