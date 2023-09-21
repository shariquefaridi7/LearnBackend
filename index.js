import express from "express";

const app=express();

app.use((req,res,next)=>{
    console.log("This is Middleware");
    next();
});

app.use((req,res,next)=>{
    console.log("This is another Middleware");

});

app.listen(3000,()=>console.log("Server is start at 3000"))

