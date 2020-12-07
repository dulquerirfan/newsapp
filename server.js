const express=require('express');
const app=express();
const port=process.env.PORT||3000;
const axios=require('axios');


//middleware for static files
 

//Templating  engine
app.set('views','./views');
app.set('view engine','ejs')
// routes
//@type :get
//@desc : route to grab the data from an api
//@acess : public
//@route : /
app.get('/',async(req,res)=>{
    try{
         
        const response = await axios.get('http://newsapi.org/v2/top-headlines?country=in&apiKey=f1302daaf4a84823a5ae208866a708e2');
        const articles=response.data;
        res.render('news',{ articles});
   }
   catch(error){
       console.log(error);
   }
}) 
app.listen(port,()=>{
    console.log("server connected successfully");
})