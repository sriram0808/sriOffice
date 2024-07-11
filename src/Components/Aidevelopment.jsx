import "../Assets/Css/Mobile.css"
import { Link } from "react-router-dom"
import Footer from "../Components/Footer"


let Aidevelopment=()=>{

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
                  <img src="https://res.cloudinary.com/deowghzbg/image/upload/v1719902682/Ai_Image_1_pnwvgo.webp" alt="Descriptive Alt Text" className="img-fluid" />
                  <h1 className="mobileAppTitle">AI Development</h1>
                  <h5 className="discrption">Description:</h5>
                   <p className="discrption">
                 Synthetic intelligence is the simulation of human intelligence techniques with the aid of machines, mainly pc structures. Examples of AI programs encompass expert systems, natural language processing (NLP), speech recognition, and gadget imaginative and prescient. <br />  <br />
                 We provide the most popular service:
                <ul>  
                    <li>AI Integration</li>
                    <li>AI Consulting</li>     
                    <li>AI Model marketplaces</li>
                    <li>Cloud AI Services</li>
                </ul>
                  </p>
              </div>
          </div>
      </div>
      <Footer/>
 </div>
    )
}
export default Aidevelopment