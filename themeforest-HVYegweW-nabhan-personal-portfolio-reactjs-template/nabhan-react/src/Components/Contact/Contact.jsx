
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
                                        <a href="mailto:tejas@tejasnavalkhe.com">tejas@tejasnavalkhe.com</a>
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
                                    <div className="feature-box-text">Hyderabad, Telangana, <br /> 500081</div>
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
                                <form action="https://formspree.io/f/xvgrenzr" method="post" className="comment-form">
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
                                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d30449.877648095793!2d78.37104609381439!3d17.448476931884358!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb9158f201b205%3A0x11bbe7be7792411b!2sMadhapur%2C%20Hyderabad%2C%20Telangana!5e0!3m2!1sen!2sin!4v1787027511919!5m2!1sen!2sin%22%20width=%22600%22%20height=%22450%22%20style=%22border:0;%22%20allowfullscreen=%22%22%20loading=%22lazy%22%20referrerpolicy=%22strict-origin-when-cross-origin" width="600" height="450" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;