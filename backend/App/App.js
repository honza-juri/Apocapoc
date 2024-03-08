const express = require('express');
const app = require('./index');
const config = require('./config')
const path = require('path')
const dotenv = require('dotenv');

dotenv.config();

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
    console.log(`A szerver fut | http://localhost:${PORT}`);
})