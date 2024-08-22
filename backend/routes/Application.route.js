import express from 'express'
import { verifyUser } from '../middlewares/verifyUser.js';
import { applyJob, getAdminJobs, getAppliedJobs, updateStatus } from '../controllers/Application.controller.js';

const router = express.Router()

// apply Jobs
router.post('/applyJobs/:id', verifyUser, applyJob)
// get applied jobs
router.get('/getAppliedJobs', verifyUser, getAppliedJobs)
// get admin jobs
router.get('/getAdminJobs/:id', verifyUser, getAdminJobs)
// update status
router.put('/updateStatus', verifyUser, updateStatus)

export default router;