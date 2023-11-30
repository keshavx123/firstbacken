

const Book=require('../models/book');

exports.getBook=async(req,res)=>{
    try{
        const books=await Book.find({});

        res.status(200).json({
            success:true,
            data:books,
            message:"Data fetched successfully"
        })
    }catch(error){
        res.status(500).json({
            success:false,
            message:error.message
        })
    }
   
}


exports.getBookById=async(req,res)=>{
    try{
        const{id}=req.params;
        const book=await Book.findById({_id:id});

        if(!book){
          return res.status(404).json({
            success:false,
            message:"No data with given id"
          })
        }

        res.status(200).json({
            success:true,
            data:student,
            message:"Data fetched with given id"
        })
    }catch(error){
        res.status(500).json({
          success:false,
          message:error.message
        })
    }
}