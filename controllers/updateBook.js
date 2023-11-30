



const Book=require('../models/book');

exports.updateBook=async(req,res)=>{
    try{
        const{id}=req.params;
        const{title,author,genre,publicationYear,isbn}=req.body;

        const book=await Book.findByIdAndUpdate({_id:id},{title,author,genre,publicationYear,isbn})

        const updatedBook=await Book.findById({_id:id});
        res.status(200).json({
            success:true,
            data:updatedBook,
            message:"Entry updated successfully"
        })
    }catch(error){
        res.status(500).json({
            success:false,
            message:error.message
        })
    }
}