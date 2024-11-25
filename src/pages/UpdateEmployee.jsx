import { FaArrowLeft } from 'react-icons/fa6'
import '../util/Update.css'

const UpdateEmployee = ({onClick}) => {
    return (
        <div>
            <div className="update-employee">
                <div className="main-content-main-page">
                    <h1>Staff Management System</h1>
                    <div className="add-employee-form">
                    <div className='arrow-directions'>
                        <button className='button1' onClick={onClick}><FaArrowLeft /></button>
                    </div>
                    <form>
                        <h1>Update Employee</h1>
                        <div className="input-add-employee">
                            <label htmlFor="name">Name</label>
                            <input type="text" placeholder='Enter Employee Name'/>
                        </div>
                        <div className="input-add-employee">
                            <label htmlFor="Email">Email</label>
                            <input type="email" placeholder='Enter Employee Email'/>
                        </div>
                        <div className="input-add-employee">
                            <label htmlFor="gender">Gender</label>
                            <select name="" id="">
                                <option value="Male">Male</option>
                                <option value="Female">Female</option>
                            </select>
                        </div>
                        <div className="input-add-employee">
                            <label htmlFor="password">Password</label>
                            <input type="password" placeholder='Enter Employee password'/>
                        </div>
                        <div className="input-add-employee">
                            <label htmlFor="salary">Salary</label>
                            <input type="number" placeholder='Enter Employee salary'/>
                        </div>
                        <div className="input-add-employee">
                            <label htmlFor="address">Address</label>
                            <input type="text" placeholder='Enter Employee Address'/>
                        </div>
                        <div className="input-add-employee">
                            <label htmlFor="role">Role</label>
                            <input type="text" placeholder='Enter Employee Role' />
                        </div>
                        <div className=" add-btn">
                            <input type="submit" value='Update Employee'/>
                        </div>
                    </form>
                </div>
                </div>
            </div>
        </div>
    )
}

export default UpdateEmployee