
const HeroBanner2 = () => {


    const heroContent = {
        number:'+91 0369 201 003',
        title1:'Hi there!',
        title2:'I am',
        title:'STEVEN NABHAN',
        title3:'hellowcontacts@gmail.com',
        img:'/assets/images/hero/hero-img.png',
        content:'I’m a Product designer and creative web developer with a passion for solving problems through simple and interactive designs.',
        title5:'UI/UX DESIGNER',
        title6:'Based in London',
      }

    return (
        <section className="hero-wrapper hero-1" id="hero">
            <div className="hero-left-wrapper d-none d-xxl-block">
                <div className="contact-number">
                    <a href="tel:+910369201003"><img className="pr-35" src="/assets/images/icons/dial_pad.svg" alt="" />{heroContent.number}</a>
                </div>
                <div className="hero-scroll smooth">
                    <a href="#about-area-1" id="hero-scroll">
                        <div className="scroll-me">Scroll</div>
                        <div className="hero-social_arrow">
                            <img src="/assets/images/icons/arrow-left-right.svg" alt="" />
                        </div>
                    </a>
                </div>
            </div>
            <div className="hero-social-wrapper d-none d-xxl-block">
                <div className="follow-me">Follow Me</div>
                <div className="hero-social_arrow mb-30">
                    <img src="/assets/images/icons/arrow-down-bottom.svg" alt="" />
                </div>
                <div className="hero-social">
                    <div className="parallax-wrap">
                        <div className="parallax-element">
                            <a className="facebook" href="#">
                            <i className="bi bi-facebook"></i>
                            </a>
                        </div>
                    </div>
                    <div className="parallax-wrap">
                        <div className="parallax-element">
                            <a className="twitter" href="#">
                            <i className="bi bi-twitter"></i>
                            </a>
                        </div>
                    </div>
                    <div className="parallax-wrap">
                        <div className="parallax-element">
                            <a className="instagram" href="#">
                            <i className="bi bi-instagram"></i>
                            </a>
                        </div>
                    </div>
                    <div className="parallax-wrap">
                        <div className="parallax-element">
                            <a className="dribbble" href="#">
                            <i className="bi bi-linkedin"></i>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="hero-style1">
                    <div className="row">
                        <div className="col-lg-12">
                            <p className="hero-sub_title">{heroContent.title1} <img src="/assets/images/hero/hand.png" alt="" />{heroContent.title2}</p>
                            <h1 className="hero-title wow img-custom-anim-left" data-wow-delay="0.1s" data-wow-duration="1.5s">{heroContent.title}</h1>
                            <div className="row align-items-center justify-content-center">
                                <div className="col-lg-4">
                                    <div className="contact_mail">
                                        <a className="color1" href="mailto:hellowcontacts@gmail.com">{heroContent.title3}</a>
                                    </div>
                                </div>
                                <div className="col-lg-4">
                                    <div className="hero-thumb text-center">
                                        <img src={heroContent.img} alt="" />
                                    </div>
                                </div>
                                <div className="col-lg-4">
                                    <p className="hero-text wow img-custom-anim-right" data-wow-delay="0.1s" data-wow-duration="1.5s">
                                    {heroContent.content}
                                    </p>
                                </div>
                            </div>
                            <h1 className="hero-title font2 text-lg-end wow img-custom-anim-right" data-wow-delay="0.1s" data-wow-duration="1.7s">{heroContent.title5}</h1>
                            <p className="place-title text-lg-end wow img-custom-anim-right" data-wow-delay="0.1s" data-wow-duration="1.7s">{heroContent.title6}</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HeroBanner2;