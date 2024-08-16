import express from 'express'
import { login, register } from '../controllers/User.controllers.js';

const router = express.Router()

// #########################################################
// #                AUTHENTICATION ROUTES                  #
// #########################################################

router.post('/register', register)
router.post('/login', login)


export default router;