import React from 'react'
import Avatar from './Avatar'
import Social from './Social'



function Hero() {
    return (
        <div className="hero" id='hero'>
            <div className="hero-content text-center">
                <div className="max-w-md">
                    <Avatar />
                    <h1 className="text-lg font-bold">Hi there, this is Tugra. 👋</h1>
                    <h2 className='text-md font-semibold'>
                        Jr. Software Engineer
                    </h2>
                    <p className="py-6 text-3xl font-extrabold">Front-end developer, mobile ui designer, and part-time youtuber.</p>
                    <p className="py-3 text-md font-light">I specialize in crafting user-friendly interfaces for web and mobile apps. I thrive on solving complex problems, creating top-notch, industry-standard code, and continually seeking new challenges to grow as a developer.</p>
                    <Social />
                </div>

            </div>

        </div>
    )
}

export default Hero