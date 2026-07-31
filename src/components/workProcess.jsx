import React from 'react';
import Divider from './divider.jsx';
import WorkCards from './workCards.jsx';
const WorkProcess = () => {
    return (
        <>
        <div className="h-full w-screen" id="work-process-section">
                        <div className="mx-auto max-w-7xl px-6 lg:px-8 ">
                            <div className="mx-auto max-w-fit text-white lg:mx-0 py-12" id="work-process-heading">
                                <ul className="space-y-1">
                                    <li>Process</li>
                                </ul>
                                <h1 className="text-5xl font-semibold tracking-tight sm:text-7xl">HOW I WORK</h1>
                            </div>
                        </div>
                        <WorkCards />
        </div>
        </>);
};

export default WorkProcess;