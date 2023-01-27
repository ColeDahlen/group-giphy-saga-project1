const express = require('express');
const pool = require('../modules/pool');

const router = express.Router();

router.get('/', (req, res) => {
  // return all categories
  const queryText = `SELECT * FROM category ORDER BY name ASC`;
  pool
    .query(queryText)
    .then((result) => {
      res.send(result.rows);
    })
    .catch((error) => {
      console.log(`Error on query ${error}`);
      res.sendStatus(500);
    });
});


router.put('/:id', (req, res) => {
  console.log(req.params.id);
  console.log(req.body.category);
  const idToUpdate = req.params.id;
  const categoryToUpdate = req.body.category;
  const sqlQuery = `
    UPDATE "favorites"
      SET "category_id" = $1
      WHERE "id" = $2;
  `;
  const sqlValues = [categoryToUpdate, idToUpdate];
  pool.query(sqlQuery, sqlValues)
  .then((dbRes) => {
    res.sendStatus(200);
  })
  .catch((error) => {
    console.log('error in /api/category PUT', error);
    res.sendStatus(500);
  })
})

module.exports = router;
