const express = require('express');
const pool = require('../modules/pool');

const router = express.Router();

// return all favorite images
router.get('/', (req, res) => {
  const sqlQuery = `
    SELECT favorites.*, category.name FROM "favorites"
      LEFT JOIN "category"
        ON favorites.category_id = categore.id
      ORDER BY id;
  `;
  pool.query(sqlQuery)
  .then((dbRes) => {
    res.send(dbRes.rows);
    res.sendStatus(200);
  })
  .catch((error) => {
    console.log('error in /api/favorite GET', error);
    console.log(500);
  })
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
    res.sendStatus(202);
  })
  .catch((error) => {
    console.log('error in /api/favorite POST', error);
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
