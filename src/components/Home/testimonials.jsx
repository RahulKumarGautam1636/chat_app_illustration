import { TestimonialCard } from "../utils/cards";

const Testimonials = () => {

    const testimonialsItems = [
        { name: 'Abhijit Ghosh', img: 'person1.jpg', comment: 'I am thankful to Versicle Institute of Technology for give me huge educational support & today I am a employee in GUNIESS GROUP, Sec V, Saltlake, Kolkata.'},
        { name: 'Subhadip Maiti', img: 'person2.jpg', comment: 'At Versicle Institute of Technology I am empowered to perform at my best and deliver excellent service every day.'},
        { name: 'Saikat Bannerjee', img: 'person3.jpg', comment: 'I am pleased to be working for such a high caliber IT Company. I am proud to say I learn from Versicle Institute of Technology'},
        { name: 'Abhijit Ghosh', img: 'person1.jpg', comment: 'I am thankful to Versicle Institute of Technology for give me huge educational support & today I am a employee in GUNIESS GROUP, Sec V, Saltlake, Kolkata.'},
        { name: 'Subhadip Maiti', img: 'person2.jpg', comment: 'At Versicle Institute of Technology I am empowered to perform at my best and deliver excellent service every day.'},
        { name: 'Saikat Bannerjee', img: 'person3.jpg', comment: 'I am pleased to be working for such a high caliber IT Company. I am proud to say I learn from Versicle Institute of Technology'},
        { name: 'Abhijit Ghosh', img: 'person1.jpg', comment: 'I am thankful to Versicle Institute of Technology for give me huge educational support & today I am a employee in GUNIESS GROUP, Sec V, Saltlake, Kolkata.'},
        { name: 'Subhadip Maiti', img: 'person2.jpg', comment: 'At Versicle Institute of Technology I am empowered to perform at my best and deliver excellent service every day.'},
        { name: 'Saikat Bannerjee', img: 'person3.jpg', comment: 'I am pleased to be working for such a high caliber IT Company. I am proud to say I learn from Versicle Institute of Technology'}
    ]
    return (
        <section className="reviews">
            <div className="container">
                <div className="reviews__heading">
                    <h2 className="heading-secondary">
                        <span className="text-red">💕</span> Loved all over the town <br/> by a wide range of <span className="text-blue">Learners</span>.
                    </h2>
                    <button className="btn-1">View all reviews</button>
                </div>
            </div>
                <div className="reviews__slider">
                    <div className="reviews__slider__wrapper">
                        <div className="owl-carousel owl-theme">
                            {testimonialsItems.map((i, n) => <TestimonialCard testimonial={i} key={n} index={n} />)}
                        </div>
                    </div>
                </div>
            {/* </div> */}
        </section>
    )
}

export default Testimonials;