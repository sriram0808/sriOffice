import image1 from "../Assets/Images/neAbout1.png";
import image2 from "../Assets/Images/newAbout2.png";
import style from "../Assets/Css/about.module.css";
import AOS from 'aos';
import 'aos/dist/aos.css'; 
import { useEffect } from "react";


let About = () => {

    useEffect(() => {
        AOS.init({ duration: 1000 });
    }, []);

    return (
        <div className="" >
            <section className="py-3 py-md-5 py-xl-8" style={{backgroundColor:" #000000"}}>
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <h1 className={`fs-5 mb-2 text-secondary aboutpage ${style.aboutTitle}`} data-aos="fade-down">About</h1>
                        </div>
                    </div>
                    <div className="row" data-aos="fade-down">
                        <div className="col-12 col-md-10 col-lg-8 mx-auto text-center">
                            <h2 className="display-5 mb-4 "  style={{color:"white",fontSize:"22px",fontWeight:"400"}}>
                            Our adventure started out with a dream of redefining how the arena perceives layout.
                            </h2>
                            <a href="/discover"> <button  className={`btn btn-lg  mb-3 mb-md-4 mb-xl-5 ${style.discoverButton}`}>Discover More</button></a>
                        </div>
                    </div>
                </div>
                <div className="container overflow-hidden">
                    <div className="row gy-4 gy-lg-0">
                        <div className="col-12 col-lg-6">
                            <article>
                                <div className="card border-0" data-aos="fade-right">
                                    <img className="card-img-top img-fluid m-0" loading="lazy" src="https://res.cloudinary.com/deowghzbg/image/upload/v1719644993/neAbout1_e2liau.png" alt="Our Vision" />
                                    <div className={`card-body border bg-white p-4 ${style.textBackground}`}>
                                        <div className="entry-header mb-3">
                                            <h2 className={`card-title entry-title h4 mb-0 text-center ${style.aboutTitle}`}>
                                                <a className="link-dark text-decoration-none " href="#!">Our Vision</a>
                                            </h2>
                                        </div>
                                        <p className={`card-text entry-summary text-secondary mb-3 ${style.aboutSubTitle}`}>
                                        As a design agency, we believe in the transformative power of great design. It shapes perceptions, inspires action, and leaves a lasting impact on the world. Our mission is to create designs that resonate, provoke thought, and drive meaningful change.
                                        </p>
                                    </div>
                                </div>
                            </article>
                        </div>
                        <div className="col-12 col-lg-6">
                            <article>
                                <div className="card border-0" data-aos="fade-left">
                                    <img className="card-img-top img-fluid m-0" loading="lazy" src="https://res.cloudinary.com/deowghzbg/image/upload/v1719644982/newAbout2_pnve1s.png" alt="Our Approach"/>
                                    <div className={`card-body border bg-white p-4 ${style.textBackground}`}>
                                        <div className="entry-header mb-3">
                                            <h2 className={`card-title entry-title h4 mb-0 text-center ${style.aboutTitle}`}>
                                                <a className="link-dark text-decoration-none" href="#!">Our Approach</a>
                                            </h2>
                                        </div>
                                        <p className={`card-text entry-summary text-secondary mb-3 ${style.aboutSubTitle}`}>
                                        Welcome to Digital Agency, where innovation meets excellence. Specialising in web development, app improvement, AI, crypto trading, and NFT services. Let's transform your ideas into impactful solutions and elevate your business with our comprehensive offerings today!
                                        </p>
                                    </div>
                                </div>
                            </article>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default About;