// index , show, store , update, destroy
const Concurso = require('../models/Concurso');

module.exports = {

  async duplicidade(req,res) {
    let concurso = await Concurso.findById(req.params.id);

    let {device} = req.body ;
    
    if(concurso != null){

      concurso.participantes.map((item)=>{
        if(item.device == device){
          res.json({res:true})
        }
      });

      res.json({res:false});



    }else{
      res.json({res:false});
    }

  },

  async addParticipante(req,res){

    let concurso = await Concurso.findById(req.params.id);

    if(concurso != null){
      let {device,nome,score} = req.body ;

      concurso = await Concurso.updateOne({
          _id : req.params.id
      },{
        $push: { participantes: {device,nome,score} }
      }
      
      )

    }

    res.json(concurso);


  },

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






