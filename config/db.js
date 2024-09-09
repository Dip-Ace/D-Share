require('dotenv').config();
const mongoose = require('mongoose');

function connectDB() {
    mongoose.connect(process.env.MONGO_CONNECTION_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(() => {
        console.log('Database connected.');
    })
    .catch((err) => {
        console.log('Connection failed.', err.message);
        process.exit(1); // Exit the process with failure
    });

    const connection = mongoose.connection;

    connection.on('disconnected', () => {
        console.log('Database disconnected.');
    });
}

module.exports = connectDB;
