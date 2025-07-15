
const Footer1 = () => {
    // Get the current year
    const currentYear = new Date().getFullYear();

    return (
        <footer className="footer-wrapper footer-layout1">
        <div className="main-area style-two space-minimize">
            <div className="container">
                <div className="row justify-content-center text-center">
                    <div className="col-xl-12">
                        <h2 className="big-title mb-50">LET'S <img src="/assets/images/contact/man-2_1.jpg" alt="" /> TALK</h2>
                    </div>
                    <div className="col-xl-12">
                        <div className="contact-mail">
                            <a href="mailto:tejas@tejasnavalkhe.com" className="bg-black2">
                                <span className="link-effect">
                                    <span className="effect-1">tejas@tejasnavalkhe.com</span>
                                    <span className="effect-1">tejas@tejasnavalkhe.com</span>
                                </span>
                                <img src="/assets/images/icons/arrow-left-top.svg" alt="icon" />
                            </a>
                        </div>
                    </div>
                </div>
                <div className="contact-btn-box mt-60 mb-70 vxs-mb-30">
                    <div className="row gx-60 lg-gx-30">
                       <div className="col-xl-6 col-lg-6 col-md-6">
                          <div className="contact-btn mb-30 text-center ">
                             <a className="btn-black" href="mailto:tejas@tejasnavalkhe.com?subject=Let's%20Connect%20and%20Discuss%20Further">
                                <span className="link-effect">
                                    <span className="effect-1">Write a Message</span>
                                    <span className="effect-1">Write a Message</span>
                                </span>
                             </a>
                          </div>
                       </div>
                       <div className="col-xl-6 col-lg-6 col-md-6">
                          <div className="contact-btn text-center ">
                             <a className="btn-black" href="mailto:tejas@tejasnavalkhe.com?subject=Let's%20Plan%20the%20Project%20Together">
                                <span className="link-effect">
                                    <span className="effect-1">Discuss Project</span>
                                    <span className="effect-1">Discuss Project</span>
                                </span>
                             </a>
                          </div>
                       </div>
                    </div>
                </div>
                <div className="row gx-30">
                    <div className="col-lg-3 col-md-6">
                        <div className="social-item">
                            <h5 className="title"><a href="https://bit.ly/tsngithub" target="_blank">GitHub</a></h5>
                            <a href="https://bit.ly/tsngithub" target="_blank">
                                <span className="link-effect">
                                    <span className="effect-1"><i className="bi bi-github"></i></span>
                                    <span className="effect-1"><i className="bi bi-github"></i></span>
                                </span>
                            </a>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6">
                        <div className="social-item">
                            <h5 className="title"><a href="https://instagram.com/tejasnavalkhe/" target="_blank">Instagram</a></h5>
                            <a href="https://instagram.com/tejasnavalkhe/" target="_blank">
                                <span className="link-effect">
                                    <span className="effect-1"><i className="bi bi-instagram"></i></span>
                                    <span className="effect-1"><i className="bi bi-instagram"></i></span>
                                </span>
                            </a>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6">
                        <div className="social-item">
                            <h5 className="title"><a href="https://x.com/tejasnavalkhe" target="_blank">Twitter</a></h5>
                            <a href="https://x.com/tejasnavalkhe" target="_blank">
                                <span className="link-effect">
                                    <span className="effect-1"><i className="bi bi-twitter-x"></i></span>
                                    <span className="effect-1"><i className="bi bi-twitter-x"></i></span>
                                </span>
                            </a>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6">
                        <div className="social-item">
                            <h5 className="title"><a href="https://www.linkedin.com/in/tejasnavalkhe/" target="_blank">Linkedin</a></h5>
                            <a href="https://www.linkedin.com/in/tejasnavalkhe/" target="_blank">
                                <span className="link-effect">
                                    <span className="effect-1"><i className="bi bi-linkedin"></i></span>
                                    <span className="effect-1"><i className="bi bi-linkedin"></i></span>
                                </span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="copyright-wrap">
            <div className="container">
                <div className="row justify-content-between align-items-center">
                    <div className="col-xl-12 text-center">
                        <p className="copyright-text">© Tejas Satish Navalkhe — {currentYear}. All Rights Reserved. Developed and Maintained by
                            <a href="https://www.tejasaitech.com/" target="_blank"> TEJAS AI TECH</a>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </footer>
    );
};

export default Footer1;