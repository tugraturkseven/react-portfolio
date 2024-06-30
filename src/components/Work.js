import React from "react";
import ReactNativeIcon from "../assets/ReactNativeIcon";
import JavascriptIcon from "../assets/JavascriptIcon";
import MongodbIcon from "../assets/MongodbIcon";
import TailwindIcon from "../assets/TailwindIcon";
import MySQLIcon from "../assets/MySQLIcon";
import NodeJSIcon from "../assets/NodeJSIcon";

function Work({ theme }) {
  return (
    <div className="flex flex-col items-center justify-center py-6">
      <h3 className="text-3xl font-bold flex-1 mb-10" id="work">
        Work
      </h3>

      <div className="flex flex-row flex-wrap justify-center items-center gap-6">
        <div
          className={`card w-80 h-52 sm:w-96  ${
            theme === "business"
              ? "border-l-2 rounded-2xl border-l-gray-600 border-b-2 border-b-gray-600"
              : "shadow-lg "
          }`}
        >
          <a href="https://portfolio2.me" target="_">
            <div className="card-body ">
              <h2 className="card-title">Portfolio2me</h2>
              <div className="flex flex-row space-x-3">
                <ReactNativeIcon />
                <JavascriptIcon />
                <MongodbIcon />
              </div>

              <p>
                SaaS product to help people build their portfolios. It's a
                gamified, no-code platform with wide range of customizations.
              </p>
            </div>
          </a>
        </div>
        <div
          className={`card w-80 h-52 sm:w-96  ${
            theme === "business"
              ? "border-l-2 rounded-2xl border-l-gray-600 border-b-2 border-b-gray-600"
              : "shadow-lg "
          }`}
        >
          <a href="https://github.com/tugraturkseven">
            <div className="card-body">
              <h2 className="card-title">Reservation App</h2>
              <div className="flex flex-row space-x-3">
                <ReactNativeIcon />
                <JavascriptIcon />
                <MongodbIcon />
              </div>

              <p>
                SaaS product to handle and manage reservations of a astroturf
                pitch businesses.
              </p>
            </div>
          </a>
        </div>
        <div
          className={`card w-80 h-52 sm:w-96  ${
            theme === "business"
              ? "border-l-2 rounded-2xl border-l-gray-600 border-b-2 border-b-gray-600"
              : "shadow-lg "
          }`}
        >
          <a href="https://github.com/tugraturkseven/capstonemobileapp">
            <div className="card-body">
              <h2 className="card-title">Capstone Mobile App</h2>
              <div className="flex flex-row space-x-3">
                <ReactNativeIcon />
                <JavascriptIcon />
                <MongodbIcon />
              </div>

              <p>
                Capstone mobile app for fire detection system and it's
                integration with mongodb. Developed with React Native..
              </p>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Work;
