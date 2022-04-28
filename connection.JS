// const mongoose = require('mongoose');
// const express = require('express');


// const url =  "mongodb+srv://vava:valens2003@cluster0.e43l0.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";


// const connectionDb = async () => {
//     await mongoose.connect(url, {
//         useUnifiedTopology: true,
//         useNewUrlParser: true
//     });
//     console.log('connected');
// };

// module.exports = connectionDb;

const mongoose = require('mongoose');

const url = 'mongodb+srv://vava:valens2003@cluster0.e43l0.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';

const connectionDb = async () => {
    try{
        await mongoose.connect(url, {
            useUnifiedtopology: true,
            useNewUrlParser: true
        });
      console.log('database connected');
    }catch(err){
        console.log(err);
    } 
}
module.exports = connectionDb;