var express = require('express');
var router = express.Router();
var control = require('./controllers/controllerConcurso');
var controllerUser = require('./controllers/controllerUsuario');


router.use((req,res,next)=>{
    console.log('Time: ',new Date().getHours()+":"+new Date().getMinutes());
    next();
});

router.get('/status',(req,res)=>{
    res.json({
        status: 100
    });
});

router.post('/insertConcurso',control.store);
router.post('/addDeviceConcurso/:id',control.addParticipante);
router.get('/showConcursos',control.show);
router.get('/showConcursos/:id',control.showOnce);
router.post('/duplicidadeParticipacao/:id',control.duplicidade) ;

router.post('/insertUser', controllerUser.store);
router.post('/setScore',controllerUser.setScore);
router.get('/showUsers' , controllerUser.show) ;
router.get('/showUsers/:id', controllerUser.showOnce);


// router.post('/cadastro',controler.alteraQTD);
// router.post('/consulta',controler.consultaProduto);

module.exports = router ;