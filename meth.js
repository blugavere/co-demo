const axios = require('axios');

const app = () => {
    return axios.get('http://www.google.com');
};

module.exports = app;
