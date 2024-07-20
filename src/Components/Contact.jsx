import "../Assets/Css/Contact.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect, useState } from "react";
import { UserFormUpload } from "../Authiapis/backendcall";
import "react-toastify/dist/ReactToastify.css";
import toast, { Toaster } from "react-hot-toast";

let Contact = () => {
  const [formData, setFormData] = useState({
    fullname: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

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

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validateForm(formData);
    if (Object.keys(validationErrors).length === 0) {
      // Clear any previous errors
      setErrors({});
      //   console.log(formData);
      // await axios.post('http://localhost:3002/uploaddata', formData)
      await UserFormUpload(formData)
        .then((res) => {
          // console.log("respose --- ", res);
          notifySuccess(res.message);
          setFormData({
            fullname: "",
            email: "",
            phone: "",
            subject: "",
            message: "",
          });
          // console.log("Form submitted successfully");
        })
        .catch((err) => {
          if (err.response) {
            notifyError(err.response.data.message);
          } else {
            notifyError(err.message);
          }
          // console.log("err--", err);
        });
    } else {
      setErrors(validationErrors);
    }
  };
  const validateForm = (data) => {
    let errors = {};

    // Full Name validation
    if (!data.fullname.trim()) {
      errors.fullname = "Full Name is required";
    }

    // Email validation
    if (!/\S+@\S+\.\S+/.test(data.email)) {
      errors.email = "Invalid Email address";
    }

    // Phone validation (optional)
    if (!data.phone) {
      errors.phone = "Phone Number is required";
    } else if (!/^\d{10}$/.test(data.phone)) {
      errors.phone = "Invalid Phone number";
    }

    // Subject validation
    if (!data.subject.trim()) {
      errors.subject = "Subject is required";
    }

    // Message validation
    if (!data.message.trim()) {
      errors.message = "Message is required";
    }

    return errors;
  };
  useEffect(() => {
    AOS.init({ duration: 500 });
  }, []);

  return (
    <div className="">
      <Toaster position="top-right" reverseOrder={false} />
      <section
        className="py-3 py-md-5 py-xl-8 contactBack"
        style={{ backgroundColor: " #000000" }}
      >
        <div className="container">
          <div className="row">
            <div className="text-center contactpage pb-3" data-aos="fade-in">
              <h1 className="fs-5 mb-2  contactTitle  ">Contact Us</h1>
              <h2 className="display-5 mb-4 mb-md-5 mb-xl-8 contact contactSubTitle">
                Our Experts Ready to Action your Business Analysis, for that you
                Contact us.
              </h2>
            </div>
          </div>
        </div>
        <div className=" container map">
          <div className="container contactus">
            <div className="row gy-4 gy-md-5 gy-lg-0 align-items-md-center">
              <div className="col-12 col-lg-6">
                <div
                  className=" overflow-hidden  formBack"
                  data-aos="fade-right"
                >
                  <form onSubmit={handleSubmit}>
                    <div className="row gy-4 gy-xl-5 p-4 p-xl-5">
                      <div className="col-12">
                        <label
                          htmlFor="fullname"
                          className="form-label "
                          style={{ color: "white" }}
                        >
                          Full Name <span className="text-danger">*</span>
                        </label>
                        <input
                          type="text"
                          className="form-control formName"
                          id="fullname"
                          name="fullname"
                          value={formData.fullname}
                          placeholder="Enter name"
                          onChange={handleChange}
                        />
                        {errors.fullname && (
                          <div className="text-danger">{errors.fullname}</div>
                        )}
                      </div>
                      <div className="col-12 col-md-6">
                        <label
                          htmlFor="email"
                          className="form-label"
                          style={{ color: "white" }}
                        >
                          Email <span className="text-danger">*</span>
                        </label>
                        <div className="input-group">
                          <input
                            type="email"
                            className="form-control formEmail"
                            id="email"
                            name="email"
                            value={formData.email}
                            placeholder="Enter email"
                            onChange={handleChange}
                          />
                        </div>
                        {errors.email && (
                          <div className="text-danger">{errors.email}</div>
                        )}
                      </div>
                      <div className="col-12 col-md-6">
                        <label
                          htmlFor="phone"
                          className="form-label"
                          style={{ color: "white" }}
                        >
                          Phone Number <span className="text-danger">*</span>
                        </label>
                        <div className="input-group">
                          <input
                            type="number"
                            className="form-control formPhone"
                            id="phone"
                            name="phone"
                            value={formData.phone}
                            placeholder="Enter phone no"
                            onChange={handleChange}
                          />
                        </div>
                        {errors.phone && (
                          <div className="text-danger">{errors.phone}</div>
                        )}
                      </div>
                      <div className="col-12">
                        <label
                          htmlFor="subject"
                          className="form-label"
                          style={{ color: "white" }}
                        >
                          Subject <span className="text-danger">*</span>
                        </label>
                        <input
                          type="text"
                          className="form-control formSubject"
                          id="subject"
                          name="subject"
                          value={formData.subject}
                          placeholder="Enter your subject"
                          onChange={handleChange}
                        />
                        {errors.subject && (
                          <div className="text-danger">{errors.subject}</div>
                        )}
                      </div>
                      <div className="col-12">
                        <label
                          htmlFor="textArea"
                          className="form-label"
                          style={{ color: "white"}}
                        >
                          Project Breif <span className="text-danger">*</span>
                        </label>
                        <textarea
                          className="form-control formMessage"
                          id="textArea"
                          name="message"
                          rows="3"
                          value={formData.message}
                          placeholder="Write your project brief"
                          onChange={handleChange}
                        ></textarea>
                        {errors.message && (
                          <div className="text-danger">{errors.message}</div>
                        )}
                      </div>
                      <div className="col-12">
                        <div className="d-grid d-flex justify-content-center">
                          <button
                            className="btn sendMessageButton btn-lg"
                            type="submit"
                          >
                            Send Message
                          </button>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
              <div className="col-12 col-lg-6 ">
                <div
                  className="row justify-content-xl-center informationBack"
                  data-aos="fade-right"
                >
                  <div className="col-12 col-xl-11">
                    <div className="mb-4 mb-md-5 officeBack">
                      <div className="col-12 col-lg-2 mb-3">
                        <img
                          src="https://res.cloudinary.com/deowghzbg/image/upload/v1719644899/officeIcon_mx7exy.png"
                          alt="Office Icon"
                          className="img-fluid"
                          style={{ height: "40px" }}
                        />
                      </div>
                      <div>
                        <h4 className="mb-2 officeLabel">Office</h4>
                        <p className="mb-2 officeQuote">
                          {" "}
                          Visit us to have a discussion.
                        </p>
                        <hr className="w-50 mb-3 border-dark-subtle" />
                        <address className="m-0 officeDetail">
                          {" "}
                          21, Pandian St, T V S Nagar, Madurai,Tamil Nadu 625003
                        </address>
                      </div>
                    </div>
                    <div className="row mb-sm-4 mb-md-5">
                      <div className="col-12 col-sm-6">
                        <div className="mb-4 mb-sm-0">
                          <div className="col-12 col-lg-2 mb-3">
                            <img
                              src="https://res.cloudinary.com/deowghzbg/image/upload/v1719644901/phoneIcon_njcmed.png"
                              alt="Phone Icon"
                              className="img-fluid"
                              style={{ height: "40px" }}
                            />
                          </div>
                          <div>
                            <h4 className="mb-2 phoneLabel">Phone</h4>
                            <p className="mb-2 phoneQuote">
                              {" "}
                              Speak with us directly.
                            </p>
                            <hr className="w-75 mb-3 border-dark-subtle" />

                            <div className="number phoneDetail">
                              <p>+91 8870854141</p>
                              <p>+ 04524207281</p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-12 col-sm-6">
                        <div className="mb-4 mb-sm-0">
                          <div className="col-12 col-lg-2 mb-3">
                            <img
                              src="https://res.cloudinary.com/deowghzbg/image/upload/v1719644939/emailIcon_pscotu.png"
                              alt="Email Icon"
                              className="img-fluid"
                              style={{ height: "40px" }}
                            />
                          </div>
                          <div>
                            <h4 className="mb-2 emailLabel">Email</h4>
                            <p className="mb-2 emailQuote">
                              {" "}
                              Write to us directly.
                            </p>
                            <hr className="w-75 mb-3 border-dark-subtle" />
                            <p className="mb-0">
                              <a
                                className=" text-decoration-none emailDetail"
                                href="/"
                              >
                                thamizhan1630@gmail.com
                              </a>
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div>
                      <div className="col-12 col-lg-2 mb-3">
                        <img
                          src="https://res.cloudinary.com/deowghzbg/image/upload/v1719644930/clockIcon_udkcai.png"
                          alt="Clock Icon"
                          className="img-fluid"
                          style={{ height: "40px" }}
                        />
                      </div>
                      <div>
                        <h4 className="mb-2 openingLabel">Opening Hours</h4>
                        <p className="mb-2 openingQuote">
                          Explore our business opening hours.
                        </p>
                        <hr className="w-50 mb-3 border-dark-subtle" />
                        <div className="d-flex mb-1 openingDetail">
                          <p className=" fw-bold mb-0 me-5">Mon - Sat</p>
                          <p className=" mb-0">9am - 6.30pm</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="map">
            <iframe
              title="Thamizhan Solutions Office"
              width="100%"
              height="400"
              src="https://maps.google.com/maps?width=100%25&amp;height=400&amp;hl=en&amp;q=21,%20Pandian%20Street,%20TVS%20nagar%20Madurai+(Thamizhan%20Solutions)&amp;t=m&amp;z=13&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
            ></iframe>
          </div>
        </div>
      </section>
    </div>
  );
};
export default Contact;
