
const express = require('express');
const app = express.Router();
const users = require('../model/schema')

app.get('/', (req,res) => {
    res.render('form');
})
app.get('/signUp', (req,res) => {
    res.render('login')
})

app.post('/', async(req,res) => {
    // res.send(req.body);
    // if(req.body.firstname =="" || req.body.lastname == "" || req.body.username == ""){
    //     return res.send('invalid input');
    // }
    const newUser = await new Users({
        firstname:req.body.firstname,
        lastname: req.body.lastname,
        email:req.body.email,
        username:req.body.username,
        telephone:req.body.telephone,
        password:req.body.password
    }) 
        const savedUsers = await newUser.save()
        .then(result => {
            res.redirect('/');
        })
})


app.get('/todos', (req,res)=> {
    Users.find({}, (err, users) =>{
        res.render('index', {
            data:users
        })
    })
   

})
app.delete('/:id', (req,res)=>{
    Users.findByIdAndDelete(req.params.id)
    .then(result =>{
        console.log(result);
    })
})
app.get('/login', (req,res) => {
    res.render('form');
})

module.exports = app