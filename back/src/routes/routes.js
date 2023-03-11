const { Router } = require('express');
const UserController = require('../controllers/UserController');
const TaskController = require('../controllers/TaskController');

const router = Router();

// User Controller
router.get('/user', UserController.index);
router.get('/user/:id', UserController.show);
router.post('/user', UserController.create);
router.put('/user/:id', UserController.update);
router.delete('/user/:id', UserController.destroy);

// Task Controller
router.get('/task', TaskController.index);
router.get('/task/:id', TaskController.show);
router.post('/task', TaskController.create);
router.put('/task/:id', TaskController.update);
router.delete('/task/:id', TaskController.destroy);

module.exports = router;