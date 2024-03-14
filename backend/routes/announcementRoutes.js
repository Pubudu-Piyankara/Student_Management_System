import express from 'express'
import announcementController from '../controllers/announcementController.js'
const router = express.Router()

router.get('/',announcementController.getAllAnnouncements)
router.post('/', announcementController.putAnnouncement)
router.delete('/:idMessage', announcementController.deleteAnnouncement)
router.put('/:idMessage', announcementController.updateAnnouncement)
router.get('/:idMessage', announcementController.getAnnouncement)


export default router;