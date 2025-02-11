import Blog3 from "../Components/Blog/Blog3";
import BreadCumb from "../Components/Common/BreadCumb";

const BlogPage = () => {
    return (
        <div>
            <BreadCumb
                addclass="breadcumb-wrapper pb-0 bg-theme2"
                Title1="LET'S SEE"
                title2="ARTICLES"
            ></BreadCumb>
            <Blog3></Blog3>            
        </div>
    );
};

export default BlogPage;