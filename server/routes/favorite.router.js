const express = require('express');
const pool = require('../modules/pool');

const router = express.Router();

// return all favorite images
router.get('/', (req, res) => {
  res.sendStatus(200);
});

// add a new favorite
router.post('/', (req, res) => {
  //console.log to see what we're getting from the client
  //image url should req.body.url
  console.log('here is our req.body.url:', req.body.url);
  const newFavorite = req.body.url;
  const sqlQuery = `
    INSERT INTO "favorites" (url)
      VALUES = $1;
  `;
  const sqlValue = [newFavorite];
  pool.query(sqlQuery, sqlValue)
  .then((response) => {
    //lets hope this works!!
    res.sendStatus(200);
  })
  .catch((error) => {
    console.log('error in /api/favorites POST', error);
    res.sendStatus(500);
  })
});

// update given favorite with a category id
router.put('/:favId', (req, res) => {
  // req.body should contain a category_id to add to this favorite image
  res.sendStatus(200);
});

// delete a favorite
router.delete('/', (req, res) => {
  res.sendStatus(200);
});

module.exports = router;
