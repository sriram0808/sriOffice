import image1 from "./Assest/aboutUs1.avif";
import image2 from "./Assest/iii";
import style from "./about.module.css";
import AOS from 'aos';
import 'aos/dist/aos.css'; 
import { useEffect } from "react";
import Service from "./Service";
import { Link } from "react-router-dom";

let About = () => {
    useEffect(() => {
        AOS.init({ duration: 1000 });
    }, []);

    return (
        <div className={style.backgroundWrapper}>
            <section className="py-3 py-md-5 py-xl-8">
                <div className="container" data-aos="fade-down">
                    <div className="row">
                        <div className="col-12 col-md-10 col-lg-8">
                            <h3 className="fs-5 mb-2 text-secondary text-uppercase">About</h3>
                            <h2 className="display-5 mb-4">Our journey began with a dream of redefining how the world perceives design.</h2>
                            <Link to="/discovermore"> <button type="button" className="btn btn-lg btn-primary mb-3 mb-md-4 mb-xl-5" id={style.dis}>Discover More</button></Link>
                        </div>
                    </div>
                </div>
                <div className="container overflow-hidden">
                    <div className="row gy-4 gy-lg-0">
                        <div className="col-12 col-lg-6">
                            <article>
                                <div className="card border-0" data-aos="fade-right">
                                    <img className="card-img-top img-fluid m-0" loading="lazy" src={image1} alt="Our Vision" />
                                    <div className="card-body border bg-white p-4">
                                        <div className="entry-header mb-3">
                                            <h2 className="card-title entry-title h4 mb-0">
                                                <a className="link-dark text-decoration-none" href="#!">Our Vision</a>
                                            </h2>
                                        </div>
                                        <p className="card-text entry-summary text-secondary mb-3">From sleek modernism to timeless elegance, we infuse every creation with a touch of our artistic ingenuity. As a design agency, great design can shape perceptions, inspire action, and leave an indelible mark on the world.</p>
                                    </div>
                                </div>
                            </article>
                        </div>
                        <div className="col-12 col-lg-6">
                            <article>
                                <div className="card border-0" data-aos="fade-left">
                                    <img className="card-img-top img-fluid m-0" loading="lazy" src={image2} alt="Our Approach"/>
                                    <div className="card-body border bg-white p-4">
                                        <div className="entry-header mb-3">
                                            <h2 className="card-title entry-title h4 mb-0">
                                                <a className="link-dark text-decoration-none" href="#!">Our Approach</a>
                                            </h2>
                                        </div>
                                        <p className="card-text entry-summary text-secondary mb-3">Welcome to our design agency, where creativity knows no bounds and innovation takes center stage. We are a team of dedicated designers, strategists, and visionaries with a passion for transforming ideas into captivating visuals.</p>
                                    </div>
                                </div>
                            </article>
                        </div>
                    </div>
                </div>
            </section>
            <Service></Service>
        </div>
    )
}

export default About;
