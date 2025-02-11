
const Skill1 = () => {

    const skilltContent = [
        {img:'/assets/images/skill/ai.jpg', skillnumber:'89', skillname:'Artificial Intelligence'},
        {img:'/assets/images/skill/ml.jpg', skillnumber:'80', skillname:'Machine Learning'},
        {img:'/assets/images/skill/dl.jpg', skillnumber:'95', skillname:'Deep Learning'},
        {img:'/assets/images/skill/at.jpg', skillnumber:'85', skillname:'Algorithmic Trading'},
        {img:'/assets/images/skill/rs.jpg', skillnumber:'95', skillname:'Recommendation Systems'},
        {img:'/assets/images/skill/ss.jpg', skillnumber:'85', skillname:'Software Systems'},
      ];


    return (
        <section className="skill-area space">
            <div className="container">
                <div className="row">
                    <div className="col-xl-12">
                        <div className="title-area">
                            <h2 className="sec-title text-center">I craft wonderful <span className="font2">digital experiences</span> <br/> for brands</h2>
                        </div>
                    </div>
                </div>
                <div className="row gx-40 gy-30">

                {skilltContent.map((item, i) => (
                    <div key={i} className="col-xl-2 col-lg-3 col-md-3 col-6">
                        <div className="skill-item text-center">
                            <div className="skill-thumb d-flex align-items-center justify-content-center flex-column">
                                <div className="skill-icon mb-35">
                                <span>
                                    <img src={item.img} alt="" />
                                </span>
                                </div>
                                {/* <h3 className="skill-count"><span className="count-number">{item.skillnumber}</span>%</h3> */}
                            </div>
                            <div className="skill-content">
                                <p className="skill-title">{item.skillname}</p>
                            </div>
                        </div>
                    </div>
                     ))}

                    </div>
            </div>
        </section>

    );
};

export default Skill1;