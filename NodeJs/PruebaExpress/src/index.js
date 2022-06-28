const express = require('express')
const app = express()
const path = require('path')
const usuario = require('./routes/usuarios')
const conexion = require('./conexion')
const loggedMiddleWare = require('./middlewares/logged')

//Configuraciones
app.set('title', 'Aplicacion NodeJs')
app.set('port', 3010)
app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'views'))

//MiddleWares
app.use(loggedMiddleWare.loggeoPrevio)
app.use(express.static(path.join(__dirname, 'public')))
app.use(express.urlencoded({extended:false}))

//Rutas
app.get('/', (req, res)=>{
    res.render('index')
})

app.use('/usuarios', usuario)

app.listen(app.get('port'), ()=>{
    console.log('La '+app.get('title')+' corre perfectamente')
})