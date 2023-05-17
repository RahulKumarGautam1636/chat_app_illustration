// import CourseCard from "../utils/cards";
// import { Link } from 'react-router-dom';
import { JobCourseCard } from '../utils/cards';

const Courses = () => {

    // const colors = ['hsl(339deg 93% 71%)', 'hsl(250deg 96% 76%)', 'hsl(192deg 85% 68%)', 'hsl(35deg 93% 69%)']

    const courseItems = [
        { color: 'hsl(192deg 85% 68%)', title: 'Tally Prime', to: 'courses', pricing: 'Read more..', description: 'Certification course in Financial Accounting, Taxation and eFiling.', img: 'tallyPrimeLogo.png'},
        // { color: 'hsl(35deg 93% 69%)', title: 'Tally.ERP9', pricing: 30000, description: 'Certification course in Financial Accounting, Taxation and eFiling.', img: 'tallyErp9.webp'},
        { color: 'hsl(35deg 93% 69%)', title: 'Computer Basics', to: 'courses', pricing: 'Read more..', description: 'Certification course in Basic computer handling and operations.', img: 'computerBasics.png'},
        { color: 'hsl(250deg 96% 76%)', title: 'UI/UX Design', to: 'courses', pricing: 'Read more..', description: 'Learn Web & Graphics Design with tools like Photoshop, Ilustrator and Figma.', img: 'ui-ux.png'},
        { color: 'hsl(339deg 93% 71%)', title: 'Software Development', to: 'courses', pricing: 'Read more..', description: 'Software development using Java, J2EE, Asp.Net with C#, PHP, Oracle, Sql Sever, MySql ..', img: 'webDev2.png'},
    ]
    return (
        <section id="recomended-courses" className="section-padding">
            <div className="container">
                <h2 className="heading-secondary">Recommended Courses</h2>
                <div className="cards-container pt-5 d-flex flex-wrap justify-content-center">
                    {courseItems.map((i, n) => <JobCourseCard course={i} key={n} index={n}/>)}
                </div>
            </div>
        </section>
    )
}

export default Courses;