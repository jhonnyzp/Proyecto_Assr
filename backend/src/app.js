const express = require('express')
const app = express();

app.use(express.json());
app.use(express.urlencoded({extended:false}));

app.set('port', process.env.PORT | 3000);

app.get('/', (req,res)=>{
    res.send("Prueba de API para el proyecto");
});

app.use("/api/dispositivo",require("./routes/dispositivo") );
app.use("/api/ubicacion",require("./routes/ubicacion") );

app.listen(app.get('port'));
console.log(`Server on port ${app.get('port')}`)