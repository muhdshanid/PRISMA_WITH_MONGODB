import prisma from "../prisma/index.js";
import { cookieToken } from "../utils/cookieToken.js";

export const signUp = async (req, res, next) => {

    try {
       const {name, email, password} =  req.body 

       if(!name || !password || !email){
        throw new Error("Please provide all fields")
       }
       const user = await prisma.user.create({
        data: {
            name,
            email,
            password
        }
       })

       cookieToken(user, res)
    } catch (error) {
        throw new Error(error)
    }
}

export const login = async (req, res, next) => {

    try {
       const { email, password} =  req.body 

       if( !password || !email){
        throw new Error("Please provide email and password")
       }
       const user = await prisma.user.findUnique({where: {email}})
       if(!user) {
        return res.status(404).json({message: "User not found"})
       }
       if(password !== user.password) {
        return res.status(404).json({message: "Password is not matched"})
       }

       cookieToken(user,res)

    } catch (error) {
        throw new Error(error)
    }
}
export const logout = async (req, res, next) => {

    try {
      
        res.clearCookie('token')
        res.status(200).json({success: true})
    } catch (error) {
        throw new Error(error)
    }
}
