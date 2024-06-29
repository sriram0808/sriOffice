import logo from "../Assets/Images/finalLogo.jpg"
import "../Assets/Css/Footer.css" 
import { useState } from "react";
import arrow from "../Assets/Images/arrow.png"
import copyright from "../Assets/Images/copyright.png"
import faceBook from "../Assets/Images/faceBook.png"
import insta from "../Assets/Images/insta.png"
import twitter from "../Assets/Images/twitter.png"
import whatsapp from "../Assets/Images/whatsapp.png"
import linkedin from "../Assets/Images/linkedin.png"
import toast, { Toaster } from 'react-hot-toast';
import axios from "axios";
let Footer=()=>{
  const closeMenu=()=> setClick(false);
  const [click, setClick] = useState(false);


  const [subscriberEmail, setSubscriberemail] = useState("")
  const notifyError = (msg) => toast.error(msg,
    {
      style: {
        background: '#333',
        color: '#fff',
      },
    }
  );
  const notifySuccess = (msg) => toast.success(msg,
    {
      style: {
        background: '#333',
        color: '#fff',
      },
    }
  );
  const handleSubscribe=async (event)=>{
    event.preventDefault()
    if(!subscriberEmail==""){
      await axios.post('http://localhost:3002/new/email/subscribe', {email: subscriberEmail} ) // env variable
      .then((res)=>{
        setSubscriberemail("")
        if(res.data.status){
          notifySuccess(res.data.message)
        }
        else{
          notifyError(res.data.message)
        }
      })
      .catch((err)=>{
        notifyError(err.response.data.message)
      })
    }
    else{
      notifyError("Please enter email")
    }
  }

    return( 
      <div className='footer container-fluid'>    
      <Toaster
  position="top-right"
  reverseOrder={false}
/>
      <div className="row footerBack">
        <div class='col-12 col-lg-4  py-4 py-md-5 py-xxl-8   footerBlock'>
          <div className="row h-70 align-items-end justify-content-center">
            <div className="col-12 col-md-11 col-xl-10 footer-con">
              <div className="footer-logo-wrapper">
                <a href="/">  <img src={logo} alt="Company Logo" width="179" height="60"/></a>
              </div>
              <div className="col footer-col mx-1 my-4">
                <h1> Follow Us </h1>
                    <div className="social-links my-4">
                      <div className="social-div">
                       <a href="/"><img src={faceBook} alt="" className="img-fluid " style={{height:"40px"}}/> </a><h6>Facebook</h6>
                       </div>
                       <div className="social-div">
                       <a href="/"><img src={insta} alt="" className="img-fluid " style={{height:"40px"}}/>  </a><h6>Instagram</h6>
                       </div>
                       <div className="social-div">
                       <a href="/"><img src={twitter} alt="" className="img-fluid" style={{height:"40px"}}/> </a><h6>Twitter</h6>
                       </div>
                       <div className="social-div">
                       <a href="/"><img src={whatsapp} alt="" className="img-fluid" style={{height:"40px"}}/> </a><h6>Whatsapp</h6>
                       </div>   
                       <div className="social-div"> 
                       <a href="https://www.linkedin.com/company/101978309/admin/inbox/thread/2-NmRmNTc4NWUtZGRiZS00Y2IwLTgwNDktNWExNmNiMTNkODc0XzAxMA==/"><img src={linkedin} alt="" className="img-fluid" style={{height:"40px"}}/> </a><h6>Linkedin</h6>
                       </div>                   
                    </div>
                </div>
            </div>
          </div>
        </div>
        <div className="col-12 col-lg-8 footerRight py-4 py-md-5 py-xxl-8 ">
          <div className="row justify-content-center">
            <div className="col-12 col-md-11 col-xxl-10">
              <div className="row row-cols-md-3 row-cols-sm-1 row-cols-1 gy-4 gy-sm-0">
                <div className="col-sm-3">
                  <div>
                    <h4 className="widget-title mb-4 footerTitle">Services</h4>
                    <ul className="list-unstyled service">
                      <li className="mb-3">
                      <a href="/mobileapp"  className="link-secondary text-decoration-none footerSubTitle"><img src={arrow} alt="" className="img-fluid"/> MobileApp Development </a>
                      </li>
                      <li className="mb-3">
                      <a href="/webdevelopment"  className="link-secondary text-decoration-none footerSubTitle"><img src={arrow} alt="" className="img-fluid"/> Web Development </a>
                      </li>
                      <li className="mb-3">
                      <a href="/uiux"  className="link-secondary text-decoration-none footerSubTitle"><img src={arrow} alt="" className="img-fluid"/> UI/UX Development </a>
                      </li>
                      <li className="mb-3">
                      <a href="/aidevelopment"  className="link-secondary text-decoration-none footerSubTitle"><img src={arrow} alt="" className="img-fluid"/> AI Development </a>

                      </li>
                      <li className="mb-3">
                      <a href="/cripto"  className="link-secondary text-decoration-none footerSubTitle"><img src={arrow} alt="" className="img-fluid"/> Crypto Trading </a>
                      </li>
                      <li className="mb-3">
                        <a href="/neft"  className="link-secondary text-decoration-none footerSubTitle"><img src={arrow} alt="" className="img-fluid"/> NFT Marketing </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col-6 col-sm-3">
                  <div className="mx-1">
                    <h4 className="widget-title mb-4 footerTitle">Company</h4>
                    <ul className="list-unstyled company">
                    <li className="mb-3">
              <a href="/"  className="link-secondary text-decoration-none footerSubTitle"><img src={arrow} alt="" className="img-fluid"/> Home</a>
            </li>
           
            <li className="mb-3">
          
              
              <a href="/about"  className="link-secondary text-decoration-none footerSubTitle"><img src={arrow} alt="" className="img-fluid"/> About</a>
            </li>
            <li className="mb-3">
          
               <a href="/service"  className="link-secondary text-decoration-none footerSubTitle"><img src={arrow} alt="" className="img-fluid"/> Service</a>
            </li>
            <li className="mb-3">
          
               <a href="/career"  className="link-secondary text-decoration-none footerSubTitle"><img src={arrow} alt="" className="img-fluid"/> Career</a>
            </li>
            <li className="mb-3">
        
               <a href="/contact"  className="link-secondary text-decoration-none footerSubTitle"><img src={arrow} alt="" className="img-fluid"/> Contact</a>
            </li>
            <li className="mb-3">

            <a href="/termsandconditions"  className="link-secondary text-decoration-none footerSubTitle"><img src={arrow} alt="" className="img-fluid"/> Terms & Condition</a>
            </li>
            <li className="mb-3">

            <a href="/privacypolicy"  className="link-secondary text-decoration-none footerSubTitle"><img src={arrow} alt="" className="img-fluid"/> Privacy Policy</a>
            </li>
                    </ul>
                  </div>
                </div>
                <div className="col-12 col-sm-6">
                  <div className="widget mx-0">
                    <h4 className="widget-title mb-4 footerTitle">Our Newsletter</h4>
                    <p className="mb-4    footerSubTitle" >Never miss out on our company's latest news, updates, and exclusive offers! Subscribe to our newsletter today and get the inside scoop delivered straight to your inbox.</p>
                    <form action="#!" onSubmit={handleSubscribe}>
                      <div className="row gy-4">
                        <div className="col-12">
                          <div className="input-group">
                            <input type="email" value={subscriberEmail} onChange={(e)=>{setSubscriberemail(e.target.value)}} className="form-control subscribeBack" id="email-newsletter"  placeholder="Email" aria-label="email-newsletter" aria-describedby="email-newsletter-addon" />
                          </div>
                        </div>
                        <div className="col-12">
                          <div className="d-grid">
                            <button className="btn subscribeButton" type="submit">Subscribe</button>
                          </div>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
              <div className="row  border-top border-light-subtle my-5 text-center">
                <div className="footer-copyright-wrapper foot my-4">
                 <img src={copyright} alt="" className="img-fluid" style={{height:"18px"}}/> copyrights <span className="fw-bold companyName">Thamizhan Solutions</span> All Rights Reserved.
                </div>        
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    )}
                         
export default Footer