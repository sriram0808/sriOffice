import AOS from 'aos';
import 'aos/dist/aos.css'; 
import { useEffect } from "react";
import "../Assets/Css/service.css"
import mobileDevelopmentIcon from "../Assets/Images/mobile.png"
import webIcon from "../Assets/Images/web.png"
import uiuxIcon from "../Assets/Images/uiux.png"
import aiDevelopmentIcon from "../Assets/Images/ai.png"
import cryptoIcon from "../Assets/Images/crypto.png"
import nftIcon from "../Assets/Images/nft.png"
import learnMore from "../Assets/Images/learnnn.png"
let Service=()=>{

    useEffect(() => {
        AOS.init({ duration: 500, });
      }, []);

    return(

        <div>
                <section className="py-5 py-xl-8  serviceBack" style={{backgroundColor:" #000000"}}>
                <div className="container">
                <h1 className="mb-4 display-5 text-center  serviceTitle">Our Services</h1>
                        <p className=" mb-5 text-center serviceSubTitle">We provide comprehensive digital solutions including NFT services, AI development, web development, UI/UX design, and crypto trading services. Our expertise spans diverse sectors, ensuring innovative and tailored solutions for all your digital needs.</p>
                        <hr className="w-50 mx-auto mb-5 mb-xl-9 border-dark-subtle"/>
                </div>     
                        <div className="container mt-5">
                        <div className="row" data-aos="fade-right">
                            <div className="col-lg-4 col-md-6 mb-4">
                            <div className="card serviceCard">
                            {/* <img src="https://res.cloudinary.com/deowghzbg/image/upload/v1719644960/mobile_we3e5y.png" alt="Mobile Development Icon" className='img-fluid mx-3 mt-3' style={{height:"45px",width:"45px"}}/> */}
                            <img src={mobileDevelopmentIcon} alt="Mobile Icon" className='img-fluid mx-3 mt-3' style={{height:"45px",width:"45px"}}/>
                                <div className="card-body">
                                <h1 className=" serviceCardTitle">Mobile App Development</h1>
                                <p className="mb-3 serviceCardSubTitle">Thamizhan Solutions excels in mobile app development, creating tailored applications to meet diverse business needs. Our expert team enhances user engagement and operational efficiency for clients. Join us and be part of our highly skilled developers transforming the mobile landscape.</p>
                                <a href='/mobileapp' style={{ position: 'absolute', bottom: '10px', right: '10px' }}>
                                        {/* <img src="https://res.cloudinary.com/deowghzbg/image/upload/v1719644956/learnnn_rld4rb.png" alt="learn more" className="img-fluid mx-3 mb-3" style={{ height: "25px" }} /> */}
                                        <img src={learnMore} alt="Learn more" className="img-fluid mx-3 mb-3" style={{ height: "25px" }}/>
                                 </a>
                                </div>
                            </div>
                            </div>

                            <div className="col-lg-4 col-md-6 mb-4">
                            <div className="card serviceCard">
                            {/* <img src="https://res.cloudinary.com/deowghzbg/image/upload/v1719644914/web_p6wxa8.png" alt="Web Development Icon" className='img-fluid mx-3 mt-3'  style={{height:"45px",width:"45px"}}/> */}
                            <img src={webIcon} alt="Web Development Icon" className='img-fluid mx-3 mt-3'  style={{height:"45px",width:"45px"}}/>
                                <div className="card-body">
                                <h1 className="serviceCardTitle">Web Development</h1>
                                <p className=" mb-3 serviceCardSubTitle ">Thamizhan Solutions offers premier web development services, crafting dynamic and responsive websites tailored to your business needs. Our expert developers specialize in creating user-friendly, scalable, and secure web solutions that enhance your digital presence and drive success.</p>
                                <a href='/webdevelopment'style={{ position: 'absolute', bottom: '10px', right: '10px' }}>
                                    {/* <img src="https://res.cloudinary.com/deowghzbg/image/upload/v1719644956/learnnn_rld4rb.png" alt="learn more" className="img-fluid mx-3 mb-3" style={{ height: "25px" }} /> */}
                                    <img src={learnMore} alt="Learn more" className="img-fluid mx-3 mb-3" style={{ height: "25px" }}/>

                                </a>             
                             </div>
                            </div>
                            </div>

                            <div className="col-lg-4 col-md-6 mb-4">
                            <div className="card serviceCard">
                            {/* <img src="https://res.cloudinary.com/deowghzbg/image/upload/v1719644910/uiux_rmktbp.png" alt="UI/UX Development Icon" className='img-fluid mx-3 mt-3' style={{height:"45px",width:"45px"}}/> */}
                            <img src={uiuxIcon} alt="UI/UX Icon" className='img-fluid mx-3 mt-3' style={{height:"45px",width:"45px"}}/>
                            <div className="card-body">
                            <h1 className="serviceCardTitle">UI UX Development</h1>
                            <p className="mb-3 serviceCardSubTitle ">Thamizhan solutions excels in UI/UX design offerings, crafting intuitive and visually attractive interfaces. Our crew combines creativity with user-centric ideas to beautify UI/UX and engagement. Whether or not for new or revamped designs, our services make sure seamless, delightful person stories.</p>                                                      
                            <a href='/uiux' style={{ position: 'absolute', bottom: '10px', right: '10px' }}>
                                 {/* <img src="https://res.cloudinary.com/deowghzbg/image/upload/v1719644956/learnnn_rld4rb.png" alt="learn more" className="img-fluid mx-3 mb-3" style={{ height: "25px" }} /> */}
                                 <img src={learnMore} alt="Learn more" className="img-fluid mx-3 mb-3" style={{ height: "25px" }}/>

                            </a>
                            </div>
                            </div>
                            </div>
                            {/* </div>

                            <div className="row mt-0" data-aos="fade-right"> */}
                            <div className="col-lg-4 col-md-6 mb-4">
                            <div className="card serviceCard">
                            {/* <img src="https://res.cloudinary.com/deowghzbg/image/upload/v1719652113/ai_vqe0nl.png" alt="AI Development Icon" className='img-fluid mx-3 mt-3' style={{height:"45px",width:"45px"}}/> */}
                            <img src={aiDevelopmentIcon} alt="AI Icon" className='img-fluid mx-3 mt-3' style={{height:"45px",width:"45px"}}/>
                                <div className="card-body">
                                <h1 className="serviceCardTitle">AI Development</h1>
                                <p className="mb-3 serviceCardSubTitle">At Thamizhan solutions , we excel in ai development provider, crafting modern-day solutions for numerous industries. Our expert group gives prevent-to-give up ai development, reworking mind into smart, impactful offerings tailor-made to your specific enterprise needs.</p>
                               <a href='/aidevelopment'  style={{ position: 'absolute', bottom: '10px', right: '10px' }}>
                                    {/* <img src="https://res.cloudinary.com/deowghzbg/image/upload/v1719644956/learnnn_rld4rb.png" alt="learn more" className="img-fluid mx-3 mb-3" style={{ height: "25px" }} /> */}
                                    <img src={learnMore} alt="Learn more" className="img-fluid mx-3 mb-3" style={{ height: "25px" }}/>

                               </a>          
                                </div>
                            </div>
                            </div>
                            <div className="col-lg-4 col-md-6 mb-4">
                            <div className="card serviceCard">
                            {/* <img src="https://res.cloudinary.com/deowghzbg/image/upload/v1719644933/crypto_s5vm1t.png" alt="Crypto Trading Icon" className='img-fluid mx-3 mt-3' style={{height:"45px",width:"45px"}}/> */}
                            <img src={cryptoIcon} alt="Crypto Icon" className='img-fluid mx-3 mt-3' style={{height:"45px",width:"45px"}}/>
                                <div className="card-body">
                                <h1 className="mb-3 serviceCardTitle">Crypto Trading</h1>
                                <p className="mb-3 serviceCardSubTitle">Thamizhan solutions leads in India's crypto offerings. From comfy digital asset management to superior blockchain answers, our trusted information covers all your needs. Explore our tailored offerings and join our team of professional developers to navigate the dynamic crypto landscape.   </p>
                                <a href='/cripto'  style={{ position: 'absolute', bottom: '10px', right: '10px' }}> 
                                {/* <img src="https://res.cloudinary.com/deowghzbg/image/upload/v1719644956/learnnn_rld4rb.png" alt="learn more" className="img-fluid mx-3 mb-3" style={{ height: "25px" }} /> */}
                                <img src={learnMore} alt="Learn more" className="img-fluid mx-3 mb-3" style={{ height: "25px" }}/>

                                </a>  
                                </div>
                            </div>
                            </div>

                            
                            <div className="col-lg-4 col-md-6 mb-4">
                            <div className="card serviceCard">
                            {/* <img src="https://res.cloudinary.com/deowghzbg/image/upload/v1719644895/nft_p8lakq.png" alt="NFT Marketing Icon" className='img-fluid mx-3 mt-3' style={{height:"45px",width:"45px"}}/> */}
                            <img src={nftIcon} alt="NFT Icon" className='img-fluid mx-3 mt-3' style={{height:"45px",width:"45px"}}/>
                                <div className="card-body">
                                <h1 className="mb-3 serviceCardTitle" >NFT Marketing</h1>
                                <p className="mb-3 serviceCardSubTitle">Thamizhan Solutions is your premier NFT service provider, specializing in tailored solutions for NFT creation, management, and monetization. Our expertise ensures seamless blockchain integration, empowering artists, creators, and businesses to leverage NFTs' unique benefits.</p>
                                <a href='/neft' style={{ position: 'absolute', bottom: '10px', right: '10px' }}>
                                {/* <img src="https://res.cloudinary.com/deowghzbg/image/upload/v1719644956/learnnn_rld4rb.png" alt="learn more" className="img-fluid mx-3 mb-3" style={{ height: "25px" }} /> */}
                                <img src={learnMore} alt="Learn more" className="img-fluid mx-3 mb-3" style={{ height: "25px" }}/>

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

