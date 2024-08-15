import express from 'express'
import cors from 'cors'
import cookieParser from 'cookie-parser'
import dotenv from 'dotenv'
import mongoDBConnect from './utils/db.js'
dotenv.config({})

const app = express()
app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(cookieParser())
app.use(cors({
    origin: 'http://localhost:5173',
    credentials: true
}))

const PORT = process.env.PORT || 3000
app.listen(PORT, () => {
    mongoDBConnect()
    console.log(`server is running on ${PORT}`)
})