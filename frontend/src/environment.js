let IS_PROD = true;
const server = IS_PROD ?
    "https://apnavideocallbackend-6buu.onrender.com" :

    "http://localhost:8000"


export default server;