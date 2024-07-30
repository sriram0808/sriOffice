import React, { useState } from "react";
import { IoMdClose } from "react-icons/io";
import "../Assets/Css/navbar.css"
import { CgMenuRightAlt } from "react-icons/cg";
import logo from "../Assets/Images/ThamizhanSolutions.png"

function NavBar() {
  const closeMenu=()=> setClick(false)
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
        
  // const [click, setClick] = useState(false);

  // const handleClick = () => setClick(!click);
  const [colorChange, setColorchange] = useState(false);
  const changeNavbarColor = () => {
      if (window.scrollY >= 80) {
          setColorchange(true);
      } else {
          setColorchange(false);
      }
  };
  window.addEventListener("scroll", changeNavbarColor);

  return (
    <>
      <nav  
       className={
        colorChange
            ? "navbar colorChange sticky-top "
            : "navbar sticky-top"
    }
      //  className="navbar sticky-top"
       >
        <div className="nav-container">
         
          <div className="nav-logo">
          {/* <a href="/"><img src="https://res.cloudinary.com/deowghzbg/image/upload/v1720176833/TSolu_ugibmk.png" alt="Thamizhan Solutions Logo" className="logo"/></a> */}
          <a href="/"><img src={logo} alt="Thamizhan Solutions Logo" /></a>
          

          </div>

          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <a href="/" className="nav-links">Home </a>
            </li>
           
            <li className="nav-item">
               <a href="/about" className="nav-links">About </a>
            </li>
            <li className="nav-item">
                    <a href="/service" className="nav-links">Services</a>
            </li>
            <li className="nav-item">
                    <a href="/career" className="nav-links">Careers</a>
            </li>
            <li className="nav-item">
                    <a href="/contact" className="nav-links">Contact</a>
            </li>
          </ul>
          <div className="nav-icon" onClick={handleClick}>
            {click ? (
              <span className="icon">
                  <IoMdClose />{" "}
              </span>
            ) : (
              <span className="icon">
            <CgMenuRightAlt />
              </span>
            )}
          </div>
        </div>
      </nav>
    </>
  );
}
export default NavBar;