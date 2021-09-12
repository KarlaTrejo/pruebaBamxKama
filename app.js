const express = require ('express'),
bodyParser=require('body-parser')
const app= express();


//Directorios
var actualizar=require('./routes/actualizar'); //Put
var mostrar=require('./routes/mostrar'); //Get
var eliminar=require('./routes/eliminar'); //Delete
var insertar=require('./routes/insertar'); //Post

//Rutas
app.get('/',(req,res)=>{ //Ruta principal 
    res.send('Funciona');
});

//Que se envíe en formato json
app.use (express.urlencoded({ extended: true})); //Nos permite tomar el contenido del cuerpo
app.use(express.json());  //Para pasarlo a formato json

app.use('/api', actualizar);
app.use('/api', mostrar);
app.use('/api', eliminar);
app.use('/api', insertar);

//Servidor
app.set('port',process.env.PORT || 3000)
app.listen(app.get('port'),()=>{
console.log("Servidor iniciado en el puerto 3000");
});