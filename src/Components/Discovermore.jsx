import "../Assets/Css/Discover.css"
import verstile from "../Assets/Images/versatile.png"
import digital from "../Assets/Images/digital.png"

let Discovermore=()=>{
    return(
        <div className="discoverBack">
            <div className="container">
                <div className="row">
                    <div className="col mt-5">
                        <img src="https://res.cloudinary.com/deowghzbg/image/upload/v1719902695/discoverImage_vsnsme.webp" alt="" className="img-fluid discoverImage" style={{height:"330px"}}/>
                    </div>
                    <div className="col-md-6 mt-5">
                        <div className="card discoverCard">
                            <div className="card-body discoverCardBack">
                                <h5 className="card-title discoverTitle mb-4">Why choose Thamizhan Solution ?</h5>
                                <p className="card-text discoverSubTitle">We help humans with extremely good brands and advanced products. Our angle is to supply excellent fascinating services.It's a habit of us Developers to know What you Want and make it work. Our team Full Focus On  Submission to Time is positive. We are checking that there are no complaints from The clients,  </p>
                                <p className="card-text discoverSubTitle">Our Team fully focuses on your growth, because your growth is “Our growth” . Connect with expert Developers, and stay with the Thamizhan Families. </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col mt-5">
                    <div className="card discoverCard">
                            <div className="card-body discoverCardBack">
                                <h5 className="card-title discoverTitle mb-4">Our Goals</h5>
                                <p className="card-text discoverSubTitle">Promote continuous studying and expert growth, empowering our group with sources and possibilities to excel in their careers. By nurturing talent, we drive our enterprise's success and foster a tradition of innovation and success. </p>
                                <p className="card-text discoverSubTitle">Our aim is to improve our services every day from software and technology end to stand out in the competitive world.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row mt-5 ">
                    <div className="col mb-5">
                    <div className="card discoverCard">
                            <div className="card-body discoverCardBack">
                                <img src={verstile} alt="" className="image-fluid mb-3" style={{height:"42px"}}/>
                                <h5 className="card-title discoverTitle mb-4">Versatile Brand</h5>
                                <p className="card-text discoverSubTitle">We are crafting a digital method that sublists life across all mediums.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col ">
                    <div className="card discoverCard">
                            <div className="card-body discoverCardBack">
                            <img src={digital} alt="" className="image-fluid mb-3" style={{height:"42px"}}/>
                                <h5 className="card-title discoverTitle mb-4">Digital Agency</h5>
                                <p className="card-text discoverSubTitle">We belive in innovation by merging primary with <br /> elaborate ideas. </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Discovermore