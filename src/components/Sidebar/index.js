import './index.scss';
import { Link, NavLink } from 'react-router-dom';
import DisplayPicture from '../../assets/images/dp.jpeg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faEnvelope, faHome,  faUserCircle } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

const Sidebar = () =>{
    return (
        <div className="nav-bar">
            <Link className='logo' to='/'>
                <img src={DisplayPicture} alt="logo"/>
            </Link>
            <nav>
                <NavLink exact="true"  to='/'>
                    <FontAwesomeIcon icon={faHome} color="#4d4d4e"/>
                </NavLink>

                <NavLink exact="true"  className="about-link" to='/about'>
                    <FontAwesomeIcon icon={faBars} color="#4d4d4e"/>
                </NavLink>

                <NavLink exact="true"  className="contact-link" to='/contact'>
                    <FontAwesomeIcon icon={faUserCircle} color="#4d4d4e"/>
                </NavLink>
            </nav>
            <ul>
                <li>
                    <a target="_blank" rel='noreferre' href="https://www.linkedin.com/in/sushma-kumari-shaw-5b384817a/">
                        <FontAwesomeIcon icon={faLinkedin} color="#4d4d4e"/>
                    </a>
                </li>

                <li>
                    <a target="_blank" rel='noreferre' href="https://github.com/sushma801">
                        <FontAwesomeIcon icon={faGithub} color="#4d4d4e"/>
                    </a>
                </li>
                <li>
                    <div className='tooltip'>
                        <FontAwesomeIcon icon={faEnvelope} color='#4d4d4e'/>
                        <span className='tooltiptext'>sushmashaw801@gmail.com</span>
                    </div>
                </li>
            </ul>
        </div>
    )
}

export default Sidebar;