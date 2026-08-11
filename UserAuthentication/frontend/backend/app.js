const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')
const bcrypt = require('bcrypt')

const app = express()

// Middleware
app.use(cors())
app.use(express.json())

// 1.backend - database connection
// mongoose.connect('database address')

mongoose.connect('mongodb://localhost:27017/JuneUserAuth')
.then(()=>console.log("MongoDB Connected"))

.catch((error)=>console.log(error))

// 2. Schema - blueprint of data which U want to store in DB
const UserSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    }
})

// 3.collection model
const User = mongoose.model('user', UserSchema)

// API route frontend backend app.methodName
app.get('/',(req,res)=>{
res.send('API Running')
})

// register
app.post('/register', async(req,res)=>{

    // Frontend
    const {username, email, password} = req.body

    // validation
    if(!username || !email || !password){
        return res.json({ message : 'all fields are required'})
    }

    // check existing user
    const existingUser = await User.findOne({email})

    if(existingUser){
        return res.json({message: 'User Already Exists'})
    }

    // Hash password
    const hashPassword = await bcrypt.hash(password,10)

    // save tha data in mongodb collection
    const newUser = new User({
        username,
        email,
        password: hashPassword
    })

    // store the data
    await newUser.save()

    res.json({
        message: 'User Created Successfully'
    })

})

// login
app.post('/login', async(req,res)=>{

    const { email, password } = req.body

    if (!email || !password) {
        return res.json({
            message: 'Email and password are required'
        })
    }

    const user = await User.findOne({ email })

    if (!user) {
        return res.json({
            message: 'User Not Found - Register First'
        })
    }

    // compare password
    const valid = await bcrypt.compare(password, user.password)

    if(valid){
        return res.json({message:'Login Successful'})
    }else{
        return res.json({message:'Invalid Credentials'})
    }

})

// start the server
app.listen(3000, () => {
    console.log('Server Running http://localhost:3000')
})


