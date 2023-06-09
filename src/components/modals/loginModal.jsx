// import { HashLink } from "react-router-hash-link";
// import { connect } from "react-redux";

import { useState } from "react";

const LoginModal = ({ handleClose }) => {

    const [tabActive, setTabActive] = useState('login');
    const [otp, setOTP] = useState({isOpen: false, recievedValue: 'null', enteredValue: '', sent: false, verified: false, read_only: false});
    const [loginData, setLoginData] = useState({ phone: '', password: ''});

    const handleLoginForm = (e) => {
        const { name, value } = e.target;
        setLoginData({ ...loginData, [name]: value });
    }

    const handleLoginSubmit = (e) => {
        e.preventDefault();
        debugger;
        console.log(loginData.phone.length);
        if (loginData.phone.length < 10 || loginData.password.length < 4) {
            alert('Enter valid phone number and a password of at least 4 characters.');
            return;
        }
        alert('form submitted successfully');
        setLoginData({phone: '', password: ''});
    }

    console.log(loginData);
    return (
        <section className="login h-100">
            <div className="container">
                <div className="login-modal__page">
                    <i className='bx bx-chevrons-left modal-close-btn' onClick={() => handleClose('LOGIN_MODAL', false)}></i>
                    <div className="login-modal__page__left"></div>
                    <div className="login-modal__page__right">
                        <h1 className="heading-secondary">Hello There!</h1>
                        <p>We're glad having you on VIT Educare</p>
                        <div className="form-wrapper">
                            <div className="tab-content">
                                <div className={`tab-pane fade ${tabActive === 'login' && 'show active'}`} role="tabpanel" aria-labelledby="tabFade-1">
                                    <form onSubmit={handleLoginSubmit}>
                                        <div className="input__group">
                                            <input onChange={handleLoginForm} value={loginData.phone} type="text" placeholder="Phone number" name='phone' id='phone' required/>
                                        </div>
                                        <div className="input__group">
                                            <input onChange={handleLoginForm} value={loginData.password} type="password" placeholder="Password" name='password' id="password" required/>
                                        </div>
                                        <p>Forgot your password ?</p>
                                        <button type="submit" className="btn-1">Login</button>
                                    </form>
                                    <div className="login-bottom">
                                        <p>Not a member ?</p>
                                        <button className="btn-1" onClick={() => setTabActive('register')}>Register Now</button>
                                    </div>
                                </div>
                                <div className={`tab-pane fade ${tabActive === 'register' && 'show active'}`} role="tabpanel" aria-labelledby="tabFade-2">
                                    <form>
                                        <div className="input__group">
                                            <input type="text" placeholder="Phone number" name="phone" required/>
                                        </div>
                                        <div className="input__group">
                                            <input type="password" placeholder="Password" name="password" required/>
                                        </div>
                                        {otp.isOpen && <div className="input__group">
                                            <input type="text" placeholder="Enter OTP" required/>
                                        </div>}
                                        {!otp.isOpen && <p>You'll receive an OTP</p>}
                                        <button className="btn-1" onClick={() => setOTP({...otp, isOpen: true})}>Submit</button>
                                    </form>
                                    <div className="login-bottom">
                                        <p>Already a member ?</p>
                                        <button className="btn-1" onClick={() => setTabActive('login')}>Login</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default LoginModal;

// const mapStateToLoginModal = (state) => {
//     return {};
// }

// export default connect(mapStateToLoginModal, {})(LoginModal);