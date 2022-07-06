const ToDoCollection = require("../Models/todoModel");

// Adding a New Todo Task
exports.addTodos = (req, res) => {
    let newTodo = req.body;
    ToDoCollection.create(newTodo,
        (err, Todos) => {
            if (err) {
                res.status(500).json({
                    success: false,
                    message: "New Todo Failed",
                    err
                })
            } else {
                res.status(200).json({
                    success: true,
                    message: "New Todo Successfully Added",
                    Todos
                })
            }
        }
    )
}

// Retrieve all Todo Task
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

// Retrieve a particular Todo Task using Id
exports.findTodo = async (req, res) => {
    let id = { _id: req.params.id };

    try {
        let todo = await ToDoCollection.findById(id);

        res.status(200).json({ todo })

    } catch (err) {
        res.status(500).json({ message: err })
    }

}

// Updating a Todo task
exports.updateTodo = async (req, res) => {
    let id = { _id: req.params.id };
    let updatedDetails = await req.body;

    try {
        let updatedTodo = await ToDoCollection.findByIdAndUpdate(id, updatedDetails);

        res.status(200).json({
            updatedTodo,
            success: true,
            message: "Todo Found and Updated Successfully",

        })

    } catch (err) {
        res.status(500).json({
            success: false,
            message: "Todo not Updated",
            err
        })
    }

}

// Deleting a Todo Task
exports.deleteTodo = async (req, res) => {
    let id = { _id: req.params.id };
    ToDoCollection.findByIdAndDelete(id, (err, todo) => {
        if (err) {
            res.status(500).json({
                success: false,
                message: "Delete Operation Failed",
                err
            })
        } else {
            res.status(200).json({
                todo,
                success: true,
                message: "Todo Found and Deleted Successfully"
            })



        }
    })
}
