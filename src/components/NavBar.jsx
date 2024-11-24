import { SlSpeedometer } from "react-icons/sl";
import { SlPeople } from "react-icons/sl";
import { IoPersonCircleOutline } from "react-icons/io5";
import { FaPowerOff } from "react-icons/fa6";
import '../util/NavBar.css'
import { useNavigate } from "react-router-dom";

const NavBar = () => {
    const navigate = useNavigate();
    const handleLogout = () => {
        navigate('/')
    }

    const linkToManage = () => {
        navigate('/manage')
    }
  return (
    <div className="navabar-container">
        <h1>Admin Dashboard</h1>
        <div className="navbar">
            <ul>
                <li className="active" onClick={() => navigate('/dashboard')}>
                    <SlSpeedometer/>
                    Dashboard
                </li>
                <li onClick={linkToManage}>
                    <SlPeople/>
                    Manage Employees
                </li>
                <li>
                    <IoPersonCircleOutline/>
                    Profile
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