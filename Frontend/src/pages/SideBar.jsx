import React, { useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import complain from './complaint.jpg'; // Import the profile image

function SideBar({ menuOpen, toggleMenu, darkMode, toggleTheme, authenticated, handleLogout }) {
  const menuRef = useRef();

  // Close the menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        toggleMenu(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [toggleMenu]);

  return (
    <>
      {/* SideBar */}
      <div
        ref={menuRef}
        className={`fixed top-0 left-0 shadow-md h-full w-64 transform ${
          menuOpen ? 'translate-x-0' : '-translate-x-full'
        } transition-transform duration-300 z-50 ${
          darkMode ? 'bg-gray-900 text-white' : 'bg-white text-gray-800'
        }`}
      >
        <button
          onClick={toggleMenu}
          className="absolute top-4 right-4 p-2 rounded-full transition-colors hover:bg-gray-200 dark:hover:bg-gray-700"
          aria-label="Close Menu"
          title="Close Menu"
        >
          ✖
        </button>
        <div className="p-4">
          <div className="flex items-center space-x-2 mb-6">
            <img src={complain} alt="User" className="rounded-full w-10 h-10" />
            <span className="font-semibold">Company Portal</span>
          </div>
          <ul className="space-y-4">
            <li>
              <Link
                to="/"
                className={`block px-4 py-2 rounded-md transition ${
                  darkMode ? 'hover:bg-gray-800' : 'hover:bg-gray-200'
                }`}
              >
                Home
              </Link>
            </li>
            <li>
              <a
                href="/complain"
                className={`block px-4 py-2 rounded-md ${
                  !authenticated ? 'opacity-50 pointer-events-none' : ''
                } transition ${
                  darkMode ? 'hover:bg-gray-800' : 'hover:bg-gray-200'
                }`}
              >
                Complaints
              </a>
            </li>
          </ul>
        </div>

        {/* Theme Switcher */}
        <div className="absolute bottom-16 w-full px-4">
          <button
            onClick={toggleTheme}
            className={`w-full px-4 py-2 rounded-md transition ${
              darkMode ? 'bg-blue-600 hover:bg-blue-700' : 'bg-blue-500 hover:bg-blue-600'
            } text-white`}
            title="Toggle Theme"
          >
            {darkMode ? 'Switch to Light Mode ☀️' : 'Switch to Dark Mode 🌙'}
          </button>
        </div>

        {/* Logout Button */}
        <div className="absolute bottom-4 w-full px-4">
          <button
            onClick={handleLogout}
            className={`w-full px-4 py-2 rounded-md transition ${
              darkMode ? 'bg-red-600 hover:bg-red-700' : 'bg-red-500 hover:bg-red-600'
            } text-white`}
            title="Logout"
          >
            Logout
          </button>
        </div>
      </div>

      {/* Overlay */}
      {menuOpen && (
        <div
          onClick={() => toggleMenu(false)}
          className="fixed inset-0 bg-black opacity-50 z-40"
        ></div>
      )}
    </>
  );
}

export default SideBar;
