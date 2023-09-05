import React from 'react'
import profile from '../images/profile.JPEG'

function Avatar() {
    return (
        <div className="avatar justify-center ">
            <div className="w-40 h-40 rounded-full md:w-52 md:h-52 sm:w-44 sm:h-44">
                <img src={profile} className='object-none object-left scale-125' />
            </div>
        </div>
    )
}

export default Avatar