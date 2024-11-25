import { useEffect, useState } from "react";
import { FaArrowLeft } from "react-icons/fa";
import { IoIosAddCircle } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import UpdateEmployee from "./UpdateEmployee";
import { fetchEmployees } from "../service/ApiService";

const Table = ({ nextStep, employeeId }) => {
    const navigate = useNavigate();
    const [isVisible, setIsVisible] = useState(false);
    const [employees, setEmployees] = useState([]);
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(true);
    const [employeeIdAd, setEmployeeIdAd] = useState(null);

    
    const token = localStorage.getItem("token"); // Get the JWT token from localStorage

    // Fetch employees data from the backend
    useEffect(() => {
        const fetchEmployeesData = async () => {
            try {
                const employeesData = await fetchEmployees(token);
                setEmployees(employeesData); // Set the employees data to state
            } catch (err) {
                setError(err.message); // Handle error
            } finally {
                setLoading(false); // Stop loading spinner once the data is fetched
            }
        };
        
        fetchEmployeesData();
    }, [token]);
    
    const toggleVisibility = (employeeId) => {
        setEmployeeIdAd(employeeId);
        console.log("showing");
        setIsVisible(!isVisible);
        console.log("Employee Id: ", employeeId);  // Logging the employee ID
    };
    

    const deleteEmployee = () => {
        alert("Are you sure you want to delete?")
        localStorage.removeItem('token')
    }
    return (
        <div style={{ height: '100vh' }}>
            <div className="main-content-main-page">
                <h1>Staff Management System</h1>
                <div>
                    <div className='arrow-directions'>
                        <button className='button1' onClick={() => navigate(-1)}><FaArrowLeft /></button>
                        <button onClick={nextStep}><IoIosAddCircle /> Add Employee</button>
                    </div>
                    <div className="admin-info manage">
                        <h2>All Employees</h2>
                        {loading && <p>Loading...</p>}
                        {error && <p style={{ color: "red" }}>{error}</p>}
                        <div className="staff-table">
                            <div className="table-container">
                                <table className="styled-table">
                                    <thead>
                                        <tr>
                                            <th>Name</th>
                                            <th>Image</th>
                                            <th>Email</th>
                                            <th>Address</th>
                                            <th>Salary</th>
                                            <th>Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {employees.length > 0 ? (
                                            employees.map((employee) => (
                                                <tr key={employee._id}>
                                                    <td>{employee.name}</td>
                                                    <td>
                                                        <img
                                                            src={employee.imageUrl || "https://picsum.photos/200/300"} // Add image URL field if present
                                                            alt={employee.name}
                                                            style={{ width: "100px", height: "100px" }}
                                                        />
                                                    </td>
                                                    <td>{employee.email}</td>
                                                    <td>{employee.address || "Not available"}</td>
                                                    <td>{employee.salary || "Not available"}</td>
                                                    <td>
                                                        <div className="action-btn">
                                                            <button
                                                                style={{ cursor: "pointer" }}
                                                                onClick={() => toggleVisibility(employee._id)}
                                                            >
                                                                Edit
                                                            </button>
                                                            <button
                                                                style={{ cursor: "pointer" }}
                                                                onClick={() => deleteEmployee(employee._id)}
                                                            >
                                                                Delete
                                                            </button>
                                                        </div>
                                                    </td>
                                                </tr>
                                            ))
                                        ) : (
                                            <tr>
                                                <td colSpan="6">No employees found</td>
                                            </tr>
                                        )}
                                    </tbody>
                                </table>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
            {isVisible && <UpdateEmployee onClick={toggleVisibility}  employeeId={employeeIdAd}/>}
        </div>
    )
}

export default Table