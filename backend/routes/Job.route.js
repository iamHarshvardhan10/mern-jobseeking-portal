import express from 'express'
import { verifyUser } from '../middlewares/verifyUser.js';
import { getAllJobs, getJobById, postJob } from '../controllers/Job.controller.js';

const router = express.Router()


// post job
router.post('/postJob', verifyUser, postJob)
// getAll jobs
router.get('/getAllJobs', verifyUser, getAllJobs)
// get job by id
router.get('/getAdminJob/:id', verifyUser, getJobById)
export default router;