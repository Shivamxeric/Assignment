import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import React from 'react';
import 'animate.css';
import { Toaster } from 'react-hot-toast';
import Service from './pages/Services';
import SampleOfWork from './pages/SampleOfWork';
import Feedback from './pages/Feedback';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Service />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/sample" element={<SampleOfWork />} />
          <Route path="/feedback" element={<Feedback />} />
        </Routes>
      </Router>
      <Toaster />
    </>
  );
}

export default App;
