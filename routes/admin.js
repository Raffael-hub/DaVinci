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
        
        const AdminObj = req.body;
       
        
        
    
        
    
        

        con.getConnection(function(err,connection) {
            if (err) throw err;
    
            connection.query(`SELECT * FROM administrador WHERE administrador.ad_username=? AND administrador.ad_password=?`,[AdminObj.user, AdminObj.pass], function (err, result, fields) { 
                if (err) throw err;
                console.log(result);
                if(!result[0]){
                    res.send({msg: 0});
                }else{
                 
                    res.send({msg: 1, dados: result});
                    
    
                }
                connection.release();
             });
         
    
     });


 

});

router.get('/', async function (req, res) {
        
   
   
    
    

    

    

    con.getConnection(function(err,connection) {
        if (err) throw err;

        connection.query(`SELECT escolas.id, escolas.nome, escolas.morada, escolas.email, escolas.contacto, escolas.website, escolas.imagem, distritos.distrito  FROM escolas, distritos WHERE idDistrito = distritos.id GROUP BY escolas.id, escolas.nome, escolas.morada, escolas.email, escolas.contacto, escolas.website, escolas.imagem, distritos.distrito;`, function (err, result, fields) { 
            if (err) throw err;
            
            if(!result[0]){
            console.log("Não entrou");
            }else{
                
                res.send(result);
                

            }
            connection.release();
         });
     

 });




});


router.put('/', async function (req, res) {


    

    const curso = req.body;
    console.log(curso);
    
    
    
    
        
    con.getConnection(function(err,connection) {
        if (err) throw err;

        connection.query(`UPDATE cursos SET nome=?, pergunta=? WHERE id=?;`,[curso.nome, curso.pergunta, curso.id], function (err, result, fields) { 
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
 module.exports = router;