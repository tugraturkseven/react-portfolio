import React from 'react'
import profile from '../images/profile.JPEG'

function Avatar() {
    return (
        <div className="avatar justify-center j">
            <div className="w-48 rounded-full ">
                <img src={profile} className='w-48' />
            </div>
        </div>
    )
}

export default Avatar