import "../Assets/Css/Mobile.css"
import uiux from "../Assets/Images/ux-ui-development-it-photorealism (1) 1 (1).png"
import { Link } from "react-router-dom"
import Footer from "../Components/Footer"


let Uiux=()=>{
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
                  <img src="https://res.cloudinary.com/deowghzbg/image/upload/v1719644912/ux-ui-development-it-photorealism_1_1_1_nj1qb3.png" alt="Descriptive Alt Text" className="img-fluid" />
                  <h1 className="mobileAppTitle">UI/UX Development</h1>
                  <h5 className="discrption">Description:</h5>
                   <p className="discrption">
                     UI/UX

                    In digital design, the user interface (UI) focuses on the visual and interactive elements of a product screen or webpage, such as buttons, layout, and design aesthetics. Meanwhile, user experience (UX) encompasses the overall journey and satisfaction a user feels while interacting with the product or website, ensuring it is intuitive and enjoyable. <br />
<br />
                    We use the most popular UI/UX software:
                    <ul>
                        <li>Photoshop</li>
                        <li>Figma</li>
                        <li>Adobe Illustrator</li>
                        <li>FiGJam</li>
                    </ul>
                    </p>
              </div>
          </div>
      </div>
      <Footer/>
 </div>
    )
}
export default Uiux