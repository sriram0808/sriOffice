import React from 'react';
import CountUp from 'react-countup';
import "../Assets/Css/Projectdone.css";


const Projectdone = () => {


    return (
        <div className="projectBlock">
            <div className="container">
                <div className="row d-flex justify-content-center">
                    <div className="col-lg-4 col-md-6 col-sm-12 mt-5 mb-5 d-flex justify-content-center">
                        <div className="card projectCard h-100">
                            <div className="card-body text-center">
                                <h2 className='projectCount'>
                                    <CountUp start={0} end={10} duration={2.75} suffix="+" />
                                </h2>
                                <h2 className='prjectSubTitle'>Countries</h2>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-12 mt-5 mb-5 d-flex justify-content-center">
                        <div className="card projectCard h-100">
                            <div className="card-body text-center">
                                <h2 className='projectCount'>
                                    <CountUp start={0} end={20} duration={2.75} suffix="+" />
                                </h2>
                                <h2 className='prjectSubTitle'>Project Delivered</h2>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-12 mt-5 mb-5 d-flex justify-content-center">
                        <div className="card projectCard h-100">
                            <div className="card-body text-center">
                                <h2 className='projectCount'>
                                    <CountUp start={0} end={20} duration={2.75} suffix="+" />
                                </h2>
                                <h2 className='prjectSubTitle'>Total Project</h2>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Projectdone;
