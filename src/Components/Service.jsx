import AOS from 'aos';
import 'aos/dist/aos.css'; 
import { useEffect } from "react";
import { Link } from 'react-router-dom';
import Carrers from './Carrers';
import "../Assets/Css/service.css"
import mobilelogo from "../Assets/Images/mobile.png"
import logoWeb from "../Assets/Images/web.png"
import uiuxlogo from "../Assets/Images/uiux.png"
import ailogo from "../Assets/Images/ai.png"
import cryptologo from "../Assets/Images/crypto.png"
import nftlogo from "../Assets/Images/nft.png"
import learnmore from "../Assets/Images/learnnn.png"

let Service=()=>{

    useEffect(() => {
        AOS.init({ duration: 1000, });
      }, []);

    return(

        <div>
                <section class="py-5 py-xl-8  serviceBack" style={{backgroundColor:" #000000"}}>
                <div className="container">
                <h1 class="mb-4 display-5 text-center  serviceTitle"  >Our Services</h1>
                        <p class=" mb-5 text-center serviceSubTitle">We provide comprehensive digital solutions including NFT services, AI development, web development, UI/UX design, and crypto trading services. Our expertise spans diverse sectors, ensuring innovative and tailored solutions for all your digital needs.</p>
                        <hr class="w-50 mx-auto mb-5 mb-xl-9 border-dark-subtle"/>
                </div>      
                        <div class="container mt-5">
                        <div class="row" data-aos="fade-right">
                            <div class="col-md-4 mb-4">
                            <div class="card serviceCard">
                            <img src={mobilelogo} alt="" className='img-fluid mx-3 mt-3' style={{height:"45px",width:"45px"}}/>
                                <div class="card-body">
                                <h1 class=" serviceCardTitle">Mobile App Development</h1>
                                <p class="mb-3 serviceCardSubTitle">Thamizhan Solution excels in mobile app development, creating tailored applications to meet diverse business needs. Our expert team enhances user engagement and operational efficiency for clients. Join us and be part of our highly skilled developers transforming the mobile landscape.</p>
                                <a href='/mobileapp' style={{ position: 'absolute', bottom: '10px', right: '10px' }}>
                                        <img src={learnmore} alt="" className="img-fluid mx-3 mb-3" style={{ height: "25px" }} />
                                 </a>
                                </div>
                            </div>
                            </div>

                            <div class="col-md-4 mb-4">
                            <div class="card serviceCard">
                            <img src={logoWeb} alt="" className='img-fluid mx-3 mt-3'  style={{height:"45px",width:"45px"}}/>
                                <div class="card-body">
                                <h1 class="serviceCardTitle">Web Devleopment</h1>
                                <p class=" mb-3 serviceCardSubTitle ">Thamizhan Solution offers premier web development services, crafting dynamic and responsive websites tailored to your business needs. Our expert developers specialize in creating user-friendly, scalable, and secure web solutions that enhance your digital presence and drive success.</p>
                                <a href='/webdevelopment'style={{ position: 'absolute', bottom: '10px', right: '10px' }}>
                                    <img src={learnmore} alt="" className="img-fluid mx-3 mb-3" style={{ height: "25px" }} />
                                </a>             
                             </div>
                            </div>
                            </div>

                            <div class="col-md-4 mb-4">
                            <div class="card serviceCard">
                            <img src={uiuxlogo} alt="" className='img-fluid mx-3 mt-3' style={{height:"45px",width:"45px"}}/>
                            <div class="card-body">
                            <h1 class="serviceCardTitle">UI UX Development</h1>
                            <p class="mb-3 serviceCardSubTitle ">Thamizhan solution excels in UI/UX design offerings, crafting intuitive and visually attractive interfaces. Our crew combines creativity with user-centric ideas to beautify UI/UX and engagement. Whether or not for new or revamped designs, our services make sure seamless, delightful person stories.</p>                                                      
                            <a href='/uiux' style={{ position: 'absolute', bottom: '10px', right: '10px' }}>
                                 <img src={learnmore} alt="" className="img-fluid mx-3 mb-3" style={{ height: "25px" }} />
                            </a>
                             </div>
                            </div>
                            </div>
                        </div>

                        <div class="row mt-0" data-aos="fade-right">
                            <div class="col-md-4 mb-4">
                            <div class="card serviceCard">
                            <img src={ailogo} alt="" className='img-fluid mx-3 mt-3' style={{height:"45px",width:"45px"}}/>
                                <div class="card-body">
                                <h1 class="serviceCardTitle">AI Development</h1>
                                <p class="mb-3 serviceCardSubTitle">At Thamizhan solutions , we excel in ai development provider, crafting modern-day solutions for numerous industries. Our expert group gives prevent-to-give up ai development, reworking mind into smart, impactful offerings tailor-made to your specific enterprise needs.</p>
                               <a href='/aidevelopment'  style={{ position: 'absolute', bottom: '10px', right: '10px' }}>
                                    <img src={learnmore} alt="" className="img-fluid mx-3 mb-3" style={{ height: "25px" }} />
                               </a>          
                                </div>
                            </div>
                            </div>
                            <div class="col-md-4 mb-4">
                            <div class="card serviceCard">
                            <img src={cryptologo} alt="" className='img-fluid mx-3 mt-3' style={{height:"45px",width:"45px"}}/>
                                <div class="card-body">
                                <h1 class="mb-3 serviceCardTitle">Crypto Trading</h1>
                                <p class="mb-3 serviceCardSubTitle">Thamizhan solution leads in India's crypto offerings. From comfy digital asset management to superior blockchain answers, our trusted information covers all your needs. Explore our tailored offerings and join our team of professional developers to navigate the dynamic crypto landscape.   </p>
                                <a href='/cripto'  style={{ position: 'absolute', bottom: '10px', right: '10px' }}> 
                                <img src={learnmore} alt="" className="img-fluid mx-3 mb-3" style={{ height: "25px" }} />
                                </a>  
                                </div>
                            </div>
                            </div>

                            
                            <div class="col-md-4 mb-4">
                            <div class="card serviceCard">
                            <img src={nftlogo} alt="" className='img-fluid mx-3 mt-3' style={{height:"45px",width:"45px"}}/>
                                <div class="card-body">
                                <h1 class="mb-3 serviceCardTitle" >NFT Marketing</h1>
                                <p class="mb-3 serviceCardSubTitle">Thamizhan Solution is your premier NFT service provider, specializing in tailored solutions for NFT creation, management, and monetization. Our expertise ensures seamless blockchain integration, empowering artists, creators, and businesses to leverage NFTs' unique benefits.</p>
                                <a href='/neft' style={{ position: 'absolute', bottom: '10px', right: '10px' }}>
                                <img src={learnmore} alt="" className="img-fluid mx-3 mb-3" style={{ height: "25px" }} />
                                </a>          
                                </div>
                            </div>
                            </div>
                        </div>

                        </div>
                   
                </section>
              

        </div>
    )
}
export default Service

