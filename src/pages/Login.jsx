import { useState } from 'react';
import '../util/Login.css'
import { loginUser } from '../service/ApiService';
import { jwtDecode } from "jwt-decode";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const navigate = useNavigate()

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("http://localhost:3000/auth/login", { email, password });
      const token = response.data.token;

      // Save the token to localStorage or context
      localStorage.setItem("token", token);

      // Decode the token to get the user role
      const decodedToken = jwtDecode(token);
      const userRole = decodedToken.role;

      // Redirect based on the user role
      if (userRole === "admin") {
        navigate("/dashboard");  // Redirect to admin page
      } else if (userRole === "employee") {
        navigate("/employeedashboard");  // Redirect to employee page
      }
    } catch (err) {
      console.error("Login failed: " + err.response.data.message);
      setErrorMessage("Login failed: " + err.response.data.message);
    }
  };
    
  //   // Call the loginUser API
  //   const result = await loginUser(email, password);
    
  //   if (result.error) {
  //     setErrorMessage(result.error);
  //   } else {
  //     localStorage.setItem('token', result.token); // Save token to localStorage
  //     setSuccessMessage('Login successful');
  //   }
  // };
    return (
        <div className='form-container' style={{height: '100vh'}}>
            <form className='form' onSubmit={handleLogin}>
                <h1>SMS</h1>
                <div className='input-container'>
                    <label htmlFor="email">Email</label>
                    <input type="text" placeholder='Enter your email' value={email}
            onChange={(e) => setEmail(e.target.value)}
            required/>
                </div>
                <div className='input-container'>
                    <label htmlFor="email">Password</label>
                    <input type="password" placeholder='Enter your password' value={password}
            onChange={(e) => setPassword(e.target.value)}
            required />
                </div>
                <input type="submit" value='Login' className='form-btn' style={{height: '3rem'}}/>
                {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
      {successMessage && <p style={{ color: 'green' }}>{successMessage}</p>}
            </form>
        </div>
    )
}

export default Login