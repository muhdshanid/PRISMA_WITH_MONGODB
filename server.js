import express from 'express'
import dotenv from 'dotenv'
import cookieParser from 'cookie-parser'
import { userRouter } from './routes/userRoutes.js'

const app = express()
dotenv.config()

const PORT = process.env.PORT

app.use(express.json())
app.use(express.urlencoded({ extended: true}))
app.use(cookieParser())

app.get("/", (req,res) => {
    res.send("Hi from prisma")
})

app.use("/user", userRouter)

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
})
  