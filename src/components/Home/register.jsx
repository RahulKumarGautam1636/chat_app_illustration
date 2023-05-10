import CourseCard from "../utils/cards";
import { Link } from 'react-router-dom';

const Register = () => {

    return (
        <section id="register">
            <div className="container d-flex flex-column flex-lg-row justify-content-center gap-5 px-4 px-lg-0">
                {/* <h2 className="heading-primary">Browse Top Essential<br/> Career Courses</h2> */}
                {/* <div className="cards-container pt-5 d-flex gap-5 flex-wrap">
                    {courses.map((item, index) => <CourseCard course={item} key={index} index={index}/>)}
                    
                    <div id="browseAll" className="course-card d-flex flex-column justify-content-center align-items-center gap-3" style={{background: 'aliceblue'}} data-aos="fade-left" data-aos-delay={`${200*courses.length}`}>
                        <Link to='/'><i className='bx bx-arrow-back'></i></Link>
                        <h3 className="heading-secondary">Browse All</h3>
                    </div>
                </div> */}
                <div className="order-2 order-lg-1">
                    <form className="register-form h-100 w-100 d-flex flex-column align-items-center gap-4">
                        <h3 className="heading-secondary d-flex w-100">REGISTER NOW <i className='bx bxs-notepad ms-auto'></i></h3> 
                        <div className="input__fields">
                            <div className="input__group">
                                <input type="text" placeholder="Your Full Name" id="fName"/>
                            </div>
                            <div className="input__group">
                                <input type="email" placeholder="Your E-mail" id="email"/>
                            </div>
                            <div className="input__group">
                                <input type="text" placeholder="Phone Number" id="phone"/>
                            </div>
                            <div className="input__group">
                                <input type="text" placeholder="Course name" id="phone"/>
                            </div>
                            <div className="input__group">
                                <input type="text" placeholder="City / State" id="phone"/>
                            </div>
                            <div className="input__group">
                                <button type="button" className="button-primary registerSubmit">Register Now
                                    <svg className="ms-3" width="31" height="31" viewBox="0 0 31 31" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <circle cx="15.5" cy="15.5" r="15.5" fill="#FFB546"/>
                                        <path d="M11.0171 9.55266C11.0127 8.78287 11.8432 8.29696 12.5121 8.67801L22.892 14.5914C23.5608 14.9724 23.5664 15.9347 22.902 16.3234L12.5909 22.356C11.9264 22.7447 11.0904 22.2684 11.0859 21.4986L11.0171 9.55266Z" fill="white"/>
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </form>
                </div>

                <div className="order-1 order-lg-2">
                    <div id="carouselIndicators" className="carousel slide h-100" data-bs-ride="carousel" data-bs-interval="3000">
                        <div className="carousel-indicators">
                            <button type="button" data-bs-target="#carouselIndicators" data-bs-slide-to="0" aria-label="Slide 1" className="active"></button>
                            <button type="button" data-bs-target="#carouselIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                            <button type="button" data-bs-target="#carouselIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                            <button type="button" data-bs-target="#carouselIndicators" data-bs-slide-to="3" aria-label="Slide 4"></button>
                            <button type="button" data-bs-target="#carouselIndicators" data-bs-slide-to="4" aria-label="Slide 5"></button>
                        </div>
                        <div className="carousel-inner h-100">
                            <div className="carousel-item h-100 active">
                                <img src="assets/img/carousel/Banner-I.jpg" alt="First slide" className="d-block w-100 h-100"/>
                            </div>
                            <div className="carousel-item h-100">
                                <img src="assets/img/carousel/EthicalHacking-II.jpg" alt="Second slide" className="d-block w-100 h-100"/>
                            </div>
                            <div className="carousel-item h-100">
                                <img src="assets/img/carousel/MockTest_1.jpg" alt="Third slide" className="d-block w-100 h-100"/>
                            </div>
                            <div className="carousel-item h-100">
                                <img src="assets/img/carousel/Tally_1.jpg" alt="Fourth slide" className="d-block w-100 h-100"/>
                            </div>
                            <div className="carousel-item h-100">
                                <img src="assets/img/carousel/Tally_5.jpg" alt="Fourth slide" className="d-block w-100 h-100"/>
                            </div>
                        </div>
                    </div>
                    {/* <div id="sliderFrame" >
                        <div id="slider">
                            <img src="assets/img/courses/Banner-I.jpg" />
                            <img src="assets/img/courses/EthicalHacking-II.jpg" />
                            <img src="assets/img/courses/MockTest_1.jpg" />
                            <img src="assets/img/courses/Tally_1.jpg" alt="Caption for slide 5" />
                            <img src="assets/img/courses/Tally_7.jpg" alt="Caption for slide 5" />
                            <img src="assets/img/courses/Tally_5.jpg" alt="Caption for slide 5" />
                        </div>
                    </div> */}
                </div>
            </div>
        </section>
    )
}

export default Register;