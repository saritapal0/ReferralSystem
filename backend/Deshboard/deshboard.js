const express = require('express');
const db = require("../db")

const app = express();

app.get('/api/users/dashboard', (req, res) => {
    db.query('SELECT * FROM user', (err, results, fields) => {
        if (err) return res.json({ Message: "Error inside server" });
        return res.json(results);
    })
});


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
