import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import { FaSignOutAlt, FaSearch } from "react-icons/fa";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";

const Header = ({ users, setFilteredUsers }) => {
  const [searchTerm, setSearchTerm] = useState(""); // State for search term
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      // Call the backend API to log out
      await axios.post("http://localhost:3000/api/auth/logout");
      toast.success("Logged out successfully!"); // Show logout success popup
      // Optionally, redirect or clear user-related state
      navigate("/login");
    } catch (err) {
      toast.error("Failed to log out. Please try again."); // Handle any errors
    }
  };

  const handleSearch = (e) => {
    const term = e.target.value.toLowerCase(); // Convert input to lowercase
    setSearchTerm(term); // Update search term state

    // Filter users based on the search term
    const filtered = users.filter((user) =>
      user.fullName.toLowerCase().includes(term)
    );
    setFilteredUsers(filtered); // Update the filtered users
  };

  const location = useLocation();
  // Hide header on login and signup pages
  if (location.pathname === "/login" || location.pathname === "/signup") {
    return null;
  }

  return (
    <nav className="bg-gradient-to-b from-blue-400 to-blue-800 text-white p-4">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold sm:text-3xl">Sukuyomi</h1>
        <div className="flex items-center space-x-4">
          {/* Search Bar */}
          <div className="relative">
            <input
              type="text"
              placeholder="Search by name..."
              value={searchTerm}
              onChange={handleSearch}
              className="px-4 py-2 rounded-md text-black-700 border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:outline-none w-32 sm:w-48 transition-all"
            />
            <FaSearch
              className="absolute right-3 top-1/2 transform -translate-y-1/2 text-black"
              size={20}
            />
          </div>
          {/* Logout Button */}
          <button
            onClick={handleLogout}
            className="flex items-center space-x-2 hover:bg-blue-700 px-3 py-2 rounded-md cursor-pointer transition-all transform hover:scale-105"
          >
            <FaSignOutAlt
              size={20}
              className="transition-transform duration-300 hover:rotate-180"
            />{" "}
            {/* Logout icon with rotation on hover */}
            <span onClick={handleLogout}>Logout</span>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Header;
