import { useEffect } from "react";
import { isMobileAction } from "../../actions";
import { connect } from "react-redux";



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