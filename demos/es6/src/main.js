const _ = require('lodash');
const request = require('request');

function getUrl() {
    return new Promise((resolve, reject) => {
        request('https://www.google.com', (error, res, data) => {
            if (error) return reject(error);

            resolve(data);
        });
    });
}

(async () => {
    try {
        let html = await getUrl();
        console.log(html);
    } catch (e) {
        console.log(e);
    }
})();