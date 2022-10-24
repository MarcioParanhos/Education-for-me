import './App.css';
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { onAuthStateChanged } from "firebase/auth";

// hooks
import { useState, useEffect } from "react";
import { useAuthentication } from "./hooks/useAuthentication";

// context
import { AuthProvider } from './contexts/AuthContext';

// Components
import Navbar from './components/Navbar/Navbar';

// pages
import Home from './pages/Home/Home';
import About from './pages/About/About';
import Login from './pages/Login/Login';
import Register from './pages/Register/Register';
import Dashboard from './pages/Dashboard/Dashboard';
import Ambiente from './pages/Ambiente/Ambiente';
import Quest from './pages/Quests/Quest';

function App() {

  const [user, setUser] = useState(undefined);
  const { auth } = useAuthentication();

  const loadingUser = user === undefined;

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      setUser(user);
    });
  }, [auth]);

  if (loadingUser) {
    return <p>Carregando...</p>;
  }
  
  return (
    <div className="App">
      <AuthProvider value={user}>
        <BrowserRouter>
        {user && (<Navbar />)}
          <Routes>
            <Route path='/' element={!user ? <Home /> : <Navigate to='/ambiente' />} />
            <Route path="/about" element={user ? <About /> : <Navigate to='/login' />} />
            <Route path='/login' element={!user ? <Login /> : <Navigate to='/' />} />
            <Route path='/register' element={!user ? <Register /> : <Navigate to='/' />} />
            <Route path='/quest/create' element={user ? <Quest /> : <Navigate to="/login" />} />
            <Route path='/dashboard' element={user ? <Dashboard /> : <Navigate to='/login' />} />
            <Route path='/ambiente' element={user ? <Ambiente /> : <Navigate to='/login' />} />
            <Route path='*' element={<Home />} />
          </Routes>
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
