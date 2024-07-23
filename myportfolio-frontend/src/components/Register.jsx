import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Register = () => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');
    const navigate = useNavigate(); // Hook for redirection

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post('http://localhost:8000/api/register/', {
                username,
                email,
                password,
            });
            setMessage('Registration successful!');
            // Redirect to login page after successful registration
            navigate('/login');
        } catch (error) {
            setMessage('Registration failed.');
        }
    };

    return (
        <div className="flex justify-center items-center h-screen bg-gray-100 p-4">
            <form onSubmit={handleSubmit} className="bg-white p-6 rounded shadow-md w-full max-w-md">
                <h2 className="text-2xl font-bold mb-6">Register</h2>
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
                    <label className="block mb-2">Email</label>
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
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
                    Register
                </button>
            </form>
        </div>
    );
};

export default Register;
