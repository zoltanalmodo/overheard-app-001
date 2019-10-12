import axios from 'axios';

export default axios.create ({

    baseURL: '192.168.1.81:5000/api/auth'

});

