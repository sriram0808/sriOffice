import { BrowserRouter,Routes, Route, Navigate} from "react-router-dom";
import Nav from "./Components/Nav";
import Submitform from "./Components/Submitform";
import Mobile from "./Pages/Mobileapp";
import Webdevelopment from "./Components/WebDevelopment";
import Uiux from "./Components/Uiux";
import Aidevelopment from "./Components/Aidevelopment";
import Cripto from "./Components/Cripto";
import Neft from "./Components/Neft";
import { ToastContainer } from "react-toastify";
import Homepage from "./Pages/Home";
import Discover from "./Pages/Discover";
import Aboutpage from "./Pages/Aboutpage";
import Servicepage from "./Pages/Servicepage";
import Careerpage from "./Pages/Careerpage";
import Contactpages from "./Pages/Contactpage";
import Privacypolicy from "./Components/Privacypolicy";
import Termsandconditions from "./Components/Termsandcondition";
import Pagenotfound from "./Components/Pagenotfound";
import { useEffect, useState } from "react";
import Preloader from "./Components/Preloader";


let App =()=>{
    const [loading, setLoading] = useState(true);

    useEffect(() => {
      const handleImageLoad = () => {
        const images = document.querySelectorAll('img');
        const totalImages = images.length;
        let imagesLoaded = 0;
  
        images.forEach((img) => {
          if (img.complete) {
            imagesLoaded++;
          } else {
            img.addEventListener('load', () => {
              imagesLoaded++;
              if (imagesLoaded === totalImages) {
                setLoading(false); // Hide preloader when all images are loaded
              }
            });
          }
        });
  
        if (imagesLoaded === totalImages) {
          setLoading(false); // If all images are already loaded
        }
      };
  
      // Check if images are loaded after component is mounted
      handleImageLoad();
    }, []);

    if(loading){
        return <Preloader/>
    }
 
    return (

        <div>
             <Nav></Nav>
              <ToastContainer />
                <BrowserRouter>                  
                  <Routes>          

                    <Route element={<Homepage />} path="/"></Route>
                    <Route element={<Homepage />} path="homepage"></Route>
                    <Route element={<Aboutpage />} path="/about"></Route>
                    <Route element={<Servicepage />} path="/service"> </Route>
                    <Route element={<Careerpage />} path="/career"></Route>
                    <Route element={<Contactpages />} path="/contact"></Route>
                    <Route element={<Submitform />} path="/apply"></Route>
                    <Route element={<Navigate to="/service" />} path="/services"> </Route>

                    <Route element={<Mobile />} path="/service/mobileapp"></Route>
                    <Route element={<Navigate to="/service/mobileapp" />} path="/mobileapp"></Route>

                    <Route element={<Webdevelopment />} path="/service/webdesign"></Route>
                    <Route element={<Navigate to="/service/webdesign" />} path="/webdevelopment"></Route>

                    <Route element={<Uiux />} path="/service/uiux"></Route>

                    <Route element={<Aidevelopment />} path="/service/aidevelopment"></Route>
                    <Route element={<Navigate to="/service/aidevelopment" />} path="/aidevelopment"></Route>

                    <Route element={<Cripto />} path="/service/crypto"></Route>
                    <Route element={<Navigate to="/service/crypto" />} path="/service/cripto"></Route>
                    <Route element={<Navigate to="/service/crypto" />} path="/cripto"></Route>

                    <Route element={<Neft />} path="/service/nft"></Route>
                    <Route element={<Navigate to="/service/nft" />} path="/neft"></Route>

                    <Route element={<Discover />} path="/discover"></Route>
                    <Route element={<Privacypolicy />} path="/privacypolicy"></Route>
                    <Route element={<Termsandconditions />} path="/termsandconditions"></Route>

                    <Route element={<Pagenotfound />} path="*"/>
                  </Routes>
                </BrowserRouter>
        </div>
    );
}
export default App