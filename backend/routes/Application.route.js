import express from 'express'
import { verifyUser } from '../middlewares/verifyUser.js';
import { applyJob, getAppliedJobs } from '../controllers/Application.controller.js';

const router = express.Router()

// apply Jobs
router.post('/applyJobs', verifyUser, applyJob)
// get applied jobs
router.get('/getAppliedJobs', verifyUser, getAppliedJobs)



export default router;