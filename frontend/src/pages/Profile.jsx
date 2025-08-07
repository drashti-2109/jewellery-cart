import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { currentUser } from "../services/userService";
  
const Profile = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate()
  
  useEffect(() => {
    const fetchUser = async () => {
      try {
        const res = await currentUser();          
        setUser(res.data.data)
        
      } catch (err) {
        console.error("Error fetching user profile", err);
        navigate('/login')
        
      } finally {
        setLoading(false)
      }
    };    

    fetchUser()
  }, [navigate]);

  if(loading) return <p>Loading profile...</p>

  return (
    <div>
      <h2>Welcome, {user?.name}</h2>
      <p>Email: {user?.email}</p>
      <p>Phone: {user?.phone}</p>
    </div>
  );
}

export default Profile