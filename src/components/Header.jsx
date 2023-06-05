import React, { useState } from 'react';
import { OffcanvasComponent } from './utils/utilities';
import { sidePanel } from './sidePanel';
import { HashLink } from 'react-router-hash-link';                 // using <Hashlink/> to scroll between page section which is not possible with simple <Link/> 
import { modalAction } from '../actions';
import { connect } from 'react-redux';

const Header = ({ modalAction }) => {

    const [active, setActive] = useState('Home');                   // tracks currently active link.
    const [menuActive, setMenuActive] = useState(false);             // tracks the side panel. Offcanvas can add two backdrops if initialised with open (true) state. which cause to click twice to close the offcanvas backdrop.

    return (
        <>
        <header>
            <nav className='container'>
                <div className="d-flex justify-content-between align-items-center position-relative">
                    <h3 className="navbar-brand">
                        <img className='logo' src='assets/img/versicle-logo.png' alt="logo"/>
                    </h3>
                    <ul id="topNav" className="navbar-nav mt-4 mt-md-0 flex-md-row align-items-center d-none d-lg-flex">
                        <li className="nav-item">
                            <HashLink className={`nav-link ${active === 'Home' && 'active'}`} onClick={() => setActive('Home')} to="/#hero">Home</HashLink>
                        </li>
                        <li className="nav-item mt-2 mt-md-0">
                            <HashLink className={`nav-link ${active === 'Courses' && 'active'}`} onClick={() => setActive('Courses')} to="/#recomended-courses">Courses</HashLink>
                        </li>
                        <li className="nav-item mt-2 mt-md-0">
                            <HashLink className={`nav-link ${active === 'Blog' && 'active'}`} onClick={() => setActive('Blog')} to="/#blogs">Blog</HashLink>
                        </li>
                        <li className="nav-item mt-2 mt-md-0">
                            <HashLink className={`nav-link ${active === 'Contact' && 'active'}`} onClick={() => setActive('Contact')} to="/#contact">Contact</HashLink>
                        </li>
                        <li className="nav-item mt-2 mt-md-0">
                            <HashLink className={`nav-link ${active === 'Services' && 'active'}`} onClick={() => setActive('Services')} to="/#course-overview">Services</HashLink>
                        </li>
                        <li className="nav-item mt-2 mt-md-0">
                            <HashLink className={`nav-link ${active === 'MockTest' && 'active'}`} onClick={() => setActive('MockTest')} to="#">Mock Test</HashLink>
                        </li>
                    </ul>
                    <div className="d-flex gap-3 gap-md-4 align-items-center">
                        <button type="button" className='btn header-btn login-btn' onClick={() => modalAction('LOGIN_MODAL', true)}>Login</button>
                        <button type="button" className='btn header-btn'>Enroll now</button>
                        <svg onClick={() => setMenuActive(!menuActive)} className={`menu-icon ${menuActive && 'active'}`} width="25" height="21" viewBox="0 0 22 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <line id='middle-line' y1="9.5" x2="25" y2="9.5" stroke="#2BB4CA" stroke-width="3"/>
                            <line id='top-line' y1="1.5" x2="25" y2="1.5" stroke="#2BB4CA" stroke-width="3"/>
                            <line id='bottom-line' y1="17.5" x2="25" y2="17.5" stroke="#2BB4CA" stroke-width="3"/>
                        </svg>
                    </div>
                </div>
            </nav>
        </header>
        <OffcanvasComponent isActive={menuActive} child={sidePanel({handleClose: setMenuActive})} handleClose={setMenuActive}/>
        </>
    )
}

const mapStateToHeader = (state) => {
    return {};
}

export default connect(mapStateToHeader, {modalAction})(Header);


// const MobileMenu = () => {
//     const [show, setShow] = useState(false);

//     const handleClose = () => setShow(false);
//     const handleShow = () => setShow(true);

//     return (
//         <>
//         <Button variant="primary" onClick={handleShow}>
//             Launch
//         </Button>

//         <Offcanvas show={show} onHide={handleClose}>
//             <Offcanvas.Header closeButton>
//             <Offcanvas.Title>Offcanvas</Offcanvas.Title>
//             </Offcanvas.Header>
//             <Offcanvas.Body>
//             Some text as placeholder. In real life you can have the elements you
//             have chosen. Like, text, images, lists, etc.
//             </Offcanvas.Body>
//         </Offcanvas>
//         </>
//     );
// }

