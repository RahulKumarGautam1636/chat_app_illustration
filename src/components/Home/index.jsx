import Hero from "./hero";
// import Courses from './courses';
import Register from "./register";
import CoursesOverview from "./coursesOverview";
import Courses from "./courses";
import Testimonials from "./testimonials";
import Contact from "./contact";
import Blogs from "./blogs";

const Home = () => {
    return (
        <>
            <Hero/>
            <CoursesOverview/>
            <Courses/>
            <Register/>
            <Testimonials/>
            <Contact/>
            <Blogs/>
        </>
    )
}

export default Home;