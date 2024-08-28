import express from 'express'
import { login, logout, register, updateProfile } from '../controllers/User.controllers.js';
import { verifyUser } from '../middlewares/verifyUser.js';
import { singleUpload } from '../middlewares/multer.js';

const router = express.Router()

// #########################################################
// #                AUTHENTICATION ROUTES                  #
// #########################################################

router.post('/register', singleUpload, register)
router.post('/login', login)
router.get('/logout', logout)
router.post('/updateProfile', verifyUser,singleUpload, updateProfile)

export default router;