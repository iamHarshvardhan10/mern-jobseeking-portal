import express from 'express'
import { getCompany, registerCompany } from '../controllers/Company.controller.js';
import { verifyUser } from '../middlewares/verifyUser.js';

const router = express.Router()

// Register Company
router.post('/register', verifyUser, registerCompany)
router.get('/getCompany', verifyUser, getCompany)




export default router;