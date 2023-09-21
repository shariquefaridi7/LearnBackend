import express from "express";
import bodyParser from "body-parser";

const app=express();

app.use(bodyParser.urlencoded({extended:false}));
app.use("/add-product",(req,res)=>{
    res.send(`<form action="/product" method="POST"><input type="text" /><br/><input type="text"/><button>Submit</button> </form>`)
});
app.use("/product",(req,res)=>{
    console.log(req.body);
    res.redirect("/");
});

app.use("/",(req,res)=>{
    res.send(`<h1>This is Home Page<h1/>`)
});

app.listen(4000,()=>{
    console.log("Server Start");
})