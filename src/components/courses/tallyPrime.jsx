import Table from 'react-bootstrap/Table';
import { HashLink } from 'react-router-hash-link'; 
import { connect } from 'react-redux';  
import { useNavigate } from 'react-router-dom';

const TallyPrime = ({ isMobile }) => {

    const navigate = useNavigate();

    return (
        <section id="softwareDevelopment">
            <div className="container">
                <div className="reviews__heading mb-5">
                    <h2 className="heading-secondary"> Tally Prime.</h2>
                    <button className="btn-1 d-none d-lg-block" onClick={() => navigate(-1)}>Back to Home</button>
                </div>
                
                <div className="row">
                    <div className="col col-12 col-md-3">
                        <div className="row">
                            <ul className="nav flex-column nav-pills p-0" role="tablist">
                                <li className="nav-item" role="presentation">
                                    <HashLink to={isMobile ? '#all-tabs' : '#top'}><button type="button" id="tab-1" className="nav-link active" data-bs-toggle="tab" data-bs-target="#tab-pane-1" role="tab" aria-controls="tab-pane-1" aria-selected="true"><img className='rounded-circle' src="assets/icons/tallyLogo.png" alt="Financial Accounting (CPFA)"/> Financial Accounting (CPFA)</button></HashLink>
                                </li>
                                <li className="nav-item" role="presentation">
                                    <HashLink to={isMobile ? '#all-tabs' : '#top'}><button type="button" id="tab-2" className="nav-link" data-bs-toggle="tab" data-bs-target="#tab-pane-2" role="tab" aria-controls="tab-pane-2" aria-selected="false"><img className='rounded-circle' src="assets/icons/tallyLogo.png" alt="Financial Accounting and Taxation(ACPFAT)"/> Financial Accounting and Taxation(ACPFAT)</button></HashLink>
                                </li>
                                <li className="nav-item" role="presentation">
                                    <HashLink to={isMobile ? '#all-tabs' : '#top'}><button type="button"  id="tab-3" className="nav-link" data-bs-toggle="tab" data-bs-target="#tab-pane-3" role="tab" aria-controls="tab-pane-3" aria-selected="false"><img className='rounded-circle' src="assets/icons/tallyLogo.png" alt="Tally Comprehensive"/>Tally Comprehensive</button></HashLink>
                                </li>
                                <li className="nav-item" role="presentation">
                                    <HashLink to={isMobile ? '#all-tabs' : '#top'}><button type="button" id="tab-4" className="nav-link" data-bs-toggle="tab" data-bs-target="#tab-pane-4" role="tab" aria-controls="tab-pane-4" aria-selected="false"><img className='rounded-circle' src="assets/icons/tallyLogo.png" alt="Tally Prime"/> Tally Prime</button></HashLink>
                                </li>
                                <li className="nav-item" role="presentation">
                                    <HashLink to={isMobile ? '#all-tabs' : '#top'}><button type="button" id="tab-5" className="nav-link" data-bs-toggle="tab" data-bs-target="#tab-pane-5" role="tab" aria-controls="tab-pane-5" aria-selected="false"><img className='rounded-circle' src="assets/icons/tallyLogo.png" alt="Tally Prime Advance"/> Tally Prime Advance</button></HashLink>
                                </li>
                                <li className="nav-item" role="presentation">
                                    <HashLink to={isMobile ? '#all-tabs' : '#top'}><button type="button" id="tab-6" className="nav-link" data-bs-toggle="tab" data-bs-target="#tab-pane-6" role="tab" aria-controls="tab-pane-6" aria-selected="false"><img className='rounded-circle' src="assets/icons/tallyLogo.png" alt="Tally Fundamentals"/> Tally Prime Fundamentals</button></HashLink>
                                </li>
                                <li className="nav-item" role="presentation">
                                    <HashLink to={isMobile ? '#all-tabs' : '#top'}><button type="button" id="tab-7" className="nav-link" data-bs-toggle="tab" data-bs-target="#tab-pane-7" role="tab" aria-controls="tab-pane-7" aria-selected="false"><img className='rounded-circle' src="assets/icons/tallyLogo.png" alt="Tally Prime For Beginners"/> Tally Prime For Beginners</button></HashLink>
                                </li>
                                <li className="nav-item" role="presentation">
                                    <HashLink to={isMobile ? '#all-tabs' : '#top'}><button type="button" id="tab-8" className="nav-link" data-bs-toggle="tab" data-bs-target="#tab-pane-8" role="tab" aria-controls="tab-pane-8" aria-selected="false"><img className='rounded-circle' src="assets/icons/tallyLogo.png" alt="Basics of Accountancy"/> Basics of Accountancy</button></HashLink>
                                </li>

                                <li className="nav-item" role="presentation">
                                    <HashLink to={isMobile ? '#all-tabs' : '#top'}><button type="button" id="tab-9" className="nav-link" data-bs-toggle="tab" data-bs-target="#tab-pane-9" role="tab" aria-controls="tab-pane-9" aria-selected="false"><img className='rounded-circle' src="assets/icons/tallyLogo.png" alt="Accounts & Taxation"/> Accounts & Taxation</button></HashLink>
                                </li>
                                <li className="nav-item" role="presentation">
                                    <HashLink to={isMobile ? '#all-tabs' : '#top'}><button type="button" id="tab-10" className="nav-link" data-bs-toggle="tab" data-bs-target="#tab-pane-10" role="tab" aria-controls="tab-pane-10" aria-selected="false"><img className='rounded-circle' src="assets/icons/tallyLogo.png" alt="Basic of Computers"/> Basics of Computers</button></HashLink>
                                </li>
                                <li className="nav-item" role="presentation">
                                    <HashLink to={isMobile ? '#all-tabs' : '#top'}><button type="button" id="tab-11" className="nav-link" data-bs-toggle="tab" data-bs-target="#tab-pane-11" role="tab" aria-controls="tab-pane-11" aria-selected="false"><img className='rounded-circle' src="assets/icons/tallyLogo.png" alt="Advance Computers"/> Advance Computers</button></HashLink>
                                </li>
                                <li className="nav-item" role="presentation">
                                    <HashLink to={isMobile ? '#all-tabs' : '#top'}><button type="button" id="tab-12" className="nav-link" data-bs-toggle="tab" data-bs-target="#tab-pane-12" role="tab" aria-controls="tab-pane-12" aria-selected="false"><img className='rounded-circle' src="assets/icons/tallyLogo.png" alt="Basics of English"/> Basics of English</button></HashLink>
                                </li>
                                <li className="nav-item" role="presentation">
                                    <HashLink to={isMobile ? '#all-tabs' : '#top'}><button type="button" id="tab-13" className="nav-link" data-bs-toggle="tab" data-bs-target="#tab-pane-13" role="tab" aria-controls="tab-pane-13" aria-selected="false"><img className='rounded-circle' src="assets/icons/tallyLogo.png" alt="Business Comunication"/> Business Comunication</button></HashLink>
                                </li>
                                <li className="nav-item" role="presentation">
                                    <HashLink to={isMobile ? '#all-tabs' : '#top'}><button type="button" id="tab-14" className="nav-link" data-bs-toggle="tab" data-bs-target="#tab-pane-14" role="tab" aria-controls="tab-pane-14" aria-selected="false"><img className='rounded-circle' src="assets/icons/tallyLogo.png" alt="Personality Developement-i"/> Personality Developement-i</button></HashLink>
                                </li>
                                <li className="nav-item" role="presentation">
                                    <HashLink to={isMobile ? '#all-tabs' : '#top'}><button type="button" id="tab-15" className="nav-link" data-bs-toggle="tab" data-bs-target="#tab-pane-15" role="tab" aria-controls="tab-pane-15" aria-selected="false"><img className='rounded-circle' src="assets/icons/tallyLogo.png" alt="Personality Developement-ii"/> Personality Developement-ii</button></HashLink>
                                </li>
                                <li className="nav-item" role="presentation">
                                    <HashLink to={isMobile ? '#all-tabs' : '#top'}><button type="button" id="tab-16" className="nav-link" data-bs-toggle="tab" data-bs-target="#tab-pane-16" role="tab" aria-controls="tab-pane-16" aria-selected="false"><img className='rounded-circle' src="assets/icons/tallyLogo.png" alt="Sales Management"/> Sales Management</button></HashLink>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="col col-12 col-md-9" id='all-tabs'>
                        <div className="tab-content">
                            <div id="tab-pane-1" className="tab-pane fade show active" role="tabpanel" aria-labelledby="tab-1">
                                <ul className="nav nav-tabs" role="tablist">
                                    <li className="nav-item" role="presentation">
                                        <button type="button" id="tabFade-1-1" className="nav-link active" data-bs-toggle="tab" data-bs-target="#tabFade-1-pane-1" role="tab" aria-controls="tabFade-1-pane-1" aria-selected="true">Course Highlights</button>
                                    </li>
                                    <li className="nav-item" role="presentation">
                                        <button type="button" id="tabFade-1-2" className="nav-link" data-bs-toggle="tab" data-bs-target="#tabFade-1-pane-2" role="tab" aria-controls="tabFade-1-pane-2" aria-selected="false">Course Details</button>
                                    </li>
                                </ul>
                                <div className="tab-content">
                                    <div id="tabFade-1-pane-1" className="tab-pane fade show active" role="tabpanel" aria-labelledby="tabFade-1-1">
                                        <h2 className="heading-tertiary mt-3 mb-4">Certificate Program in Financial Accounting - CPFA</h2>
                                        <Table striped borderless hover>
                                            <tbody>
                                                <tr>
                                                    <td>Course Duration</td>
                                                    <td>12 Weeks</td>
                                                </tr>
                                                <tr>
                                                    <td>Course Fees</td>
                                                    <td>13340/-</td>
                                                </tr>
                                                <tr>
                                                    <td>Attendance</td>
                                                    <td>75%</td>
                                                </tr>
                                                <tr>
                                                    <td>Assessment</td>
                                                    <td>PET, PMT, CT</td>
                                                </tr>
                                                <tr>
                                                    <td>Attendance</td>
                                                    <td>75%</td>
                                                </tr>
                                                <tr>
                                                    <td>Placement Assistance</td>
                                                    <td></td>
                                                </tr>
                                            </tbody>
                                        </Table>
                                    </div>
                                    <div id="tabFade-1-pane-2" className="tab-pane fade" role="tabpanel" aria-labelledby="tabFade-1-2">
                                        <h2 className="heading-tertiary mt-3 mb-4">What you'll learn</h2>
                                        <ul className='features-list'>
                                            <li>Tally Prime (Vol i - iii)</li>
                                            <li>Basics of Accountancy</li>
                                            <li>Basics of Computers</li>
                                            <li>Basics of English</li>
                                            <li>Personality Development</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div id="tab-pane-2" className="tab-pane fade" role="tabpanel" aria-labelledby="tab-2">
                                <ul className="nav nav-tabs" role="tablist">
                                    <li className="nav-item" role="presentation">
                                        <button type="button" id="tabFade-2-1" className="nav-link active" data-bs-toggle="tab" data-bs-target="#tabFade-2-pane-1" role="tab" aria-controls="tabFade-2-pane-1" aria-selected="false">Course Details</button>
                                    </li>
                                    <li className="nav-item" role="presentation">
                                        <button type="button" id="tabFade-2-2" className="nav-link" data-bs-toggle="tab" data-bs-target="#tabFade-2-pane-2" role="tab" aria-controls="tabFade-2-pane-2" aria-selected="false">Course Curriculum</button>
                                    </li>
                                </ul>
                                <div className="tab-content">
                                    <div id="tabFade-2-pane-1" className="tab-pane fade show active" role="tabpanel" aria-labelledby="tabFade-2-1">
                                    <h2 className="heading-tertiary mt-3 mb-4">Dual Certificate Course in Financial Accounting and Taxation - DFAT</h2>
                                        <Table striped borderless hover>
                                            <tbody>
                                                <tr>
                                                    <td>Course Duration</td>
                                                    <td>52 Weeks</td>
                                                </tr>
                                                <tr>
                                                    <td>Course Fees</td>
                                                    <td>18460/-</td>
                                                </tr>
                                                <tr>
                                                    <td>Attendance</td>
                                                    <td>75%</td>
                                                </tr>
                                                <tr>
                                                    <td>Assessment</td>
                                                    <td>PET, PMT, CT</td>
                                                </tr>
                                                <tr>
                                                    <td>Placement Assistance</td>
                                                    <td></td>
                                                </tr>
                                            </tbody>
                                        </Table>
                                    </div>
                                    <div id="tabFade-2-pane-2" className="tab-pane fade" role="tabpanel" aria-labelledby="tabFade-2-2">
                                        <h2 className="heading-tertiary mt-3 mb-4">What you'll learn</h2>
                                        <ul className='features-list'>
                                            <li>Tally.ERP 9 (Vol i - v)</li>
                                            <li>Basics of Accountancy</li>
                                            <li>Accounts & Taxation</li>
                                            <li>Basics of Computers</li>
                                            <li>Advance Computers</li>
                                            <li>Basics of English</li>
                                            <li>Business Commmunication</li>
                                            <li>Personality Developement-i</li>
                                            <li>Personality Developement-ii</li>
                                            <li>Sales Management</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div id="tab-pane-3" className="tab-pane fade" role="tabpanel" aria-labelledby="tab-3">
                                <ul className="nav nav-tabs" role="tablist">
                                    <li className="nav-item" role="presentation">
                                        <button type="button" id="tabFade-3-1" className="nav-link active" data-bs-toggle="tab" data-bs-target="#tabFade-3-pane-1" role="tab" aria-controls="tabFade-3-pane-1" aria-selected="true">Course Highlights</button>
                                    </li>
                                    <li className="nav-item" role="presentation">
                                        <button type="button" id="tabFade-3-2" className="nav-link" data-bs-toggle="tab" data-bs-target="#tabFade-3-pane-2" role="tab" aria-controls="tabFade-3-pane-2" aria-selected="false">Course Details</button>
                                    </li>
                                </ul>
                                <div className="tab-content">
                                    <div id="tabFade-3-pane-1" className="tab-pane fade show active" role="tabpanel" aria-labelledby="tabFade-3-1">
                                        <h2 className="heading-tertiary mt-3 mb-4">Tally Comprehensive</h2>
                                        <Table striped borderless hover>
                                            <tbody>
                                                <tr>
                                                    <td>Course Duration</td>
                                                    <td>16 Weeks</td>
                                                </tr>
                                                <tr>
                                                    <td>Course Intake</td>
                                                    <td>4 to 5</td>
                                                </tr>
                                                <tr>
                                                    <td>Course Fees</td>
                                                    <td>14200/-</td>
                                                </tr>
                                                <tr>
                                                    <td>Attendance</td>
                                                    <td>75%</td>
                                                </tr>
                                                <tr>
                                                    <td>Placement Assistance</td>
                                                    <td></td>
                                                </tr>
                                            </tbody>
                                        </Table>
                                    </div>
                                    <div id="tabFade-3-pane-2" className="tab-pane fade" role="tabpanel" aria-labelledby="tabFade-3-2">
                                        <h2 className="heading-tertiary mt-3 mb-4">What you'll learn</h2>
                                        <ul className='features-list'>
                                            <li>Tally Prime (vol i)</li>
                                            <li>Tally Prime (vol ii)</li>
                                            <li>Tally Prime (vol iii)</li>
                                            <li>Tally Prime (vol iv)</li>
                                            <li>Tally Prime (vol v)</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div id="tab-pane-4" className="tab-pane fade" role="tabpanel" aria-labelledby="tab-4">
                                <ul className="nav nav-tabs" role="tablist">
                                    <li className="nav-item" role="presentation">
                                        <button type="button" id="tabFade-4-1" className="nav-link active" data-bs-toggle="tab" data-bs-target="#tabFade-4-pane-1" role="tab" aria-controls="tabFade-4-pane-1" aria-selected="true">Course Highlights</button>
                                    </li>
                                    <li className="nav-item" role="presentation">
                                        <button type="button" id="tabFade-4-2" className="nav-link" data-bs-toggle="tab" data-bs-target="#tabFade-4-pane-2" role="tab" aria-controls="tabFade-4-pane-2" aria-selected="false">Course Details</button>
                                    </li>
                                </ul>
                                <div className="tab-content">
                                    <div id="tabFade-4-pane-1" className="tab-pane fade show active" role="tabpanel" aria-labelledby="tabFade-4-1">
                                        <h2 className="heading-tertiary mt-3 mb-4">Tally Prime</h2>
                                        <Table striped borderless hover>
                                            <tbody>
                                                <tr>
                                                    <td>Course Duration</td>
                                                    <td>8 Weeks</td>
                                                </tr>
                                                <tr>
                                                    <td>Course Intake</td>
                                                    <td>4 to 5</td>
                                                </tr>
                                                <tr>
                                                    <td>Course Fees</td>
                                                    <td>9240/-</td>
                                                </tr>
                                                <tr>
                                                    <td>Attendance</td>
                                                    <td>75%</td>
                                                </tr>
                                                <tr>
                                                    <td>Placement Assistance</td>
                                                    <td></td>
                                                </tr>
                                            </tbody>
                                        </Table>
                                    </div>
                                    <div id="tabFade-4-pane-2" className="tab-pane fade" role="tabpanel" aria-labelledby="tabFade-4-2">
                                        <h2 className="heading-tertiary mt-3 mb-4">What you'll learn</h2>
                                        <ul className='features-list'>
                                            <li>Tally Prime (vol i)</li>
                                            <li>Tally Prime (vol ii)</li>
                                            <li>Tally Prime (vol iii)</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div id="tab-pane-5" className="tab-pane fade" role="tabpanel" aria-labelledby="tab-5">
                                <ul className="nav nav-tabs" role="tablist">
                                    <li className="nav-item" role="presentation">
                                        <button type="button" id="tabFade-5-1" className="nav-link active" data-bs-toggle="tab" data-bs-target="#tabFade-5-pane-1" role="tab" aria-controls="tabFade-5-pane-1" aria-selected="true">Course Highlights</button>
                                    </li>
                                    <li className="nav-item" role="presentation">
                                        <button type="button" id="tabFade-5-2" className="nav-link" data-bs-toggle="tab" data-bs-target="#tabFade-5-pane-2" role="tab" aria-controls="tabFade-5-pane-2" aria-selected="false">Course Details</button>
                                    </li>
                                </ul>
                                <div className="tab-content">
                                    <div id="tabFade-5-pane-1" className="tab-pane fade show active" role="tabpanel" aria-labelledby="tabFade-5-1">
                                        <h2 className="heading-tertiary mt-3 mb-4">Tally Prime Advance</h2>
                                        <Table striped borderless hover>
                                            <tbody>
                                                <tr>
                                                    <td>Course Duration</td>
                                                    <td>8 Weeks</td>
                                                </tr>
                                                <tr>
                                                    <td>Course Intake</td>
                                                    <td>4 to 5</td>
                                                </tr>
                                                <tr>
                                                    <td>Course Fees</td>
                                                    <td>9240/-</td>
                                                </tr>
                                                <tr>
                                                    <td>Attendance</td>
                                                    <td>75%</td>
                                                </tr>
                                                <tr>
                                                    <td>Placement Assistance</td>
                                                    <td></td>
                                                </tr>
                                            </tbody>
                                        </Table>
                                    </div>
                                    <div id="tabFade-5-pane-2" className="tab-pane fade" role="tabpanel" aria-labelledby="tabFade-5-2">
                                        <h2 className="heading-tertiary mt-3 mb-4">What you'll learn</h2>
                                        <ul className='features-list mt-3 mb-4"'>
                                            <li>Tally Prime (vol iv)</li>
                                            <li>Tally Prime (vol v)</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div id="tab-pane-6" className="tab-pane fade" role="tabpanel" aria-labelledby="tab-6">
                                <ul className="nav nav-tabs" role="tablist">
                                    <li className="nav-item" role="presentation">
                                        <button type="button" id="tabFade-6-1" className="nav-link active" data-bs-toggle="tab" data-bs-target="#tabFade-6-pane-1" role="tab" aria-controls="tabFade-6-pane-1" aria-selected="true">Course Highlights</button>
                                    </li>
                                    <li className="nav-item" role="presentation">
                                        <button type="button" id="tabFade-6-2" className="nav-link" data-bs-toggle="tab" data-bs-target="#tabFade-6-pane-2" role="tab" aria-controls="tabFade-6-pane-2" aria-selected="false">Course Details</button>
                                    </li>
                                </ul>
                                <div className="tab-content">
                                    <div id="tabFade-6-pane-1" className="tab-pane fade show active" role="tabpanel" aria-labelledby="tabFade-6-1">
                                        <h2 className="heading-tertiary mt-3 mb-4">Tally Fundamentals</h2>
                                        <Table striped borderless hover>
                                            <tbody>
                                                <tr>
                                                    <td>Course Duration</td>
                                                    <td>4 Weeks</td>
                                                </tr>
                                                <tr>
                                                    <td>Course Intake</td>
                                                    <td>4 to 5</td>
                                                </tr>
                                                <tr>
                                                    <td>Course Fees</td>
                                                    <td>3590/-</td>
                                                </tr>
                                                <tr>
                                                    <td>Attendance</td>
                                                    <td>75%</td>
                                                </tr>
                                                <tr>
                                                    <td>Placement Assistance</td>
                                                    <td></td>
                                                </tr>
                                            </tbody>
                                        </Table>
                                    </div>
                                    <div id="tabFade-6-pane-2" className="tab-pane fade" role="tabpanel" aria-labelledby="tabFade-6-2">
                                        <h2 className="heading-tertiary mt-3 mb-4">What you'll learn</h2>
                                        <ul className='features-list'>
                                            <li>Tally Prime (vol i)</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div id="tab-pane-7" className="tab-pane fade" role="tabpanel" aria-labelledby="tab-7">
                                <ul className="nav nav-tabs" role="tablist">
                                    <li className="nav-item" role="presentation">
                                        <button type="button" id="tabFade-7-1" className="nav-link active" data-bs-toggle="tab" data-bs-target="#tabFade-7-pane-1" role="tab" aria-controls="tabFade-7-pane-1" aria-selected="true">Course Highlights</button>
                                    </li>
                                    <li className="nav-item" role="presentation">
                                        <button type="button" id="tabFade-7-2" className="nav-link" data-bs-toggle="tab" data-bs-target="#tabFade-7-pane-2" role="tab" aria-controls="tabFade-7-pane-2" aria-selected="false">Course Details</button>
                                    </li>
                                </ul>
                                <div className="tab-content">
                                    <div id="tabFade-7-pane-1" className="tab-pane fade show active" role="tabpanel" aria-labelledby="tabFade-7-1">
                                        <h2 className="heading-tertiary mt-3 mb-4">Tally For Beginners</h2>
                                        <Table striped borderless hover>
                                            <tbody>
                                                <tr>
                                                    <td>Course Duration</td>
                                                    <td>4 Weeks</td>
                                                </tr>
                                                <tr>
                                                    <td>Course Intake</td>
                                                    <td>4 to 5</td>
                                                </tr>
                                                <tr>
                                                    <td>Course Fees</td>
                                                    <td>2052/-</td>
                                                </tr>
                                                <tr>
                                                    <td>Attendance</td>
                                                    <td>75%</td>
                                                </tr>
                                                <tr>
                                                    <td>Placement Assistance</td>
                                                    <td></td>
                                                </tr>
                                            </tbody>
                                        </Table>
                                    </div>
                                    <div id="tabFade-7-pane-2" className="tab-pane fade" role="tabpanel" aria-labelledby="tabFade-7-2">
                                        {/* Nothing so show here.. */}
                                    </div>
                                </div>
                            </div>
                            <div id="tab-pane-8" className="tab-pane fade" role="tabpanel" aria-labelledby="tab-8">
                                <ul className="nav nav-tabs" role="tablist">
                                    <li className="nav-item" role="presentation">
                                        <button type="button" id="tabFade-8-1" className="nav-link active" data-bs-toggle="tab" data-bs-target="#tabFade-8-pane-1" role="tab" aria-controls="tabFade-8-pane-1" aria-selected="true">Course Highlights</button>
                                    </li>
                                    <li className="nav-item" role="presentation">
                                        <button type="button" id="tabFade-8-2" className="nav-link" data-bs-toggle="tab" data-bs-target="#tabFade-8-pane-2" role="tab" aria-controls="tabFade-8-pane-2" aria-selected="false">Course Details</button>
                                    </li>
                                </ul>
                                <div className="tab-content">
                                    <div id="tabFade-8-pane-1" className="tab-pane fade show active" role="tabpanel" aria-labelledby="tabFade-8-1">
                                        <h2 className="heading-tertiary mt-3 mb-4">Basics of Accountancy</h2>
                                        <Table striped borderless hover>
                                            <tbody>
                                                <tr>
                                                    <td>Course Duration</td>
                                                    <td>4 Weeks</td>
                                                </tr>
                                                <tr>
                                                    <td>Course Intake</td>
                                                    <td>4 to 5</td>
                                                </tr>
                                                <tr>
                                                    <td>Course Fees</td>
                                                    <td>3990/-</td>
                                                </tr>
                                                <tr>
                                                    <td>Attendance</td>
                                                    <td>75%</td>
                                                </tr>
                                                <tr>
                                                    <td>Placement Assistance</td>
                                                    <td></td>
                                                </tr>
                                            </tbody>
                                        </Table>
                                    </div>
                                    <div id="tabFade-8-pane-2" className="tab-pane fade" role="tabpanel" aria-labelledby="tabFade-8-2">
                                        {/* Nothing so show here.. */}
                                    </div>
                                </div>
                            </div>
                            <div id="tab-pane-9" className="tab-pane fade" role="tabpanel" aria-labelledby="tab-9">
                                <ul className="nav nav-tabs" role="tablist">
                                    <li className="nav-item" role="presentation">
                                        <button type="button" id="tabFade-9-1" className="nav-link active" data-bs-toggle="tab" data-bs-target="#tabFade-9-pane-1" role="tab" aria-controls="tabFade-9-pane-1" aria-selected="true">Course Highlights</button>
                                    </li>
                                    <li className="nav-item" role="presentation">
                                        <button type="button" id="tabFade-9-2" className="nav-link" data-bs-toggle="tab" data-bs-target="#tabFade-9-pane-2" role="tab" aria-controls="tabFade-9-pane-2" aria-selected="false">Course Details</button>
                                    </li>
                                </ul>
                                <div className="tab-content">
                                    <div id="tabFade-9-pane-1" className="tab-pane fade show active" role="tabpanel" aria-labelledby="tabFade-9-1">
                                        <h2 className="heading-tertiary mt-3 mb-4">Accounts & Taxation</h2>
                                        <Table striped borderless hover>
                                            <tbody>
                                                <tr>
                                                    <td>Course Duration</td>
                                                    <td>4 Weeks</td>
                                                </tr>
                                                <tr>
                                                    <td>Course Intake</td>
                                                    <td>4 to 5</td>
                                                </tr>
                                                <tr>
                                                    <td>Course Fees</td>
                                                    <td>3990/-</td>
                                                </tr>
                                                <tr>
                                                    <td>Attendance</td>
                                                    <td>75%</td>
                                                </tr>
                                                <tr>
                                                    <td>Placement Assistance</td>
                                                    <td></td>
                                                </tr>
                                            </tbody>
                                        </Table>
                                    </div>
                                    <div id="tabFade-9-pane-2" className="tab-pane fade" role="tabpanel" aria-labelledby="tabFade-9-2">
                                        {/* Nothing so show here.. */}
                                    </div>
                                </div>
                            </div>
                            <div id="tab-pane-10" className="tab-pane fade" role="tabpanel" aria-labelledby="tab-10">
                                <ul className="nav nav-tabs" role="tablist">
                                    <li className="nav-item" role="presentation">
                                        <button type="button" id="tabFade-10-1" className="nav-link active" data-bs-toggle="tab" data-bs-target="#tabFade-10-pane-1" role="tab" aria-controls="tabFade-10-pane-1" aria-selected="true">Course Highlights</button>
                                    </li>
                                    <li className="nav-item" role="presentation">
                                        <button type="button" id="tabFade-10-2" className="nav-link" data-bs-toggle="tab" data-bs-target="#tabFade-10-pane-2" role="tab" aria-controls="tabFade-10-pane-2" aria-selected="false">Course Details</button>
                                    </li>
                                </ul>
                                <div className="tab-content">
                                    <div id="tabFade-10-pane-1" className="tab-pane fade show active" role="tabpanel" aria-labelledby="tabFade-10-1">
                                        <h2 className="heading-tertiary mt-3 mb-4">Basics of Computers</h2>
                                        <Table striped borderless hover>
                                            <tbody>
                                                <tr>
                                                    <td>Course Duration</td>
                                                    <td>4 Weeks</td>
                                                </tr>
                                                <tr>
                                                    <td>Course Intake</td>
                                                    <td>4 to 5</td>
                                                </tr>
                                                <tr>
                                                    <td>Course Fees</td>
                                                    <td>3990/-</td>
                                                </tr>
                                                <tr>
                                                    <td>Attendance</td>
                                                    <td>75%</td>
                                                </tr>
                                                <tr>
                                                    <td>Placement Assistance</td>
                                                    <td></td>
                                                </tr>
                                            </tbody>
                                        </Table>
                                    </div>
                                    <div id="tabFade-10-pane-2" className="tab-pane fade" role="tabpanel" aria-labelledby="tabFade-10-2">
                                        {/* Nothing so show here.. */}
                                    </div>
                                </div>
                            </div>
                            <div id="tab-pane-11" className="tab-pane fade" role="tabpanel" aria-labelledby="tab-11">
                                <ul className="nav nav-tabs" role="tablist">
                                    <li className="nav-item" role="presentation">
                                        <button type="button" id="tabFade-11-1" className="nav-link active" data-bs-toggle="tab" data-bs-target="#tabFade-11-pane-1" role="tab" aria-controls="tabFade-11-pane-1" aria-selected="true">Course Highlights</button>
                                    </li>
                                    <li className="nav-item" role="presentation">
                                        <button type="button" id="tabFade-11-2" className="nav-link" data-bs-toggle="tab" data-bs-target="#tabFade-11-pane-2" role="tab" aria-controls="tabFade-11-pane-2" aria-selected="false">Course Details</button>
                                    </li>
                                </ul>
                                <div className="tab-content">
                                    <div id="tabFade-11-pane-1" className="tab-pane fade show active" role="tabpanel" aria-labelledby="tabFade-11-1">
                                        <h2 className="heading-tertiary mt-3 mb-4">Advance Computers</h2>
                                        <Table striped borderless hover>
                                            <tbody>
                                                <tr>
                                                    <td>Course Duration</td>
                                                    <td>4 Weeks</td>
                                                </tr>
                                                <tr>
                                                    <td>Course Intake</td>
                                                    <td>4 to 5</td>
                                                </tr>
                                                <tr>
                                                    <td>Course Fees</td>
                                                    <td>3990/-</td>
                                                </tr>
                                                <tr>
                                                    <td>Attendance</td>
                                                    <td>75%</td>
                                                </tr>
                                                <tr>
                                                    <td>Placement Assistance</td>
                                                    <td></td>
                                                </tr>
                                            </tbody>
                                        </Table>
                                    </div>
                                    <div id="tabFade-11-pane-2" className="tab-pane fade" role="tabpanel" aria-labelledby="tabFade-11-2">
                                        {/* Nothing so show here.. */}
                                    </div>
                                </div>
                            </div>
                            <div id="tab-pane-12" className="tab-pane fade" role="tabpanel" aria-labelledby="tab-12">
                                <ul className="nav nav-tabs" role="tablist">
                                    <li className="nav-item" role="presentation">
                                        <button type="button" id="tabFade-12-1" className="nav-link active" data-bs-toggle="tab" data-bs-target="#tabFade-12-pane-1" role="tab" aria-controls="tabFade-12-pane-1" aria-selected="true">Course Highlights</button>
                                    </li>
                                    <li className="nav-item" role="presentation">
                                        <button type="button" id="tabFade-12-2" className="nav-link" data-bs-toggle="tab" data-bs-target="#tabFade-12-pane-2" role="tab" aria-controls="tabFade-12-pane-2" aria-selected="false">Course Details</button>
                                    </li>
                                </ul>
                                <div className="tab-content">
                                    <div id="tabFade-12-pane-1" className="tab-pane fade show active" role="tabpanel" aria-labelledby="tabFade-12-1">
                                        <h2 className="heading-tertiary mt-3 mb-4">Basics of English</h2>
                                        <Table striped borderless hover>
                                            <tbody>
                                                <tr>
                                                    <td>Course Duration</td>
                                                    <td>4 Weeks</td>
                                                </tr>
                                                <tr>
                                                    <td>Course Intake</td>
                                                    <td>4 to 5</td>
                                                </tr>
                                                <tr>
                                                    <td>Course Fees</td>
                                                    <td>3990/-</td>
                                                </tr>
                                                <tr>
                                                    <td>Attendance</td>
                                                    <td>75%</td>
                                                </tr>
                                                <tr>
                                                    <td>Placement Assistance</td>
                                                    <td></td>
                                                </tr>
                                            </tbody>
                                        </Table>
                                    </div>
                                    <div id="tabFade-12-pane-2" className="tab-pane fade" role="tabpanel" aria-labelledby="tabFade-12-2">
                                        {/* Nothing so show here.. */}
                                    </div>
                                </div>
                            </div>
                            <div id="tab-pane-13" className="tab-pane fade" role="tabpanel" aria-labelledby="tab-13">
                                <ul className="nav nav-tabs" role="tablist">
                                    <li className="nav-item" role="presentation">
                                        <button type="button" id="tabFade-13-1" className="nav-link active" data-bs-toggle="tab" data-bs-target="#tabFade-13-pane-1" role="tab" aria-controls="tabFade-13-pane-1" aria-selected="true">Course Highlights</button>
                                    </li>
                                    <li className="nav-item" role="presentation">
                                        <button type="button" id="tabFade-13-2" className="nav-link" data-bs-toggle="tab" data-bs-target="#tabFade-13-pane-2" role="tab" aria-controls="tabFade-13-pane-2" aria-selected="false">Course Details</button>
                                    </li>
                                </ul>
                                <div className="tab-content">
                                    <div id="tabFade-13-pane-1" className="tab-pane fade show active" role="tabpanel" aria-labelledby="tabFade-13-1">
                                        <h2 className="heading-tertiary mt-3 mb-4">Business Comunication</h2>
                                        <Table striped borderless hover>
                                            <tbody>
                                                <tr>
                                                    <td>Course Duration</td>
                                                    <td>4 Weeks</td>
                                                </tr>
                                                <tr>
                                                    <td>Course Intake</td>
                                                    <td>4 to 5</td>
                                                </tr>
                                                <tr>
                                                    <td>Course Fees</td>
                                                    <td>3990/-</td>
                                                </tr>
                                                <tr>
                                                    <td>Attendance</td>
                                                    <td>75%</td>
                                                </tr>
                                                <tr>
                                                    <td>Placement Assistance</td>
                                                    <td></td>
                                                </tr>
                                            </tbody>
                                        </Table>
                                    </div>
                                    <div id="tabFade-13-pane-2" className="tab-pane fade" role="tabpanel" aria-labelledby="tabFade-13-2">
                                        {/* Nothing so show here.. */}
                                    </div>
                                </div>
                            </div>
                            <div id="tab-pane-14" className="tab-pane fade" role="tabpanel" aria-labelledby="tab-14">
                                <ul className="nav nav-tabs" role="tablist">
                                    <li className="nav-item" role="presentation">
                                        <button type="button" id="tabFade-14-1" className="nav-link active" data-bs-toggle="tab" data-bs-target="#tabFade-14-pane-1" role="tab" aria-controls="tabFade-14-pane-1" aria-selected="true">Course Highlights</button>
                                    </li>
                                    <li className="nav-item" role="presentation">
                                        <button type="button" id="tabFade-14-2" className="nav-link" data-bs-toggle="tab" data-bs-target="#tabFade-14-pane-2" role="tab" aria-controls="tabFade-14-pane-2" aria-selected="false">Course Details</button>
                                    </li>
                                </ul>
                                <div className="tab-content">
                                    <div id="tabFade-14-pane-1" className="tab-pane fade show active" role="tabpanel" aria-labelledby="tabFade-14-1">
                                        <h2 className="heading-tertiary mt-3 mb-4">Personality Developement-i</h2>
                                        <Table striped borderless hover>
                                            <tbody>
                                                <tr>
                                                    <td>Course Duration</td>
                                                    <td>4 Weeks</td>
                                                </tr>
                                                <tr>
                                                    <td>Course Intake</td>
                                                    <td>4 to 5</td>
                                                </tr>
                                                <tr>
                                                    <td>Course Fees</td>
                                                    <td>3990/-</td>
                                                </tr>
                                                <tr>
                                                    <td>Attendance</td>
                                                    <td>75%</td>
                                                </tr>
                                                <tr>
                                                    <td>Placement Assistance</td>
                                                    <td></td>
                                                </tr>
                                            </tbody>
                                        </Table>
                                    </div>
                                    <div id="tabFade-14-pane-2" className="tab-pane fade" role="tabpanel" aria-labelledby="tabFade-14-2">
                                        {/* Nothing so show here.. */}
                                    </div>
                                </div>
                            </div>
                            <div id="tab-pane-15" className="tab-pane fade" role="tabpanel" aria-labelledby="tab-15">
                                <ul className="nav nav-tabs" role="tablist">
                                    <li className="nav-item" role="presentation">
                                        <button type="button" id="tabFade-15-1" className="nav-link active" data-bs-toggle="tab" data-bs-target="#tabFade-15-pane-1" role="tab" aria-controls="tabFade-15-pane-1" aria-selected="true">Course Highlights</button>
                                    </li>
                                    <li className="nav-item" role="presentation">
                                        <button type="button" id="tabFade-15-2" className="nav-link" data-bs-toggle="tab" data-bs-target="#tabFade-15-pane-2" role="tab" aria-controls="tabFade-15-pane-2" aria-selected="false">Course Details</button>
                                    </li>
                                </ul>
                                <div className="tab-content">
                                    <div id="tabFade-15-pane-1" className="tab-pane fade show active" role="tabpanel" aria-labelledby="tabFade-15-1">
                                        <h2 className="heading-tertiary mt-3 mb-4">Personality Developement-ii</h2>
                                        <Table striped borderless hover>
                                            <tbody>
                                                <tr>
                                                    <td>Course Duration</td>
                                                    <td>4 Weeks</td>
                                                </tr>
                                                <tr>
                                                    <td>Course Intake</td>
                                                    <td>4 to 5</td>
                                                </tr>
                                                <tr>
                                                    <td>Course Fees</td>
                                                    <td>3990/-</td>
                                                </tr>
                                                <tr>
                                                    <td>Attendance</td>
                                                    <td>75%</td>
                                                </tr>
                                                <tr>
                                                    <td>Placement Assistance</td>
                                                    <td></td>
                                                </tr>
                                            </tbody>
                                        </Table>
                                    </div>
                                    <div id="tabFade-15-pane-2" className="tab-pane fade" role="tabpanel" aria-labelledby="tabFade-15-2">
                                        {/* Nothing so show here.. */}
                                    </div>
                                </div>
                            </div>
                            <div id="tab-pane-16" className="tab-pane fade" role="tabpanel" aria-labelledby="tab-16">
                                <ul className="nav nav-tabs" role="tablist">
                                    <li className="nav-item" role="presentation">
                                        <button type="button" id="tabFade-16-1" className="nav-link active" data-bs-toggle="tab" data-bs-target="#tabFade-16-pane-1" role="tab" aria-controls="tabFade-16-pane-1" aria-selected="true">Course Highlights</button>
                                    </li>
                                    <li className="nav-item" role="presentation">
                                        <button type="button" id="tabFade-16-2" className="nav-link" data-bs-toggle="tab" data-bs-target="#tabFade-16-pane-2" role="tab" aria-controls="tabFade-16-pane-2" aria-selected="false">Course Details</button>
                                    </li>
                                </ul>
                                <div className="tab-content">
                                    <div id="tabFade-16-pane-1" className="tab-pane fade show active" role="tabpanel" aria-labelledby="tabFade-16-1">
                                        <h2 className="heading-tertiary mt-3 mb-4">Sales Management</h2>
                                        <Table striped borderless hover>
                                            <tbody>
                                                <tr>
                                                    <td>Course Duration</td>
                                                    <td>4 Weeks</td>
                                                </tr>
                                                <tr>
                                                    <td>Course Intake</td>
                                                    <td>4 to 5</td>
                                                </tr>
                                                <tr>
                                                    <td>Course Fees</td>
                                                    <td>3990/-</td>
                                                </tr>
                                                <tr>
                                                    <td>Attendance</td>
                                                    <td>75%</td>
                                                </tr>
                                                <tr>
                                                    <td>Placement Assistance</td>
                                                    <td></td>
                                                </tr>
                                            </tbody>
                                        </Table>
                                    </div>
                                    <div id="tabFade-16-pane-2" className="tab-pane fade" role="tabpanel" aria-labelledby="tabFade-16-2">
                                        {/* Nothing so show here.. */}
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                    <button className="btn-1 d-lg-none mt-5 ms-auto w-auto" onClick={() => navigate(-1)}>Back to Home</button>
                </div>
            </div>
        </section>
    )
}

const mapStateToTallyPrime = (state) => {
    return { isMobile: state.isMobile };
}
export default connect(mapStateToTallyPrime, {})(TallyPrime);