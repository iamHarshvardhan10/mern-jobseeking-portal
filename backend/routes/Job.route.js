import express from 'express'
import { verifyUser } from '../middlewares/verifyUser.js';
import { postJob } from '../controllers/Job.controller.js';

const router = express.Router()


// post job
router.post('/postJob', verifyUser, postJob)

export default router;