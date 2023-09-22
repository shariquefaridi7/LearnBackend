import express from "express";
import adminRouter from './Routes/admin.js';
import shopRouter from './Routes/shop.js';


const app=express();

app.use("/admin",adminRouter);
app.use(shopRouter);

app.use((req,res)=>{
    res.status(404).send("Page Not Found")
})




app.listen(3000,()=>console.log("Server is start at 3000"))

