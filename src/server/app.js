const express = require('express');
const path = require('path');

const app = express();

app.use(express.static(path.resolve('src', 'client')))

app.get('/', (request, response) => {
  response.sendFile(path.resolve('src', 'client/views/index.html'));
})



module.exports = app;