import errorImage from "../Assets/Images/errorpage.png";
import "../Assets/Css/Pagenotfound.css";

let Pagenotfound = () => {
    return (
        <div className="errorPage">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-lg-12 d-flex flex-column align-items-center justify-content-center text-center">
                        <img loading="lazy" src={errorImage} alt="404 Error Image" title="Not found" className="img-fluid dogyImage" />
                        <h2 className="errorTitle">404 Page not found</h2>
                        <a href="/" className="backLink">Back to home</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Pagenotfound;