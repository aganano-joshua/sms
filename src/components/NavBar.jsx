import { SlSpeedometer } from "react-icons/sl";
import { SlPeople } from "react-icons/sl";
import { IoPersonCircleOutline } from "react-icons/io5";
import { FaPowerOff } from "react-icons/fa6";
import '../util/NavBar.css'
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";

const NavBar = () => {
    const navigate = useNavigate();
    const location = useLocation();

    const [activeItem, setActiveItem] = useState("Home");

  const handleItemClick = (item, path) => {
    setActiveItem(item); // Set the active item
    navigate(path); // Navigate to the desired page
  };
    const handleLogout = () => {
        alert('Are you sure you want to logout')
        navigate('/')
    }
  return (
    <div className="navabar-container">
        <h1>Admin Dashboard</h1>
        <div className="navbar">
            <ul>
                <li className={`nav-item ${location.pathname === "/dashboard" ? "active" : ""}`} onClick={() => handleItemClick("Home", "/dashboard")}>
                    <NavLink to="/dashboard" className='navlink'>
                    <SlSpeedometer/>
                    Dashboard
                    </NavLink>
                </li>
                <li className={`nav-item ${location.pathname === "/manage" ? "active" : ""}`}>
                <NavLink to="/manage" className='navlink'>
                    <SlPeople/>
                    Manage Employees
                </NavLink>
                </li>
                <li className={`nav-item ${location.pathname === "/profile" ? "active" : ""}`}>
                <NavLink to="/profile" className='navlink'>
                    <IoPersonCircleOutline/>
                    Profile
                </NavLink>
                </li>
            </ul>
            <div className="profile-section">
                <div className="profile-circle">
                    JD
                </div>
                <staffname>Chief Excecutive Officer</staffname>
                <button onClick={handleLogout}><FaPowerOff/>Logout</button>
            </div>
        </div>
    </div>
  )
}

export default NavBar