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
    const ola = req.params.id
    
    
    con.getConnection(function(err,connection) {
        if (err) throw err;

        connection.query("SELECT * from escolacursos WHERE idCurso =?; ",[ola],function (err, result, fields) { 
            if (err) throw err;
    
            if(!result[0]){
                res.send([]);
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
    });

    router.delete('/:id', async function (req, res) {

        const ola = req.params.id;
        
 
        
        
            
        con.getConnection(function(err,connection) {
            if (err) throw err;
    
            connection.query(`DELETE FROM cursos WHERE cursos.id=?;`,[ola], function (err, result, fields) { 
                if (err) throw err;
                console.log(err);
          
                if(!err == "null"){
                    console.log("NÃO ENTROU");
                }else{
                 
                    res.send([{msg:"Escola atualizada"}]);
                }
                connection.release();
             });
          
    
      });
    
    
    
    });
    

    router.post('/', async function (req, res) {
        const ola = req.body;
        
        
        
        con.getConnection(function(err,connection) {
            if (err) throw err;
    
            connection.query("SELECT * from escolacursos WHERE idEscola =?; ",[ola[0]],function (err, result, fields) { 
                if (err) throw err;
        
                if(!result[0]){
                    connection.query(`SELECT * FROM cursos`,function (err, result, fields) { 
                        if (err) throw err;
                        
                        if(!err == 'null'){
                            console.log("NÃO RECEBEU");
                        }else{
                            
                            res.send(result);

                        }
                    });

                
           
            
                }else{
                 
                    var obj = [];
    
                        for(let i =0; i<result.length;i++){
                            obj.push(result[i].idCurso);
                        }
                        
                        var newObj = obj.join();
                        console.log(newObj);
    
                        connection.query(`SELECT * FROM cursos WHERE id NOT in(${newObj});`,function (err, result, fields) { 
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
        });


 


 module.exports = router;