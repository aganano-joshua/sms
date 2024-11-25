import React, { useEffect, useState } from 'react'
import ProfileEm from './ProfileEm'
import { useNavigate } from 'react-router-dom'
import { getProfile } from '../service/ApiService'

const EmployeePage = () => {
    const navigate = useNavigate()

    const [user, setUser] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProfile = async () => {
      const token = localStorage.getItem('token'); // Assuming the JWT token is stored in localStorage

      if (!token) {
        setError('No token found, please log in');
        return;
      }

      try {
        const data = await getProfile(token);
        console.log(data.user)
        setUser(data.user);  // Assuming the response contains a 'user' object
      } catch (err) {
        setError('Failed to fetch profile');
      }
    };

    fetchProfile();
  }, []);

  if (error) {
    return <div>{error}</div>;
  }

    const logOut = () => {
        alert('Are you sure you want to logout')
        navigate('/')
        localStorage.removeItem('token')
    }
  return (
    <div>
        <div className="header">
            <h1>Welcome, {user.name}</h1>
            <button onClick={logOut}>Logout</button>
        </div>
        <ProfileEm name={user.name} email={user.email} gender={user.gender} role={user.role}/>
    </div>
  )
}

export default EmployeePage