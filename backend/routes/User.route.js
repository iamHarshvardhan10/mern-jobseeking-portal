import express from 'express'
import { login, logout, register, updateProfile } from '../controllers/User.controllers.js';
import { verifyUser } from '../middlewares/verifyUser.js';

const router = express.Router()

// #########################################################
// #                AUTHENTICATION ROUTES                  #
// #########################################################

router.post('/register', register)
router.post('/login', login)
router.post('/logout', logout)
router.post('/updateProfile', verifyUser, updateProfile)

export default router;