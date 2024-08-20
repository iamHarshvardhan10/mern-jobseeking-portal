import express from 'express'
import { verifyUser } from '../middlewares/verifyUser.js';
import { getAllJobs, postJob } from '../controllers/Job.controller.js';

const router = express.Router()


// post job
router.post('/postJob', verifyUser, postJob)
// getAll jobs
router.get('/getAllJobs', verifyUser, getAllJobs)
export default router;