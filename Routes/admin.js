import express from "express";
const router = express.Router();

router.get("/add-product",(req,res)=>{

        res.send(`<form action="/product" method="POST"><input type="text" /><br/><input type="text"/><button>Submit</button> </form>`)
    });
 
router.post("/add-product",(req,res)=>{

    console.log(req.body);   
    res.redirect("/shop")
    
    });
 
    export default router;