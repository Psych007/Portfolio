import React from 'react';

const Education = () => {
    return (
        <section id="education" className="py-20 bg-gray-900 text-white">
            <div className="container mx-auto flex flex-col md:flex-row justify-center items-start px-4">
                <div className="md:w-1/2 mb-8 md:mb-0 px-4 md:px-8">
                    <h2 className="text-3xl font-bold text-center md:text-left mb-4">Education</h2>
                    <p className="text-center md:text-left text-lg">
                        Islamia University Bahawalpur <br /> BS(IT) <br /> Session 2020-2024
                        <br />CGPA 3.52 / 4
                    </p>
                </div>
                <div className="md:w-1/2 mb-8 px-4 md:px-8">
                    <h2 className="text-3xl font-bold text-center md:text-left mb-4">Skills</h2>
                    <ul className="list-disc list-inside text-center md:text-left text-lg">
                        <li>HTML</li>
                        <li>CSS</li>
                        <li>Tailwind CSS</li>
                        <li>React</li>
                        <li>Python</li>
                        <li>Django</li>
                    </ul>
                </div>
            </div>
            <style jsx>{`
                h2 {
                    border-bottom: 4px solid purple;
                    display: inline-block;
                    padding-bottom: 8px;
                }
            `}</style>
        </section>
    );
};

export default Education;
