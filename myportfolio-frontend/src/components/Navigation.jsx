import React from 'react';
import { Link } from 'react-router-dom';

const Navigation = ({ isLoggedIn, onLogout }) => {
    return (
        <nav className="p-4 bg-black text-white flex flex-wrap justify-between items-center border-purple-800 border">
            <div className="space-x-4 m-2 pl-7 flex flex-wrap">
                <Link to="/" className="hover:underline mx-2">Home</Link>
                <a href="#about" className="hover:underline mx-2">About</a>
                <a href="#education" className="hover:underline mx-2">Education & Skills</a>
            </div>
            <div className="m-2 pr-7">
                {isLoggedIn ? (
                    <button onClick={onLogout} className="hover:underline">Logout</button>
                ) : (
                    <>
                        <Link to="/login" className="hover:underline mr-4">Login</Link>
                        <Link to="/register" className="hover:underline">Register</Link>
                    </>
                )}
            </div>
        </nav>
    );
};

export default Navigation;
