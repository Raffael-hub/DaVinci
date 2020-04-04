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
    
    const curso_id = req.params.id;
    con.getConnection(function(err,connection) {
        if (err) throw err;

        connection.query("SELECT * FROM escolacursos WHERE idEscola =?;",[curso_id],function (err, result, fields) { 
            if (err) throw err;
    
            if(!result[0]){
                res.send([]);
            }else{
             
                var obj = [];

                for(let i =0; i<result.length;i++){
                    obj.push(result[i].idCurso);
                }
                
                var newObj = obj.join();
                console.log(newObj);

                connection.query(`SELECT * FROM cursos WHERE cursos.id IN (${newObj});`,function (err, result, fields) { 
                    if (err) throw err;
                    
                    if(!err == 'null'){
                        console.log("NÃO RECEBEU");
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


    

    const result = req.params.id;
    var resss = result.split(",");
    
    const escola_id = resss[0];
    const curso_id = resss[1];
  
    


   
   
    
    
    
    

    
        
    con.getConnection(function(err,connection) {
        if (err) throw err;

        connection.query(`DELETE FROM escolacursos WHERE idEscola=? AND idCurso=?;`,[escola_id,curso_id], function (err, result, fields) { 
            if (err) throw err;
            console.log(err);
      
            if(!err == "null"){
                console.log("NÃO ENTROU");
            }else{
             
                res.send([{msg:"Escola Eliminada"}]);
            }
            connection.release();
         });
      

  });



});



 module.exports = router;