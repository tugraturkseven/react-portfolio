import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMoon, faLightbulb } from '@fortawesome/free-regular-svg-icons'

function Navbar({ changeTheme }) {
    const [icon, setIcon] = useState(faMoon);
    const updateIcon = () => {
        if (icon === faMoon) {
            setIcon(faLightbulb)
            changeTheme();
        } else {
            setIcon(faMoon)
            changeTheme();
        }
    }
    return (
        <div className="navbar bg-base-100">
            <div className='navbar-start'></div>
            <div className="navbar-center">
                <a className="btn btn-ghost normal-case text-md">About</a>
                <a className="btn btn-ghost normal-case text-md">Work</a>
                <a className="btn btn-ghost normal-case text-md">Resume</a>
                <a className="btn btn-ghost normal-case text-md">Contact</a>

            </div>
            <div className="navbar-end">
                <button className="btn btn-ghost" onClick={updateIcon}>
                    <FontAwesomeIcon icon={icon} size='lg' flip='horizontal' />
                </button>
            </div>
        </div>
    )
}

export default Navbar