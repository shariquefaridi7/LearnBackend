import express from 'express';

const router= express.Router();

router.get("/shop",(req,res)=>{
    res.send("This is Shop Page");
})

export default router;