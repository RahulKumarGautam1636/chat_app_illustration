import { useEffect } from "react";                      // isMobile
import { isMobileAction } from "../../actions";
import { connect } from "react-redux";

import { Link, useNavigate } from 'react-router-dom';       
// import { HashLink } from "react-router-hash-link";   

import Offcanvas from 'react-bootstrap/Offcanvas';

import Modal from 'react-bootstrap/Modal';

const IsMobile = ({ isMobileAction }) => {                                             // Determines if device is mobile or desktop.
  
    useEffect(() => {
      const mediaQuery = window.matchMedia('(max-width: 500px)');                      // returns object with fields like match (true/false - represents if screen width matches with max-width specified) and onChange handler.               
      isMobileAction(mediaQuery.matches);
      const handleMediaQueryChange = (e) => {
        isMobileAction(e.matches);
    }
      mediaQuery.addEventListener('change', handleMediaQueryChange);                   // run handleMediaQueryChange only when mediaQuery object which contains match (true/false) property changes.
      return () => {
        mediaQuery.removeEventListener('change', handleMediaQueryChange);
      }
    }, [isMobileAction])
  
    return;
  }
  
  const mapStateToIsMobile = (state) => {
    return {};
  }
  export const ConnectedIsMobile = connect(mapStateToIsMobile, {isMobileAction})(IsMobile);


  // export function ScrollToTop({ history }) {
  //   useEffect(() => {
  //     const unlisten = history.listen(() => {           // listen for changes in url and scroll to top when url change is detected.
  //       window.scrollTo(0, 0);
  //     });
  //     return () => {                                    // remove the listener before unmount.
  //       unlisten();
  //     }
  //   }, [history]);
  
  //   return (null);
  // }  
  // export default withRouter(ScrollToTop);

  export const NotFound = () => {

    const navigate = useNavigate();

    return (
      <div className='not-found'>
        <img src="assets/img/err-404.jpg" alt="not found"/>
        <h3 className='mt-4'>The page you are looking for couldn't be found.</h3>
        <Link to='#' onClick={() => navigate(-1)} className='btn-1'>Go Back</Link>
      </div>
    )
  }

  export const OffcanvasComponent = ({ isActive, child, handleClose }) => {

    return (
      <Offcanvas show={isActive} onHide={() => handleClose(false)}>
        {/* <Offcanvas.Header closeButton><Offcanvas.Title>Offcanvas</Offcanvas.Title></Offcanvas.Header> */}
        <Offcanvas.Body>
          {child}
          <i className="icofont-close-circled close-btn text-dark" onClick={() => handleClose(false)}></i>
        </Offcanvas.Body>
      </Offcanvas>
    );
  }

  export const ModalComponent = ({ isActive, child }) => {
    return (
      <Modal show={isActive} centered backdrop="static" keyboard={false}>                     {/* modals are beigng directly controlled by redux states. */}
        <Modal.Body>
          {child}
        </Modal.Body>
      </Modal>
    )
  }
