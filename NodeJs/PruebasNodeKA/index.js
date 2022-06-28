const http = require('http')
const server = http.createServer(onRequest)
const port = 3000
const fs = require('fs')

server.listen(port)
console.log("Conectado correctamente")

function onRequest(req, res){

    fs.readFile('index.html', (err, content)=>{
        if(err){
            if(err.code == 'ENOENT'){
                res.setStatus = 404
                console.log("No se encontró el archivo, compruebe la ruta")
                
            }else{
                res.setStatus = 500
                console.log("Erro de servidor, compruebe que este correcto")
            }
        }else{

            res.setHeader('content-type', 'text/html')
            res.write(content)
        }
        
    })
    

}