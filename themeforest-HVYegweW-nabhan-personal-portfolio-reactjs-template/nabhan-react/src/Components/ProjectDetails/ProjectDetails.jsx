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

        // {
        // id: 3,
        // title: 'MATHABILITY LEVEL 1: A MATHEMATICS FOUNDATION COURSE',
        // subtitle: 'Book',
        // client_country: 'Maharashtra, India',
        // published: '10 February, 2024',
        // technology: 'Typesetting, Diagram Creation, Markdown',
        // categories: 'Kids Mathematics',
        // href: 'https://amzn.to/4as0Cpq',
        // image: '/assets/images/portfolio/portfolio_3_0.png',
        // overview: "This book is designed to strengthen the mathematical foundation of students by covering all essential mathematical concepts required for aspirants from classes 6 to 10. The content is structured into six levels (this book is the first level), each corresponding to different stages of learning, with topics broken down into smaller sub-topics for better comprehension. The book ensures that unnecessary material is excluded while including all necessary concepts, making it a comprehensive resource for students. It also provides a large number of practice examples in exercises to reinforce learning. The `Mathability` course, which the book is based on, is divided into six levels (this is the first level), catering to the syllabus of various educational boards and aiming to improve students' mathematical skills systematically.",
        // challenges: "Writing a book for the first time, especially one aimed at improving students' mathematical foundations, presents several challenges. The author must ensure that the content is comprehensive yet concise, covering all necessary topics without overwhelming the reader. Structuring the material into six levels and breaking down topics into sub-topics requires careful planning to maintain clarity and logical progression. Additionally, the author must align the content with the syllabi of multiple educational boards, which can vary significantly. Balancing theoretical explanations with practical examples and exercises is another challenge, as the book must cater to diverse learning needs. Finally, ensuring that the book is engaging and accessible to students of varying skill levels adds another layer of complexity.",
        // challenges_list: [
        //     'Ensuring comprehensive coverage of all necessary mathematical concepts without including unnecessary material.',
        //     'Structuring the content into six levels and breaking down topics into sub-topics for better understanding.',
        //     'Aligning the book with the syllabi of different educational boards, which may have varying requirements.',
        //     'Balancing theoretical explanations with practical examples and exercises to reinforce learning.',
        //     'Making the book engaging and accessible to students with varying levels of mathematical proficiency.'
        // ],
        // overview_image: '/assets/images/portfolio/portfolio_3_1.png',
        // results: "The book successfully addresses the challenges faced by first-time authors and achieves its goal of improving students' mathematical foundations. By dividing the syllabus into six levels and breaking down topics into smaller sub-topics, the book ensures a clear and systematic learning progression. The inclusion of numerous practice examples in exercises helps students reinforce their understanding and apply concepts effectively. The book's alignment with the syllabi of various educational boards makes it a versatile resource for students across different regions. Overall, the book enhances students' mathematical abilities, providing them with a strong foundation for further studies.",
        // results_list: [
        //     'Comprehensive Coverage: The book covers all essential mathematical concepts from classes 6 to 10, ensuring no necessary material is left out while avoiding unnecessary content.',
        //     'Structured Learning: The content is divided into six levels, with topics broken down into smaller sub-topics, making it easier for students to understand and follow.',
        //     'Alignment with Multiple Syllabi: The book aligns with the syllabi of various educational boards, making it a versatile resource for students across different regions.',
        //     'Practical Examples and Exercises: A large number of examples and exercises are provided, helping students practice and reinforce their understanding of mathematical concepts.',
        //     "Improved Mathematical Foundation: The book effectively strengthens students' mathematical skills, preparing them for higher-level studies and competitive exams.",
        //     'Engaging and Accessible: The book is designed to be engaging and accessible to students with varying levels of mathematical proficiency, ensuring broad appeal and usability.'
        // ],
        // result_image: '/assets/images/portfolio/portfolio_3_2.png',
        // },

        {
        id: 4,
        title: 'Design and Development of Smart Virtual Assistant Using Latest Tools and Technologies',
        subtitle: 'Research Paper',
        client_country: 'Maharashtra, India',
        published: '28 February, 2022',
        technology: 'Google Speech API, SMS, NSE Data',
        categories: 'Speech Recognition',
        href: 'https://bit.ly/3yyazEB',
        image: '/assets/images/portfolio/portfolio_4_0.png',
        overview: "“There is always a requirement of a skilled asset who can organize your chaos” In today's fast developing world, everyone wants to save time. They know that time is money and they are always looking for ways to save time so they can also make more money. Having a reliable virtual assistant will save time and generate more revenue in a multitude of ways. It allows them to offer more services as digital assistants can take over the more routine tasks. Because digital assistants do the more routine tasks. Virtual Assistant will make human-to-machine interaction as smooth as possible. All you need is a good internet connection and your smart Assistant will do everything for you at an instance. The human brain has more power than computers but the human body drowns and makes mistakes",
        challenges: 'The development of a smart virtual assistant presents several challenges, particularly in ensuring accurate voice recognition, especially for users with distinct accents such as Indian English. Existing virtual assistants often struggle with understanding non-standard pronunciations, which limits their usability for a broader audience. Additionally, the system must handle complex task dependencies and optimise plans based on user preferences, priorities, and active tasks. Ensuring the virtual assistant can provide accurate and relevant answers requires rigorous optimisation and continuous quality control to avoid learning undesired behaviors. Furthermore, the system must be efficient, handling multiple concurrent users without exceeding performance thresholds, and maintain security to protect user confidentiality. Finally, the virtual assistant must be scalable and maintainable, allowing for the addition of new functionalities while remaining consistent in its interactions with users.',
        challenges_list: [
            'Accurate Voice Recognition: Difficulty in understanding non-standard accents, such as Indian English.',
            'Complex Task Dependencies: Handling tasks with multiple sub-tasks and optimising plans based on user preferences and priorities.',
            'Contextual Understanding: Ensuring the virtual assistant understands the intent behind user queries and provides relevant answers.',
            'Performance Efficiency: The system must handle multiple concurrent users without exceeding performance thresholds (e.g., response time under 20 seconds).',
            'Security and Confidentiality: Protecting user data and ensuring secure access control.',
            'Scalability and Maintainability: The system should be easy to scale and maintain, allowing for the addition of new functionalities.',
            'Quality Control: Continuous optimisation is required to prevent the virtual assistant from learning undesired behaviors.'
        ],
        overview_image: '/assets/images/portfolio/portfolio_4_1.png',
        results: "The implementation of the smart virtual assistant demonstrated its ability to perform a variety of tasks efficiently, including Google searches, Wikipedia queries, playing songs, sending SMS, taking screenshots, monitoring CPU usage, and providing live stock prices. The system was tested for functionality, usability, security, and stability, and it successfully met the required criteria. The virtual assistant responded quickly to voice commands, providing accurate and relevant answers to user queries. It also handled multiple tasks seamlessly, offering a conversational interaction that made it user-friendly. The system's stability was confirmed as it consistently delivered bounded outputs for specific inputs. Overall, the virtual assistant proved to be a flexible and useful tool for daily tasks, with potential for further enhancements in the future.",
        results_list: [
            "Functionality: The system successfully performed tasks such as Google searches, Wikipedia queries, playing songs, sending SMS, taking screenshots, and monitoring CPU usage.",
            "Usability: The virtual assistant provided a conversational interaction, making it user-friendly and easy to use.",
            "Security: The system ensured data confidentiality and was secure from remote access risks.",
            "Stability: The system consistently delivered bounded outputs for specific inputs, confirming its stability.",
            "Performance: The virtual assistant responded quickly to voice commands, with response times within acceptable limits.",
            "Accuracy: The system provided accurate and relevant answers to user queries.",
            "Multitasking: The assistant handled multiple tasks seamlessly, allowing users to give continuous instructions until they chose to quit."
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
                                                <span className="effect-1">Live</span>
                                                <span className="effect-1">Live</span>
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