import React from 'react';
import CountUp from 'react-countup';
import "../Assets/Css/Projectdone.css";


const Projectdone = () => {

    return (
        <div className="projectBlock">
            <div className="container">
                <div className="row d-flex justify-content-center">  
                    <h2 className='projectTitle text-center'>Our Milestones</h2>
                    <div className="col-lg-6 col-md-6 col-sm-12 mt-5 mb-5 d-flex justify-content-center">
                        <div className="card projectCard h-100">
                            <div className="card-body d-flex flex-column align-items-center justify-content-center ">
                                <h2 className='projectCount'>
                                    <CountUp start={0} end={20} duration={2.75} suffix="+" enableScrollSpy = {true} />
                                </h2>
                                <h2 className='prjectSubTitle'>Total Project</h2>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-12 mt-5 mb-5 d-flex justify-content-center">
                        <div className="card projectCard h-100">
                            <div className="card-body d-flex flex-column align-items-center justify-content-center">
                                <h2 className='projectCount'>
                                    <CountUp start={0} end={15} duration={2.75} suffix="+" enableScrollSpy = {true} />
                                </h2>
                                <h2 className='prjectSubTitle'>Project Delivered</h2>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Projectdone;
