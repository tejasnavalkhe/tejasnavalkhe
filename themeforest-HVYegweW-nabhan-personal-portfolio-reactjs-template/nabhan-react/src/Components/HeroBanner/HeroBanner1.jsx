import { useEffect } from "react";
import loadBackgroudImages from "../Common/loadBackgroudImages";
import { Link } from "react-router-dom";
import parse from 'html-react-parser';

const HeroBanner1 = ({number,email,expnum,expcontent,title1,title2,title3,title4,title5,btnname,btnurl}) => {

    useEffect(() => {
        loadBackgroudImages();
      }, []);

    return (
<section className="hero-wrapper hero-2" id="hero-2" data-background="assets/images/background/hero-2.jpg">
                <div className="hero-left-wrapper d-none d-xxl-block">
                    <div className="contact">
                        <a href={`tel:${number}`}>{number}</a>
                        <a href={`mailto:${email}`}>{email}</a>
                    </div>
                </div>
                <div className="hero-social-wrapper d-none d-xxl-block">
                    <div className="hero-social_arrow mb-30">
                        <img src="/assets/images/icons/arrow-down-bottom.svg" alt="" />
                    </div>
                    <div className="hero-social">
                        <div className="parallax-wrap">
                            <div className="parallax-element">
                                <a className="facebook" href="https://bit.ly/tsngithub" target="_blank">
                                <i className="bi bi-github"></i>
                                </a>
                            </div>
                        </div>
                        <div className="parallax-wrap">
                            <div className="parallax-element">
                                <a className="telephone" href="https://bit.ly/tsntopmate" target="_blank">
                                <i className="bi bi-telephone"></i>
                                </a>
                            </div>
                        </div>
                        <div className="parallax-wrap">
                            <div className="parallax-element">
                                <a className="instagram" href="https://www.linkedin.com/in/tejasnavalkhe/" target="_blank">
                                <i className="bi bi-linkedin"></i>
                                </a>
                            </div>
                        </div>
                        <div className="parallax-wrap">
                            <div className="parallax-element">
                                <a className="dribbble" href="https://instagram.com/tejasnavalkhe/" target="_blank">
                                <i className="bi bi-instagram"></i>
                                </a>
                            </div>
                        </div>
                        <div className="parallax-wrap">
                            <div className="parallax-element">
                                <a className="twitter" href="https://x.com/tejasnavalkhe" target="_blank">
                                <i className="bi bi-twitter-x"></i>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="hero-experience-wrapper d-none d-xxl-block">
                    <div className="inner">
                        <h2 className="year"><span className="count-number">{expnum}</span>+</h2>
                        <span className="text">{parse(expcontent)}</span>
                    </div>
                </div>
                <div className="container">
                    <div className="hero-style2">
                        <div className="row align-items-end">
                            <div className="col-xl-7 col-lg-7 col-md-12">
                                <div className="hero-left">
                                    <div className="hero-content tp_text_anim p-relative z-index-1">
                                        <p className="hero-sub_title">{title1} <img src="/assets/images/hero/hand.png" alt="" />{title2}</p>
                                        <div className="hero-title_wrapper">
                                            <h1 className="hero-title cd-headline title_anim">{title3}</h1>
                                            <div className="hero-title_shape"><img className="br-70" src="/assets/images/hero/title-shape.jpg" alt="" /></div>
                                        </div>
                                        <div className="hero-title_wrapper upper">
                                            <div className="hero-place">
                                                <img src="/assets/images/hero/arrow.svg" alt="" />
                                                <p>{title4}</p>
                                            </div>
                                            <h1 className="hero-title font2 cd-headline title_anim">{title5}</h1>
                                        </div>
                                        
                                        <a href={btnurl} download className="link-btn bg-black2">
                                            <span className="link-effect">
                                                <span className="effect-1">{btnname}</span>
                                                <span className="effect-1">{btnname}</span>
                                            </span>
                                            <img src="/assets/images/icons/arrow-left-top.svg" alt="icon" />
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-5 col-lg-5 col-md-12 mt-20 mt-lg-0">
                                <div className="hero-thumb-wrapper text-center text-lg-end p-relative z-index-1">
                                    <div className="hero-thumb">
                                        <img src="/assets/images/hero/hero-img_2.png" alt="" />
                                    </div>
                                </div>
                            </div>
                        </div>   
                    </div>
                </div>
            </section>
    );
};

export default HeroBanner1;