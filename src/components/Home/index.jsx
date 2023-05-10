import Hero from "./hero";
// import Courses from './courses';
import Register from "./register";
import CoursesOverview from "./coursesOverview";
import Courses from "./courses";
import Testimonials from "./testimonials";
import Contact from "./contact";

const Home = () => {
    return (
        <>
            <Hero/>
            <CoursesOverview/>
            <Courses/>
            <Register/>
            <Testimonials/>
            <Contact/>
        </>
    )
}

export default Home;