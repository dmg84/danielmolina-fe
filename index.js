'use strict';

const fs = require('fs');
const path = require('path');

exports.handler = function (event, context, callback) {
<<<<<<< HEAD
  const contents = fs.readFileSync(`build${path.sep}index.html`);
  const result = {
    statusCode: 200,
    body: contents.toString(),
    headers: {'content-type': 'text/html'}
  };

  callback(null, result);
=======
    const contents = fs.readFileSync(`build${path.sep}index.html`);
    const result = {
        statusCode: 200,
        body: contents.toString(),
        headers: {'content-type': 'text/html'}
    };

    callback(null, result);
>>>>>>> 7e44106961996ffdd79a3999c4c1800a4225a48b
};
