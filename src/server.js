import express from 'express';
import routes from './routes/index.js';
import db from './config/connection.js';

const PORT = process.env.PORT || 3002;
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(routes);

// Wait for the database connection to open before starting the server
db.once('open', () => {
    app.listen(PORT, () => {
        console.log(`API server running on port ${PORT}!`);
    });
});

// Handle database connection errors
db.on('error', (err) => {
    console.error('MongoDB connection error:', err);
});