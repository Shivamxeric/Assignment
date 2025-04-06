   import axios from 'axios';
import React from 'react'
import toast from 'react-hot-toast'
   
   const Profile = () => {
const [user, setUser] = useState([])
const [filter, setFilter] = useState([])
const [loading, setLoading] = useState(false)

useEffect(() => {
  toast.success('Welcome To Profile Page 👻');

const fetchData = async () => {
    try {
        setLoading(true)
            const response = await axios.get(import.meta.env.VITE_BACKEND_URL);
            setUser(response.data);
            setFilter(response.data)
            setLoading(false)
    } catch (error) {
        toast.error("Error in fetch user data ")
    }
      }
      fetchData()

}, [])


     return (
      <>
         
      
         <div className="fixed top-0 left-0 w-full h-full bg-gradient-to-br from-blue-500 to-purple-700 z-50 flex items-center justify-center">
    

      {/* Card Container with Animation */}
      <div
        className="bg-white w-80 sm:w-96 p-8 rounded-3xl shadow-2xl transform scale-95 opacity-0 animate-bounce-in text-center relative"
      >
      <div>
        {filter.map((user) => (
            <>
                  {/* User Image with Responsive Frame */}
        <div className="relative w-32 h-32 sm:w-40 sm:h-40 mx-auto rounded-full overflow-hidden shadow-lg border-[5px] border-gradient-to-r from-blue-400 via-teal-500 to-purple-500">
          <img
            src={user.profilePic}
            alt="User Profile"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Full Name */}
        <h2 className="mt-6 text-2xl sm:text-3xl font-bold text-gray-800">
          {user.fullName}
        </h2>

        {/* Username */}
        <p className="text-gray-600 text-sm sm:text-lg">@{user.email}</p>

        {/* Edit Profile Button */}
        <div className="mt-8">
          <button
            className="px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-semibold shadow-md 
            hover:scale-105 transition-transform duration-300"
          >
            Edit Profile
          </button>
        </div>
            </>
        ))}
      </div>
      </div>
    </div>
      
      
      
      
      
      
      
      </>
     )
   }
   
   export default Profile