const express = require('express');
const res = require('express/lib/response');
const string = require('joi/lib/types/string');
const { default: mongoose } = require('mongoose');
const app = express();
const connection = require('./db/conne');

connection();

const Author = mongoose.model('author', new mongoose.Schema({
    name:String,
    bios:String,
    website:String
}))

const courses = mongoose.model('courses', new mongoose.Schema({
 name:String,
 author: {
    type: mongoose.Schema.Types.ObjectId,
    ref:'Author'
}

}))


app.listen(1000, () => {
    console.log('running');
})

async function createAuthor(name,bio,website){
    const author = new Author({
        name:name,
        bio:bio,
        website:website

    })
    const new_author = await author.save();

    // .then(result => {
    //     res.send(result);
        console.log(new_author);
    // }).catch(err => {
    //     console.log(err)
    // }) 



}
async function createCourse(name,author){
    const course = new courses({
        name:name,
        author:author
    }) 
    const newCourse = await course.save() 
    console.log(newCourse)
}


createAuthor('vava','kiwoi','heruko');
createCourse('math','626a4c5bff6b5ea99d1f6e00');


async function getourses(){

    const course = await courses.find()
    .populate('author','name');
    console.log(course);
}
getourses();