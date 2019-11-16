const mongoose = require('mongoose');

const ConcursoSchema = new mongoose.Schema({
    autor : String ,
    title: String,
    senha: Number ,
    participantes :[
        {
            device:String,
            nome: String,
            score: Number 
        }
    ],    
    perguntas : [
        {
            numPergunta: Number ,
            pergunta: String ,
            alternativas:[{
                numAlternativa: Number,
                descricaoAlternativa:String
            }],
            numAlternativaCorreta: Number,
            numAlternativaEscolhida: Number
        }
    ]
       
});

module.exports = mongoose.model('Concurso',ConcursoSchema);