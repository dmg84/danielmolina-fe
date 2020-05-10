'use strict';

const fs = require('fs');
const path = require('path');

exports.handler = function (event, context, callback) {
    const contents = fs.readFileSync(`build${path.sep}index.html`);
    const result = {
        statusCode: 200,
        body: contents.toString(),
        headers: {'content-type': 'text/html'}
    };

    callback(null, result);
};
