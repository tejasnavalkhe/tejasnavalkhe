import { Link } from 'react-router-dom';

const Project1 = () => {

    const projectContent = [
        {img:'/assets/images/portfolio/portfolio_1_0.png', subtitle:'Algorithmic Trading', title:'Finvestox Capital', id: '1'},
        {img:'/assets/images/portfolio/portfolio_2_0.png', subtitle:'Artificial Intelligence', title:'Co Wheels Car Club - Dynamic Pricing', id: '2'},
        {img:'/assets/images/portfolio/portfolio_3_0.png', subtitle:'Book', title:'MATHABILITY LEVEL 1: A MATHEMATICS FOUNDATION COURSE', id: '3'},
        {img:'/assets/images/portfolio/portfolio_4_0.png', subtitle:'Research Paper', title:'Design and Development of Smart Virtual Assistant Using Latest Tools and Technologies', id: '4'}
      ];   

    return (
        <div className="portfolio-area style-two space">
                <div className="big-title-wrap text-center mt--20">
                    <h2 className="big-title mb-0" data-count="[ 4 ]">WORKS</h2>
                </div>
                <div className="container">
                    <div className="row gx-120 lg-gx-60 md-gx-40 gy-120 lg-gy-60 md-gy-40  justify-content-between">
                    {projectContent.map((item, i) => (
                        <div key={i} className="col-lg-6">
                            <div className="portfolio-wraper">
                                <div className="portfolio-thumb wow img-custom-anim-left" data-wow-duration="1.5s" data-wow-delay="0.2s">
                                    <Link to={`/project/${item.id}`}>
                                        <img src={item.img} alt="portfolio" />
                                    </Link>
                                </div>
                                <div className="portfolio-details">
                                    <div className="left">
                                        <div className="portfolio-meta">{item.subtitle}</div>
                                        <h3 className="portfolio-title"><Link to={`/project/${item.id}`}>{item.title}</Link></h3>
                                    </div>
                                    <Link to={`/project/${item.id}`} className="portfolio-btn">
                                        <img src="/assets/images/icons/arrow-left-top2.svg" alt="icon" />
                                    </Link>
                                </div>
                            </div>
                        </div>
                        ))}

                    </div>
                    <div className="row justify-content-center">
                        <div className="col-auto">
                            <div className="btn-wrap btn-bounce-1 mt-80 lg-mt-60 md-mt-40 home-circle-btn">
                                <Link className="circle-btn btn" to="/project">
                                    <span className="link-effect">
                                        <span className="effect-1">Explore More</span>
                                        <span className="effect-1">Explore More</span>
                                    </span>
                                    <img src="/assets/images/icons/arrow-left-top.svg" alt="" />
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    );
};

export default Project1;