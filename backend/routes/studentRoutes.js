import express from 'express';
import studentController from '../controllers/studentController.js';
const router = express.Router();

router.get('/', studentController.getAllStudents);
router.post('/', studentController.addStudent);
router.get('/:id', studentController.getStudent);
router.put('/:id', studentController.updateStudent);
router.delete('/:indexNumber', studentController.deleteStudent);

export default router;