var express = require('express');
var router = express.Router();
var mysql = require('mysql');


var con = mysql.createPool({
    host: 'localhost',
    user: 'id13150587_root',
    password: 'FLkie?$*4ZO*0@h_',
    database: 'id13150587_escolaspap'
    });


router.get('/:id', async function (req, res) {
    console.log(req.params);
    if(req.params.id == 'undefined'){
        con.getConnection(function(err,connection) {
            if (err) throw err;
    
            connection.query("SELECT * FROM escolas,distritos WHERE idDistrito = distritos.id;",function (err, result, fields) { 
                if (err) throw err;
        
                if(!result[0]){
                    console.log("NÃO RECEBEU")
                }else{
                 
                    res.send(result);
                    
    
                }
                connection.release();
             });
        
         });
    }else{
      
        

        con.getConnection(function(err,connection) {
            if (err) throw err;
    
            connection.query("SELECT * FROM escolacursos WHERE idCurso=?;",[req.params.id],function (err, result, fields) { 
                if (err) throw err;
                
                if(err == 'null'){
                    console.log("NÃO RECEBEU")
                }else{
                 
                    
                    var obj = [];

                    for(let i =0; i<result.length;i++){
                        obj.push(result[i].idEscola);
                    }
                    
                    var newObj = obj.join();
                    console.log(newObj);

                    connection.query(`SELECT * FROM escolas,distritos WHERE escolas.id IN (${newObj}) AND idDistrito = distritos.id;`,function (err, result, fields) { 
                        if (err) throw err;
                        
                        if(err == 'null'){
                            console.log("NÃO RECEBEU")
                        }else{
                            
                            res.send(result);

                        }
                    });

                }
                connection.release();
             });
        
         });
    }
});
    
    
    router.post('/', async function (req, res) {
        const ola = req.body;
        var curso_id = ola[0];
        var escola_id = ola[1];
        

        con.getConnection(function(err,connection) {
            if (err) throw err;
    
            connection.query(`INSERT INTO escolacursos (idEscola,idCurso) VALUES (?,?);`,[escola_id,curso_id],function (err, result, fields) { 
                if (err) throw err;
        
                if(!err =="null"){
                    console.log("NÃO RECEBEU")
                }else{
                 
                    res.send("Foi");
                    
    
                }
                connection.release();
             });
         
    
     });

 
    });








 module.exports = router;