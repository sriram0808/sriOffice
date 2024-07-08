import React from 'react';
import "../Assets/Css/home.css";

const Home = () => {

    return (
        <div className="">
            <div id="carouselExampleAutoplaying" className="carousel slide homeBackground container-fluid " data-bs-ride="carousel" data-bs-interval="4000">
                <div className="carousel-inner mt-5">
                    <div className="carousel-item active">
                        <div className="row">
                            <div className="col-md-6 d-flex flex-column justify-content-center">
                                <h1 className='contents-h1'>Crypto Trading</h1>
                                <p className='homeQuotes'>“Whenever the price of cryptocurrency is rallying, people start spending a lot more. — Erik Voorhees”</p>
                            </div>
                            <div className="col-md-6">
                                <video src="https://res.cloudinary.com/deowghzbg/video/upload/v1719643804/video1_qe2lm5.mp4" className="video-fluid video-shadow home-video" loop muted autoPlay playsInline style={{height: "550px"}}></video>
                            </div>
                        </div>
                    </div>
                    <div className="carousel-item secondBackground">
                        <div className="row">
                            <div className="col-md-6 d-flex flex-column justify-content-center">
                                <h1 className='contents-h1'>Web Development</h1>
                                <p className='homeQuotes'> “Websites promote you 24/7: No employee will do that.” <br /> – Paul Cookson</p>
                            </div>
                            <div className="col-md-6">
                                {/* <img src={image} className="img-fluid" alt="Web Development" /> */}
                                <video src="https://res.cloudinary.com/deowghzbg/video/upload/v1719643904/video2_d4uxnx.mp4" className="video-fluid video-shadow home-video" loop muted autoPlay playsInline style={{height: "550px"}}></video>
                            </div>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <div className="row">
                            <div className="col-md-6 d-flex flex-column justify-content-center">
                                <h1 className='contents-h1'>UI/UX Design</h1>
                                <p className='homeQuotes'>“Design is not just what it looks like and feels like. Design is how it works.” <br /> –Steve Jobs</p>
                            </div>
                            <div className="col-md-6">
                                {/* <img src={image} className="img-fluid" alt="UI/UX Design" /> */}
                                <video src="https://res.cloudinary.com/deowghzbg/video/upload/v1719643918/video3_kixw5h.mp4"  className="video-fluid video-shadow home-video" loop muted autoPlay playsInline style={{height: "550px"}}></video>
                            </div>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <div className="row">
                            <div className="col-md-6 d-flex flex-column justify-content-center">
                                <h1 className='contents-h1'>AI Development</h1>
                                <p className='homeQuotes'> “Machine intelligence is the last invention that humanity will ever need to make.” <br /> – Nick Bostrom</p>
                            </div>
                            <div className="col-md-6">
                                {/* <img src={image} className="img-fluid" alt="AI Development" /> */}
                                <video src="https://res.cloudinary.com/deowghzbg/video/upload/v1719643935/video4_qk8baw.mp4" className="video-fluid video-shadow home-video" loop muted autoPlay playsInline style={{height: "550px"}}></video>
                            </div>
                        </div>
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
                <ol className="carousel-indicators">
                    <li data-bs-target="#carouselExampleAutoplaying" data-bs-slide-to="0" className="active"></li>
                    <li data-bs-target="#carouselExampleAutoplaying" data-bs-slide-to="1"></li>
                    <li data-bs-target="#carouselExampleAutoplaying" data-bs-slide-to="2"></li>
                    <li data-bs-target="#carouselExampleAutoplaying" data-bs-slide-to="3"></li>
                </ol>
            </div>
        </div>
    );
}

export default Home;