// import { Link } from 'react-router-dom';
// import { connect } from 'react-redux';

export const SidePanel = ({ handleClose }) => {      
    
    const customScroll = (id) => {                                 // Somehow bootstrap components (modal/offcanvas) are blocking the scrolling function of Hashlinks.
        var element = document.getElementById(id);                 // Hence implementing custom scroll function to scroll between sections.
        element.scrollIntoView();
        handleClose('SIDE_MENU', false);
    }

    return (                                                                            
        <div className='sidePanel'>
            <div className='top-section'>
                <i className='bx bx-chevrons-left modal-close-btn' onClick={() => handleClose('SIDE_MENU', false)}></i>
                <img style={{maxHeight: '9rem'}} src="assets/img/versicle-logo.png" alt="toggle_mode"/>
            </div>
            <div className='bottom-section'>
                <ul>
                    {/* {path.map((item, index) => {
                        return <li key={index} onClick={() => {map.flyTo(item.coords, 14); handleClose(false);}}><i className="bullet-point bx bxs-map"></i> {item.name}<i className='chevron bx bx-chevron-right'></i></li>;
                    })} */}
                    <li onClick={() => customScroll('hero')}>
                        <i className="bullet-point bx bx-home"></i> Home<i className='chevron bx bx-chevron-right'></i>
                    </li>
                    <li onClick={() => customScroll('recomended-courses')}>
                        <i className="bullet-point bx bx-book-bookmark"></i> Courses<i className='chevron bx bx-chevron-right'></i>
                    </li>
                    <li onClick={() => customScroll('blogs')}>
                        <i className="bullet-point bx bx-message-dots"></i> Blog<i className='chevron bx bx-chevron-right'></i>
                    </li>
                    <li onClick={() => customScroll('contact')}>
                        <i className="bullet-point bx bx-phone-call"></i> Contact<i className='chevron bx bx-chevron-right'></i>
                    </li>
                    <li onClick={() => customScroll('course-overview')}>
                        <i className="bullet-point bx bxs-category"></i> Services<i className='chevron bx bx-chevron-right'></i>
                    </li>
                    <li>
                        <i className="bullet-point bx bx-shield-quarter"></i> Mock Test<i className='chevron bx bx-chevron-right'></i>
                    </li>
                </ul>
            </div>
        </div>
    )
}

// const mapStateToPropsTwo = (state) => {
//   return {};
// }

// export default connect(mapStateToPropsTwo, {})(SidePanel);
