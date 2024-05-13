const express = require('express');
const bodyParser = require('body-parser');
const cors = require("cors")

RegisterRoutes = require("./Registration/Register");
// RefferalRoutes = require('./Referrallink/referral')
//DeshboardRoutes = require('./Deshboard/deshboard')

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware to parse JSON bodies
app.use(cors());
app.use(express.json());
app.use(bodyParser.json());

app.use('/api/users',RegisterRoutes);
// app.use('api/referral',RefferalRoutes);
//app.use('api/users',DeshboardRoutes)

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});