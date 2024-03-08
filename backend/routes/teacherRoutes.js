import express from 'express';
import teachersController from '../controllers/teachersController.js';
const router = express.Router();

router.get('/teachers', teachersController.getAllTeachers);
router.post('/teachers', teachersController.addTeacher);

export default router;
