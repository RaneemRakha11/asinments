const commentService = require('./comment.service.js')

const createComment = async (req,res,next) =>{
    try {
        const userId = req.user.id;
        const newComment = req.body;
        const createdComment = await commentService.createComment(userId,newComment)
        res.status(201).json({message:"comment created successfully",success:true,data:createdComment})
    }catch (err){
        next(err)
    }
}
const updateComment = async (req,res,next) =>{
    try{
        const userId = req.user.id;
        const {id} = req.params;
        const newData = req.body;
        const updatedComment = await commentService.updateComment(id,userId,newData.content);
        res.status(200).json({message:"comment updated successfully",success:true,data:updatedComment})
    }catch (err){
        next(err)
    }
}
module.exports = {createComment,updateComment}