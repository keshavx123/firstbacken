

//title,author,genre,publicationYear,ISBN
const mongoose=require('mongoose');

const bookSchema=new mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    author:{
        type:String,
        required:true,
    },
    genre:{
        type:String
    },
    publicationYear:{
        type:Number,   
    },
    isbn:{
        type:Number,
    }
    
})

module.exports=mongoose.model("Book",bookSchema);