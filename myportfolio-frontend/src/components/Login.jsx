import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Login = ({ onLogin }) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');
    const navigate = useNavigate(); // Hook for redirection

    useEffect(() => {
        axios.defaults.xsrfCookieName = 'csrftoken';
        axios.defaults.xsrfHeaderName = 'X-CSRFTOKEN';
    }, []);

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post('http://localhost:8000/api/login/', {
                username,
                password,
            });
            setMessage('Login successful!');
            onLogin(); // Notify parent component of successful login
            // Redirect to home page after successful login
            navigate('/');
        } catch (error) {
            setMessage('Login failed.');
        }
    };

    return (
        <div className="flex justify-center items-center h-screen bg-gray-100 p-4">
            <form onSubmit={handleSubmit} className="bg-white p-6 rounded shadow-md w-full max-w-md">
                <h2 className="text-2xl font-bold mb-6">Login</h2>
                {message && <p className="text-red-500">{message}</p>}
                <div className="mb-4">
                    <label className="block mb-2">Username</label>
                    <input
                        type="text"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        className="w-full p-2 border rounded"
                    />
                </div>
                <div className="mb-4">
                    <label className="block mb-2">Password</label>
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="w-full p-2 border rounded"
                    />
                </div>
                <button type="submit" className="w-full bg-blue-500 text-white p-2 rounded">
                    Login
                </button>
            </form>
        </div>
    );
};

export default Login;
