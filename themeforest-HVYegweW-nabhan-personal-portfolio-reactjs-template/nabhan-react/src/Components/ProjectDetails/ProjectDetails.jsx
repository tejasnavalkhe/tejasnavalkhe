import { Link } from "react-router-dom";
import { useParams, useNavigate } from 'react-router-dom';

const ProjectDetails = () => {
    const { id } = useParams(); // Get the project ID from the URL
    const navigate = useNavigate(); // Hook for programmatic navigation

    // Mock project data (replace this with your actual data or API call)
    const projects = [
        {
        id: 1,
        title: 'Finvestox Capital',
        subtitle: 'Algorithmic Trading',
        client_country: 'Chennai, India',
        published: '24 October, 2022',
        technology: 'Flask, Python, Database, Machine Learning',
        categories: 'Algorithmic Trading - AI',
        href: 'https://finvestox.com/',
        image: '/assets/images/portfolio/portfolio_1_0.png',
        overview: 'The algorithmic website I"ve developed is a sophisticated platform designed for traders and investors in the Indian stock market, with a focus on futures and options trading. It features an admin panel and a user dashboard, catering to different user roles and providing personalized access to tools and data. The platform displays detailed charts for all futures symbols in the Indian stock market, complete with pre-defined technical indicators for analysis. A built-in scanner identifies Buy/Sell signals for futures symbols based on a pre-defined and tested trading strategy, while AI-driven trading levels offer insights into stock movements. Additionally, the platform provides comprehensive technical analysis for futures symbols, aiding users in making informed decisions. A standout feature is the algo trading functionality, which automates the buying of index options based on a strategy defined and tested by the product owner. This strategy leverages artificial intelligence to analyze vast historical datasets, enhancing decision-making. Once a trade is executed automatically, the Algo Dashboard displays option charts, available funds, margin used, and Mark-to-Market (M2M) details from the user’s broker account. Users also have the option to update their broker login details for seamless integration. Overall, the platform combines real-time data visualization, AI-powered insights, and automated trading to create a comprehensive solution for futures and options trading in the Indian market.',
        challenges: 'Developing a sophisticated trading platform for the Indian stock market comes with its fair share of challenges. Ensuring real-time data accuracy and low latency is critical, as delays can significantly impact trading decisions. High CPU usage due to frequent data polling and rate limits imposed by broker APIs can hinder system performance and scalability. Additionally, maintaining the accuracy and reliability of AI models in volatile market conditions requires continuous retraining and optimization. Regulatory compliance, particularly with SEBI guidelines, adds another layer of complexity, while building user trust in AI-driven insights and algo trading features demands transparency and consistent performance. Addressing these challenges is essential to create a seamless, efficient, and user-friendly platform that meets the needs of traders and investors.',
        challenges_list: [
            'Broker APIs or data providers may impose rate limits, restricting the number of requests per IP.',
            'Frequent polling for real-time data and order status can lead to high CPU usage and inefficiency.',
            'Ensuring real-time, accurate data for futures and options trading is critical but challenging.',
            'Frequent database queries or API calls to fetch real-time market data, historical data, or user-specific analytics can lead to high latency, slowing down the platform and degrading user experience.'
        ],
        overview_image: '/assets/images/portfolio/portfolio_1_1.png',
        results: 'The final result of implementing the proposed solutions is a robust, scalable, and user-friendly platform tailored for futures and options trading in the Indian stock market. By addressing key challenges such as high latency, rate limiting, and high CPU usage through Redis caching, multi-server architecture, and WebSocket integration, the platform ensures seamless real-time data access and efficient order management. The AI-driven trading levels and algo trading features, powered by regularly retrained models, provide users with accurate and adaptive insights, enhancing decision-making and trade execution. Compliance with regulatory standards and transparent communication of strategies build user trust, while scalable cloud infrastructure and optimized resource usage ensure the platform can handle growing user demand without compromising performance. Overall, the platform emerges as a comprehensive, reliable, and cutting-edge solution, empowering traders with advanced tools, real-time analytics, and automated trading capabilities to navigate the dynamic stock market effectively.',
        results_list: [
            'Use a multi-server architecture with horizontal scaling to distribute requests across multiple IPs and servers, avoiding rate limits.',
            'Implement WebSockets for real-time data streaming and order updates, reducing the need for constant polling and lowering CPU load.',
            'Partner with reliable data providers, optimize data pipelines, and use caching mechanisms to minimize latency.',
            'Implement Redis caching to store frequently accessed data (e.g., historical prices, indicator calculations, or user preferences) in memory. This reduces the need for repeated database queries or API calls, significantly improving response times and system performance.'
        ],
        result_image: '/assets/images/portfolio/portfolio_1_2.png',
        },

        {
        id: 2,
        title: 'Co Wheels Car Club - Dynamic Pricing',
        subtitle: 'Artificial Intelligence',
        client_country: 'England, United Kingdom',
        published: '15 August, 2024',
        technology: 'Dynamic Pricing, Deep Learning, Model Deployment',
        categories: 'Artificial Intelligence',
        href: 'https://bit.ly/3CLSogX',
        image: '/assets/images/portfolio/portfolio_2_0.png',
        overview: 'This project focuses on optimising the profitability of Co Wheels, a UK-based car-sharing service, through the development and implementation of a dynamic pricing strategy. The project leverages historical booking data from January 2019 to April 2024 and employs machine learning models, including Artificial Neural Networks (ANN), XGBoost Regressors, and Decision Tree Regressors, to predict hourly and daily rates for various vehicle types. Key demand factors such as peak hours, seasonality, and location popularity are integrated into the models to enhance pricing accuracy. A web-based simulation tool is developed to visualise the impact of adjusted pricing strategies on profitability. The results demonstrate a significant improvement in revenue generation, with dynamic pricing outperforming static pricing by 19.32% in test scenarios. The study highlights the potential of machine learning in optimising pricing strategies while promoting sustainable transportation and reducing carbon emissions.',
        challenges: 'I solved several challenges faced by Co Wheels in a competitive and seasonally variable car-sharing market. One of the primary challenges is the uniform pricing model currently in use, which fails to account for regional and temporal demand variations. This leads to suboptimal revenue generation, especially during peak hours and high-demand seasons. Additionally, the price sensitivity of B2C journeys, which are often discretionary, poses a challenge in balancing profitability with customer satisfaction. The study also highlights the difficulty of integrating real-time data sources, such as economic indicators, competitor pricing, and weather conditions, into the pricing model. Furthermore, the potential for customer dissatisfaction due to frequent price changes and regulatory constraints in various regions adds complexity to the implementation of dynamic pricing strategies.',
        challenges_list: [
            'Uniform pricing model that does not account for regional and temporal demand variations.',
            'Price sensitivity of B2C journeys, which are often discretionary.',
            'Difficulty in integrating real-time data sources like economic indicators, competitor pricing, and weather conditions.',
            'Potential customer dissatisfaction due to frequent price changes.',
            'Regulatory constraints in various regions.'
        ],
        overview_image: '/assets/images/portfolio/portfolio_2_1.png',
        results: "The results of the project demonstrate the effectiveness of the dynamic pricing model in enhancing Co Wheels' profitability. The machine learning models achieved low Mean Absolute Error (MAE) and Root Mean Squared Error (RMSE) across different vehicle types, indicating robust predictive capabilities. The revenue analysis revealed a significant improvement in financial performance, with adjusted pricing strategies outperforming static pricing by 19.32% in test scenarios. The web-based simulation tool allowed for real-time dynamic pricing adjustments, providing a comprehensive view of revenue enhancements. The computational efficiency evaluation confirmed that the models could be integrated into real-time pricing systems without significant delays, ensuring operational feasibility.",
        results_list: [
            'Implemented a dynamic pricing strategy that adjusts prices based on regional and temporal demand variations, improving revenue generation. Outperformed static pricing by 19.32% in revenue generation, showcasing its effectiveness in optimising profitability.',
            'Machine learning models achieved low MAE and RMSE, indicating high predictive accuracy.',
            'The web-based simulation tool enabled real-time dynamic pricing adjustments and visualisation of revenue impacts.',
            'The computational efficiency of the models ensured feasibility for real-time implementation.',
            'Integrated demand factors such as peak hours, seasonality, and location popularity into the pricing models to balance profitability and customer satisfaction.',
            'Developed a framework to incorporate real-time data sources like economic indicators, competitor pricing, and weather conditions to enhance predictive accuracy.',
            'Capped price increases at 10% above the average rates to manage customer perceptions and avoid dissatisfaction.',
            'Ensured compliance with local regulations by developing a transparent and user-friendly pricing tool that communicates the benefits of dynamic pricing to customers.'
        ],
        result_image: '/assets/images/portfolio/portfolio_2_2.png',
        },

        {
        id: 3,
        title: 'MATHABILITY LEVEL 1: A MATHEMATICS FOUNDATION COURSE',
        subtitle: 'Book',
        client_country: 'Maharashtra, India',
        published: '10 February, 2024',
        technology: 'Typesetting, Diagram Creation, Markdown',
        categories: 'Kids Mathematics',
        href: 'https://amzn.to/4as0Cpq',
        image: '/assets/images/portfolio/portfolio_3_0.png',
        overview: "This book is designed to strengthen the mathematical foundation of students by covering all essential mathematical concepts required for aspirants from classes 6 to 10. The content is structured into six levels (this book is the first level), each corresponding to different stages of learning, with topics broken down into smaller sub-topics for better comprehension. The book ensures that unnecessary material is excluded while including all necessary concepts, making it a comprehensive resource for students. It also provides a large number of practice examples in exercises to reinforce learning. The `Mathability` course, which the book is based on, is divided into six levels (this is the first level), catering to the syllabus of various educational boards and aiming to improve students' mathematical skills systematically.",
        challenges: "Writing a book for the first time, especially one aimed at improving students' mathematical foundations, presents several challenges. The author must ensure that the content is comprehensive yet concise, covering all necessary topics without overwhelming the reader. Structuring the material into six levels and breaking down topics into sub-topics requires careful planning to maintain clarity and logical progression. Additionally, the author must align the content with the syllabi of multiple educational boards, which can vary significantly. Balancing theoretical explanations with practical examples and exercises is another challenge, as the book must cater to diverse learning needs. Finally, ensuring that the book is engaging and accessible to students of varying skill levels adds another layer of complexity.",
        challenges_list: [
            'Ensuring comprehensive coverage of all necessary mathematical concepts without including unnecessary material.',
            'Structuring the content into six levels and breaking down topics into sub-topics for better understanding.',
            'Aligning the book with the syllabi of different educational boards, which may have varying requirements.',
            'Balancing theoretical explanations with practical examples and exercises to reinforce learning.',
            'Making the book engaging and accessible to students with varying levels of mathematical proficiency.'
        ],
        overview_image: '/assets/images/portfolio/portfolio_3_1.png',
        results: "The book successfully addresses the challenges faced by first-time authors and achieves its goal of improving students' mathematical foundations. By dividing the syllabus into six levels and breaking down topics into smaller sub-topics, the book ensures a clear and systematic learning progression. The inclusion of numerous practice examples in exercises helps students reinforce their understanding and apply concepts effectively. The book's alignment with the syllabi of various educational boards makes it a versatile resource for students across different regions. Overall, the book enhances students' mathematical abilities, providing them with a strong foundation for further studies.",
        results_list: [
            'Comprehensive Coverage: The book covers all essential mathematical concepts from classes 6 to 10, ensuring no necessary material is left out while avoiding unnecessary content.',
            'Structured Learning: The content is divided into six levels, with topics broken down into smaller sub-topics, making it easier for students to understand and follow.',
            'Alignment with Multiple Syllabi: The book aligns with the syllabi of various educational boards, making it a versatile resource for students across different regions.',
            'Practical Examples and Exercises: A large number of examples and exercises are provided, helping students practice and reinforce their understanding of mathematical concepts.',
            "Improved Mathematical Foundation: The book effectively strengthens students' mathematical skills, preparing them for higher-level studies and competitive exams.",
            'Engaging and Accessible: The book is designed to be engaging and accessible to students with varying levels of mathematical proficiency, ensuring broad appeal and usability.'
        ],
        result_image: '/assets/images/portfolio/portfolio_3_2.png',
        },

        {
        id: 4,
        title: 'Prediction using Supervised Machine Learning (ML) with Python Implementation - Linear Regression',
        subtitle: 'Article',
        client_country: 'Maharashtra, India',
        published: '30 December, 2023',
        technology: 'Statistical Method, Linear Regression, Regression Line Fitting',
        categories: 'Data Science',
        href: 'https://bit.ly/4hO9lpZ',
        image: '/assets/images/portfolio/portfolio_4_0.png',
        overview: "Linear regression is a fundamental statistical method used to model the relationship between a dependent variable and one or more independent variables by fitting a linear equation to observed data. The simplest form involves two variables: a dependent variable (y) and an independent variable (x), with the goal of finding the best-fit line that minimizes the sum of squared differences between observed and predicted values. The linear regression equation is represented as `y = mx + b`, where m is the slope and b is the y-intercept. In multiple linear regression, the equation extends to include more independent variables. Linear regression is widely used for prediction tasks, assuming a linear relationship between variables. This introduction also provides a step-by-step Python implementation of linear regression, from data loading and preprocessing to model training, evaluation, and visualization, using a dataset that predicts student scores based on study hours.",
        challenges: 'Writing about linear regression, especially for beginners, presents several challenges. The author must ensure that the explanation is clear and accessible, avoiding overly complex statistical jargon while still conveying the mathematical foundations of the method. Structuring the content to include both theoretical explanations and practical implementation (e.g., Python code) requires careful planning to maintain a balance between theory and application. Additionally, the author must ensure that the code examples are accurate, well-commented, and easy to follow, as readers may have varying levels of programming experience. Another challenge is providing sufficient context for the dataset used in the example, ensuring that readers understand how the method applies to real-world scenarios. Finally, the author must address potential pitfalls, such as the assumption of linearity, and guide readers on when linear regression is appropriate.',
        challenges_list: [
            'Explaining complex statistical concepts in a simple and accessible manner.',
            'Balancing theoretical explanations with practical implementation (e.g., Python code).',
            'Ensuring code examples are accurate, well-commented, and easy to follow for readers with varying programming skills.',
            'Providing sufficient context for the dataset used in the example to make the application relevant.',
            'Addressing potential pitfalls, such as the assumption of linearity, and guiding readers on when to use linear regression.'
        ],
        overview_image: '/assets/images/portfolio/portfolio_4_1.png',
        results: "The step-by-step Python implementation of linear regression successfully demonstrates how to predict student scores based on study hours. The model achieves a strong fit, as evidenced by the low Mean Absolute Error (MAE), Mean Squared Error (MSE), and Root Mean Squared Error (RMSE), as well as a high R-squared (R-2) value, indicating that the model explains a significant portion of the variance in the data. The visualisation of the regression line and the comparison between actual and predicted scores further validate the model's accuracy. The example also shows how to use the trained model to make predictions for new data, such as predicting the score for a student who studies 9.25 hours per day. Overall, the implementation provides a clear and practical guide to applying linear regression in a real-world scenario.",
        results_list: [
            'Successful Model Training: The linear regression model is trained using the dataset, with the best-fit line determined by minimizing the sum of squared errors.',
            'Accurate Predictions: The model achieves low error metrics, including MAE, MSE, and RMSE, indicating high predictive accuracy.',
            'High R-squared Value: The R-2 value demonstrates that the model explains a significant portion of the variance in the dependent variable (student scores).',
            "Visualisation of Results: The regression line and scatter plot provide a clear visual representation of the relationship between study hours and scores, as well as the model's fit.",
            "Comparison of Actual vs. Predicted Scores: A bar graph compares actual and predicted scores, showing the model's effectiveness in making accurate predictions.",
            "Practical Application: The model is used to predict the score for a student studying 9.25 hours per day, demonstrating its real-world applicability.",
            "Step-by-Step Guidance: The implementation provides a comprehensive guide, from data loading and preprocessing to model evaluation, making it accessible for beginners."
        ],
        result_image: '/assets/images/portfolio/portfolio_4_2.png',
        }
    ];

    // Find the project by ID
    const project = projects.find((p) => p.id === parseInt(id));

    if (!project) {
        return (<div>
            <section className="breadcumb-wrapper text-center pb-0 bg-theme2">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <h2>Project not found!</h2>
                        </div>
                    </div>
                </div>
            </section>
        </div>)
    }

    // Function to get the previous project ID
    const getPreviousProjectId = () => {
        const currentIndex = projects.findIndex((p) => p.id === parseInt(id));
        return currentIndex > 0 ? projects[currentIndex - 1].id : null;
    };

    // Function to get the next project ID
    const getNextProjectId = () => {
        const currentIndex = projects.findIndex((p) => p.id === parseInt(id));
        return currentIndex < projects.length - 1 ? projects[currentIndex + 1].id : null;
    };

    // Handle Previous button click
    const handlePrevious = () => {
        const previousId = getPreviousProjectId();
        if (previousId) {
        navigate(`/project/${previousId}`);
        }
    };

    // Handle Next button click
    const handleNext = () => {
        const nextId = getNextProjectId();
        if (nextId) {
        navigate(`/project/${nextId}`);
        }
    };

    return (
        <div>
            <section className="breadcumb-wrapper text-center pb-0 bg-theme2">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <span className="sub-title">{project.subtitle}</span>
                            <h2 className="sec-title mb-0">{project.title}</h2>
                        </div>
                    </div>
                </div>
            </section>

            <div className="project-details-area space-bottom bg-theme2">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <ul className="info-items xs-py-30">
                                <li className="item">
                                    <span className="title">Client Location:</span>
                                    <span className="text">{project.client_country}</span>
                                </li>
                                <li className="item">
                                    <span className="title">Published Since:</span>
                                    <span className="text">{project.published}</span>
                                </li>
                                <li className="item">
                                    <span className="title">Technology:</span>
                                    <span className="text">{project.technology}</span>
                                </li>
                                <li className="item">
                                    <span className="title">Categories:</span>
                                    <span className="text">{project.categories}</span>
                                </li>
                                {project.href && (
                                    <li className="btn-wrap mt--20 sm-mt-0">
                                        <a className="circle-btn tp-hover-btn btn" href={`${project.href}`} target="_blank">
                                            <span className="link-effect">
                                                <span className="effect-1">Live Site</span>
                                                <span className="effect-1">Live Site</span>
                                            </span>
                                            <img src="/assets/images/icons/arrow-left-top.svg" alt="" />
                                            <i className="btn-circle-dot"></i>
                                        </a>
                                    </li>
                                )}
                            </ul>
                        </div>
                    </div>
                    <div className="row details-thumb">
                        <div className="col-xl-12">
                            <div className="project-inner-thumb mb-50 wow img-custom-anim-top">
                                <img className="w-100" src={`${project.image}`} alt="img" />
                            </div>
                        </div>
                    </div>
                    <div className="row justify-content-between">
                        <div className="col-lg-6">
                            <div className="project-area mb-50">
                                <h3 className="title mb-20">Projects Overview</h3>
                                <p className="text">{project.overview}</p>
                            </div>
                            <div className="challenge-area mb-50">
                                <h3 className="title mb-20">Challenges & Constraints</h3>
                                <p className="text mb-40">{project.challenges}</p>
                                <ul className="challenge-area_list">
                                    {project.challenges_list.map((challenge, index) => (
                                        <li key={index}>{challenge}</li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                        {project.overview_image && (
                            <div className="col-lg-6">
                                <figure className="thumb lg-mb-0 md-mb-30"><img className="w-100" src={`${project.overview_image}`} alt="" /></figure>
                            </div>
                        )}
                        <div className="col-lg-12">
                            <div className="results-area">
                                <h3 className="mb-20">Final Result</h3>
                                <p className="text mb-40">{project.results}</p>
                                <ul className="results-area_list">
                                    {project.results_list.map((result, index) => (
                                        <li key={index}>{result}</li>
                                    ))}
                                </ul>
                                {project.result_image && (
                                    <figure className="result-thumb mt-60 mb-60">
                                        <img src={`${project.result_image}`} alt="" /> 
                                    </figure>
                                )}
                            </div>
                        </div>
                        <div className="col-lg-12">
                            <div className="inner__page-nav">
                            <button
                                className="nav-btn"
                                onClick={handlePrevious}
                                disabled={!getPreviousProjectId()}
                                >
                                <span className="link-effect">
                                    <span className="effect-1">Previous</span>
                                    <span className="effect-1">Previous</span>
                                </span>
                            </button>
                                {/* <Link to="/project/project-details" className="nav-btn">
                                    <span className="link-effect">
                                        <span className="effect-1">Previous</span>
                                        <span className="effect-1">Previous</span>
                                    </span>
                                </Link> */}
                            <a href="#" className="link">Back to Overview</a>
                            <button
                                className="nav-btn"
                                onClick={handleNext}
                                disabled={!getNextProjectId()}
                                >
                                <span className="link-effect">
                                    <span className="effect-1">Next</span>
                                    <span className="effect-1">Next</span>
                                </span>
                            </button>
                                {/* <Link to="/project/project-details" className="nav-btn">
                                    <span className="link-effect">
                                        <span className="effect-1">Next</span>
                                        <span className="effect-1">Next</span>
                                    </span>
                                </Link> */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
    );
};

export default ProjectDetails;