import parse from 'html-react-parser';

const About3 = () => {

    const aboutContent = {
        title:"ABOUT ME",
        content:'I specialise in building <span className="font2">AI-driven solutions</span> that not only solve complex problems but also deliver <span className="font2">scalable, efficient, and innovative</span> results for businesses.',
        img:'/assets/images/about/about-3_1.jpg',        
      }

    return (
        <section className="about-hero space-bottom bg-theme2">
        <div className="container">
            <div className="row">
                <div className="col-xl-12 text-center">
                    <h2 className="big-title mb-50 sm-mb-30 wow img-custom-anim-left">{aboutContent.title}</h2>
                    <p className="text mb-120 lg-mb-60 sm-mb-30">{parse(aboutContent.content)}</p>
                    <figure className="thumb mb-0"><img src={aboutContent.img} alt="" /></figure>
                </div>
            </div>
        </div>
    </section>
    );
};

export default About3;