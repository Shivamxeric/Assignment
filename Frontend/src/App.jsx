import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';
import React from 'react';
// import Logout from './pages/Logout';
import 'animate.css';
import { Toaster} from 'react-hot-toast'

function App() {
  return (
    <>
    <Router>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </Router>
    <Toaster/>
    </>
  );
}

export default App;
