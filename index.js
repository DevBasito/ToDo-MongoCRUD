const express = require('express');
const app = express();
app.use(express.json({ extended: false }));
app.use(express.urlencoded({ extended: false }));
require('dotenv').config();
const port = process.env.PORT;

const mongoose = require("mongoose");
const connectionString = 'mongodb://localhost:27017/Tododb';

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

const {Schema} = mongoose;
// Same as const Schema = mongoose.Schema
const toDoSchema = new Schema({
    title: String, 
    description: String, 
    timestamp: String
})

const ToDoCollection = mongoose.model('ToDoCollection', toDoSchema);

ToDoCollection.create({
    title: "Buy Pouch",
    description: "Get a new Pouch For your Phone",
    timestamp: "12:00 pm"
}, (err, Todos)=>{
    if (err) {
        console.log({err})
    } else {
        console.log({Todos})
    }
}
)


app.listen(port, () => {
    console.log("Server is Up and Running")
})