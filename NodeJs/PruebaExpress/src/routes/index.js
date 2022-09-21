const express = require ('express')
const router = express.Router()

/* Obtenemos la pagina principal */
router.get('/', function(req, res, next){
    res.render('index')
})

/* Obtenemos la pagina de servicios */
router.get('/servicios', function(req, res, next){
    res.render('servicios')
})

module.exports = router