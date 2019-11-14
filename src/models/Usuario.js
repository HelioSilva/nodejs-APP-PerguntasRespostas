const mongoose = require('mongoose');

const UsuarioSchema = new mongoose.Schema({
    nome: String,
    device: String ,
    scoreGeral : Number
    
});

module.exports = mongoose.model('Usuario',UsuarioSchema);