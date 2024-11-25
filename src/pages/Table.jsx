import { useState } from "react";
import { FaArrowLeft } from "react-icons/fa";
import { IoIosAddCircle } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import UpdateEmployee from "./UpdateEmployee";

const Table = ({ nextStep }) => {
    const navigate = useNavigate();
    const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    console.log("showing")
    setIsVisible(!isVisible);
  };

  const deleteEmployee = () => {
    alert("Are you sure you want to delete?")
  }
  return (
    <div style={{height: '100vh'}}>
        <div className="main-content-main-page">
                <h1>Staff Management System</h1>
                <div>
                    <div className='arrow-directions'>
                        <button className='button1' onClick={() => navigate(-1)}><FaArrowLeft /></button>
                        <button onClick={nextStep}><IoIosAddCircle /> Add Employee</button>
                    </div>
                    <div className="admin-info manage">
                        <h2>All Employees</h2>
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
                                    <tr>
                                        <td>Motunrayo sanni</td>
                                        <td><img src="https://picsum.photos/200/300" alt="image" /></td>
                                        <td>agananojoshua001@gmail.com</td>
                                        <td>12, kalu</td>
                                        <td>6000</td>
                                        <td>
                                            <div className="action-btn">
                                                <button style={{ cursor: 'pointer' }} onClick={toggleVisibility}>edit</button>
                                                <button style={{ cursor: 'pointer' }} onClick={deleteEmployee}>delete</button>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>Motunrayo sanni</td>
                                        <td><img src="https://picsum.photos/200/300" alt="image" /></td>
                                        <td>agananojoshua001@gmail.com</td>
                                        <td>12, kalu</td>
                                        <td>6000</td>
                                        <td>
                                            <div className="action-btn">
                                                <button style={{ cursor: 'pointer' }}>edit</button>
                                                <button style={{ cursor: 'pointer' }}>delete</button>
                                            </div>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
            {isVisible && <UpdateEmployee onClick={toggleVisibility}/>}
    </div>
  )
}

export default Table