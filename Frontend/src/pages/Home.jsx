import React, { useEffect, useState } from "react";
import axios from "axios";
import Header from "../components/Header";
import Footer from "../components/Footer";
import toast ,{Toaster} from "react-hot-toast";
const Home = () => {
  const [users, setUsers] = useState([]); // Original user data
  const [filteredUsers, setFilteredUsers] = useState([]); // Filtered users for display
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Show welcome message when the component loads 
    toast.success("Welcome Home!");

    const fetchUsers = async () => {
      try {
        const response = await axios.get("http://localhost:3000/api/auth");
        setUsers(response.data); // Set original data
        setFilteredUsers(response.data); // Initialize filtered data
      } catch (err) {
        setError("Failed to fetch users");
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);



  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header Component */}
      <Header users={users} setFilteredUsers={setFilteredUsers} />
      <div className="p-6">
        <h1 className="text-3xl font-bold mb-6 text-center">User Details</h1>
        {loading ? (
          <p className="text-center text-gray-600">Loading users...</p>
        ) : error ? (
          <p className="text-center text-red-500">{error}</p>
        ) : filteredUsers.length === 0 ? (
          <p className="text-center text-gray-600">No users found.</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {filteredUsers.map((user) => (
              <div
                key={user.id}
                className="bg-white shadow-md rounded-lg p-4 hover:shadow-lg transition duration-200"
              >
                <h2 className="text-lg font-extrabold text-black mb-2">
                  Name: <strong className="text-blue-400">{user.fullName}</strong>
                </h2>
                <p className="text-gray-700">
                  <strong>Email:</strong> {user.email}
                </p>
                <p className="text-gray-700">
                  <strong>Donated Amount:</strong> ${user.amount}
                </p>
              </div>
            ))}
          </div>
        )}
   
      </div>
      <Footer />
    </div>
  );
};

export default Home;
