// const mongoose = require('mongoose');
// const { stringify } = require('querystring');
// const { boolean } = require('webidl-conversions');




// const schema = new mongoose.Schema({

//     name: {
//         type:String,
//         required:true
//     },

//     gender:{
//         type:String,
//         required:true

//     },
//     tech: {
//         type: String,
//         required : true
//     }
// })

// module.exports = mongoose.model('schema', schema);


const express = require('express');
const mongodb = require('mongodb');
const mongoose = require('mongoose');
const { stringify } = require('nodemon/lib/utils');
const Joi = require('joi');
const { json } = require('express/lib/response');

const schema = new mongoose.Schema({
    firstname:{
        type : String,
        required:true
    },
    lastname:{
        type:String,
        required:true

    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    username:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    telephone:{
        type:String,
        required:true
    }
})
// module.exports = mongoose.model('users', schema);


// const schema = Joi.object().keys({
//     firstname:Joi.string().required(),
//     lastname:Joi.required(),
//     username:Joi.required(),
//     telephone:Joi.required(),
//     password:Joi.required()
// });

module.exports = mongoose.model('users', schema);