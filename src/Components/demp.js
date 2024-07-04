  <div className='container-fluid footer'>
      <div className="row" >
        <div className='col-12 col-lg-4  py-4 py-md-5 py-xxl-8 footerBlock'>
          <div className="row h-70 align-items-end justify-content-center">
            <div className="col-12 col-md-11 col-xl-10 footer-con">
              <div className="footer-logo-wrapper m-3">
                <a href="#!">
                  <img src={logo} alt="Company Logo" width="179" height="60"/>
                </a>
              </div>
              <div className="col footer-col mx-4">
                <h1> Follow Us </h1>
                    <div className="social-links my-4">
                       <a href="/"><FaFacebook/></a>
                       <a href="/"><FaInstagram/></a>
                       <a href="/"><FaTwitter/> </a>
                       <a href="https://www.linkedin.com/company/101978309/admin/inbox/thread/2-YjU4MDVhNDUtMTEyMC00NzUxLWE0YjAtZWEyY2IwYjlhN2U2XzAxMA==/"><FaLinkedin/> </a>
                    </div>
                </div>
             
              <div className="mx-4 my-4">
                <address className="mb-2 m-1 text-white fw-bold">Address  :   <span className="fw-light" style={{color:'grey'}}>21, Pandian St, T V S Nagar, Madurai, <br/> Tamil Nadu 625003</span> </address>
                <p className="mb-2">
                  <a className="link-light text-decoration-none fw-bold" href="#">Phone :   <span className="fw-light">+91 9876543210</span> </a>
                </p>
                <p className="mb-0">
                  <a className="link-light text-decoration-none fw-bold" href="#">Email    :   <span className="fw-light">abc@gmail.com</span> </a>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="col-12 col-lg-8 bg-dark py-4 py-md-5 py-xxl-8 ">
          <div className="row justify-content-center">
            <div className="col-12 col-md-11 col-xxl-10">
              <div className="row row-cols-md-3 row-cols-sm-2 row-cols-1 gy-4 gy-sm-0">
                <div className="col">
                  <div className=' mx-5'>
                    <h4 className="widget-title mb-4 text-white ">Services</h4>
                    <ul className="list-unstyled">
                      <li className="mb-3">
                      <Link to="/mobileapp" className="link-secondary text-decoration-none" path="/mobileapp"><GoArrowRight /> Mobile Development</Link>
                      </li>
                      <li className="mb-3">
                      <Link to="/webdevelopment" className="link-secondary text-decoration-none" ><GoArrowRight /> Web Development</Link>
                      </li>
                      <li className="mb-3">
                      <Link to="/uiux" className="link-secondary text-decoration-none"><GoArrowRight /> UI/UX Development</Link>
                      </li>
                      <li className="mb-3">
                      <Link to="aidevelopment" className="link-secondary text-decoration-none"><GoArrowRight /> AI Development</Link>
                      </li>
                      <li className="mb-3">
                      <Link to="/cripto" className="link-secondary text-decoration-none"><GoArrowRight /> Crypto Trading</Link>
                      </li>
                      <li className="mb-3">
                      <Link to="/neft" className="link-secondary text-decoration-none"><GoArrowRight /> NFT Marketing</Link>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col">
                  <div className='mx-5'>
                    <h4 className="widget-title mb-4 text-white">Company</h4>
                    <ul className="list-unstyled ">
                      <li className="mb-3">
                        <Link to="/" className="link-secondary text-decoration-none"><GoArrowRight /> Home</Link>
                      </li>
                      <li className="mb-3">
                      <Link to="/about" className="link-secondary text-decoration-none"><GoArrowRight /> About</Link>
                      </li>
                      <li className="mb-3">
                      <Link to="/service" className="link-secondary text-decoration-none"><GoArrowRight /> Services</Link>
                      </li>
                      <li className="mb-3">
                      <Link to="/careers" className="link-secondary text-decoration-none"><GoArrowRight /> Careers</Link>
                      </li>
                      <li className="mb-3">
                      <Link to="/contactus" className="link-secondary text-decoration-none"><GoArrowRight /> Contact Us</Link>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col ">
                  <div className="widget mx-5">
                    <h4 className="widget-title mb-4 text-white">Our Newsletter</h4>
                    <p className="mb-4   fw-lighter" style={{color:"grey"}}>Never miss out on our company's latest news, updates, and exclusive offers! Subscribe to our newsletter today and get the inside scoop delivered straight to your inbox.</p>
                    <form action="#!">
                      <div className="row gy-4">
                        <div className="col-12">
                          <div className="input-group">
                           
                            <input type="email" className="form-control" id="email-newsletter"  placeholder="email" aria-label="email-newsletter" aria-describedby="email-newsletter-addon" required />
                          </div>
                        </div>
                        <div className="col-12">
                          <div className="d-grid">
                            <button className="btn btn-primary" type="submit">Subscribe</button>
                          </div>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
              
              <div className="row mt-6 border-top border-light-subtle my-5 mx-5">
                <div className="footer-copyright-wrapper link-secondary my-4">
                  &copy; copyrights <span className="fw-bold text-white">Thamizhan Solutions</span> All Rights Reserved.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div> 

