
const Counter1 = () => {

      const counterContent = [
        {number:'25', position:'Projects Completed'},
        {number:'19%', position:'Revenue Growth Achieved for Clients'},
        {number:'3', position:'Years of Experience'},
        {number:'23%', position:'Reduction in Monthly Operational Costs'},
      ];

    return (
        <div className="counter-area bg-theme2">
                <div className="container">
                    <div className="row counter-wrap gy-40 align-items-center justify-content-lg-between justify-content-center">
                    {counterContent.map((item, i) => (
                        <div key={i} className="col-xl-auto col-lg-3 col-md-3 col-sm-6">
                            <div className="counter-box">
                                <h3 className="counter-box_number">
                                    <span className="count-number">{item.number}</span>+
                                </h3>
                                <h4 className="counter-box_title">{item.position}</h4>
                            </div>
                        </div>
                        ))}
                    </div>
                </div>
            </div>

    );
};

export default Counter1;