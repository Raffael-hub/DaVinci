var express = require('express');
var router = express.Router();
var mysql = require('mysql');


var con = mysql.createPool({
    host: 'localhost',
    user: 'id13150587_root',
    password: 'FLkie?$*4ZO*0@h_',
    database: 'id13150587_escolaspap'
    });



router.post('/', async function (req, res) {
    
    const ola = req.body;

    con.getConnection(function(err,connection) {
        if (err) throw err;
        

        if(Object.entries(ola).length === 0){
            console.log("FOI");
            connection.query("SELECT * from cursos;",[ola.id],function (err, result, fields) { 
                if (err) throw err;
        
                if(!err == "null"){
                    console.log("NÃO RECEBEU");
                }else{
                    
                    res.send(result);
                    
    
                }
                connection.release();
             });
        }else{
            connection.query("SELECT * from cursos where idCategoria=?;",[ola.id],function (err, result, fields) { 
                if (err) throw err;
        
                if(!err == "null"){
                    console.log("NÃO RECEBEU");
                }else{
                 
                    res.send(result);
                    
    
                }
                connection.release();
             });
    
        }
        

         
    
     });
});
   




 module.exports = router;