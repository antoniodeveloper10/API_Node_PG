const express = require('express');
const UserControllers = require('./controllers/UserController')


const routes = express.Router();

routes.get('/users',UserControllers.index);
routes.post('/users',UserControllers.Store);


module.exports = routes;

// testar chegada de rota
//routes.post('/users',(req,res)=>{
  //  return res.json({hello: 'world'});
//})