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

    const { color, title, description, img } = course;
    return (
        <div className="job-course-card">
            <div className="card-content">
                <div className="img-box">
                    <img className='img-fluid' src={`assets/img/courses/${img}`} alt={`${img}`} />
                </div>
                <div className="content-box d-flex flex-column gap-3 text-center">
                    <h3 style={{color: color}} className='heading-secondary'>{title}</h3>
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

            <button className="button-primary text-white" style={{background: color}}>
                ₹ 10000
                <svg className="me-3" width="31" height="31" viewBox="0 0 31 31" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="15.5" cy="15.5" r="15.5" fill="#ff7ba6"/>
                    <path d="M11.0171 9.55266C11.0127 8.78287 11.8432 8.29696 12.5121 8.67801L22.892 14.5914C23.5608 14.9724 23.5664 15.9347 22.902 16.3234L12.5909 22.356C11.9264 22.7447 11.0904 22.2684 11.0859 21.4986L11.0171 9.55266Z" fill="white"/>
                </svg>
            </button>
        </div>
    )
}


