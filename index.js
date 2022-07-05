const express = require('express');
const app = express();
app.use(express.json({ extended: false }));
app.use(express.urlencoded({ extended: false }));
require('dotenv').config();
const port = process.env.PORT;

const mongoose = require("mongoose");
const connectionString = 'mongodb://localhost:27017/newdb';

mongoose.connect(connectionString, {
    useUnifiedTopology: true
}, (err) => {
    if (err) {
        console.log(err)
    } else {
        console.log("Database Connected")
    }

}
)


app.listen(port, () => {
    console.log("Server is Up and Running")
})