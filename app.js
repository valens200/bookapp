const express = require('express');
const connectionDb = require('./db/connection');
const routers = require('./routers/routes');
const app = express();

const model = require('./model/schema');
const { db } = require('./model/schema');
const schema = require('./model/schema');
const bodyParser = require('body-parser');
const router = express.Router();

app.use(bodyParser.urlencoded ({extended:true}))


app.get('/', async(req,res) =>{
  try{
    const users = await schema.find();
    res.json(users)   
  }catch(err){
      console.log(err)
      res.send('err' + err);
  }
})
app.use(express.json());
app.post('/',  async (req, res) => {

    const user = new schema({
        name: req.body.name,
        gender: req.body.gender,
        tech: req.body.tech
    })
   try{
    const data1 = await user.save();
    res.send(data1)

   }catch(err){
       console.log(err);
   }
})
app.get('/:id', async(req,res)=> {
    const data2 = await schema.findById(req.params.id);
    res.send(data2)
})

app.patch('/:id', async(req,res) => {

 try{
    const data3 = await schema.findById(req.params.id);
    data3.name = req.body.name;
    const data4 = await data3.save();
    res.json(data4);
 }catch(err){
     console.log('err');
 }
})

app.delete('/:id',  async (req,res)=>{
 try{
    const datae = await schema.findById(req.params.id);
    const delet = await  datae.remove();
    res.json(delet);
 }catch(err){
     console.log(err);
 }
    


})





connectionDb();
app.listen(5000, ()=>{
    console.log('server started on http://localhost:5000');
})