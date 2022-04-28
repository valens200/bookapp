const express = require('express');
const { use } = require('express/lib/application');
const bodyParser = require('body-parser');
const routes = require('./routes');
const app = express();
const connection = require('./db/conne');
const Users = require('./model/schema');
const { put } = require('./routes');
const Joi = require('joi');
const routers = require('./routes/routes');
const booksRouters = require('./routes/bookroutes');


app.use(bodyParser.urlencoded({extended:true}));
app.use(express.json());

app.use(routers);
app.use(booksRouters);


app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.json());


connection();


app.listen(505, ()=>{
    console.log('server is running on http://localhost:505')
})