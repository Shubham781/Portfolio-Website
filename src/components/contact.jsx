import React from 'react';
import Divider from '../components/divider'; // Corrected the path to the Divider component

const Contact = () => {
    return (
        <>
            <div className="mx-auto max-w-[77rem] px-8 mt-4 lg:px-8 border-b-1 border-white"></div>
            <div className="h-full w-screen flex items-center justify-center my-2">
                <div className="mx-auto max-w-7xl px-6 lg:px-8 text-center">
                    <div className="mx-auto max-w-fit text-white lg:mx-0 py-12 group">
                        <ul className="space-y-1">
                            <li className="overflow-hidden relative">
                                <span className="block text-2xl">
                                    HAVE A PROJECT IN MIND?
                                </span>
                            </li>
                        </ul>
                        <h1 className="text-6xl font-semibold tracking-tight mt-4 sm:text-8xl overflow-hidden relative">
                            <span className="block transform translate-y-0 transition-transform duration-500 ease-out group-hover:-translate-y-full delay-200">
                                LET'S WORK TOGETHER
                            </span>
                            <span className="block absolute inset-0 transform translate-y-full transition-transform duration-500 ease-out group-hover:translate-y-0 delay-200">
                                LET'S WORK TOGETHER
                            </span>
                        </h1>
                        <button className="mt-8 px-10 py-4 border border-white text-white text-lg font-medium rounded-full hover:bg-white hover:text-gray-900 transition">
                            Get In Touch
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Contact;