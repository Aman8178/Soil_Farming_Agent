import React from 'react'
import { useAuth } from '../context/AuthProvider'
import toast from 'react-hot-toast'

const Logout = () => {
    const [user, setAuthUser]=useAuth()
    const handleLogout = () => {
        try {
            setAuthUser(null); // Correctly reset authUser to null
            localStorage.removeItem("users"); // Ensure the key matches what you're storing in localStorage
            toast.success("Logout successful");
            window.location.reload();
        } catch (error) {
            toast.error("Error: " + error.message);
        }
    };
    
  return (
    <div>
      <button className="text-white px-3 py-2 rounded-md bg-red-500 duration-300 cursor-pointer"
      onClick={handleLogout}>Logout</button>
    </div>
  )
}

export default Logout
