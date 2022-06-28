const mysql = require('mysql')
const { mysql_database } = require('./configuracion')

const conexion = mysql.createConnection(mysql_database)

conexion.connect((err, conn)=>{

    if(err){
        console.log('Error al conectar base de datos')

    }else{
        console.log('Conexion exitosa')
        return conn
    }

})

module.exports = conexion