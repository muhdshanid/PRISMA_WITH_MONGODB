import express from 'express'
import { signUp } from '../controllers/userControllers.js'
import prisma from '../prisma/index.js'


export const userRouter = express.Router()

userRouter.post("/signup", signUp)
userRouter.get("/", async(req,res) => {
  try {
    const user = await prisma.user.create({
        data: {
            name: "some",
            email: "some",
            password: "soeme"
        }
    })
    res.send(user)
  } catch (error) {
    console.log(error);
  }
})