const express = require('express');
const router = express.Router();

const TaskController = require('../controller/TaskController');
const TaskValidation = require('../middlewares/TaskValidation');

router.post('/',TaskValidation, TaskController.create);
router.put('/:id',TaskValidation, TaskController.update);
router.get('/:id', TaskController.show);
router.delete('/:id', TaskController.delete);
router.get('/filter/all/:macadress',TaskController.all);
router.get('/filter/late/:macadress',  TaskController.late);
router.get('/filter/today/:macadress',  TaskController.today);
router.get('/filter/week/:macadress',  TaskController.week);
router.get('/filter/month/:macadress',  TaskController.month);
router.get('/filter/year/:macadress',  TaskController.year);

router.put('/:id/:done', TaskController.done);

module.exports = router;

