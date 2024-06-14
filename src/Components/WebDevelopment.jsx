import "../Assets/Css/Mobile.css"
import web from "../Assets/Images/wwwwww.png"
import { Link } from "react-router-dom"


let Webdevelopment=()=>{

    return(
      <div className="mobileBack">
      <div className="container">
          <div className="row">
              <div className="col-md-6 d-flex justify-content-center detailsBlock">
                  <div className="align-self-start mt-5">
                    <h2 className="mobileAppTitle">For more details</h2>
                    <Link to="/contact"><button className="btn  moredetailsButton mb-3">More Details</button></Link>
                  </div>
              </div>
              <div className="col-md-6 mb-5 mt-5 content-column rightSideBack">
                  <img src={web} alt="Descriptive Alt Text" className="img-fluid" />
                  <h1 className="mobileAppTitle">Web Development</h1>
                  <h5 className="discrption">Description:</h5>
                   <p className="discrption">
                   React.js is a JavaScript library primarily used for building user interfaces for single-page applications. It allows developers to create reusable UI components that can efficiently update when data changes. React's virtual DOM (Document Object Model) enables fast rendering by updating only the components that have changed. It follows a component-based architecture, making code modular and easier to maintain. React Router is commonly used for client-side routing, enabling navigation within single-page applications. Redux or Context API are often used for state management in larger applications, providing a predictable state container. React Native extends React's capabilities to mobile app development, allowing developers to build cross-platform mobile apps using JavaScript. Node.js is a JavaScript runtime built on Chrome's V8 JavaScript engine. It enables developers to run JavaScript on the server-side, allowing for building scalable and high-performance web applications. Node.js is event-driven and non-blocking, making it suitable for handling asynchronous operations like I/O operations or network requests efficiently. It comes with a vast ecosystem of packages through npm (Node Package Manager), allowing developers to leverage libraries and frameworks to expedite development. Express.js is a popular web framework for Node.js, providing a minimalist and flexible approach for building web applications and APIs. Node.js is commonly used in microservices architecture, real-time applications, and serverless computing platforms like AWS Lambda or Google Cloud Functions. It's known for its performance, scalability, and versatility, making it a preferred choice for building modern web applications and services.
                  </p>
              </div>
          </div>
      </div>
 </div>
    )
}
export default Webdevelopment