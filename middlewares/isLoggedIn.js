import jwt from 'jsonwebtoken'
import dotenv from 'dotenv'
import prisma from '../prisma/index.js'

dotenv.config()

export const isLoggedIn = async (req, res, next) => {

    try {
      
        const token = req.cookies.token 
        if(!token){
            res.send("Please login")
            throw new Error("Not loggedin")
        }
        
        const decoded = jwt.verify(token, process.env.JWT_SECRET)

        req.user = await prisma.user.findUnique({where: {id: decoded.userId}})

        next()
    } catch (error) {
        throw new Error(error)
    }
}