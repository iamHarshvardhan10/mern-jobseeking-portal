import express from 'express'
import { register } from '../controllers/User.controllers.js';

const router = express.Router()

// #########################################################
// #                AUTHENTICATION ROUTES                  #
// #########################################################

router.post('/register', register)


export default router;