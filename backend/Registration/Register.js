const express = require('express');
const router = express();

const db = require('../db')

router.post('/register', (req, res) => {
    const { username, email, password, parentCode } = req.body;
    const values = [username, email, password, parentCode]; 
    db.query("INSERT INTO user (username, email, password, parentCode) VALUES (?, ?, ?, ?)", values, (err, result) => {
        if (!req.body) return res.json(err);
        return res.json({
            success: true,
            result,
            message: 'User registered successfully'
        });
    });
});

module.exports = router;