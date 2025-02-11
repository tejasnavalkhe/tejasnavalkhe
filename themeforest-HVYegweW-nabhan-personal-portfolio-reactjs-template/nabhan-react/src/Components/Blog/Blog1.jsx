import { Link } from "react-router-dom";

const Blog1 = () => {
    return (
        <section className="blog-area style-two space bg-theme2">
        <div className="container">
            <div className="row">
                <div className="col-xl-12">
                    <div className="title-upper_area">
                        <span className="title">( News & Blog )</span>
                        <h3 className="title-info_text">Read our blog and try to see everythingfrom every perspective. Ourpassion liesin making everything accessible andaesthetic for everyone.</h3>
                    </div>
                </div>
            </div>
            <div className="row gx-60 justify-content-center">
                <div className="col-lg-6">
                    <div className="blog-card">
                        <div className="blog-thumb">
                            <Link to="/blog/blog-details">
                                <img src="/assets/images/blog/blog-2_1.jpg" alt="blog image" />
                            </Link>
                        </div>
                        <div className="blog-content">
                            <div className="post-meta-item blog-meta">
                                <a href="#">May 05, 2024</a>
                                <a href="#">Design Trends</a>
                                <a href="#">0 Comments</a>
                            </div>
                            <h4 className="blog-title">
                                <Link to="/blog/blog-details">The Best Kept Secrets of Medspa Web Design</Link>
                            </h4>
                            <Link to="/blog/blog-details" className="link-btn2">
                                <span>Read More</span>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="col-lg-6">
                    <div className="blog-card">
                        <div className="blog-thumb">
                            <Link to="/blog/blog-details">
                                <img src="/assets/images/blog/blog-2_2.jpg" alt="blog image" />
                            </Link>
                        </div>
                        <div className="blog-content">
                            <div className="post-meta-item blog-meta">
                                <a href="#">May 05, 2024</a>
                                <a href="#">Design Trends</a>
                                <a href="#">0 Comments</a>
                            </div>
                            <h4 className="blog-title">
                                <Link to="/blog/blog-details">The Best Kept Secrets of Medspa Web Design</Link>
                            </h4>
                            <Link to="/blog/blog-details" className="link-btn2">
                                <span>Read More</span>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row justify-content-center">
                <div className="col-auto">
                    <div className="btn-wrap btn-bounce-1 mt-30">
                        <Link to="/blog" className="link-btn">
                            <span className="link-effect">
                                <span className="effect-1">View All Blog</span>
                                <span className="effect-1">View All Blog</span>
                            </span>
                            <img src="/assets/images/icons/arrow-left-top.svg" alt="icon" />
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    </section>
    );
};

export default Blog1;