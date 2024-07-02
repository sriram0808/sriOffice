import "../Assets/Css/Mobile.css"
import web from "../Assets/Images/wwwwww.png"
import { Link } from "react-router-dom"
import Footer from "../Components/Footer"

let Webdevelopment=()=>{

    return(
      <div className="mobileBack">
      <div className="container">
          <div className="row">
              <div className="col-md-6 d-flex justify-content-center detailsBlock">
                  <div className="align-self-start mt-5">
                    <h2 className="mobileAppTitle">For more details</h2>
                    <Link to="/contact"><button className="btn  moredetailsButton mb-3">Get Demo</button></Link>
                  </div>
              </div>
              <div className="col-md-6 mb-5 mt-5 content-column rightSideBack">
                  <img src="https://res.cloudinary.com/deowghzbg/image/upload/v1719902807/wwwwww_jpezwq.webp" alt="Descriptive Alt Text" className="img-fluid" />
                  <h1 className="mobileAppTitle">Web Development</h1>
                  <h5 className="discrption">Description:</h5>
                   <p className="discrption">
                   Internet improvement refers back to the creation, construction, and preservation of websites. It consists of aspects including net layout, internet publishing, net programming, and database control. It is the advent of software that works over the net i.E. Websites.A responsive website is designed to provide an most fulfilling viewing revel in throughout various devices, together with computer systems, capsules, and smartphones <br /> <br />
                    Web Development Is a two-section:
                    <ul>
                        <li>Frontend Developmetn</li>
                        <li>Backend Development</li>
                    </ul>
                    We use popular the front-end generation:
                    <ul>
                        <li>HTML 5</li>
                        <li>CSS 3</li>
                        <li>Bootstrap 5 </li>
                        <li>Java Script</li>
                        <li>Material UI</li>
                        <li>Redux</li>
                        <li>React Js</li>
                    </ul>
                    We Use popular the Back-end generation:
                    <ul>
                        <li>Express Js</li>
                        <li>Mongo DB</li>
                        <li>Node.js</li>
                    </ul>
                  </p>
              </div>
          </div>
      </div>
      <Footer/>
 </div>
    )
}
export default Webdevelopment