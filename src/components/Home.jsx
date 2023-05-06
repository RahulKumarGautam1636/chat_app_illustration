const Home = () => {
    return (
        <section id="home">
            <div className="container">
                <div className="row">
                    <div className="col col-12 col-lg-3 left">
                        <img src="assets/img/placement.svg" alt="placement" />
                        <img className="img-fluid" src="assets/img/home-img-1.svg" alt="boy-image" />
                    </div>
                    <div className="col col-12 col-lg-6 middle">
                        <h1 className="heading-primary">Make Your</h1>
                        <h1 className="heading-primary">Future Better</h1>
                        <p>Learn and interact with to industry experts to develop in-demand skills</p>

                        <div className="btn-box">
                            <button className="button-primary">Enroll now 
                                <svg className="ms-3" width="31" height="31" viewBox="0 0 31 31" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <circle cx="15.5" cy="15.5" r="15.5" fill="#FFB546"/>
                                    <path d="M11.0171 9.55266C11.0127 8.78287 11.8432 8.29696 12.5121 8.67801L22.892 14.5914C23.5608 14.9724 23.5664 15.9347 22.902 16.3234L12.5909 22.356C11.9264 22.7447 11.0904 22.2684 11.0859 21.4986L11.0171 9.55266Z" fill="white"/>
                                </svg>
                            </button>
                            <button className="button-primary">
                                 <svg className="me-3" width="31" height="31" viewBox="0 0 31 31" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <circle cx="15.5" cy="15.5" r="15.5" fill="#ff7ba6"/>
                                    <path d="M11.0171 9.55266C11.0127 8.78287 11.8432 8.29696 12.5121 8.67801L22.892 14.5914C23.5608 14.9724 23.5664 15.9347 22.902 16.3234L12.5909 22.356C11.9264 22.7447 11.0904 22.2684 11.0859 21.4986L11.0171 9.55266Z" fill="white"/>
                                </svg>
                                Contact us
                            </button>
                        </div>

                        <div className="seen-on">
                            <ul>
                                <li>
                                    <img className="img-fluid" src="assets/img/seenOn/logo-bbc.png" alt="logo-bbc" />
                                </li>
                                <li>
                                    <img className="img-fluid" src="assets/img/seenOn/logo-bi.png" alt="logo-bi" />
                                </li>
                                <li>
                                    <img className="img-fluid" src="assets/img/seenOn/logo-forbes.png" alt="logo-forbes" />
                                </li>
                                <li>
                                    <img className="img-fluid" src="assets/img/seenOn/logo-techcrunch.png" alt="logo-techcrunch" />
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="col col-12 col-lg-3 right">
                        <img src="assets/img/graph.svg" alt="placement" />
                        <img className="img-fluid" style={{transform: 'scale(1.2)'}} src="assets/img/home-img-2.svg" alt="boy-image" />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Home;