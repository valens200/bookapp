const express = require('express');
const Books = require('../model/bookschema');
const app = require('./routes');
const mongoose = require('mongoose')

const router = express.Router();



router.get('/books',  async(req,res) => {
    const books = await Books.find({});
    res.send(books);
})

router.post('/books',  async(req,res) => {

    // const  result  = await validator(req.body);
    // if(result.error) res.status(400).send('err', new Error)

    const book = await new Books({
        name:req.body.name,
        bookCode:req.body.bookCode,
        cost:req.body.cost,
        publisher:req.body.publisher
    });

    // const newBook = await book.save()
    // .then(result => {
    //  const books = Book.find();
    //  res.send(books);
    //  res.send(req.body.name)
    //  }).catch(err => {
    //     res.send( new Error);
    // })
        const newBook = await book.save()
            .then(result =>{
                res.send(result);
            }).catch(err => {
                console.log(err);
            })

           

})




module.exports = router