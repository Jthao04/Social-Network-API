import dotenv from 'dotenv';
import mongoose from 'mongoose';

// Load environment variables
dotenv.config();

const MONGODB_URI = process.env.MONGODB_URI;

if (!MONGODB_URI) {
    throw new Error('MONGODB_URI is not defined in the environment variables.');
}

// Connect to MongoDB
mongoose.connect(MONGODB_URI);

const db = mongoose.connection;

// Handle connection errors
db.on('error', (err) => console.error('MongoDB connection error:', err));

// Log success message when connected
db.once('open', () => console.log('Connected to MongoDB successfully!'));

export default db;