import { Link } from "react-router-dom";

const About1 = () => {

    const AboutInfoText = {
        Content:'Innovative AI/ML Engineer skilled in deep learning, NLP, reinforcement learning, and generative AI. Expertise in model development, MLOps, real-time data pipelines, algorithmic trading, dynamic pricing, and automated ETL. Proficient in big data and cloud platforms, passion for solving complex problems through AI-driven solutions.'
      }

    const AboutContent = [
        {title:'Born In', text:'Maharashtra, India'},
        {title:'Experience', text:'2.5+ Years Experience'},
        {title:'Date of Birth', text:'18 October, 2001'},
        {title:'Language', text:'English, Hindi, Marathi'}
      ];

      const experienceInfo = {
        number:'2.5',
        content:'Years of Experiences AI/ML, Algorithmic Trading Systems, NLP, Deep Learning, Generative AI, Software Engineering'
      }

      const experiencetContent = [
        {name:'Self Employed — Remote', position:'Freelance AI / ML Engineer', year:'Sep, 2024 - Present'},
        {name:'Co Wheels Car Club — England, UK', position:'Data Science Intern', year:'May, 2024 - Sep, 2024'},
        {name:'Finvestox Capital — Remote, India', position:'Freelance Software Engineer - Algorithmic Trading', year:'Sep, 2022 - Apr, 2024'},
        {name:'Vitaecura Consultancy Services — Indore, India', position:'Web Development Intern', year:'Jul, 2022 - Sep, 2022'}
      ];      

    return (
        <section className="about-area style-two space bg-theme2">
        <div className="container">
            <div className="row position-relative">
                <div className="col-lg-12">
                    <h3 className="title-info_text mt--10">{AboutInfoText.Content}</h3>
                </div>
                <div className="col-lg-12">
                    <div className="contact-btn_wrapper mt-60 mb-60">
                        <div className="contact-btn btn-bounce-1 text-lg-end pr-120 home-circle-btn">
                            <Link className="circle-btn btn gsap-magnetic" to="/about">
                                <span className="link-effect">
                                    <span className="effect-1">About Me</span>
                                    <span className="effect-1">About Me</span>
                                </span>
                                <img src="/assets/images/icons/arrow-left-top.svg" alt="" />
                            </Link>
                        </div>
                        <span className="contact-inner-border"></span>
                    </div>
                </div>
            </div>
            <div className="row space-bottom gy-30">
            {AboutContent.map((item, i) => (
                <div key={i} className="col-lg-3 col-md-6">
                    <div className="about-info-box">
                        <div className="inner">
                            <span className="title">{item.title}</span>
                            <p className="text">{item.text}</p>
                        </div>
                    </div>
                </div>
                ))}
            </div>
            <div className="row">
                <div className="col-lg-5">
                    <div className="about-experience-wrapper md-mt--25">
                        <div className="inner">
                            <h2 className="year"><span className="count-number">{experienceInfo.number}</span>+</h2>
                            <p className="text">{experienceInfo.content}</p>
                        </div>
                    </div>
                </div>
                <div className="col-lg-7">
                    <div className="experience-wrapper">
                        <h4 className="title">Experience</h4>
                        <ul className="experience-wrap-area style-2">
                        {experiencetContent.map((item, i) => (
                            <li key={i} className="single-experience-list">
                                <div className="left">
                                    <span className="experience-place">{item.name}</span>
                                    <span className="experience-tag">{item.position}</span>
                                </div>
                                <span className="experience-year">{item.year}</span>
                            </li>
                            ))}

                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </section>
    );
};

export default About1;