// const { json } = require("express");
const express =require ("express")
const format =require("date-format");
const { response } = require("express");

const app =express()

const PORT =4000 || process.env.PORT 

app.get("/",(req,res)=>{
   res.status(200).send("<H1>Hello Rohan !!</H1>");
    // res.status(200).send('Bad Request')
});


app.get("/api/v4/instagram",(req,res)=>{
    const details ={
        name:'rohan_r.kumar',
        id:'rk399504@gmail.com',
        phone:'8765626301',
        isAvailable:'True',
        followers:'300',
        // date:Date.now()
        date: format.asString("hh:mm:ss",new Date())
    };
    res.status(200).json(details)
})
app.get("/api/v4/facebook",(req,res)=>{
    const details ={
        name:'Rohan Kumar',
        id:'rk399504@gmail.com',
        phone:'8765626301',
        isAvailable:'False',
        friends:244,
        // date:Date.now()
        date: format.asString("hh:mm:ss",new Date())
    };
    res.status(200).json(details)
})
app.get("/api/v4/linkdn",(req,res)=>{
    const details ={
        name:'Rohan Kumar',
        id:'rk399504@gmail.com',
        phone:'8765626301',
        isAvailable:'True',
        connections:500+"+",
        // date:Date.now()
        date: format.asString("hh:mm:ss",new Date())
    };
    res.status(200).json(details)
})

//params
app.get("/api/v4/:token",(req,res)=>{
    console.log(req.params.token);
    res.status(200).json({params:req.params.token})
})

app.listen(PORT,()=>{
    console.log(`app is running at PORT ${PORT}`)
}) 