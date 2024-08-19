import express from 'express'
import cors from 'cors'
import cookieParser from 'cookie-parser'
import dotenv from 'dotenv'
import mongoDBConnect from './utils/db.js'

// ROUTES PATH
import userRoutes from './routes/User.route.js'
import companyRoutes from './routes/Company.route.js'
import jobRoutes from './routes/Job.route.js'
dotenv.config({})

const app = express()
app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(cookieParser())
app.use(cors({
    origin: 'http://localhost:5173',
    credentials: true
}))


// USER ROUTE
app.use('/api/v1/user', userRoutes)
// COMPANY ROUTE
app.use('/api/v1/company', companyRoutes)
// JOB ROUTE
app.use('/api/v1/job', jobRoutes)

const PORT = process.env.PORT || 3000
app.listen(PORT, () => {
    mongoDBConnect()
    console.log(`server is running on ${PORT}`)
})