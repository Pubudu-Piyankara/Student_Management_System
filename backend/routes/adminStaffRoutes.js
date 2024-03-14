import express from 'express';
import adminStaffController from '../controllers/adminStaffController.js';
const router = express.Router();

router.get('/', adminStaffController.getAlladminStaffs);
router.post('/', adminStaffController.addadminStaff);
router.get('/:idStaff', adminStaffController.getadminStaff);
router.put('/:idStaff', adminStaffController.updateadminStaff);
router.delete('/:idStaff', adminStaffController.deleteadminStaff);

export default router;