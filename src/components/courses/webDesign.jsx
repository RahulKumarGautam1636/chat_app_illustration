import Table from 'react-bootstrap/Table';
import { HashLink } from 'react-router-hash-link'; 
import { connect } from 'react-redux';  
import { useNavigate } from 'react-router-dom';

const WebDesign = ({ isMobile }) => {

    const navigate = useNavigate();

    return (
        <section id="softwareDevelopment">
            <div className="container">
                <div className="reviews__heading mb-5">
                    <h2 className="heading-secondary"> Web Designing.</h2>
                    <button className="btn-1 d-none d-lg-block" onClick={() => navigate(-1)}>Back to Home</button>
                </div>
                
                <div className="row">
                    <div className="col col-12 col-md-3">
                        <div className="row">
                            <ul className="nav flex-column nav-pills p-0" role="tablist">
                                <li className="nav-item" role="presentation">
                                    <HashLink to={isMobile ? '#all-tabs' : '#top'}><button type="button" id="tab-1" className="nav-link active" data-bs-toggle="tab" data-bs-target="#tab-pane-1" role="tab" aria-controls="tab-pane-1" aria-selected="true"><img className='rounded-circle' src="assets/icons/WebDesign.jpg" alt="Web Design"/> Web Design</button></HashLink>
                                </li>
                                <li className="nav-item" role="presentation">
                                    <HashLink to={isMobile ? '#all-tabs' : '#top'}><button type="button" id="tab-2" className="nav-link" data-bs-toggle="tab" data-bs-target="#tab-pane-2" role="tab" aria-controls="tab-pane-2" aria-selected="false"><img className='rounded-circle' src="assets/icons/WebDesign.jpg" alt="Graphic Design"/> Graphic Design</button></HashLink>
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
                                        <h2 className="heading-tertiary mt-3 mb-4">Web Design</h2>
                                        <Table striped borderless hover>
                                            <tbody>
                                                <tr>
                                                    <td>Course Duration</td>
                                                    <td>12 Weeks</td>
                                                </tr>
                                                <tr>
                                                    <td>Course Intake</td>
                                                    <td>4 to 5</td>
                                                </tr>
                                                <tr>
                                                    <td>Course Fees</td>
                                                    <td>12000/-</td>
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
                                        <ul className='details-list'>
                                            <li>
                                                <h2 className="heading-tertiary">INTRODUCTION</h2>
                                                <img className='float-start mb-4 me-5' src="assets/img/webDesign.jpg" alt="webDesign"/>
                                                <p className='mb-4'>We planned to design our websites in a precise manner to cater specific need and web designing is an art of content presentation to an end user through World Wide Web. Web Designing often deemed as the interactive marketing tactic to pull out the hidden customer around the global arena. In today's competitive environment efficient web designing helps companies in bringing enquiries that generate sales and add asset to our business.</p>
                                                <p className='mb-4'>Websites give a way in discovering the target audience. So it becomes essential, while developing websites, we must be precise and should concentrate on the target and object oriented in order to get maximum of what they are putting. As we view the website for a specific reason. So while go for designing, it is important for us to know exactly what spectator is looking for when he/she visit our website.</p>
                                                <p className='mb-4'>Web Designing employs multiple disciplines including animation, graphics and interactive design and information architecture for giving digital corporate identity to business and for grabbing attention of customers. Web Designing includes conceptualization, planning, producing, post-production, research as well as advertising. Its unique and nice presentation helps in interacting with unknown audience in effective and efficient manner.</p>
                                                <p>We use various technologies during web designing like Markup languages; style sheet languages, client-side scripting, server-side scripting, database technologies and multimedia technologies.</p>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div id="tab-pane-2" className="tab-pane fade" role="tabpanel" aria-labelledby="tab-2">
                                <ul className="nav nav-tabs" role="tablist">
                                    <li className="nav-item" role="presentation">
                                        <button type="button" id="tabFade-2-1" className="nav-link active" data-bs-toggle="tab" data-bs-target="#tabFade-2-pane-1" role="tab" aria-controls="tabFade-2-pane-1" aria-selected="false">Course Highlights</button>
                                    </li>
                                    <li className="nav-item" role="presentation">
                                        <button type="button" id="tabFade-2-2" className="nav-link" data-bs-toggle="tab" data-bs-target="#tabFade-2-pane-2" role="tab" aria-controls="tabFade-2-pane-2" aria-selected="false">Course Details</button>
                                    </li>
                                </ul>
                                <div className="tab-content">
                                    <div id="tabFade-2-pane-1" className="tab-pane fade show active" role="tabpanel" aria-labelledby="tabFade-2-1">
                                    <h2 className="heading-tertiary mt-3 mb-4">Graphics Design</h2>
                                        <Table striped borderless hover>
                                            <tbody>
                                                <tr>
                                                    <td>Course Duration</td>
                                                    <td>12 Weeks</td>
                                                </tr>
                                                <tr>
                                                    <td>Course Intake</td>
                                                    <td>4 to 5</td>
                                                </tr>
                                                <tr>
                                                    <td>Course Fees</td>
                                                    <td>12000/-</td>
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
                                    <div id="tabFade-2-pane-2" className="tab-pane fade" role="tabpanel" aria-labelledby="tabFade-2-2">
                                        <ul className='details-list'>
                                            <li>
                                                <h2 className="heading-tertiary">INTRODUCTION</h2>
                                                <img className='float-start mb-4 me-5 img-fluid' style={{maxWidth: '34rem'}} src="assets/img/GraphicDesign.jpg" alt="GraphicDesign"/>
                                                <p className='mb-4'>Graphic design is a resourceful process used for boosting and propelling the image of various associations. The internet has made elite utilization of graphics to set up new websites and designs on the internet. With graphics we have necessary relief between pages of text and make our website more fascinating as beautiful graphics are always attention grabbers. Creative and high-quality graphics have the power to attract and retain customers for longer.</p>
                                                <p className='mb-4'>The business industry makes use of graphic design to build business tools and entertainment industry uses it to ornate the production with graphical metaphors and 3D images. Some of graphic designing common uses include identity, product packaging, promotions and advertisement campaigns. It is used in developing logos, branding, business cards and brochures. Publication industry makes good use of it in their magazines, newspapers and also in books.</p>
                                                <p className='mb-4'>To influence business growth and turnovers we use graphic designing to represent brands and create durable corporate identities. Graphic design can be implemented by using templates and pre-designed layouts. This approach is usually implemented by the designers that can't pay much time in designing the given assignment from scratch.</p>
                                                <p>Thus, a quality graphic design is easily appreciable and has high attractive, open and retentive value. At times graphics are more proficient of drawing interest and targeted traffic.</p>
                                            </li>
                                        </ul>
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

const mapStateToWebDesign = (state) => {
    return { isMobile: state.isMobile };
}

export default connect(mapStateToWebDesign, {})(WebDesign);