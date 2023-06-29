import expresss from 'express'
import { createPost, deletePost, getAllPosts, updatePost} from '../controllers/postControllers.js'
import { isLoggedIn } from '../middlewares/isLoggedIn.js'

export const postRouter = expresss.Router()

postRouter.post("/create", isLoggedIn, createPost)
postRouter.put("/update/:id", isLoggedIn, updatePost)
postRouter.delete("/delete/:id", isLoggedIn, deletePost)
postRouter.get("/all", getAllPosts)