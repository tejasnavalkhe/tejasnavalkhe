// import Brand2 from "../Components/Brand/Brand2";
import BreadCumb from "../Components/Common/BreadCumb";
import Pricing2 from "../Components/Pricing/Pricing2";
import Services from "../Components/Services/Services";
// import Testimonail2 from "../Components/Testimonial/Testimonail2";

const ServicePage = () => {
    return (
        <div>
            <BreadCumb
                addclass="breadcumb-wrapper space-bottom bg-theme2"
                Title1="LET'S SEE"
                title2="SERVICES"
            ></BreadCumb>            
            <Services></Services>
            <Pricing2
                addclass="pricing-area space bg-theme2"
            ></Pricing2>
            {/* <Testimonail2
                addclass="testimonial-area space-bottom bg-theme2"
            ></Testimonail2> */}
            
        </div>
    );
};

export default ServicePage;