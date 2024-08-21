import express from 'express'
import { verifyUser } from '../middlewares/verifyUser.js';
import { applyJob, getAdminJobs, getAppliedJobs } from '../controllers/Application.controller.js';

const router = express.Router()

// apply Jobs
router.post('/applyJobs/:id', verifyUser, applyJob)
// get applied jobs
router.get('/getAppliedJobs', verifyUser, getAppliedJobs)
// get admin jobs
router.get('/getAdminJobs/:id', verifyUser, getAdminJobs)


export default router;