import React from 'react';
import Typewriter from 'typewriter-effect';
import '../App.css'; // Ensure Tailwind CSS is included here

const Home = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white p-6">
            <div className="text-center mb-6">
                <div className="text-3xl md:text-5xl font-bold mb-4">
                    <Typewriter
                        options={{
                            strings: ["Hi There! 👋🏻", "I'M Ali Hamza", "Welcome to My Portfolio"],
                            autoStart: true,
                            loop: true,
                            delay: 75,
                            deleteSpeed: 25,
                        }}
                    />
                </div>
            </div>
        </div>
    );
};

export default Home;
