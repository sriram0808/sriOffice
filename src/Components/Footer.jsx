import "../Assets/Css/Footer.css";
import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import axios from "axios";
import config from "../Authiapis/config";

let Footer = () => {
  const closeMenu = () => setClick(false);
  const [click, setClick] = useState(false);

  const [subscriberEmail, setSubscriberemail] = useState("");
  const notifyError = (msg) =>
    toast.error(msg, {
      style: {
        background: "#333",
        color: "#fff",
      },
    });
  const notifySuccess = (msg) =>
    toast.success(msg, {
      style: {
        background: "#333",
        color: "#fff",
      },
    });

  // Subscribe function
  const handleSubscribe = async (event) => {
    event.preventDefault();
    if (!subscriberEmail == "") {
      await axios
        .post(`${config.BACKEND_URL}new/email/subscribe`, {
          email: subscriberEmail,
        }) // env variable
        .then((res) => {
          setSubscriberemail("");
          if (res.data.status) {
            notifySuccess(res.data.message);
          } else {
            notifyError(res.data.message);
          }
        })
        .catch((err) => {
          if (err.response) {
            notifyError(err.response.data.message);
          } else {
            notifyError(err.message);
          }
        });
    } else {
      notifyError("Please enter email");
    }
  };

  return (
    <div className="footer container-fluid">
      <Toaster position="top-right" reverseOrder={false} />
      <div className="row footerBack">
        <div className="col-12 col-lg-4  py-4 py-md-5 py-xxl-8   footerBlock">
          <div className="row h-70 align-items-end justify-content-center">
            <div className="col-12 col-md-11 col-xl-10 footer-con">
              <div className="footer-logo-wrapper">
                <a href="/">
                  <img
                    src="https://res.cloudinary.com/deowghzbg/image/upload/v1720176833/TSolu_ugibmk.png"
                    alt="Thamizhan Solution Logo"
                    width="179"
                    height="60"
                  />
                </a>
              </div>
              <div className="col footer-col mx-1 my-4">
                <h1> Follow Us </h1>
                <div className="social-links my-4">
                  <div className="social-div">
                    <a href="https://www.facebook.com/profile.php?id=61562459455004&mibextid=JRoKGi">
                      <img
                        src="https://res.cloudinary.com/deowghzbg/image/upload/v1719644940/faceBook_mzumxj.png"
                        alt="FaceBook Icon"
                        className="img-fluid "
                        style={{ height: "40px" }}
                      />{" "}
                    </a>
                    <h6>Facebook</h6>
                  </div>
                  <div className="social-div">
                    <a href="https://www.instagram.com/thamizhansolutions?igsh=dWNvb3kyZDJkN2Nm">
                      <img
                        src="https://res.cloudinary.com/deowghzbg/image/upload/v1719644951/insta_siwe70.png"
                        alt="Instagram Icon"
                        className="img-fluid "
                        style={{ height: "40px" }}
                      />{" "}
                    </a>
                    <h6>Instagram</h6>
                  </div>
                  <div className="social-div">
                    <a href="https://x.com/NaveenRaja_R">
                      <img
                        src="https://res.cloudinary.com/deowghzbg/image/upload/v1719644908/twitter_nofcpl.png"
                        alt="Twitter Icon"
                        className="img-fluid"
                        style={{ height: "40px" }}
                      />{" "}
                    </a>
                    <h6>Twitter</h6>
                  </div>
                  <div className="social-div">
                    <a href="https://wa.me/918807829070">
                      <img
                        src="https://res.cloudinary.com/deowghzbg/image/upload/v1719644916/whatsapp_isp6je.png"
                        alt="Whatsapp Icon"
                        className="img-fluid"
                        style={{ height: "40px" }}
                      />{" "}
                    </a>
                    <h6>Whatsapp</h6>
                  </div>
                  <div className="social-div">
                    <a href="https://www.linkedin.com/company/101978309/admin/inbox/thread/2-NmRmNTc4NWUtZGRiZS00Y2IwLTgwNDktNWExNmNiMTNkODc0XzAxMA==/">
                      <img
                        src="https://res.cloudinary.com/deowghzbg/image/upload/v1719644957/linkedin_mlh3ml.png"
                        alt="Linked Icon"
                        className="img-fluid"
                        style={{ height: "40px" }}
                      />{" "}
                    </a>
                    <h6>Linkedin</h6>
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
                        <a
                          href="/mobileapp"
                          className="link-secondary text-decoration-none footerSubTitle"
                        >
                          <img
                            src="https://res.cloudinary.com/deowghzbg/image/upload/v1719644924/arrow_sulfeo.png"
                            alt="arrow Icon"
                            className="img-fluid"
                          />{" "}
                          MobileApp Development{" "}
                        </a>
                      </li>
                      <li className="mb-3">
                        <a
                          href="/webdevelopment"
                          className="link-secondary text-decoration-none footerSubTitle"
                        >
                          <img
                            src="https://res.cloudinary.com/deowghzbg/image/upload/v1719644924/arrow_sulfeo.png"
                            alt="arrow Icon"
                            className="img-fluid"
                          />{" "}
                          Web Development{" "}
                        </a>
                      </li>
                      <li className="mb-3">
                        <a
                          href="/uiux"
                          className="link-secondary text-decoration-none footerSubTitle"
                        >
                          <img
                            src="https://res.cloudinary.com/deowghzbg/image/upload/v1719644924/arrow_sulfeo.png"
                            alt="arrow Icon"
                            className="img-fluid"
                          />{" "}
                          UI/UX Development{" "}
                        </a>
                      </li>
                      <li className="mb-3">
                        <a
                          href="/aidevelopment"
                          className="link-secondary text-decoration-none footerSubTitle"
                        >
                          <img
                            src="https://res.cloudinary.com/deowghzbg/image/upload/v1719644924/arrow_sulfeo.png"
                            alt="arrow Icon"
                            className="img-fluid"
                          />{" "}
                          AI Development{" "}
                        </a>
                      </li>
                      <li className="mb-3">
                        <a
                          href="/cripto"
                          className="link-secondary text-decoration-none footerSubTitle"
                        >
                          <img
                            src="https://res.cloudinary.com/deowghzbg/image/upload/v1719644924/arrow_sulfeo.png"
                            alt="arrow Icon"
                            className="img-fluid"
                          />{" "}
                          Crypto Trading{" "}
                        </a>
                      </li>
                      <li className="mb-3">
                        <a
                          href="/neft"
                          className="link-secondary text-decoration-none footerSubTitle"
                        >
                          <img
                            src="https://res.cloudinary.com/deowghzbg/image/upload/v1719644924/arrow_sulfeo.png"
                            alt="arrow Icon"
                            className="img-fluid"
                          />{" "}
                          NFT Marketing{" "}
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className=" col-sm-3">
                  <div className="mx-1">
                    <h4 className="widget-title mb-4 footerTitle">Company</h4>
                    <ul className="list-unstyled company">
                      <li className="mb-3">
                        <a
                          href="/"
                          className="link-secondary text-decoration-none footerSubTitle"
                        >
                          <img
                            src="https://res.cloudinary.com/deowghzbg/image/upload/v1719644924/arrow_sulfeo.png"
                            alt="arrow Icon"
                            className="img-fluid"
                          />{" "}
                          Home
                        </a>
                      </li>

                      <li className="mb-3">
                        <a
                          href="/about"
                          className="link-secondary text-decoration-none footerSubTitle"
                        >
                          <img
                            src="https://res.cloudinary.com/deowghzbg/image/upload/v1719644924/arrow_sulfeo.png"
                            alt="arrow Icon"
                            className="img-fluid"
                          />{" "}
                          About
                        </a>
                      </li>
                      <li className="mb-3">
                        <a
                          href="/service"
                          className="link-secondary text-decoration-none footerSubTitle"
                        >
                          <img
                            src="https://res.cloudinary.com/deowghzbg/image/upload/v1719644924/arrow_sulfeo.png"
                            alt="arrow Icon"
                            className="img-fluid"
                          />{" "}
                          Service
                        </a>
                      </li>
                      <li className="mb-3">
                        <a
                          href="/career"
                          className="link-secondary text-decoration-none footerSubTitle"
                        >
                          <img
                            src="https://res.cloudinary.com/deowghzbg/image/upload/v1719644924/arrow_sulfeo.png"
                            alt="arrow Icon"
                            className="img-fluid"
                          />{" "}
                          Career
                        </a>
                      </li>
                      <li className="mb-3">
                        <a
                          href="/contact"
                          className="link-secondary text-decoration-none footerSubTitle"
                        >
                          <img
                            src="https://res.cloudinary.com/deowghzbg/image/upload/v1719644924/arrow_sulfeo.png"
                            alt="arrow Icon"
                            className="img-fluid"
                          />{" "}
                          Contact
                        </a>
                      </li>
                      <li className="mb-3">
                        <a
                          href="/termsandconditions"
                          className="link-secondary text-decoration-none footerSubTitle"
                        >
                          <img
                            src="https://res.cloudinary.com/deowghzbg/image/upload/v1719644924/arrow_sulfeo.png"
                            alt="arrow Icon"
                            className="img-fluid"
                          />{" "}
                          Terms & Condition
                        </a>
                      </li>
                      <li className="mb-3">
                        <a
                          href="/privacypolicy"
                          className="link-secondary text-decoration-none footerSubTitle"
                        >
                          <img
                            src="https://res.cloudinary.com/deowghzbg/image/upload/v1719644924/arrow_sulfeo.png"
                            alt="arrow Icon"
                            className="img-fluid"
                          />{" "}
                          Privacy Policy
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col-12 col-sm-6">
                  <div className="widget mx-0">
                    <h4 className="widget-title mb-4 footerTitle">
                      Our Newsletter
                    </h4>
                    <p className="mb-4    footerSubTitle">
                      Never miss out on our company's latest news, updates, and
                      exclusive offers! Subscribe to our newsletter today and
                      get the inside scoop delivered straight to your inbox.
                    </p>
                    <form action="#!" onSubmit={handleSubscribe}>
                      <div className="row gy-4">
                        <div className="col-12">
                          <div className="input-group">
                            <input
                              type="email"
                              value={subscriberEmail}
                              onChange={(e) => {
                                setSubscriberemail(e.target.value);
                              }}
                              className="form-control subscribeBack"
                              id="email-newsletter"
                              placeholder="Email"
                              aria-label="email-newsletter"
                              aria-describedby="email-newsletter-addon"
                            />
                          </div>
                        </div>
                        <div className="col-12">
                          <div className="d-grid">
                            <button
                              className="btn subscribeButton"
                              type="submit"
                            >
                              Subscribe
                            </button>
                          </div>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
              <div className="row  border-top border-light-subtle my-5 text-center">
                <div className="footer-copyright-wrapper foot my-4">
                  <img
                    src="https://res.cloudinary.com/deowghzbg/image/upload/v1719644931/copyright_refluz.png"
                    alt="Copy Rights Icon"
                    className="img-fluid"
                    style={{ height: "18px" }}
                  />{" "}
                  copyrights{" "}
                  <span className="fw-bold companyName">
                    Thamizhan Solutions
                  </span>{" "}
                  All Rights Reserved.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;