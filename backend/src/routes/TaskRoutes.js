const express = require('express');
const router = express.Router();

const TaskController = require('../controller/TaskController');
const MacadressValidation = require('../middlewares/MacadressValidation');
const TaskValidation = require('../middlewares/TaskValidation');

router.post('/',TaskValidation, TaskController.create);
router.put('/:id',TaskValidation, TaskController.update);
router.get('/:id', TaskController.show);
router.delete('/:id', TaskController.delete);
router.get('/filter/all', MacadressValidation, TaskController.all);
router.get('/filter/late', MacadressValidation, TaskController.late);
router.get('/filter/today', MacadressValidation, TaskController.today);
router.put('/:id/:done', TaskController.done);

module.exports = router;

