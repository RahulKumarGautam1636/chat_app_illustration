import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
// import Button from 'react-bootstrap/Button';
// import Offcanvas from 'react-bootstrap/Offcanvas';
import { HashLink } from 'react-router-hash-link';                 // using <Hashlink/> to scroll between page section which is not possible with simple <Link/> 

const Header = () => {

    const [active, setActive] = useState('Home');
    return (
        <header>
            <nav className='container'>
                <div className="d-flex justify-content-between align-items-center position-relative">
                    
                    <h3 className="navbar-brand">
                        <img className='logo' src={`assets/img/versicle-logo.png`} alt="logo"/>
                    </h3>

                    <ul id="topNav" className="navbar-nav mt-4 mt-md-0 flex-md-row align-items-center d-none d-lg-flex">
                        <li className="nav-item">
                            <HashLink className={`nav-link ${active === 'Home' && 'active'}`} onClick={() => setActive('Home')} to="#hero">Home</HashLink>
                        </li>
                        <li className="nav-item mt-2 mt-md-0">
                            <HashLink className={`nav-link ${active === 'Courses' && 'active'}`} onClick={() => setActive('Courses')} to="#recomended-courses">Courses</HashLink>
                        </li>
                        <li className="nav-item mt-2 mt-md-0">
                            <HashLink className={`nav-link ${active === 'Blog' && 'active'}`} onClick={() => setActive('Blog')} to="#blogs">Blog</HashLink>
                        </li>
                        <li className="nav-item mt-2 mt-md-0">
                            <HashLink className={`nav-link ${active === 'Contact' && 'active'}`} onClick={() => setActive('Contact')} to="#contact">Contact</HashLink>
                        </li>
                        <li className="nav-item mt-2 mt-md-0">
                            <HashLink className={`nav-link ${active === 'Services' && 'active'}`} onClick={() => setActive('Services')} to="#course-overview">Services</HashLink>
                        </li>
                        <li className="nav-item mt-2 mt-md-0">
                            <HashLink className={`nav-link ${active === 'MockTest' && 'active'}`} onClick={() => setActive('MockTest')} to="#">Mock Test</HashLink>
                        </li>
                    </ul>

                    <div className="d-flex gap-4 align-items-center">
                        <button type="button" className='btn header-btn login-btn'>Login</button>
                        <button type="button" className='btn header-btn'>Enroll now</button>
                    </div>
                </div>
            </nav>
            {/* <MobileMenu/> */}
        </header>
    )
}

export default Header;


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

