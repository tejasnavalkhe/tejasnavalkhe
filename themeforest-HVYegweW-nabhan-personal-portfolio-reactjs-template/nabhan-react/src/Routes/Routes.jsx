import {
    createBrowserRouter,
  } from "react-router-dom";
import Main from "../Layout/Main";
import AboutPage from "../Pages/AboutPage";
import Home from "../Pages/Home";
import Layout2 from "../Layout/Layout2";
import Home2 from "../Pages/Home2";
import ProjectPage from "../Pages/ProjectPage";
import ProjectDetailsPage from "../Pages/ProjectDetailsPage";
import ServicePage from "../Pages/ServicePage";
import ServiceDetailsPage from "../Pages/ServiceDetailsPage";
import ContactPage from "../Pages/ContactPage";
import BlogPage from "../Pages/BlogPage";
import BlogDetailsPage from "../Pages/BlogDetailsPage";
import PricingPage from "../Pages/PricingPage";

export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
          path: "/",
          element: <Home></Home>,
        },        
        {
            path: "/about",
            element: <AboutPage></AboutPage>,
        },   
        {
          path: "/project",
          element: <ProjectPage></ProjectPage>,
        },   
        {
          path: "/project/:id",
          element: <ProjectDetailsPage></ProjectDetailsPage>,
        },         
        {
          path: "/service",
          element: <ServicePage></ServicePage>,
        },        
        {
          path: "/service/service-details",
          element: <ServiceDetailsPage></ServiceDetailsPage>,
        },
        {
          path: "/contact",
          element: <ContactPage></ContactPage>,
        },        
        {
          path: "/blog",
          element: <BlogPage></BlogPage>,
        }, 
        {
          path: "/blog/blog-details",
          element: <BlogDetailsPage></BlogDetailsPage>,
        },
        {
          path: "/pricing",
          element: <PricingPage></PricingPage>,
        },                          
      ],
    },  
    {
      path: 'home2',
      element: <Layout2></Layout2>,
      children: [
        {
          index: true,
          element: <Home2></Home2>,
        },                           
      ],
    },          
  ]);