'use client';
import { useState } from 'react';
import axios from 'axios';
import { useRouter } from 'next/navigation'; // Correct import
import { useAuth } from '../contexts/authContext';


  const Login = () =>{
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [error, setError] = useState('');
  const router = useRouter();
  const { dispatch } = useAuth();
  

  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    setError('');

    // Mandatory validation
    if (!email || !password) {
      setError('Email and Password are required !');
      return;
    }

    if (!validateEmail(email)) {
      setError('Please provide a valid email !');
      return;
    }

    try {
      const response = await axios.post('/api/login/', { email, password });
      if (response.status === 200) {
        console.log("What is the login status::" +response.data.message);
        localStorage.setItem('isAuthenticated', 'true');
        const match = email.match(/^([^@]*)@/);
        const capitalizeFirstLetter = (string) => {
          return string.replace(/^./, (match) => match.toUpperCase());
        };
        let upperCaseName = capitalizeFirstLetter(match[1]);
        localStorage.setItem('loginName', upperCaseName);
        dispatch({ type: 'LOGIN', payload: upperCaseName });
        router.push('/admin');
      }
    } catch (error) {
      setError(error.response?.data?.message || 'Login failed');
    }
  };

    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 px-4 sm:px-6 lg:px-8">
      <h1 className="text-4xl font-bold mb-6">Login</h1>
      <form onSubmit={handleLogin} className="w-full max-w-sm bg-white p-6 rounded-lg shadow-md">
        <div className="mb-4">
          <label htmlFor="email" className="block text-sm font-medium text-gray-700">
            Email
          </label>
          <input
            id="email"
            type="text"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="border p-2 rounded w-full mt-1"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="password" className="block text-sm font-medium text-gray-700">
            Password
          </label>
          <input
            id="password"
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="border p-2 rounded w-full mt-1"
          />
        </div>
        {error && <p className="text-red-500 mb-4">{error}</p>}
        <button type="submit" className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600 transition duration-200">
          Login
        </button>
      </form>
    </div>
      );
  }
  export default Login;