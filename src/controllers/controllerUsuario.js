// index , show, store , update, destroy
const Usuario = require('../models/Usuario');

module.exports = {

  async setScore(req,res){
    let {score, device} = req.body ;

    let user = await Usuario.findOne({device});
    if (user != null){
      let geral = user.scoreGeral ;

      user = await Usuario.updateOne({device},{
        scoreGeral: geral+score
      });
    }

    return res.json(user);

  },

  async store(req,res){  

    let {device} = req.body ;
    let user = await Usuario.findOne({device});

    if(user==null){
      user =  await Usuario.create(   req.body    );
    }

    return res.json(user);
  },


  async show(req,res){
          let user = await Usuario.find();
          return res.json(user);
  },
  async showOnce(req,res){
    let user = await Usuario.find({device:req.params.id});
    return res.json(user);
  },


}