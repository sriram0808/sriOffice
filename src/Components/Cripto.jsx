import "../Assets/Css/Mobile.css"
import cryto from "../Assets/Images/Crypto image (1).png"
import { Link } from "react-router-dom"
import Footer from "../Components/Footer"


let Cripto=()=>{

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
                  <img src={cryto} alt="Descriptive Alt Text" className="img-fluid" />
                  <h1 className="mobileAppTitle">Crypto Trading</h1>
                  <h5 className="discrption">Description:</h5>
                   <p className="discrption">
                    Project Description:
                    Cryptocurrency is stored in digital wallets, which can be accessed from anywhere. Unlike traditional banking, cryptocurrency operates as a virtual payment system that does not rely on banks to verify transactions. Instead, it uses a peer-to-peer network that allows users to send and receive payments directly, enabling fast and secure transfers across the globe without intermediaries. <br />
                    <br />
                    We provide Top-list Crypto- services:              
                    <ul>
                        <li> Crypto Exchange Development</li>
                        <li>Centralized Exchange Development</li>
                        <li>Decentralized Exchange Development</li>
                        <li>P2P Crypto Exchange Development</li>
                        <li>White-Label Crypto Exchange Development</li>
                        <li>Crypto derivative Exchange development</li>
                    </ul>

                  </p>
              </div>
          </div>
      </div>
      <Footer/>

 </div>
    )
}
export default Cripto