const express = require('express');
const number = require('joi/lib/types/number');
const string = require('joi/lib/types/string');
const mongoose = require('mongoose');
const joi = require('joi');
const { type } = require('express/lib/response');

const bookSchema = new mongoose.Schema({

   name:{
        type:String,
        required:true,
    },
    bookCode:{
        type:String,
        required:true,
        unique:true
    },
    cost:{
        type:String,
         required:true,
    },
    publisher:{
        type:String,
        required:true
        
    }

})

// async function validate(data){
//     const schema = joi.object({
//         name: joi.string().required().max(10),
//         bookCode:joi.string().required().max(20),
//         cost:joi.string().required().max(10),
//         publisher:joi.string().required().max(23)
//     })

//     return schema.validate(data, schema)
// }

const books = mongoose.model('Books', bookSchema);


module.exports = books


