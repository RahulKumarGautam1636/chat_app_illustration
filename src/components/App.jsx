import { useEffect } from 'react';
import { HashRouter, Route, Routes } from 'react-router-dom';
import AOS from 'aos';
import './css/style.css';
import "aos/dist/aos.css";
// import { useLocation } from 'react-router-dom';
// import { connect } from 'react-redux';

import Home from './Home';
import Header from './Header';
// import Footer from './footer';
// import ScrollToTop from '../scrollToTop';
import { ConnectedIsMobile, NotFound } from './utils/utilities';
import Modals from './modals';
import SoftwareDevelopment from './courses/softwareDevelopment';
import TallyPrime from './courses/tallyPrime';
import WebDesign from './courses/webDesign';


function App({ isLoading }) {

// useScript('js/bootstrap.min.js');
// useScript('js/main.js');                         // Header has some eventlisteners and initialization code for elements like mobile menu present in header/footer. 
// useScript('js/custom.js');                    // importing main.js here to make sure DOM is correctly loaded before it's execution.

useEffect(() => {
  AOS.init({
      offset: 200,
      duration: 600,
      easing: 'ease-out',
  });
  AOS.refresh();
}, []);


  return (
    <div>
      <HashRouter>
        <Header/>
        <Routes>
          <Route path='/' exact element={<Home/>}/>
          <Route path='/softwareDevelopment' element={<SoftwareDevelopment/>}/>
          <Route path='/tallyPrime' element={<TallyPrime/>}/>
          <Route path='/webDesign' element={<WebDesign/>}/>
          <Route path='/*' element={<NotFound/>}/>
        </Routes>
        <Modals/>
        <ConnectedIsMobile/>                                          {/* Always wrap component with Link / HashLink otherwise will throw errors. */}
      </HashRouter>
    </div>
  );
}

// const mapStateToProps = (state) => {
//   return { isLoading: state.isLoading };
// }

// export default connect(mapStateToProps, {})(App);

export default App;






