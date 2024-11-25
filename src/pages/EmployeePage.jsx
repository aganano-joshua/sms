import React from 'react'
import ProfileEm from './ProfileEm'
import { useNavigate } from 'react-router-dom'

const EmployeePage = () => {
    const navigate = useNavigate()

    const logOut = () => {
        alert('Are you sure you want to logout')
        navigate('/')
    }
  return (
    <div>
        <div className="header">
            <h1>Welcome, Motunrayo Sanni</h1>
            <button onClick={logOut}>Logout</button>
        </div>
        <ProfileEm/>
    </div>
  )
}

export default EmployeePage