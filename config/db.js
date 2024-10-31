require('dotenv').config();
const mongoose = require('mongoose');

function connectDB() {
    // Database connection
    mongoose.connect(process.env.MONGO_CONNECTION_URL, {
        //useNewUrlParser: true,
        //useUnifiedTopology: true,
        //useCreateIndex: true,
        //useFindAndModify: false
    })
    .then(() => {
        console.log('Database connected');
    })
    .catch((err) => {
        console.error('Connection failed', err);
    });
}

module.exports = connectDB;
