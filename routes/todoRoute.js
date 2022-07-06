const router = require("express").Router();
const controller = require("../Controllers/todoController");

router.get('/', controller.getTodos);
router.get('/:id', controller.findTodo);
router.post('/', controller.addTodos);
router.put('/:id', controller.updateTodo);
router.delete('/:id', controller.deleteTodo);



module.exports = router;