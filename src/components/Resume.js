import React from 'react'
import resume from '../assets/resume.pdf'
function Resume() {
    return (
        <div className='flex flex-col items-center justify-center py-6' id='resume'>
            <h3 className='text-3xl font-bold flex-1 mb-10'>Resume</h3>
            <div className="flex flex-col md:flex-row gap-4 md:gap-52 ">
                <div className="card  place-items-center mb-4 md:mb-0">
                    <ul className="steps steps-horizontal sm:steps-vertical">
                        <li data-content="✔️" className="step step-accent text-xs sm:text-base">100% Scholarship</li>
                        <li data-content="✔️" className="step step-accent text-xs sm:text-base">2 Internship</li>
                        <li data-content="✔️" className="step step-accent text-xs sm:text-base">Youtube Channel</li>
                        <li data-content="✔️" className="step step-accent text-xs sm:text-base">Graduation</li>
                        <li data-content="⏳" className="step text-xs sm:text-base">Career Start</li>
                    </ul>
                </div>

                <div className="card place-items-center m-auto sm:m-0 w-48">
                    <p className="text-md font-light">I've reached several important milestones in my journey. I've been passionate about coding since a young age and have carefully planned my career path, which I'm now actively pursuing. As mentioned, I'm just starting my career. Feel free to take a look at my <a className="link link-error font-bold" href={resume} target='_'>resume</a> if you have any opportunities that match my skills and goals.</p>

                </div>
            </div>
        </div>
    )
}

export default Resume