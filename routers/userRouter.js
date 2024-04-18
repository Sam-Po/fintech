const Router = require('express');
const router = new Router();
const controller = require('../controller/userController');
const authMiddleware = require('../middleware/authMiddleware');

router.get('/', controller.getUsers);
router.get('/:userId', controller.getUsers);
router.delete('/:userId',authMiddleware, controller.deleteUser);

module.exports = router;
