import React, { useState } from 'react';
import { FaArrowLeft } from 'react-icons/fa6';
import '../util/AddEmployee.css';
import { registerUser } from '../service/ApiService';  // Make sure the API call is correct

const AddEmployee = ({ prevStep }) => {
    const [errorMessage, setErrorMessage] = useState('');
    const [successMessage, setSuccessMessage] = useState('');


    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        role: '',  // Ensure role is an empty string or a valid role
        salary: '',
        gender: '',
        address: ''
      });
      
      const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
          ...formData,
          [name]: value,
        });
      };
      
      const handleSubmit = async (e) => {
        e.preventDefault();
        console.log('Sending data:', formData);  // Log the data being sent
        try {
          const response = await fetch('http://localhost:3000/auth/register', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
          });
      
          const data = await response.json();
          console.log('User registered:', data);
          setSuccessMessage('Registered Successfully');
        } catch (error) {
          console.error('Error:', error);
          setErrorMessage(error);
        }
      };

    return (
        <div>
            <div className="main-content-main-page">
                <h1>Staff Management System</h1>
                <div className="add-employee-form">
                    <div className='arrow-directions'>
                        <button className='button1' onClick={prevStep}><FaArrowLeft /></button>
                    </div>
                    <form onSubmit={handleSubmit}>
                        <h1>Add Employee</h1>
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
                             <input type="submit" value='Add Employee' />
                         </div>
                         {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
                         {successMessage && <p style={{ color: 'green' }}>{successMessage}</p>}
                     </form>
                 </div>
             </div>
         </div>
    );
};

export default AddEmployee;
