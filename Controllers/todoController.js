const mongoose = require("mongoose");
const { Schema } = mongoose;
// Same as const Schema = mongoose.Schema
const toDoSchema = new Schema({
    title: String,
    description: String,
    timestamp: String
})

const ToDoCollection = mongoose.model('ToDoCollection', toDoSchema);

exports.addTodos = (req, res) => {
    ToDoCollection.create({
        title: "Medical Checkup",
        description: "Go to the hospital for your Quarterly checkup",
        timestamp: "10:00 am"
    }, (err, Todos) => {
        if (err) {
            res.status(500).json({ err })
        } else {
            res.status(200).json({
                message: "New Todo Successfully Added",
                Todos
            })
        }
    }
    )
}

exports.getTodos = (req, res) => {
    ToDoCollection.find({},
        (err, Todos) => {
            if (err) {
                res.status(500).json({ err })

            } else {
                res.status(200).json({
                    "message": "List of All Todos",
                    Todos
                })
            }
        }
    )
}

exports.findTodo = async (req, res) => {
    const id = { _id: req.params.id };

    try {
        let todo = await ToDoCollection.findById(id);
        
        res.status(200).json({todo})
        console.log('nice')
    } catch (err) {
        res.status(500).json({message: err })
    }

}
