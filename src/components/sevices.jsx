import React from 'react';
import Divider from './divider.jsx';
import styles from '../css/services.module.css'; // Importing the CSS module

const Services = () => {
    return (
        <>
        <div className="mx-auto max-w-[77rem] px-8 lg:px-8 border-b-1 border-white pt-4 mt-6"></div>
            <div className="h-full w-screen ">
                <div className="mx-auto max-w-7xl px-6 lg:px-8 ">
                    <div className="mx-auto max-w-fit text-white lg:mx-0 py-12">
                        <ul className="space-y-1">
                            <li>Services</li>
                        </ul>
                        <h1 className="text-5xl font-semibold tracking-tight sm:text-7xl">What I Do</h1>
                    </div>
                    <Divider />
                </div>
            </div>
            <div className="h-full w-screen">
                <div className="mx-auto max-w-7xl px-6 lg:px-8 flex flex-wrap py-12 pb-8">
                    <div className="w-full lg:w-1/2 text-white">
                        <h2 className="text-5xl font-semibold">UI/UX Design</h2>
                    </div>
                    <div className="w-full lg:w-1/2 text-center lg:text-left">
                        <ul className={`${styles.grid} grid grid-cols-2 gap-2`}>
                            <li>App Design</li>
                            <li>Website Design</li>
                            <li>Landing Page Design</li>
                            <li>Design Systems</li>
                            <li>Wireframing</li>
                            <li>Prototyping</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="h-full w-screen ">
                <div className="mx-auto max-w-7xl px-6 lg:px-8 flex flex-wrap py-12 pb-8">
                    <div className="w-full lg:w-1/2 text-white">
                        <h2 className="text-5xl font-semibold">Web Development</h2>
                    </div>
                    <div className="w-full lg:w-1/2 text-center lg:text-left">
                        <ul className={`${styles.grid} grid grid-cols-2 gap-2`}>
                            <li>React Development</li>
                            <li>Webflow Development</li>
                            <li>WordPress Development</li>
                            <li>Speed Optimization</li>
                            <li>SEO Optimization</li>
                            <li>Website Maintenance</li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Services;