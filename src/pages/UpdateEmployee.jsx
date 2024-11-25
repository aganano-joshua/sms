import React, { useEffect, useState } from 'react';
import { FaArrowLeft } from 'react-icons/fa6';
import '../util/AddEmployee.css';
import { registerUser } from '../service/ApiService';  // Make sure the API call is correct
import { useNavigate } from 'react-router-dom';
import '../util/Update.css'

const API_URL = "http://localhost:5000"; 
const AddEmployee = ({ onClick, employeeId }) => {
    const navigate = useNavigate()

    console.log("Employer",employeeId)

// const EditEmployeeForm = ({ employeeId }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    role: '',  // Default to empty or a valid role if you want
    salary: '',
    gender: '',
    address: ''
  });

  useEffect(() => {
    const fetchEmployeeDetails = async () => {
        try {
            const response = await fetch(`/admin/employees/${employeeId}`); // Assuming this endpoint returns the employee data
            const data = await response.json();
            setFormData(data); // Set the employee details to state
            // setLoading(false); // Stop loading
        } catch (err) {
            setError("Failed to fetch employee details");
            // setLoading(false);
        }
    };

    if (employeeId) {
        fetchEmployeeDetails(); // Fetch employee details when employeeId is available
    }
}, [employeeId]);


  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const token = localStorage.getItem("token"); // Get the token from localStorage or session

  // Handle change for form inputs
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Fetch employee details for pre-population when component mounts
  useEffect(() => {
    const fetchEmployeeData = async () => {
      try {
        const response = await fetch(`${API_URL}/profile/${employeeId}`, {
          method: "GET",
          headers: {
            "Authorization": `Bearer ${token}`,
            "Content-Type": "application/json"
          }
        });

        if (!response.ok) throw new Error("Employee not found");

        const data = await response.json();
        // Set the fetched data to the form
        setFormData({
          name: data.name,
          email: data.email,
          password: '', // You might want to leave password blank for security reasons
          role: data.role,
          salary: data.salary,
          gender: data.gender,
          address: data.address
        });
      } catch (err) {
        setError(err.message);
      }
    };

    if (employeeId) {
      fetchEmployeeData();
    }
  }, [employeeId, token]);

  // Handle form submission (update employee)
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`${API_URL}/admin/edit-employee/${employeeId}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`,
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();
      if (response.ok) {
        setMessage(data.message); // Success message
      } else {
        throw new Error(data.message || "Error updating employee");
      }
    } catch (error) {
      setError(error.message); // Error message
    }
  };

    return (
        <div className='update-employee'>
            <div className="main-content-main-page">
                <h1>Staff Management System</h1>
                <div className="add-employee-form">
                    <div className='arrow-directions'>
                        <button className='button1' onClick={onClick}><FaArrowLeft /></button>
                    </div>
                    <form onSubmit={handleSubmit}>
                        <h1>Update Employee</h1>
                        <div className="input-add-employee">
                            <label htmlFor="name">Name</label>
                            <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Name"
          />
                         </div>
                         <div className="input-add-employee">
                             <label htmlFor="email">Email</label>
                           <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Email"
          />
                         </div>
                         <div className="input-add-employee">
                             <label htmlFor="gender">Gender</label>
                             <select name="gender"
            value={formData.gender}
            onChange={handleChange}>
                                 <option value="other">Select Gender</option>
                                 <option value="male">male</option>
                                 <option value="female">female</option>
                             </select>
                         </div>
                         <div className="input-add-employee">
                             <label htmlFor="password">Password</label>
                             <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="Password"
          />
                         </div>
                         <div className="input-add-employee">
                             <label htmlFor="salary">Salary</label>
                             <input
            type="text"
            name="salary"
            value={formData.salary}
            onChange={handleChange}
            placeholder="Salary"
          />
                         </div>
                         <div className="input-add-employee">
                             <label htmlFor="role">Role</label>
                             <select name="role"
            value={formData.role}
            onChange={handleChange}>
                                 <option value="choose">Choose</option>
                                 <option value="employee">employee</option>
                                 <option value="admin">admin</option>
                             </select>
                         </div>
                         <div className="input-add-employee">
                             <label htmlFor="address">Address</label>
                             <input
            type="text"
            name="address"
            value={formData.address}
            onChange={handleChange}
            placeholder="Address"
          />
                         </div>
                         <div className="add-btn">
                             <input type="submit" value='Update Employee' />
                         </div>
                         {error && <p style={{ color: 'red' }}>{error}</p>}
                         {message && <p style={{ color: 'green' }}>{message}</p>}
                     </form>
                 </div>
             </div>
         </div>
    );
};

export default AddEmployee;
