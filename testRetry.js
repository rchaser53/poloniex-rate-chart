const { retryAxios } = require('./src/js/retryAxios')

retryAxios.get('/some/endpoint', { retry: 5, retryDelay: 1000 })
    .then(function(res) {
        console.log('success', res.data);
    })
    .catch(function(err) {
        console.log('failed', err);
    });