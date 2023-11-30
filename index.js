const express=require('express');
const app=express();
require("dotenv").config();

app.use(express.json());

const PORT =process.env.PORT || 3000;

const dbConnect=require("./config/database");
dbConnect();

const bookRoutes=require("./routes/bookRoutes");
app.use("/api",bookRoutes)

app.listen(PORT,()=>{
    console.log(`Server started at ${PORT}`);
})