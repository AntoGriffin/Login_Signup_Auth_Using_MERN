const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const Model = require('./models/Employee')

const app = express()

app.use(express.json())
app.use(cors())

mongoose.connect("mongodb://127.0.0.1:27017/employee");

app.post('/register' ,(req,res)=>{
    Model.create(req.body)
    .then(employees => res.json(employees))
    .catch(err => res.json(err))
})

app.post('/login' ,(req,res)=>{
    const {email,password}= req.body;
    Model.findOne({email:email})
    .then(user =>{
       if(user){
        if(user.password === password){
            res.json('Success')
        }else{
            res.json('The password is incorrect')
        }
       }else{
        res.json('User not found!')
       }
    })
})


app.listen(3000 , ()=>{
    console.log("Server is Up and Running")
})