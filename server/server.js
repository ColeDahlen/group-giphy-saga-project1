const express = require('express');
const bodyParser = require('body-parser');
const axios = require('axios');
require('dotenv').config();

const gifyApiKey = process.env.api_key

const app = express();
// App PORT set with production check
const PORT = process.env.PORT || 5000;

// Route includes
const favoriteRouter = require('./routes/favorite.router');
const categoryRouter = require('./routes/category.router');

// Body parser middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Serve static files
app.use(express.static('build'));

// Routes
app.use('/api/favorite', favoriteRouter);
app.use('/api/category', categoryRouter);
app.post('/api/search', (req, res) => {
  // console.log(req.body.userInput);
  axios({
    method: 'GET',
    url: `api.giphy.com/v1/gifs/search?api_key:${gifyApiKey}&q:${req.body.userInput}`
  }).then((response) => {
    res.send(response.data)
  }).catch((error) => {
    console.log('Error in server GET', error);
    res.sendStatus(500);
  })
}) 


// Listen
app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`);
});
