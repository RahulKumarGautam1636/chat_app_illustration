import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";


const CourseCard = ({ course, index }) => {

    const { color, text1, text2, icon } = course;
    return (
        <div className="course-card" style={{background: color, boxShadow: `0px 2px 12px 0px ${color}`}} data-aos="fade-left" data-aos-delay={`${200*index}`}>
            <img src={`assets/icons/${icon}`} alt={`${text1} ${text2}`} />
            <h3 className="heading-secondary text-white">{text1} <br /> {text2}</h3>
        </div>
    )
}

export default CourseCard;



export const JobCourseCard = ({ course, index }) => {

    const { color, title, pricing, description, img } = course;
    return (
        <div className="job-course-card" data-aos="fade-up" data-aos-delay={`${200*index}`}>
            <div className="card-content">
                <div className="img-box">
                    <img className='img-fluid' src={`assets/img/courses/${img}`} alt={`${img}`} />
                </div>
                <div className="content-box d-flex flex-column gap-3 text-center">
                    <h3 style={{color: color}} className='heading-tertiary'>{title}</h3>
                    <p>{description}</p>
                    {/* <h2 className='heading-secondary'>$60</h2> */}
                    <div className="rating d-flex gap-2 mx-auto" style={{color: color}}>
                        <i className='bx bxs-star h3'></i>
                        <i className='bx bxs-star h3'></i>
                        <i className='bx bxs-star h3'></i>
                        <i className='bx bxs-star h3'></i>
                        <i className='bx bxs-star-half h3'></i>
                    </div>
                </div>
            </div>

            <HashLink className="button-primary text-white" style={{background: color}} to={course.to + '/#top'}>         {/* Hashlink will also scroll to element having id of 'courses' */}
                {/* ₹ */}
                 {pricing}
                <svg className="me-3" width="31" height="31" viewBox="0 0 31 31" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="15.5" cy="15.5" r="15.5" fill="#ff7ba6"/>
                    <path d="M11.0171 9.55266C11.0127 8.78287 11.8432 8.29696 12.5121 8.67801L22.892 14.5914C23.5608 14.9724 23.5664 15.9347 22.902 16.3234L12.5909 22.356C11.9264 22.7447 11.0904 22.2684 11.0859 21.4986L11.0171 9.55266Z" fill="white"/>
                </svg>
            </HashLink>
        </div>
    )
}


export const TestimonialCard = ({ testimonial, index }) => {

    const { name, img, comment } = testimonial;

    return (
        <div className="review__card item">
            <div className="review__card__feedback">
                <p className="text-1">{comment}</p>
            </div>
            <div className="review__card__person">
                <img src={`assets/img/testimonials/${img}`} className="" alt="user"/>
                <div className="user__info">
                    <h4 className="heading-4 heading-4--dark">{name}</h4>
                    {/* <p className="occupation">Business owner</p> */}
                </div>
                <div className="rating">
                    <i className='bx bxs-star'></i>
                    <i className='bx bxs-star'></i>
                    <i className='bx bxs-star'></i>
                    <i className='bx bxs-star'></i>
                    <i className='bx bxs-star-half'></i>
                </div>
            </div>
        </div>
    )
}


export const BlogCard = ({ blog, index }) => {

    const { name, date, img, subject, comment } = blog;
    return (
        <div className="blog-card" data-aos={index%2 === 0 ? "fade-left" : "fade-right"} data-aos-delay={`${150*index}`} data-aos-offset="300">
            <div className="inner-wrapper">
                <div className="img-box">
                    <img className="img-fluid" src={`assets/img/testimonials/${img}`} alt={`${img}`} />
                </div>
                <div className="content-box">
                    <h3 className="heading-tertiary">{name}</h3>
                    <h3 className="sub-heading-1">{date}</h3>
                    <div className="comment-box">
                        <p className="text-1 d-none d-sm-block"><span>{subject} :</span> {comment}</p>
                        <div className="btn-box d-none d-sm-flex align-items-center gap-4">
                            <div data-aos="fade-left" data-aos-delay={`${200*index + 400}`} data-aos-offset='100'>
                                <Link to="#" className="text-1">Comments (0)</Link>
                            </div>
                            <div data-aos="fade-right" data-aos-delay={`${200*index + 400}`} data-aos-offset='100'>
                                <button className="button-primary">
                                    <svg className="me-3" width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <circle cx="15.5905" cy="15.5016" r="15.5" fill="#FFAE00"/>
                                        <line x1="15.5" y1="25" x2="15.5" y2="6" stroke="white" strokeWidth="3"/>
                                        <line x1="6" y1="15.5" x2="25" y2="15.5" stroke="white" strokeWidth="3"/>
                                    </svg>
                                    Add Comment
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <p className="text-1 d-sm-none mt-3"><span>{subject} :</span> {comment}</p>
            <div className="btn-box d-flex align-items-center gap-4 d-sm-none">
                <div data-aos="fade-left" data-aos-delay={`${200*index + 400}`} data-aos-offset='100'>
                    <Link to="#" className="text-1">Comments (0)</Link>
                </div>
                <div data-aos="fade-right" data-aos-delay={`${200*index + 400}`} data-aos-offset='100'>
                    <button className="button-primary">
                        <svg className="me-3" width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="15.5905" cy="15.5016" r="15.5" fill="#FFAE00"/>
                            <line x1="15.5" y1="25" x2="15.5" y2="6" stroke="white" strokeWidth="3"/>
                            <line x1="6" y1="15.5" x2="25" y2="15.5" stroke="white" strokeWidth="3"/>
                        </svg>
                        Add Comment
                    </button>
                </div>
            </div>
        </div>
    )
}