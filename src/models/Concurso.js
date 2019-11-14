const mongoose = require('mongoose');

const ConcursoSchema = new mongoose.Schema({
    autor : String ,
    title: String,
    senha: Number ,
    participantes :[
        {
            userID:String,
            userNome: String,
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
            numAlternativaCorreta: Number
        }
    ]
       
});

module.exports = mongoose.model('Concurso',ConcursoSchema);