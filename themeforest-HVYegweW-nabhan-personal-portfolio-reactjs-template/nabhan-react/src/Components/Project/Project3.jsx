import { Link } from "react-router-dom";

const Project3 = () => {

      const projectContent = [
          {
            id: 1,
            addclass:'col-lg-6',
            img:'/assets/images/portfolio/portfolio_1_0.png',
            title:'Finvestox Capital',
            category:'Algorithmic Trading'
          },
          {
            id: 2,
            addclass:'col-lg-6',
            img:'/assets/images/portfolio/portfolio_2_0.png',
            title:'Co Wheels Car Club - Dynamic Pricing',
            category:'Artificial Intelligence'
          },
        //   {
        //     id: 3,
        //     addclass:'col-lg-6',
        //     img:'/assets/images/portfolio/portfolio_3_0.png',
        //     title:'MATHABILITY LEVEL 1: A MATHEMATICS FOUNDATION COURSE',
        //     category:'Book'
        // },
        {
            id: 4,
            addclass:'col-lg-6',
            img:'/assets/images/portfolio/portfolio_4_0.png',
            title:'Design and Development of Smart Virtual Assistant Using Latest Tools and Technologies',
            category:'Research Paper'
        }
    ];   

    return (
        <div className="portfolio-area style-three bg-theme2">
        <div className="container">
            <div className="row">
                <div className="col-xl-12">
                    <div className="title-upper_area">
                        <span className="title">( Projects, Books & Articles )</span>
                        <div className="right">
                            <span className="title">(  2022 - Present  )</span>
                            <h3 className="title-info_text mt-50 md-mt-30 xs-mt-15">Have a look at some of the projects I've worked on.</h3>
                        </div>
                    </div>
                </div>
     
                <div className="tab_content">
                    <div className="tabs-item">
                        <div className="row gx-110 justify-content-between">
                        {projectContent.map((item, i) => (
                            <div key={i} className={item.addclass}>
                                <div className="portfolio-wraper-3">
                                    <div className="portfolio-thumb style-2 wow img-custom-anim-left">
                                        <Link to={`/project/${item.id}`}>
                                            <img alt="portfolio" src={item.img} />
                                        </Link>
                                        <div className="portfolio-thumb-view">
                                            <Link to={`/project/${item.id}`} className="lightbox-image" data-fancybox="gallery">
                                                <img src="/assets/images/icons/eye.svg" alt="View" />
                                            </Link>
                                        </div>
                                    </div>
                                    <div className="portfolio-details pr-30 md-pr-0">
                                        <h4 className="title"><Link to={`/project/${item.id}`}>{item.title}</Link></h4>
                                        <Link to={`/project/${item.id}`} className="portfolio-btn">
                                            <span className="meta">{item.category}</span>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                            ))}

                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
};

export default Project3;