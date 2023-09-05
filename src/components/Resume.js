import React from 'react'
import resume from '../assets/resume.pdf'
function Resume() {
    return (
        <div className='flex flex-col items-center justify-center py-6' id='resume'>
            <h3 className='text-3xl font-bold flex-1 mb-10'>Resume</h3>
            <div className="flex flex-row gap-52 ">
                <div className="card  place-items-center">
                    <ul className="steps steps-vertical">
                        <li data-content="✔️" className="step step-accent">100% Scholarship</li>
                        <li data-content="✔️" className="step step-accent">2 Internship</li>
                        <li data-content="✔️" className="step step-accent">Youtube Channel</li>
                        <li data-content="✔️" className="step step-accent">Graduation</li>
                        <li data-content="⏳" className="step">Career Start</li>
                    </ul>
                </div>

                <div className="card place-items-center w-48">
                    <p className="text-md font-light">I believe that i have couple of milestones through my journey. The passion of coding has met with me at my early ages. After that time, i designed a path for my future and now i am following it. As it mentioned left side, i'm on my career start now! Here you can check out my <a className="link link-error font-bold" href={resume} target='_'>resume</a> if you have something for me! :)</p>

                </div>
            </div>
        </div>
    )
}

export default Resume