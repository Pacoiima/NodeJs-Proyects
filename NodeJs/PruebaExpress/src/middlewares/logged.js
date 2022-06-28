const loggeoPrevio = (req, res, next)=>{

    let loggeo = true
    
    if(loggeo){

        next()

    }else{
    res.send('No puede acceder sin previo logeo')}

}

exports.loggeoPrevio = loggeoPrevio