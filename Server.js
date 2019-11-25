var express = require('express');
const routes = require('./src/routes');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express() ;
mongoose.connect('mongodb+srv://root:@1q2w3e4r@clusterhs-3ygbe.mongodb.net/concursoBiblico?retryWrites=true&w=majority',{
    useNewUrlParser: true,
    useUnifiedTopology:true
});

app.use(cors());
app.use(express.json());
app.use(routes);


app.listen(4545, function () {
  console.log('Rodando na porta: 4545!');
});
