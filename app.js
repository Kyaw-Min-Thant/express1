const express = require('express'); 

const app = express()

app.get("",(req,res)=>{

    res.send("<h1>Hello Sayar nice to meet you</h1>");
})

app.get("/about",(req,res)=>{

    res.send({
        Name:"Kyaw Min Thant",
        Hobby:"Reading Book",
        age: 17

    })

})

app.get("/KyawMinThant",(req,res)=>{

    res.send("<h1>This is from KyawMinThant Page</h1>");
})

app.get("/lenovo",(req,res)=>{


    res.send("<h1>This is write with lenovo ideapad 3</h1>");
})

app.get("/bytheway",(req,res)=>{
    res.send("<h1>By the way I like writing code too.</h1>");

})

app.listen(5500,()=>{

    console.log('Server starting up at: port:5500:');
})

