import 'dotenv/config'
import express from 'express'
import cors from 'cors'
import connectDB from './config/mongodb.js'

const PORT = process.env.PORT || 4000
const app = express()

//initialising middleware
app.use(express.json())
app.use(cors())

//connecting to database
await connectDB()

app.get('/',(req,res)=>res.send("API Working"))

app.listen(PORT,()=>console.log("Server running on "+PORT))