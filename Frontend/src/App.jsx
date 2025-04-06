import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';
import React from 'react';
import { useAuthContext } from './context/AuthContext';
import 'animate.css';
import { Toaster} from 'react-hot-toast'
import About from './pages/About';
import Contact from './pages/Contact';

function App() {
  const { authUser } = useAuthContext();
  return (
    <>
    <Router>

      <Routes>
        <Route path="/" element={ authUser ?  <Home /> : <Navigate to={"/login"} />} />
        <Route path="/about" element={ authUser ?  <About  /> : <Navigate to={"/login"} />} />
        <Route path="/contact" element={ authUser ?  <Contact /> : <Navigate to={"/login"} />} />
        <Route path="/login" element={ authUser ? <Navigate to={"/"}/> : <Login />} />
        <Route path="/signup" element={ authUser ? <Navigate to={"/login"} /> : <Signup />} />
      </Routes>
    </Router>
    <Toaster/>
    </>
  );
}

export default App;
