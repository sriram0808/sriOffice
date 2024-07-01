import "../Assets/Css/Mobile.css"
import nft from "../Assets/Images/nnnn.png"
import { Link } from "react-router-dom"
import Footer from "../Components/Footer"


let Neft=()=>{
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
                  <img src={nft} alt="Descriptive Alt Text" className="img-fluid" />
                  <h1 className="mobileAppTitle">NFT</h1>
                  <h5 className="discrption">Description:</h5>
                   <p className="discrption">
                    NFTs
                    A non-fungible token (NFT) is a unique digital identifier that is recorded on a blockchain and is used to certify possession and authenticity. It can't be copied, substituted, or subdivided. The possession of an NFT is recorded in the blockchain and can be transferred via the proprietor, allowing NFTs to be offered and traded. <br /> <br />
                    We Provide Top-list NFTs Service:
                    <ul>
                        <li>NFT Marketplace Development</li>
                        <li>White Label Marketplace</li>
                        <li>Nft Marketplace on BSC</li>
                        <li>Nft Art Marketplace</li>
                    </ul>
                    </p>
              </div>
          </div>
      </div>
      <Footer/>
 </div>
    )
}
export default Neft