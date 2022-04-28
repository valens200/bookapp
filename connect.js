
const mongoose = require('mongoose');
const express = require('express');
const app = express();

const url = "mongodb://0.0.0.0.27017/mydb"

const connection = async () => {
  try{
    const connect = await mongoose.connect(url, {
        useNewUrlParser:true,
        useUnifiedtopology:true
    })
    console.log('connected');
  }catch(err){
      console.log(err);
  }
}

connection();

app.listen(3000, (req,res)=>{
    console.log('running');
})
