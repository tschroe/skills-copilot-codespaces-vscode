// Create web server with express.js
const express = require('express');
const app = express();
const port = 3000;

// Use the express.json() middleware to parse the body of the request
app.use(express.json());

// Create an array to store the comments
const comments = [];

// Create a route that returns the comments
app.get('/comments', (req, res) => {
  res.json(comments);
})
