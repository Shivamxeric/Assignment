import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useAuthContext } from "../context/AuthContext";
import {
  FaUser,
  FaEnvelope,
  FaLock,
  FaPhone,
  FaSignInAlt,
  FaQuestionCircle,
} from "react-icons/fa";
import toast from "react-hot-toast";
import { ClipLoader } from "react-spinners";

const Signup = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    number: "",
  });

  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { setAuthUser } = useAuthContext();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Check if all fields are filled
    const isFormComplete = Object.values(formData).every((field) => field.trim() !== "");
    if (!isFormComplete) {
      toast.error("Please fill out all fields.");
      return;
    }

    setLoading(true);

    try {
      const response = await axios.post(`${import.meta.env.VITE_BACKEND_URL}/signup`, formData);
      const data = response.data;

      toast.success("Signup successful! Redirecting to login...");
      localStorage.setItem("auth-user", JSON.stringify(data));
      setAuthUser(data);

      setTimeout(() => {
        setLoading(false);
        navigate("/login");
      }, 1500);
    } catch (error) {
      toast.error(error.response?.data?.message || "Error occurred during signup. Please try again.");
      console.error("Signup error:", error);
      setLoading(false);
    }
  };

  return (
    <div className="relative flex items-center justify-center min-h-screen overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 z-0 bg-gradient-to-r from-white via-gray-700 to-black animate-gradient blur-2xl opacity-60" />

      {/* Signup Card */}
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md z-10 transition-all duration-500 ease-in-out transform hover:scale-105">
        <h2 className="text-3xl font-bold text-center mb-6">Sign Up</h2>
        <form onSubmit={handleSubmit}>
          {/* Full Name */}
          <div className="mb-4 flex items-center border-b-2 border-gray-300">
            <FaUser className="text-xl text-gray-500 mr-3" />
            <input
              type="text"
              name="fullName"
              className="w-full p-3 bg-transparent outline-none"
              placeholder="Full Name"
              value={formData.fullName}
              onChange={handleChange}
              required
            />
          </div>

          {/* Email */}
          <div className="mb-4 flex items-center border-b-2 border-gray-300">
            <FaEnvelope className="text-xl text-gray-500 mr-3" />
            <input
              type="email"
              name="email"
              className="w-full p-3 bg-transparent outline-none"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
      
          {/* Password */}
          <div className="mb-4 flex items-center border-b-2 border-gray-300">
            <FaLock className="text-xl text-gray-500 mr-3" />
            <input
              type="password"
              name="password"
              className="w-full p-3 bg-transparent outline-none"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>

          {/* Number */}
          <div className="mb-4 flex items-center border-b-2 border-gray-300">
            <FaPhone className="text-xl text-gray-500 mr-3" />
            <input
              type="number"
              name="number"
              className="w-full p-3 bg-transparent outline-none"
              placeholder="Number"
              value={formData.number}
              onChange={handleChange}
              required
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full py-3 mt-4 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition duration-300 ease-in-out flex justify-center items-center"
            disabled={loading}
          >
            {loading ? <ClipLoader size={20} color="#fff" /> : "Sign Up"}
          </button>
        </form>

        {/* Options */}
        <div className="flex justify-between items-center mt-6">
          {/* Forgot Password */}
          <button
            onClick={() => navigate("/forgot-password")}
            className="flex items-center text-blue-600 hover:underline"
          >
            <FaQuestionCircle className="mr-2" /> Forgot Password
          </button>

          {/* Login */}
          <button
            onClick={() => navigate("/login")}
            className="flex items-center text-blue-600 hover:underline"
          >
            <FaSignInAlt className="mr-2" /> Login
          </button>
        </div>
      </div>
    </div>
  );
};

export default Signup;
