import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import HomePage from './components/HomePage';
import Login from './components/Login';
import Register from './components/Register';
import Navigation from './components/Navigation';
import LoadingSpinner from './components/LoadingSpinner';
import axios from 'axios';

function App() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    const handleLogin = () => {
        setIsLoggedIn(true);
    };

    const handleLogout = async () => {
        try {
            await axios.post('http://localhost:8000/api/logout/');
            setIsLoggedIn(false);
            window.location.href = '/login'; // Redirect to the login page
        } catch (error) {
            console.error('Logout failed.', error);
        }
    };

    const usePageLoading = () => {
        const location = useLocation();

        useEffect(() => {
            setIsLoading(true);
            const timer = setTimeout(() => setIsLoading(false), 1000); // Adjust timeout as needed

            return () => clearTimeout(timer);
        }, [location]);

        return isLoading;
    };

    return (
        <Router>
            {isLoading && <LoadingSpinner />}
            <Navigation isLoggedIn={isLoggedIn} onLogout={handleLogout} />
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/login" element={<Login onLogin={handleLogin} />} />
                <Route path="/register" element={<Register />} />
            </Routes>
        </Router>
    );
}

export default App;
