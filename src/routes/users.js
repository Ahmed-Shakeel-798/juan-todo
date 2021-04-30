const db = require("../db");
const express = require("express");

const router = express.Router();

router.get('/all', async (req, res, next) => {
    try {

        const results = await db.query(
            "SELECT * FROM users"
        );
        return res.json(results.rows);


    } catch (error) {
        console.log(error);
        res.status(400).send({ error: error });
    }
})

router.post('/', async (req, res, next) => {
    try {
        const { name, password } = req.body;

        const result = await db.query(
            `INSERT INTO users (name, password) 
               VALUES ($1, $2)
               RETURNING id, name, password`,
            [name, password]
        );

        return res.status(201).send(result.rows[0]);
        
    } catch (error) {
        res.status(400).send({ error: error });
    }
});




module.exports = router;