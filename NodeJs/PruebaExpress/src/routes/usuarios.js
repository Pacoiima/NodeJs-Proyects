const express = require ('express')
const router = express.Router()
const usarControladores = require('../controladores/usuarios')

router.get('/todos', usarControladores.getUsuarios)
router.get('/crear', usarControladores.getCrearUsuario)
router.get('/modificar/:id', usarControladores.getModificarUsuario)
router.get('/eliminar/:id', usarControladores.getEliminarUsuario)

router.post('/crear', usarControladores.crearUsuario)
router.post('/modificar/:id', usarControladores.modificarUsuario)
router.post('/eliminar/:id', usarControladores.eliminarUsuario)

module.exports = router