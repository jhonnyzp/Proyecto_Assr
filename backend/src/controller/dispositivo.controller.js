const dbConnection = require('../config/databaseCon');
const connection = dbConnection();
let getDispositivo = async (req,res)=>{
    await connection.query("select * from Dispositivo;", (err,result)=>{
        if (result)    
            res.send(result);
        else
            res.status(500).send(err);
    });
}

module.exports = {
    getDispositivo
}
