"use strict";

const http         = require('http');
const finalhandler = require('finalhandler');
const Router       = require('router');

const router = new Router();

router.get('/', (request, response) => {
  // A good place to start!
  response.end();
});

const server = http.createServer((request, response) => {
  router(request, response, finalhandler(request, response));
});

exports.listen = function(port, callback) {
  server.listen(port, callback);
};

exports.close = function(callback) {
  server.close(callback);
};
