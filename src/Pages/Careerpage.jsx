import React from "react";
import Home from "../Components/Home";
import About from "../Components/About";
import Service  from "../Components/Service";
import Carrers from "../Components/Carrers";
import Contact from "../Components/Contact";
import Footer from "../Components/Footer";
import Contactpage from "../Components/Contactpage";
function Careerpage(){
    return(
        <div className="homepage">
            
            <Carrers/>
            <Contactpage/>
            <Contact/>
            <Footer/>
            

        </div>
    )
}
export default Careerpage