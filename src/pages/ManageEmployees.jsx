import NavBar from '../components/NavBar'
import { FaArrowLeft } from "react-icons/fa";
import { IoIosAddCircle } from "react-icons/io";

const ManageEmployees = () => {
    return (
        <div>
            <NavBar />
            <div className="main-content-main-page">
                <h1>Staff Management System</h1>
                <div>
                    <div className='arrow-directions'>
                        <button className='button1'><FaArrowLeft /></button>
                        <button><IoIosAddCircle/> Add Employee</button>
                    </div>
                    <div className="admin-info manage">
                        <h2>All Employees</h2>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ManageEmployees