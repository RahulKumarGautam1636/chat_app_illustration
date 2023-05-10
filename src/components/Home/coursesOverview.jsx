import CourseCard from "../utils/cards";
import { Link } from 'react-router-dom';

const CoursesOverview = () => {

    // const colors = ['hsl(339deg 93% 71%)', 'hsl(250deg 96% 76%)', 'hsl(192deg 85% 68%)', 'hsl(35deg 93% 69%)']

    const overviewItems = [
        { color: 'hsl(339deg 93% 71%)', text1: 'Web', text2: 'Development', icon: 'webDev.svg'},
        { color: 'hsl(250deg 96% 76%)', text1: 'Tally ERP', text2: 'Training', icon: 'tally.svg'},
        { color: 'hsl(192deg 85% 68%)', text1: 'Ms-Office', text2: 'Learning', icon: 'excel.svg'},
        { color: 'hsl(35deg 93% 69%)', text1: 'GST', text2: 'Training', icon: 'gst.svg'},
    ]
    return (
        <section id="course-overview" className="section-padding">
            <div className="container">
                <h2 className="heading-primary">Browse Top Essential<br/> Career Courses</h2>
                <div className="cards-container pt-5 d-flex gap-4 gap-sm-5 flex-wrap">
                    {overviewItems.map((item, index) => <CourseCard course={item} key={index} index={index}/>)}
                    
                    <div id="browseAll" className="course-card d-flex flex-column justify-content-center align-items-center gap-3" style={{background: 'aliceblue'}} data-aos="fade-left" data-aos-delay={`${200*overviewItems.length}`}>
                        <Link to='/'><i className='bx bx-arrow-back'></i></Link>
                        <h3 className="heading-secondary">Browse All</h3>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default CoursesOverview;
