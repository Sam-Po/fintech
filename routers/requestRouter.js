const express = require('express');
const controller = require('../controller/requestController');
const authMiddleware = require('../middleware/authMiddleware');

const transactionRouter = express.Router();

transactionRouter.post('/', authMiddleware, controller.addRequest);

module.exports = transactionRouter;
