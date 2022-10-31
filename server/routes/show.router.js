const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

/**
 * GET route template
 */
router.get('/', (req, res) => {
  console.log('is authenticated?', req.isAuthenticated());
  console.log('user id', req.user.id);
  if(req.isAuthenticated()) {
    let queryText = `SELECT * FROM "shows" 
                      WHERE "user_id" = $1
                      ORDER BY "date" DESC`;
    pool.query(queryText, [req.user.id]).then((result) => {
      res.send(result.rows);
    }).catch((error) => {
      console.log(error);
      res.sendStatus(500);
    });
  } else {
    // if not logged in, send forbidden
    res.sendStatus(403);
  }
});

/**
 * POST route template
 */
router.post('/', (req, res) => {
  // POST route code here
  console.log('/api/show POST route');
  console.log(req.body);
  console.log('is authenticated?', req.isAuthenticated());
  console.log('user', req.user);
  if (req.isAuthenticated()) {
    const queryText = `INSERT INTO "shows"
                        ("artist", "support", "venue", "date", "notes", "user_id")
                        VALUES ($1, $2, $3, $4, $5, $6)`;
  pool.query(queryText, [req.body.artist, req.body.support, req.body.venue, req.body.date, req.body.notes, req.user.id]).then(() => {
    res.sendStatus(201);
  }).catch((e) => {
    res.sendStatus(500);
  })
  } else {
    res.sendStatus(403); // Forbidden
  }
});

module.exports = router;
