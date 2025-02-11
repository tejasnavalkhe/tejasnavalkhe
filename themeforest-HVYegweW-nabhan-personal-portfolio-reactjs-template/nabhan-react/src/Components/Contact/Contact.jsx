
const Contact = () => {
    return (
        <div>
  <div className="breadcumb-wrapper pb-100 md-pb-80 vxs-pb-60 bg-theme2">
                <div className="breadcumb-title text-center">
                    <h2 className="big-title mb-0">LET'S TALK <span className="font2">With Me</span></h2>
                </div>
            </div>

            <div className="feature-area pb-60 bg-theme2">
                <div className="container">
                    <div className="row gy-4 align-items-center justify-content-center">
                        <div className="col-lg-4">
                            <div className="feature-box">
                                <div className="feature-box-icon">
                                    <img src="/assets/images/icons/phone.svg" alt="icon" />
                                </div>
                                <div className="feature-box-details">
                                    <h5 className="feature-box-title">Phone</h5>
                                    <div className="feature-box-text">
                                        <a href="tel:+91 7264800601">+91 7264800601</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="feature-box">
                                <div className="feature-box-icon">
                                    <img src="/assets/images/icons/email.svg" alt="icon" />
                                </div>
                                <div className="feature-box-details">
                                    <h5 className="feature-box-title">Email</h5>
                                    <div className="feature-box-text">
                                        <a href="mailto:contact@tejasnavalkhe.com">contact@tejasnavalkhe.com</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="feature-box">
                                <div className="feature-box-icon">
                                    <img src="/assets/images/icons/location.svg" alt="icon" />
                                </div>
                                <div className="feature-box-details">
                                    <h5 className="feature-box-title">Address</h5>
                                    <div className="feature-box-text">London, England, <br/> E1 0BJ</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            
            <div className="comment-area style-two space-bottom bg-theme2">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="comment-respond">
                                <h2 className="comment-title font2">Let's Connect!</h2>
                                <form action="https://formspree.io/f/xgvozrog" method="post" className="comment-form">
                                    <div className="row gx-20">
                                        <div className="col-md-6">
                                            <div className="form-group">
                                                <input type="text" className="form-control" name="name" id="name" placeholder="Name" required />
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="form-group">
                                                <input type="text" className="form-control" name="Phone" id="Phone" placeholder="Phone" required />
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="form-group">
                                                <input type="text" className="form-control" name="Email" id="Email" placeholder="Email" required />
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="form-group">
                                                <input type="text" className="form-control" name="Subject" id="Subject" placeholder="Subject" required />
                                            </div>
                                        </div>
                                        <div className="col-lg-12">
                                            <div className="form-group">
                                                <textarea name="message" placeholder="Message" id="contactForm" className="form-control style2"></textarea>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="form-btn col-12">
                                        <button type="submit" className="link-btn w-100 br-10" data-loading-text="Please wait...">
                                            <span className="link-effect">
                                                <span className="btn-title">Send Message</span>
                                            </span>
                                            <img src="/assets/images/icons/arrow-left-top.svg" alt="icon" />
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="contact-map mt-60">
                            <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1294.2530190110076!2d-0.06200260994709756!3d51.51034434799335!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487603322ea7445f%3A0x7840df9fdaff8d8a!2sLondon%20E1%200BJ%2C%20UK!5e0!3m2!1sen!2sin!4v1739102659153!5m2!1sen!2sin" width="600" height="450" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                            </div>
                        </div>
                    </div>
                </div>
            </div>           
        </div>
    );
};

export default Contact;