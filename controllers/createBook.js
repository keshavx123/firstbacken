
const Book=require('../models/book');

exports.createBook=async(req,res)=>{
    try{
     const{title,author,genre,publicationYear,isbn}=req.body;

     const book= await Book.create({title,author,genre,publicationYear,isbn});
     
     res.status(200).json({
        success:true,
        data:book,
        message:"Entry created successfully"
     })

    }catch(error){
     res.status(500).json({
        success:false,
        data:"Internal server error",
        message:error.message
    })
    }
}