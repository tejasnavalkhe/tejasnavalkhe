
const Award1 = () => {

    const awardContent = [
        {title:'NCL+ Award', tag:'Entrepreneur', subject:'Newcastle University, United Kigdom', year:'2024'},
        {title:'Best Student Of The Batch (2019-2023)', tag:'Best in Computer Science Engineering', subject:'Prestige Institute of Engineering Management & Research', year:'2023'},
      ];    

    return (
            <section className="awards-area space">
                <div className="big-title-wrap">
                    <h2 className="big-title mb-0">THE AWARDS <span className="font2 ml-30 md-ml-0"> </span></h2>
                </div>
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-12">
                            <ul className="awards-wrap-area">
                            {awardContent.map((item, index) => (
                                <li key={index} className="single-awards-list">
                                    <span className="awards-title">{item.title}</span>
                                    <span className="awards-tag">{item.tag}</span>
                                    <span className="awards-subject">{item.subject}</span>
                                    <span className="awards-year">{item.year}</span>
                                </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
    );
};

export default Award1;