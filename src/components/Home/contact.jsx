const Contact = () => {
    return (
        <section className="contactUs">
            <div className="container">
                <div className="contact__page">
                    <div className="contact__page__left">
                        <h2 className="heading-2">Contact Information</h2>
                        <p>Fill up the form and our Team will get back to you within 24 hours.</p>
                        <ul className="address_list">
                            <li>
                                <i className='bx bxs-phone-call'></i> +(91)8584057149/51 <br/> +(91)9674266921/42
                            </li>
                            <li>
                                <i className='bx bxs-envelope'></i> info@viteducare.com
                            </li>
                            <li style={{lineHeight: 2, fontSize: '1.5rem'}}>
                                <i className='bx bxs-map'></i> 96L, S.P. Mukherjee Road, 2nd Floor, Hazra More, Kolkata- 700026 Near Jatin Das Park Metro Station, Beside Pathfinder
                            </li>
                        </ul>
                        <ul className="icon_links">
                            <li>
                                <i className='bx bxl-facebook'></i>
                            </li>                        
                            <li>
                                <i className='bx bxl-instagram'></i>
                            </li>                        
                            <li>
                                <i className='bx bxl-twitter' ></i>
                            </li>                        
                            <li>
                                <i className='bx bxl-linkedin'></i>
                            </li>
                        </ul>
                    </div>
                    <div className="contact__page__right">
                        <div className="contact__form">
                            <div className="input__fields">
                                <div className="input__group">
                                    <label htmlFor="fName">First Name</label>
                                    <input type="text" placeholder="Rahul Kumar" id="fName"/>
                                </div>
                                <div className="input__group">
                                    <label htmlFor="lName">Last Name</label>
                                    <input type="text" placeholder="Gautam" id="lName"/>
                                </div>
                                <div className="input__group">
                                    <label htmlFor="email">Your e-mail</label>
                                    <input type="email" placeholder="example@gmail.com" id="email"/>
                                </div>
                                <div className="input__group">
                                    <label htmlFor="phone">Phone number</label>
                                    <input type="text" placeholder="xxxxxxxxxx" id="phone"/>
                                </div>
                            </div>
                            <div className="extra__fields">
                                <h4 className="heading-4 heading-4--dark">Please enter your message and full Address.</h4>
                                <div className="input__group">
                                    <label htmlFor="address">Subject</label>
                                    <input type="text" placeholder="Subject" id="address"/>
                                </div>
                            </div>
                            <div className="text__area">
                                <div className="input__group">
                                    <label htmlFor="message">Your Message</label>
                                    <textarea name="message" id="message" rows="1" placeholder="Write your message here"></textarea>
                                </div>
                            </div>

                            <button className="btn-1">Send Message</button> 
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Contact;