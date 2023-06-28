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