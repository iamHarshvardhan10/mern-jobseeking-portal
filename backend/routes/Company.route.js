import express from 'express'
import { getCompany, getSingleCompany, registerCompany, updateCompany } from '../controllers/Company.controller.js';
import { verifyUser } from '../middlewares/verifyUser.js';

const router = express.Router()

// Register Company
router.post('/register', verifyUser, registerCompany)
router.get('/getCompany', verifyUser, getCompany)
router.get('/getSingleCompany/:id', getSingleCompany)
router.put('/updateCompany/:id', verifyUser, updateCompany)




export default router;