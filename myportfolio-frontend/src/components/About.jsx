import React from 'react';
import profile from '../assets/profile.svg'; // Ensure the path is correct

const About = () => {
    return (
        <section id="about" className="py-20 bg-black h-screen flex items-center text-white">
            <div className="container mx-auto flex flex-col md:flex-row justify-between items-center px-8">
                {/* Left Container */}
                <div className="md:w-2/3 mb-8 md:mb-0 md:pr-8">
                    <h2 className="text-4xl font-extrabold mb-8 border-b-2 border-purple-900 pb-2">Know Who I Am</h2>
                    <p className="text-xl mb-4">
                        Hi everyone, I am Ali Hamza from Muzaffargarh, Pakistan. I recently graduated from Islamia University Bahawalpur.
                    </p>
                    <p className="text-xl mb-4">
                        During my university period, I delved into various fields, gaining knowledge and skills in cryptocurrency, SEO, lead generation, WordPress, blogging, HTML, CSS, Tailwind CSS, the basics of React, Python, and Django. Now, I have decided to become a DevOps engineer and have recently joined a fellowship at UET, where I am currently learning about cloud computing.
                    </p>
                    <p className="text-xl mb-4">Apart from these professional pursuits, here are some activities I love to do:</p>
                    <ul className="list-disc list-inside space-y-2">
                        <li>Playing games</li>
                        <li>Stand-Up Comedy Show</li>
                        <li>Watching anime</li>
                    </ul>
                </div>
                {/* Right Container */}
                <div className="md:w-1/3 flex justify-center md:justify-end">
                    <img 
                        src={profile} 
                        alt="Profile Icon" 
                        className="h-64 w-64 object-cover rounded-full border-4 border-purple-900" 
                    />
                </div>
            </div>
        </section>
    );
};

export default About;
