import { useState } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {

    const [active, setActive] = useState('Home');
    return (
        <header>
            <nav className='container'>
                <div className="d-flex flex-column flex-md-row justify-content-between align-items-center position-relative">
                    
                    <h3 className="navbar-brand">
                        <img className='logo' src={`assets/img/versicle-logo.png`} alt="logo"/>
                    </h3>

                    <ul id="topNav" className="navbar-nav mt-4 mt-md-0 flex-md-row align-items-center d-none d-lg-flex">
                        <li className="nav-item">
                            <Link className={`nav-link ${active === 'Home' && 'active'}`} onClick={() => setActive('Home')} to="#">Home</Link>
                        </li>
                        <li className="nav-item mt-2 mt-md-0">
                            <Link className={`nav-link ${active === 'Courses' && 'active'}`} onClick={() => setActive('Courses')} to="#">Courses</Link>
                        </li>
                        <li className="nav-item mt-2 mt-md-0">
                            <Link className={`nav-link ${active === 'Blog' && 'active'}`} onClick={() => setActive('Blog')} to="#">Blog</Link>
                        </li>
                        <li className="nav-item mt-2 mt-md-0">
                            <Link className={`nav-link ${active === 'Contact' && 'active'}`} onClick={() => setActive('Contact')} to="#">Contact</Link>
                        </li>
                        <li className="nav-item mt-2 mt-md-0">
                            <Link className={`nav-link ${active === 'MockTest' && 'active'}`} onClick={() => setActive('MockTest')} to="#">Mock Test</Link>
                        </li>
                        <li className="nav-item mt-2 mt-md-0">
                            <Link className={`nav-link ${active === 'Services' && 'active'}`} onClick={() => setActive('Services')} to="#">Services</Link>
                        </li>
                    </ul>

                    <div className="d-flex gap-4 align-items-center">
                        <button type="button" className='btn header-btn login-btn'>Login</button>
                        <button type="button" className='btn header-btn'>Enroll now</button>
                    </div>
                </div>
            </nav>
        </header>
    )
}

export default Header;