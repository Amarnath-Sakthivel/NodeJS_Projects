'use strict'

const process = require('process')
require('./src/server.js')



//exit from server
process.on('SIGINT', () => {
    console.log('server terminated successfully');
    process.exit(0);
  });