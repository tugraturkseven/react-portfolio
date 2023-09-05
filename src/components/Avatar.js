import React from 'react'
import profile from '../images/profile.JPEG'

function Avatar() {
    return (
        <div className="avatar justify-center ">
            <div className="w-52 h-52 rounded-full ">
                <img src={profile} className='object-none object-left scale-125' />
            </div>
        </div>
    )
}

export default Avatar