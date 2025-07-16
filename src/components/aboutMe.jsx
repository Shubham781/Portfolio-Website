import React from 'react';
import Divider from './divider.jsx';
const AboutMe = () => {
    return (
        <div className="h-full w-screen">
            <div className="mx-auto max-w-7xl px-6 lg:px-8 flex flex-wrap items-start">
                <div className="flex flex-wrap py-12 w-full">
                    <div className="w-full lg:w-2/4 text-white">
                        <ul className="space-y-1">
                            <li>WHO AM I</li>
                        </ul>
                    </div>
                    <div className="w-full lg:w-2/4 text-white text-2xl tracking-wide">
                        <p>
                            I have been building websites for more than 4 years. With a passion for crafting visually stunning websites, I've seamlessly integrated no-code tools to make the development process efficient and accessible. My goal is to bring a perfect blend of design aesthetics and functionality to your digital projects.
                        </p>
                        <div className="flex flex-wrap py-12 w-full lg:w-auto">
                            <div className="w-full lg:w-1/2 text-white">
                                <ul className="space-y-4">
                                    <li>
                                        <h2 className="text-8xl font-semibold">120+</h2>
                                        <div className="mx-auto max-w-auto px-8 lg:px-8 border-b-1 border-white my-4"></div>
                                        <p className='text-base'>Completed Projects</p>
                                    </li>
                                    <li className='mt-8'>
                                        <h2 className="text-6xl font-semibold">2+</h2>
                                        <div className="mx-auto max-w-auto px-8 lg:px-8 border-b-1 border-white my-4"></div>
                                        <p className='text-base '>Years of Experience</p>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutMe;
