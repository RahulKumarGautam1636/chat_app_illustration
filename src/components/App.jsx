import { HashRouter, Route, Routes } from 'react-router-dom';
import './css/style.css';
// import { connect } from 'react-redux';

import Home from './Home';
import Header from './Header';
// import Footer from './footer';
// import ScrollToTop from '../ScrollToTop.js';
// import { ConnectedToast } from './utilities';


function App({ isLoading }) {

// useScript('js/bootstrap.min.js');
// useScript('js/main.js');                         // Header has some eventlisteners and initialization code for elements like mobile menu present in header/footer. 
// useScript('js/custom.js');                    // importing main.js here to make sure DOM is correctly loaded before it's execution.

  return (
    <div>
      <HashRouter>
        {/* {isLoading && <div className='spinner-container'><GlobalLoader/></div>} */}
        <Header/>
        {/* <BottomNav/> */}
        {/* <ScrollToTop/> */}
        <Routes>
          <Route path='/' exact element={<Home/>}/>
          {/* <Route path='/productPage/:id' component={ProductPage}/>
          <Route path='/franchisee' component={Franchisee}/>
          <Route path='/aboutUs' component={AboutUs}/>
          <Route path='/contactUs' component={ContactUs}/>
          <Route path='/filterPage/:filterTerm' component={FilterPage}/>
          <Route path='/cartPage' component={CartPage}/>
          <Route path='/checkout' component={Checkout}/>
          <Route path='/wishlist' component={Wishlist}/>
          <Route path='/patientProfile' component={PatientProfile}/> */}
        </Routes>
        {/* <Footer/> */}
        {/* <ConnectedToast/> */}
      </HashRouter>
    </div>
  );
}

// const mapStateToProps = (state) => {
//   return { isLoading: state.isLoading };
// }

// export default connect(mapStateToProps, {})(App);

export default App;