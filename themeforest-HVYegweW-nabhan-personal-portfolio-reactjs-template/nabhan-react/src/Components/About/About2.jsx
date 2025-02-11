import { Link } from "react-router-dom";

const About2 = () => {

    const aboutContent = {
        title1:"I'm an",
        title2:'AI / ML Engineer',
        title3:'& Software Engineer based in London.',
        content:'I excel at designing and implementing <span className="font2">AI-driven solutions</span> in the development environment, leveraging tools like <span className="font2">Python, PyTorch, and TensorFlow</span>. I specialise in creating <span className="font2">scalable, efficient, and innovative systems</span> that solve complex problems and deliver measurable business impact.',
        btnname:'Explore More',
        btnurl:'/project',
        title4:'A PHOTO OF ME',
        img:'/assets/images/about/about_1-1.jpg',        
      }

    return (
        <section className="about-area space bg-theme2" id="about-area-1">
        <div className="container">
            <div className="row align-items-center">
                <div className="col-lg-7">
                    <div className="about-content-wrap ">
                        <div className="title-area mb-0">
                            <h2 className="sec-title">{aboutContent.title1} <span className="font2">{aboutContent.title2}</span> {aboutContent.title3}</h2>
                            <div className="about_content">
                                <p className="about-text wow text-anim-left mt-50 vxs-mt-30">{aboutContent.content}</p>
                                <div className="btn-wrap btn-bounce-1 home-circle-btn">
                                    <Link className="circle-btn btn gsap-magnetic" to={aboutContent.btnurl}>
                                        <span className="link-effect">
                                            <span className="effect-1">{aboutContent.btnname}</span>
                                            <span className="effect-1">{aboutContent.btnname}</span>
                                        </span>
                                        <img src="/assets/images/icons/arrow-left-top.svg" alt="" />
                                    </Link>
                                </div>
                            </div>
                            <div className="img-btn mt-50">
                                <a href="#">{aboutContent.title4} <img src="/assets/images/icons/btn-right-arrow.svg" alt="" /></a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-5">
                    <div className="about-img-1-1 img-custom-anim-right wow" data-wow-delay="0.1s" data-wow-duration="1.5s">
                        <img alt="img" src={aboutContent.img} />
                    </div>
                </div>
            </div>
        </div>
    </section>
    );
};

export default About2;