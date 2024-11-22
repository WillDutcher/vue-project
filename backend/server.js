const express = require('express');
const cors = require('cors'); // Import CORS
const pool = require('./config/db'); // Import database pool

const app = express();
const PORT = 3000;

app.use(cors()); // Enable CORS for all routes
app.use(express.json());

app.get('/api/message', (req, res) => {
    pool.query('SELECT * FROM messages LIMIT 1', (err, results) => {
        if (err) {
            console.error(err);
            res.status(500).send('Error fetching message');
        } else {
            res.json(results[0]);
        }
    });
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
