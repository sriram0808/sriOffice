let environment = "local";
let config = null;

if (environment === "local") {
    config = {
        // BACKEND_URL:"http://localhost:3002/"
        BACKEND_URL:"https://office-backend-t9je.onrender.com/"
    };  
    
} else if (environment === "demo") {
    config = {
        // BACKEND_URL:"https://api.thamizhansolution.com/"
        // BACKEND_URL:"https://office-backend-t9je.onrender.com/"
    };
}
export default config;