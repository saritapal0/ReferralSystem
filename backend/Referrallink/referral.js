const express = require('express');

const app = express();

app.get('/api/referral/generate', (req, res) => {
    const referralCode = generateReferralCode();

    const referralLink = `https://taa.com/ref/${referralCode}`;

    res.json({ referralLink });
});

function generateReferralCode() {
    return Math.random().toString(36).substr(2, 8);
}

const port = 4000; 
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
