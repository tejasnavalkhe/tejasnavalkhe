import { Link } from "react-router-dom";

const Experience2 = () => {

    const experiencetContent = [
        {name:'TEJLearning — Jalgaon, India', position:'Artificial Intelligence Engineer', year:'Sep, 2024 - Present'},
        {name:'Co Wheels Car Club — England, UK', position:'Data Science Intern', year:'May, 2024 - Sep, 2024'},
        {name:'Finvestox Capital — Remote, India', position:'Software Engineer - Algorithmic Trading (Freelancing)', year:'Sep, 2022 - Apr, 2024'}
      ];  

    return (
        <section className="experience-area space overflow-hidden">
            <div className="container">
                <div className="row">
                    <div className="col-xl-12">
                        <div className="title-area">
                            <h2 className="sec-title mb-0" data-title="(2022 - Present)">Work <span className="font2">Experience</span></h2>
                            {/* <div className="btn-wrap btn-bounce-1">
                                <Link to="/project" className="link-btn">
                                    <span className="link-effect">
                                        <span className="effect-1">Know More</span>
                                        <span className="effect-1">Know More</span>
                                    </span>
                                    <img src="/assets/images/icons/arrow-left-top.svg" alt="icon" />
                                </Link>
                            </div> */}
                        </div>
                    </div>
                </div>
                <div className="row justify-content-center">
                    <div className="col-lg-12">
                        <ul className="experience-wrap-area">
                        {experiencetContent.map((item, i) => (
                            <li key={i} className="single-experience-list">
                                <span className="experience-place">{item.name}</span>
                                <span className="experience-tag">{item.position}</span>
                                <span className="experience-year">{item.year}</span>
                            </li>
                        ))}

                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Experience2;