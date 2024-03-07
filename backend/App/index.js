var express = require('express');
const cors = require('cors');
var app = express();
app.use(cors({ origin: '*' }));
app.use(express.json());

module.exports = app