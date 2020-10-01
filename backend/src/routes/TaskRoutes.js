const express = require('express');
const router = express.Router();

const TaskController = require('../controller/TaskController');
const MacadressValidation = require('../middlewares/MacadressValidation');
const TaskValidation = require('../middlewares/TaskValidation');

router.post('/',TaskValidation, TaskController.create);
router.put('/:id',TaskValidation, TaskController.update);
router.get('/:id', TaskController.show);
router.get('/filter/all', MacadressValidation, TaskController.all);

module.exports = router;

