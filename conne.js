const express = require('express');
const mongoose = require('mongoose');
const url = 'mongodb+srv://vava:valens2003@cluster0.e43l0.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';
// const url = 'mongodb://0.0.0.0:27017/myDb';

const connection = async () =>{
   try{
        await mongoose.connect(url, {
        useUnifiedTopology:true,
        useNewUrlParser:true
    })
    console.log('connecteddb');
}catch(err){
    console.log(err);
}

}
module.exports = connection;