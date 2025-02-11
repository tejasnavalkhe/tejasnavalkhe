import About3 from "../Components/About/About3";
import Award1 from "../Components/Award/Award1";
// import Brand2 from "../Components/Brand/Brand2";
import Counter1 from "../Components/Counter/Counter1";
import Experience2 from "../Components/Experience/Experience2";
// import Faq1 from "../Components/Faq/Faq1";
import Skill2 from "../Components/Skill/Skill2";
// import Testimonail2 from "../Components/Testimonial/Testimonail2";

const AboutPage = () => {
    return (
        <div>
            <About3></About3>
            <Counter1></Counter1>
            <Skill2></Skill2>
            <Experience2></Experience2>
            {/* <Faq1></Faq1> */}
            <Award1></Award1>
            {/* <Testimonail2
                addclass="testimonial-area space bg-theme2"
            ></Testimonail2> */}
        </div>
    );
};

export default AboutPage;