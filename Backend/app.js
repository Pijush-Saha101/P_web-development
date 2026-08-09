// backend rules to write code

// step1: importing(to get ) all required modules whatever we want to use in our backend application
// express, mongoose, cors, dotenv, bcrypt, jsonwebtoken etc
// syntax: required('model-name') method help us to 


 const express = require('express')

// step2: create express application (function) 

const app =  express() //task is to build API

// step3: define routs API endpoint
// API methods of communication - GET, POST, PUT, DELETE
// Get : get the data form the surver
// post: send the data to the server
// put : update the existing data
// delete : complete delete the date



//  Syntax - app.methodname-path/API address- (req =>{ })
    // 

app.get('/login' , (req,res)=>{


    res.send('Fill the form to login/good evening ')
})

app.get('/Singup' , (req,res)=>{


    res.send('Fill the form to login/good evening ')
})

// step4: start the backend
// port: it is like address on interney which act like backend address so that backend can communicat to backend
// syntax : app.listen(portNumber, )

app.listen(3000,()=>{
    console.log('Server, Running on http://localhost:3000')
})