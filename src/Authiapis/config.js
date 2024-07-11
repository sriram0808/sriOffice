let environment = "local";
let config = null;

if (environment === "local") {
    config = {
        BACKEND_URL:"http://localhost:3002/"
    };  
    
} else if (environment === "demo") {
    config = {
        BACKEND_URL:"https://api.thamizhansolution.com"
      
    };
}

export default config;