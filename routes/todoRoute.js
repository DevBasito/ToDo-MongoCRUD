const router = require("express").Router();
const controller = require("../Controllers/todoController");

router.get('/', controller.getTodos);
router.get('/:id', controller.findTodo);
router.post('/', controller.addTodos);



module.exports = router;