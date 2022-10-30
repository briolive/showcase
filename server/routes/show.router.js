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
    let queryText = `SELECT * FROM "show" 
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
});

module.exports = router;
