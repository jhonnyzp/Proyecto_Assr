const dbConnection = require('../config/databaseCon');
const connection = dbConnection();
let getUbicacion = async (req,res)=>{
    await connection.query("select * from Ubicacion;", (err,result)=>{
        if (result)    
            res.send(result);
        else
            res.status(500).send(err);
    });
}

module.exports = {
    getUbicacion
}
