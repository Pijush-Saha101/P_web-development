//Backend Rules To Write Code

//Step1 : Importing(To Get) All Required modules Whatever we want to use in our Backend Application
//express , mongoose , cors , dotenv , bcrypt ,jsonwebtoken etc

//syntax :  require('module-name')  Methof help us to import modules

const express   =     require('express')

//Step 2 : Create Express Application (function)

const app   =   express()         //Task - Build API


//Step 3: Define Routes- API Endpoint

//API Methods of Communication - GET , POST , PUT , DELETE
//Get  : Get The Data from Server/Backend
//Post : Send The Data To Server
//Put  : Update The Existing Data
//Delete : Completely Delete The Data

//Synatx - app.methodname('Path/Api Address', (req,res)=>{ })

//Home Backend - testing
app.get('/',(req,res)=>{
    res.send('Api Running')
})


app.get('/login' , (req,res)=>{

    res.send('Fill The Form To Login/Good Eveening User')

})  

app.get('/signup' , (req,res)=>{

    res.send('Fill The Signup To Login/Good Eveening User')

})  

//Step 4 : Start the Backend
//Port : Port is Like Addesss on Internet Which Acts Like Backend Address So That Frontend can commuoicate with Backend using The Port

//We have Diffrent Freee Port Like 3000,5000, 8000, 8080: We can use Any of Them Ports Start ours erver

//Syntax : app.listen(portNumber, function-Conformation Message)

app.listen(3000,()=>{
  console.log('Server Running on http://localhost:3000 ')
})


