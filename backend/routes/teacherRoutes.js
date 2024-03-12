import express from 'express';
import teachersController from '../controllers/teachersController.js';
const router = express.Router();

router.get('/', teachersController.getAllTeachers);
router.post('/', teachersController.addTeacher);
router.get('/:idTeacher', teachersController.getTeacher);
router.put('/:idTeacher', teachersController.updateTeacher);
router.delete('/:teacherIndex', teachersController.deleteTeacher);


export default router;
