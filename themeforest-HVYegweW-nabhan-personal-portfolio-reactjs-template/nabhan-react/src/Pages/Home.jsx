import About1 from "../Components/About/About1";
// import Blog1 from "../Components/Blog/Blog1";
// import Brand1 from "../Components/Brand/Brand1";
import HeroBanner1 from "../Components/HeroBanner/HeroBanner1";
import Marquee from "../Components/Marquee/Marquee";
// import Pricing from "../Components/Pricing/Pricing";
import Project1 from "../Components/Project/Project1";
// import Services1 from "../Components/Services/Services1";
// import Testimonial from "../Components/Testimonial/Testimonial";

const Home = () => {
    return (
        <div>
            <HeroBanner1
                number="+91 7264800601"
                email="contact@tejasnavalkhe.com"
                expnum="3"
                expcontent="YEARS OF <br> EXPERIENCE"
                title1="Hi there!"
                title2="I'm Tejas Satish Navalkhe"
                title3="AI / ML"
                title4="BASED IN LONDON"
                title5="Engineer"
                btnname="Download Resume"
                btnurl="/assets/files/Tejas Navalkhe AI Engineer.pdf"
            ></HeroBanner1>
            <About1></About1>
            <Marquee></Marquee>
            <Project1></Project1>
            
            {/* <Services1></Services1> */}
            {/* <Pricing></Pricing> */}
            {/* <Testimonial></Testimonial> */}
            {/* <Blog1></Blog1> */}
            
        </div>
    );
};

export default Home;