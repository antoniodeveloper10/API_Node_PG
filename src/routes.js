const express = require('express');
const UserControllers = require('./controllers/UserController')
const AddressController = require('./controllers/AddressController')


const routes = express.Router();

routes.get('/users',UserControllers.index);
routes.post('/users',UserControllers.store);

// rotas de enderecos
routes.get('/users/:user_id/addresses',AddressController.index);
routes.post('/users/:user_id/address',AddressController.store);


module.exports = routes;

// testar chegada de rota
//routes.post('/users',(req,res)=>{
  //  return res.json({hello: 'world'});
//})