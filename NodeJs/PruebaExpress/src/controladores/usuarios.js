const conexion = require('../conexion')

const getUsuarios = (req, res)=>{
    const sql = 'SELECT * FROM usuarios'
    conexion.query(sql, (err, resultado)=>{

        if(err){
            console.log('Ha ocurrido un error al obtener datos')
        }else{
            console.log(resultado)
            res.render('usuarios', {usuarios: resultado} )
        }

    })
}

const getCrearUsuario = (req, res)=>{
    res.render('crearUsuario')}

const getModificarUsuario = (req, res)=>{

    const param = req.params.id
    const sql = 'SELECT * FROM usuarios WHERE id=?'

    conexion.query(sql, param, (err, resultado)=>{
        if(err){
            console.log('Ha ocurrido un error al modificar usuario')
        }else{
            console.log(resultado)
            res.render('modificarUsuario', {usuarios: resultado})
        }
    })

    //console.log(param)
   }

const getEliminarUsuario = (req, res)=>{
    
    const param = req.params.id
    const sql = 'SELECT * FROM usuarios WHERE id=?'

    conexion.query(sql, param, (err, resultado)=>{
        if(err){
            console.log('Ha ocurrido un error al eliminar usuario')
        }else{
            console.log(resultado)
            res.render('eliminarUsuario', {usuarios: resultado})
        }
    })

}

const crearUsuario = (req, res)=>{
    
    const sql = 'INSERT INTO usuarios SET ?'
    const data = req.body
    conexion.query(sql, data, (err, resultado)=>{
        if(err){
            console.log('Ha ocurrido un error')
        }else{
            console.log('usuario registrado')
            res.redirect('/usuarios/todos')
        }


    })
    //res.render('usuarios', {usuarios: usuarios})
}

const modificarUsuario =(req, res)=>{
    
    const param = req.params.id
    console.log(param)
    const sql = `UPDATE usuarios SET nombre = '${req.body.nombre}', apellido='${req.body.apellido}', edad='${req.body.edad}' WHERE id = ${param}`
    conexion.query(sql, (err, resultado)=>{
        if(err){
            console.log('Ha ocurrido un error '+err)

        }else{
            console.log('Usuario actualizado')
            res.redirect('/usuarios/todos')

        }
    })

}

const eliminarUsuario =(req, res)=>{
    
    const param = req.params.id
    console.log(param)
    const sql = `DELETE FROM usuarios WHERE id = ${param}`
    conexion.query(sql, (err, resultado)=>{
        if(err){
            console.log('Ha ocurrido un error '+err)

        }else{
            console.log('Usuario eliminado')
            res.redirect('/usuarios/todos')

        }
    })
}

module.exports = {
    getUsuarios, 
    getCrearUsuario, 
    getModificarUsuario, 
    getEliminarUsuario,
    crearUsuario,
    modificarUsuario,
    eliminarUsuario
}