const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

/**
 * GET route
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

router.get('/:id', (req, res) => {
    let queryText = `SELECT * FROM "shows" 
                      WHERE "id" = $1`;
    pool.query(queryText, [req.params.id])
      .then((result) => {
        // Return the first item in the array (object)
        res.send(result.rows[0]);
      })
      .catch((error) => {
        console.log(error);
        res.sendStatus(500);
    });
});

/**
 * POST route
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
    res.sendStatus(403); // forbidden
  }
});

/**
 * PUT route
 */
router.put('/:id', (req, res) => {
  if(req.isAuthenticated()) {
    // user is logged in
    const queryText = `UPDATE "shows" 
                        SET "artist" = $1, "support" = $2, "venue" = $3, "date" = $4, "notes" = $5
                        WHERE "id" = $6 AND "user_id" = $7;`
    pool.query(queryText, [req.body.artist, req.body.support, req.body.venue, req.body.date, req.body.notes, req.params.id, req.user.id])
      .then(results => {
        res.sendStatus(200);
      }).catch(error => {
        console.log(error);
        res.sendStatus(500);
      })
  } else {
    res.sendStatus(403); // forbidden
  }
})

/**
 * DELETE route
 */
router.delete('/:id', (req, res) => {
  if(req.isAuthenticated()) {
      // The user is logged in
      const queryText = `DELETE FROM "shows" WHERE "id" = $1 AND "user_id" = $2`;
      pool.query(queryText, [req.params.id, req.user.id])
        .then(results => {
          res.sendStatus(200);
        }).catch(error => {
          console.log(error);
          res.sendStatus(500);
        })
  } else {
      res.sendStatus(403); // forbidden
  }
});


module.exports = router;
