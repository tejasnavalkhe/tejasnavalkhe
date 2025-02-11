import { Link } from "react-router-dom";
import parse from 'html-react-parser';

const Services = () => {

    const serviceContent = [
        {title:'Web <br> Development', icon:'/assets/images/service/web.svg', service1:'Wordpress', service2:'Brand', service3:'Laravel', img:'/assets/images/service/service-1_1.jpg', addclass:'service-title'},
        {title:'Application <br> Design', icon:'/assets/images/service/app.svg', service1:'Wordpress', service2:'Brand', service3:'Laravel', img:'/assets/images/service/service-1_2.jpg', addclass:'service-title mr-25'},
        {title:'UI/UX Mobile <br> Design', icon:'/assets/images/service/ui_ux.svg', service1:'Wordpress', service2:'Brand', service3:'Laravel', img:'/assets/images/service/service-1_3.jpg', addclass:'service-title mr-5'},
        {title:'Brand <br> Identity', icon:'/assets/images/service/brand.svg', service1:'Wordpress', service2:'Brand', service3:'Laravel', img:'/assets/images/service/service-1_4.jpg', addclass:'service-title mr-75'},
        {title:'Digital <br> Marketing', icon:'/assets/images/service/digital.svg', service1:'Wordpress', service2:'Brand', service3:'Laravel', img:'/assets/images/service/service-1_5.jpg', addclass:'service-title mr-40'},
      ]; 

    return (
            <section className="service-area style-three space">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-12">
                            <div className="title-upper_area">
                                <span className="title">(  Discover What We Offer  )</span>
                                <div className="right">
                                    <span className="title">( SERVICES ALL  )</span>
                                    <h3 className="title-info_text mt-50 md-mt-30 sm-mt-10">We help our client suceed by creating identities, digital experiences,
                                        and printmaterials that communicate clearly</h3>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-xl-12">
                            <div className="service-item-wrapper">
                            {serviceContent.map((item, i) => (
                                <div key={i} className="service-item hover-reveal-item">
                                    <div className="service-inner">
                                        <div className="service-left">
                                            <div className="service-icon"><img src="/assets/images/service/web.svg" alt="" /></div>
                                            <h3 className={item.addclass}><Link to="/service/service-details">{parse(item.title)}</Link></h3>
                                            <ul className="service-list">
                                            <li>+ {item.service1}</li>
                                            <li>+ {item.service2}</li>
                                            <li>+ {item.service3}</li>
                                            </ul>
                                        </div>
                                        <div className="service-btn-wrapper">
                                        <Link className="service-btn" to="/service/service-details">
                                            <span><i className="bi bi-arrow-up-right"></i><i className="bi bi-arrow-up-right"></i></span>
                                        </Link>
                                        </div>
                                    </div>
                                    <div className="hover-reveal-bg" data-background="assets/images/service/service-1_1.jpg"></div>
                                </div>
                                ))}


                            </div>
                        </div>
                    </div>
                </div>
            </section>
    );
};

export default Services;