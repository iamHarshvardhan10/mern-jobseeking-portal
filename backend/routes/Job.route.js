import express from 'express'
import { verifyUser } from '../middlewares/verifyUser.js';
import { getAdminJob, getAllJobs, getJobById, postJob } from '../controllers/Job.controller.js';

const router = express.Router()


// post job
router.post('/postJob', verifyUser, postJob)
// getAll jobs
router.get('/getAllJobs', verifyUser, getAllJobs)
// get job by id
router.get('/getJob/:id', verifyUser, getJobById)
// get Admin Jobs
router.get('/getAdminJob', verifyUser, getAdminJob)
export default router;