import "../Assets/Css/Mobile.css"
import mobile from "../Assets/Images/mobile app development 2.png"
import { Link } from "react-router-dom"

let MobileApp=()=>{
    return(
      <div className="mobileBack">
      <div className="container ">
          <div className="row">
              <div className="col-md-6 d-flex justify-content-center detailsBlock ">
                  <div className="align-self-start mt-5">
                    <h2 className="mobileAppTitle">For more details</h2>
                      <Link to="/contact"><button className="btn  moredetailsButton mb-3 ">Get Demo</button></Link>
                  </div>
              </div>
              <div className="col-md-6 mb-5 mt-5 content-column rightSideBack">
                  <img src={mobile} alt="Descriptive Alt Text" className="img-fluid"/>
                  <h1 className="mobileAppTitle">Mobile App Development</h1>
                  {/* <h5 className="discrption">Description:</h5> */}
                   <p className="discrption">
                   Mobile software development is the technique of creating software for smartphones, Tablets, and virtual assistants, most typically for the Android and iOS operating systems. Mobile apps often leverage the unique hardware features of devices, such as GPS, cameras, and sensors, to deliver rich and interactive experiences. They also rely on network connectivity to interact with cloud services, enabling functionalities like data synchronization, real-time updates, and user authentication. With the rise of mobile usage globally, developing high-quality mobile applications is crucial for businesses aiming to engage users, streamline operations, and stay competitive in the digital marketplace.
                    We Used Popular & Best Software: <br />
                  <ul>
                    <li>Flutter</li>
                    <li>Android Studio</li>
                  </ul>
                   </p>
              </div>      
          </div>
      </div>
 </div>
    )
}
export default MobileApp