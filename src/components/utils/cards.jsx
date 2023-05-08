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