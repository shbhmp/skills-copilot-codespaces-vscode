// create web server
import express from 'express';

const express = require('express');
const path = require('path');
const fs = require('fs');
// 2. create web server
const app = express();
// 3. register request listener
app.get('/index', (request, response) => {
    // response.send('Hello Express');
    // response.end();
    // 1. read the content of comments.html
    fs.readFile(path.join(__dirname, 'comments.html'), 'utf8', (err, data) => {
        if (err) throw err;
        // 2. send the content to the client
        response.send(data);
    });
});
// 4. bind port
app.listen(3000, () => {
    console.log('server is running...');
});