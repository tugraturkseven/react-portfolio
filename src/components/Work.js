import React from 'react'
import ReactNativeIcon from '../assets/ReactNativeIcon'
import JavascriptIcon from '../assets/JavascriptIcon'
import MongodbIcon from '../assets/MongodbIcon'
import TailwindIcon from '../assets/TailwindIcon'
import MySQLIcon from '../assets/MySQLIcon'
import NodeJSIcon from '../assets/NodeJSIcon'

function Work() {
    return (
        <div className='flex flex-col items-center justify-center'>
            <h3 className='text-3xl font-bold flex-1'>Work</h3>

            <div className='flex flex-row flex-wrap justify-center items-center gap-4'>

                <div className="card w-96 h-52 shadow-md">
                    <div className="card-body">
                        <h2 className="card-title">Travisor</h2>
                        <div className='flex flex-row space-x-3'>
                            <ReactNativeIcon />
                            <JavascriptIcon />
                        </div>

                        <p>Travisor is an application that includes travel advises from people who have an experience at that location.</p>

                    </div>
                </div>

                <div className="card w-96  h-52 shadow-md">
                    <div className="card-body">
                        <h2 className="card-title">Capstone Mobile App</h2>
                        <div className='flex flex-row space-x-3'>
                            <ReactNativeIcon />
                            <JavascriptIcon />
                            <MongodbIcon />
                        </div>

                        <p>Capstone mobile app for fire detection system and it's integration with mongodb. Developed with React Native..</p>

                    </div>
                </div>



                <div className="card w-96  h-52 shadow-md">
                    <div className="card-body">
                        <h2 className="card-title">E-Commerce App</h2>
                        <div className='flex flex-row space-x-3'>
                            <TailwindIcon />
                            <ReactNativeIcon />
                            <JavascriptIcon />
                            <MongodbIcon />

                        </div>

                        <p>E Commerce web site tutorial, technologies are React, Tailwind, DaisyUI, Router-DOM. </p>

                    </div>
                </div>

                <div className="card w-96  h-52 shadow-md">
                    <div className="card-body">
                        <h2 className="card-title">Analog Clock</h2>
                        <div className='flex flex-row space-x-3'>
                            <MySQLIcon></MySQLIcon>
                            <JavascriptIcon />
                            <MongodbIcon />
                            <NodeJSIcon />
                        </div>

                        <p>An IMDB listing web site that developed via React. Includes series, movies and user favorites.</p>

                    </div>
                </div>
            </div>


        </div>
    )
}

export default Work