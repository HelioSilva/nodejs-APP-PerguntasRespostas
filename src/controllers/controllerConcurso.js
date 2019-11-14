// index , show, store , update, destroy
const Concurso = require('../models/Concurso');

module.exports = {

  async store(req,res){

  
    let concurso =  await Concurso.create(   req.body    );
  

    return res.json(concurso);
  },
  async show(req,res){
          let concurso = await Concurso.find();
          return res.json(concurso);
  },
  async showOnce(req,res){
    let concurso = await Concurso.findById(req.params.id);

    return res.json(concurso);
},
}






