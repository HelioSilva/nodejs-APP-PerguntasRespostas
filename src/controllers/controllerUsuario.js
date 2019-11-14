// index , show, store , update, destroy
const Usuario = require('../models/Usuario');

module.exports = {

  async store(req,res){  
    let user =  await Usuario.create(   req.body    );
    return res.json(user);
  },
  async show(req,res){
          let user = await Usuario.find();
          return res.json(user);
  },
  async showOnce(req,res){
    let user = await Usuario.findById(req.params.id);
    return res.json(user);
  },


}