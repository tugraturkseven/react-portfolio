import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin, faYoutube, faXTwitter } from '@fortawesome/free-brands-svg-icons'

function Social() {
    return (
        <div className='py-2'>
            <a className='btn btn-ghost'><FontAwesomeIcon icon={faGithub} size='xl' /></a>
            <a className='btn btn-ghost'><FontAwesomeIcon icon={faXTwitter} size='xl' /></a>
            <a className='btn btn-ghost'><FontAwesomeIcon icon={faLinkedin} size='xl' /></a>
            <a className='btn btn-ghost'><FontAwesomeIcon icon={faYoutube} size='xl' /></a>
        </div>
    )
}

export default Social