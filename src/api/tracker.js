import axios from 'axios';

export default axios.create ({

    // =============================================== WITH ngrok
    // baseURL: 'http://68eb2be5.ngrok.io/api/auth'
    // =============================================== WITH ngrok

    // =============================================== NOOOO ngrok
    baseURL:'http://206.189.28.178:5000/api/auth'
    // =============================================== NOOOO ngrok
});