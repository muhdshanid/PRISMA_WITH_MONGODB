import prisma from "../prisma/index.js"


export const createPost = async (req, res) => {

    try {
        const { slug, title, body, authorId } = req.body
        if(!slug || !title || !body){
            throw new Error("Please fill all fields")
        }

        const newPost = await prisma.post.create({
            data: {
                title,
                slug,
                body,
                author: {connect: {id: authorId}}
            }
        })
        res.status(201).json(newPost)
    } catch (error) {
        throw new Error(error)
    }
}
export const updatePost = async (req, res) => {

    try {
        const { title, body } = req.body
        const { id } = req.params
        const updatePost = await prisma.post.update({where: {id}, data: {title, body}})
        res.status(200).json(updatePost)
    } catch (error) {
        throw new Error(error)
    }
}
export const deletePost = async (req, res) => {

    try {
        const { id } = req.params
        const updatePost = await prisma.post.delete({where: {id}})
        res.status(200).json({message: "Post deleted successfully"})
    } catch (error) {
        throw new Error(error)
    }
}
export const getAllPosts = async (req, res) => {

    try {
        const posts = await prisma.post.findMany()
        res.status(200).json(posts)
    } catch (error) {
        throw new Error(error)
    }
}