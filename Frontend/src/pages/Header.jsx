import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Home, User, LogOut, Menu, X, PhoneCall } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useAuthContext } from '../context/AuthContext';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const { authUser, setAuthUser } = useAuthContext();

  const handleLogout = async () => {
    localStorage.removeItem("auth-user");
    setAuthUser(null);
    navigate("/login");
  };

  const navLinks = [
    { to: '/', label: 'Home', icon: <Home size={18} /> },
    { to: '/about', label: 'About', icon: <User size={18} /> },
    { to: '/contact', label: 'Contact', icon: <PhoneCall size={18} /> },
  ];

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-white/70 backdrop-blur-md shadow-md px-6 py-3">
      <div className="flex justify-between items-center max-w-7xl mx-auto">

        {/* Left - Logo and Username */}
        <div className="flex items-center gap-4 text-xl font-bold tracking-wide">
          <Link to="/" className="flex items-center gap-2">
            <span className="text-blue-600">🌐</span>
            <span>My WebApp</span>
          </Link>
          {authUser?.user?.username && (
            <span className="text-sm font-medium text-gray-700">
              Welcome, {authUser.user.username}
            </span>
          )}
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-6 text-lg items-center">
          {navLinks.map(({ to, label, icon }) => (
            <Link
              key={label}
              to={to}
              className={`flex items-center gap-1 hover:text-blue-600 transition ${
                location.pathname === to ? 'text-blue-600 font-semibold' : ''
              }`}
            >
              {icon} {label}
            </Link>
          ))}
          <button
            onClick={handleLogout}
            className="flex items-center gap-1 text-red-600 hover:underline transition"
          >
            <LogOut size={18} /> Logout
          </button>
        </div>

        {/* Mobile Menu Toggle */}
        <button className="md:hidden text-gray-700" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-white shadow-inner rounded-md mt-2 px-4 py-4 space-y-4"
          >
            {navLinks.map(({ to, label, icon }) => (
              <Link
                key={label}
                to={to}
                className={`flex items-center gap-2 text-lg hover:text-blue-600 transition ${
                  location.pathname === to ? 'text-blue-600 font-semibold' : ''
                }`}
                onClick={() => setMenuOpen(false)}
              >
                {icon} {label}
              </Link>
            ))}
            <button
              onClick={() => {
                setMenuOpen(false);
                handleLogout();
              }}
              className="flex items-center gap-2 text-lg text-red-600 hover:underline transition"
            >
              <LogOut size={18} /> Logout
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
