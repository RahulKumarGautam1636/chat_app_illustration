const Testimonials = () => {
    return (
        <section className="reviews">
            <div className="container">
            <div className="reviews__heading">
                <h2 className="heading-primary">
                    <span className="text-red">💕</span> Loved all over the town <br/> by a wide range of <span className="text-blue">Learners</span>.
                </h2>
                <button className="btn-1">View all reviews</button>
            </div>
            <div className="reviews__slider">
                
                <div className="review__card">
                    <div className="review__card__feedback">
                        <p className="text-1">I am thankful to Versicle Institute of Technology for give me huge educational support & today I am a employee in GUNIESS GROUP, Sec V, Saltlake, Kolkata.</p>
                    </div>
                    <div className="review__card__person">
                        <img src="assets/img/testimonials/person1.jpg" className="" alt="user"/>
                        <div className="user__info">
                            <h4 className="heading-4 heading-4--dark">Abhijit Ghosh</h4>
                            <p className="occupation">Business owner</p>
                        </div>
                        <div className="rating">
                            <i className='bx bxs-star'></i>
                            <i className='bx bxs-star'></i>
                            <i className='bx bxs-star'></i>
                            <i className='bx bxs-star'></i>
                            <i className='bx bxs-star'></i>
                        </div>
                    </div>
                </div>

                <div className="review__card">
                    <div className="review__card__feedback">
                        <p className="text-1">At Versicle Institute of Technology I am empowered to perform at my best and deliver excellent service every day.S</p>
                    </div>
                    <div className="review__card__person">
                        <img src="assets/img/testimonials/person1.jpg" className="" alt="user"/>
                        <div className="user__info">
                            <h4 className="heading-4 heading-4--dark">Shusmita Saha</h4>
                            <p className="occupation">Housewife</p>
                        </div>
                        <div className="rating">
                            <i className='bx bxs-star'></i>
                            <i className='bx bxs-star'></i>
                            <i className='bx bxs-star'></i>
                            <i className='bx bxs-star'></i>
                            <i className='bx bxs-star'></i>
                        </div>
                    </div>
                </div>

                <div className="review__card">
                    <div className="review__card__feedback">
                        <p className="text-1">I am pleased to be working for such a high caliber IT Company. I am proud to say I learn from Versicle Institute of Technology</p>
                    </div>
                    <div className="review__card__person">
                        <img src="assets/img/testimonials/person1.jpg" className="" alt="user"/>
                        <div className="user__info">
                            <h4 className="heading-4 heading-4--dark">Saikat Bannerjee</h4>
                            <p className="occupation">Grocery shop owner</p>
                        </div>
                        <div className="rating">
                            <i className='bx bxs-star'></i>
                            <i className='bx bxs-star'></i>
                            <i className='bx bxs-star'></i>
                            <i className='bx bxs-star'></i>
                            <i className='bx bxs-star'></i>
                        </div>
                    </div>
                </div>

            </div>
            </div>
        </section>
    )
}

export default Testimonials;