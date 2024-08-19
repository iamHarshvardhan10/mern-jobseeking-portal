import express from 'express'
import { registerCompany } from '../controllers/Company.controller.js';
import { verifyUser } from '../middlewares/verifyUser.js';

const router = express.Router()

// Register Company
router.post('/register', verifyUser, registerCompany)





export default router;