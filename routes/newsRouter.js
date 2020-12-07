/*const express=require('express');
const newsRouter=express.Router;
const axios=require('axios');
//@type:  get
//@route : / 
//@desc:to get the main data from the api
//@access:public
 newsRouter.get('/',async(req,res)=>{
   
     try{
         
          const response = await axios.get('http://newsapi.org/v2/top-headlines?country=in&apiKey=f1302daaf4a84823a5ae208866a708e2');
          res.send(response.body);
     }
     catch(error){
         console.log(error);
     }
 })
 module.export=newsRouter;*/