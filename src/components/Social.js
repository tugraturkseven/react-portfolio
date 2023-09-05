import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin, faYoutube, faXTwitter } from '@fortawesome/free-brands-svg-icons'


function Social() {



    return (
        <div className='py-2'>
            <a className='btn btn-ghost' href='https://www.github.com/tugraturkseven' target='_'><FontAwesomeIcon icon={faGithub} size='xl' /></a>
            <a className='btn btn-ghost' target='_' href='https://www.x.com/tugraturkseven'><FontAwesomeIcon icon={faXTwitter} size='xl' /></a>
            <a className='btn btn-ghost' target='_' href='https://www.linkedin.com/in/tugraturkseven/'><FontAwesomeIcon icon={faLinkedin} size='xl' /></a>
            <a className='btn btn-ghost' target='_' href='https://www.youtube.com/c/tugraturkseven' ><FontAwesomeIcon icon={faYoutube} size='xl' /></a>
        </div>
    )
}

export default Social