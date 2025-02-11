import { Link } from "react-router-dom";

const Footer2 = () => {
    // Get the current year
    const currentYear = new Date().getFullYear();

    return (
        <footer className="footer-wrapper footer-layout1">
        <div className="main-area space">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <h1 className="contact-title wow text-anim-left mb-25 mt--10">Got a project in mind?</h1>
                        <h1 className="contact-title title-font2 text-lg-end wow text-anim-right mb-0"><a href="mailto:contact@tejasnavalkhe.com">contact@tejasnavalkhe.com</a></h1>
                    </div>
                </div>
                <div className="row position-relative mt-60 mb-40 md-mb-50">
                    <div className="col-lg-12">
                        <div className="contact-btn_wrapper">
                            <div className="contact-btn btn-bounce-1 text-lg-end pr-120 home-circle-btn">
                                <Link className="circle-btn btn gsap-magnetic" to="/project">
                                    <span className="link-effect">
                                        <span className="effect-1">See All Works</span>
                                        <span className="effect-1">See All Works</span>
                                    </span>
                                    <img src="/assets/images/icons/arrow-left-top.svg" alt="" />
                                </Link>
                            </div>
                            <span className="contact-inner-border"></span>
                        </div>
                    </div>
                </div>
                <div className="row gx-30">
                    <div className="col-lg-3 col-md-6">
                        <div className="social-item">
                            <h5 className="title"><a href="https://bit.ly/tsngithub">Behance</a></h5>
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
                            <a href="https://instagram.com/tejasnavalkhe/" target="_blank">
                            <h5 className="title"><a href="https://instagram.com/tejasnavalkhe/">Instagram</a></h5>
                                <span className="link-effect">
                                <span className="effect-1"><i className="bi bi-instagram"></i></span>
                                <span className="effect-1"><i className="bi bi-instagram"></i></span>
                                </span>
                            </a>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6">
                        <div className="social-item">
                            <a href="https://x.com/tejasnavalkhe" target="_blank">
                            <h5 className="title"><a href="https://x.com/tejasnavalkhe">Twitter</a></h5>
                                <span className="link-effect">
                                <span className="effect-1"><i className="bi bi-twitter-x"></i></span>
                                <span className="effect-1"><i className="bi bi-twitter-x"></i></span>
                                </span>
                            </a>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6">
                        <div className="social-item">
                            <a href="https://www.linkedin.com/in/tejasnavalkhe/" target="_blank">
                            <h5 className="title"><a href="https://www.linkedin.com/in/tejasnavalkhe/">Dribbble</a></h5>
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
                    <div className="col-lg-7 col-md-6 mb-3 mb-md-0 text-center text-md-start">
                        <p className="copyright-text">© Tejas Satish Navalkhe - {currentYear}. All Rights Reserved. Developed and Maintained by
                        <a href="https://www.tejasaitech.com/">TEJAS AI TECH</a>
                        </p>
                    </div>
                    <div className="col-lg-5 col-md-6 text-center text-md-end">
                        <ul className="footer-menu-list">
                            <li>
                                <Link to="/terms">
                                    <span className="link-effect">
                                        <span className="effect-1">Terms &amp; Conditions</span>
                                        <span className="effect-1">Terms &amp; Conditions</span>
                                    </span>
                                </Link>
                            </li>
                            <li>
                                <Link to="/policy">
                                    <span className="link-effect">
                                        <span className="effect-1">Privacy Policy</span>
                                        <span className="effect-1">Privacy Policy</span>
                                    </span>
                                </Link>
                            </li>
                            <li>
                                <a href="#">
                                    <span className="link-effect">
                                        <span className="effect-1">Legal</span>
                                        <span className="effect-1">Legal</span>
                                    </span>
                                </a>
                            </li>
                        </ul>   
                    </div>
                </div>
            </div>
        </div>
    </footer>
    );
};

export default Footer2;