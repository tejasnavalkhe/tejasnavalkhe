
const Skill2 = () => {

    const resume_link = "/assets/files/Tejas Navalkhe.pdf"

    const skilltContent = [
        {img:'/assets/images/skill/python.png', skillnumber:'89', skillname:'Python'},
        {img:'/assets/images/skill/tensorflow.svg', skillnumber:'80', skillname:'Tensorflow'},
        {img:'/assets/images/skill/PyTorch.png', skillnumber:'95', skillname:'PyTorch'},
        {img:'/assets/images/skill/Keras.png', skillnumber:'85', skillname:'Keras'},
        {img:'/assets/images/skill/Scikit-learn.png', skillnumber:'95', skillname:'Scikit-learn'},
        {img:'/assets/images/skill/nlp.png', skillnumber:'85', skillname:'Natural Language Processing'},
      ];

    return (
        <section className="skill-area space bg-theme2">
            <div className="container">
                <div className="row">
                    <div className="col-xl-12">
                        <div className="title-area">
                            <h2 className="sec-title text-center">I build scalable <span className="font2">AI and software systems</span> <br/> that transform data into actionable insights</h2>
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
                <div className="text-center mt-4">
                    <a href={resume_link} download className="btn btn-primary mt-2" title="Explore all my skills here">Download Resume</a>
                </div>
            </div>
        </section>

    );
};

export default Skill2;