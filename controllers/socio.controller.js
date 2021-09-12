const { query } = require('express');
const express = require('express');

//Peticiones a servicio web
var mysql= require ('mysql');

//Este archivo contiene la información para la conexión 
// .. = retroceder un nivel en las carpetas 
//Sale de routes para entrar a helpers
var config = require ('../helpers/config.js');

var connection = mysql.createConnection(config);


// Lectura
module.exports.mostrar=(req,res)=>{
    connection.query("SELECT * FROM Socio", (err,rows,fields)=>{
        if(err){
            res.json({
                message:"Hay un error"
            })
        }
        else{
            res.json(rows);
        }
    });
}

//Actualizar
module.exports.actualizar = (req, res) => {
    connection.query("UPDATE Socio  SET nombre=?  WHERE idSocio=?", 
   [req.body.nombre,req.body.idSocio],(err, rows, fields)=>{
        if(err){
            console.log(err);
            res.json({
                message:"No se pudo actualizar",
                })
        }
        else{
            res.json({
                message:"Datos actualizados",
                nombre:req.body.nombre
            })
        }
    });
}

//Eliminar
module.exports.eliminar = (req, res) => {
    connection.query("DELETE FROM Socio Where idSocio=?", 
   [req.body.idSocio],(err, rows, fields)=>{
    if(err){
        console.log(err);
        res.json({
            message:"No se logró eliminar registro",
            })
    }
    else{
        res.json({
            message:"Elemento eliminado"   
        })
    }
    });
}

//Insertar
module.exports.insertar = (req, res) => {
    connection.query("INSERT INTO Socio (`nombre`,`direccion`,`rutaid_ruta`,`empresa`) values (?,?,?,?)", 
   [req.body.nombre,req.body.direccion,req.body.rutaid_ruta,req.body.empresa],(err, rows, fields)=>{
    if(err){
        console.log(err);
        res.json({
            message:"No se logró insertar elemento",
            })
    }
    else{
        res.json({
            message:"Insertando elemento",
            nombre:req.body.nombre,
            direccion:req.body.direccion,
            rutaid_ruta:req.body.rutaid_ruta,
            empresa:req.body.empresa

        })
    }
    });
}