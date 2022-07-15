const mongoose = require("mongoose");
const { Schema } = mongoose;
// Same as const Schema = mongoose.Schema

// Create a schema
const toDoSchema = new Schema(
    {
        title: String,
        description: String
    },
    {
        timestamps: true
    }
)

// Initialize a Collection (like Table in sql) in  the DB
// Document is like a record/row in sql 
const ToDoCollection = mongoose.model('ToDoCollection', toDoSchema);

module.exports = ToDoCollection;
