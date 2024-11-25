/* eslint-disable no-useless-catch */
import axios from 'axios';

// Base URL of your backend API (you can set this dynamically or use environment variables)
const API_URL = "http://localhost:3000"; // Adjust based on your backend's URL

// Register user
export const registerUser = async (name, email, password, salary, address, gender, role) => {
  try {
    const response = await axios.post(`${API_URL}/auth/register`, {
      name,
      email,
      password,
      role,
      salary,
      gender,
      address,
    });
    return response.data; // Returns the success message or data
  } catch (error) {
    // Handle error (you can customize the error message)
    if (error.response) {
      return { error: error.response.data.message };
    } else {
      return { error: 'Error registering user. Please try again.' };
    }
  }
};

// Login user
export const loginUser = async (email, password) => {
  try {
    const response = await axios.post(`${API_URL}/auth/login`, {
      email,
      password,
    });
    return response.data; // Returns the token if login is successful
  } catch (error) {
    // Handle error (you can customize the error message)
    if (error.response) {
      return { error: error.response.data.message };
    } else {
      return { error: 'Error logging in. Please try again.' };
    }
  }
};


//Get user Info
export const getProfile = async (token) => {
    try {
      const response = await fetch(`${API_URL}/employee/profile`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`,  // Add the token here
        },
      });
  
      if (!response.ok) {
        throw new Error('Failed to fetch profile');
      }
  
      const data = await response.json();
      return data;  // Return profile data
    } catch (error) {
      console.error('Error fetching profile:', error);
      throw error;  // Rethrow the error so the calling code can handle it
    }
  };


  export const fetchEmployees = async (token) => {
    try {
      const response = await fetch(`${API_URL}/admin/employees`, {
        method: "GET",
        headers: {
          "Authorization": `Bearer ${token}`,
          "Content-Type": "application/json"
        }
      });
  
      if (!response.ok) {
        throw new Error("Failed to fetch employees");
      }
  
      const data = await response.json();
      return data.employees; // Return the list of employees
    } catch (error) {
      throw error; // Rethrow error so it can be caught in the component
    }
  };
