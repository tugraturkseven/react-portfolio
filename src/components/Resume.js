import React from "react";
import resume from "../assets/resume.pdf";
function Resume() {
  return (
    <div className="flex flex-col items-center justify-center py-6" id="resume">
      <h3 className="text-3xl font-bold flex-1 mb-10">Resume</h3>
      <div className="flex flex-col gap-4 ">
        <div className="card  place-items-center mb-4 md:mb-0">
          <ul className="steps steps-horizontal sm:steps-vertical">
            <li
              data-content="👨‍💻"
              className="step step-accent text-xs sm:text-base"
            >
              Frontend Developer @ Kartega
            </li>
            <li
              data-content="✔️"
              className="step step-accent text-xs sm:text-base"
            >
              Intern @ Orion Innovation Turkey
            </li>
            <li
              data-content="✔️"
              className="step step-accent text-xs sm:text-base"
            >
              Intern @ NETAS
            </li>
          </ul>
        </div>

        <div className="sm:m-0 w-80">
          <p className="text-md font-light">
            I've reached several important milestones in my journey. I've been
            passionate about coding since a young age and have carefully planned
            my career path, which I'm now actively pursuing. As mentioned, Feel
            free to take a look at my{" "}
            <a className="link link-error font-bold" href={resume} target="_">
              resume
            </a>{" "}
            if you have any opportunities that match my skills and goals.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Resume;
