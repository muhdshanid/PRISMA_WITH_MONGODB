import express from 'express'
import { login, logout, signUp } from '../controllers/userControllers.js'


export const userRouter = express.Router()

userRouter.post("/signup", signUp)
userRouter.post("/login", login)
userRouter.get("/logout", logout)
