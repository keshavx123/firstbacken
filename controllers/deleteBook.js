

const Book=require('../models/book');

exports.deleteBook=async(req,res)=>{
    try{
        const{id}=req.params;
        const book=await Book.findByIdAndDelete({_id:id});
        if(!book){
            res.status(404).json({
                success:false,
                message:"Data not present"
            })
        }
        res.status(200).json({
            success:true,
            message:"Data deleted successfully"
        })
    }catch(error){
        res.status(500).json({
            success:false,
            message:error.message
        })
    }
}