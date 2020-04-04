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
        let distritosArray = ["","Faro","Beja","Setubal","Evora","Portalegre","Leiria","Coimbra","Viseu","Porto","Vila Real","Lisboa","Castelo Branco","Guarda","Aveiro","Braga","Viana do Castelo","Santarem","Braganca"];
        console.log(AdminObj);
        for(let i =0;i<distritosArray.length;i++){
            if(distritosArray[i].includes(AdminObj.distrito)){

                var idDistrito = distritosArray.indexOf(distritosArray[i]);
            }else{
                
            }
        }

        
        
    
        
    
        

        con.getConnection(function(err,connection) {
            if (err) throw err;
    
            connection.query(`INSERT INTO escolas (nome, morada, email, contacto,website, imagem, idDistrito) VALUES (?, ?, ? ,?,?, ?, ?);`,[AdminObj.nome, AdminObj.morada, AdminObj.email, AdminObj.contacto, AdminObj.website, AdminObj.imagem,idDistrito] ,function (err, result, fields) { 
                if (err) throw err;
                console.log(result);
                if(!err == "null"){
                    console.log("NÃ ENTROU");
                }else{
                 
                    res.send("Foi");
                    console.log("FOI");
                    
    
                }
                connection.release();
             });
         
    
     });

     


 

});

router.put('/', async function (req, res) {


    

    const up_escola = req.body;
    
    
    
    
    

    let distritosArray = ["","Faro","Beja","Setubal","Evora","Portalegre","Leiria","Coimbra","Viseu","Porto","Vila Real","Lisboa","Castelo Branco","Guarda","Aveiro","Braga","Viana do Castelo","Santarem","Braganca"];
        
        for(let i =0;i<distritosArray.length;i++){
            if(distritosArray[i].includes(up_escola.distrito)){

                var idDistrito = distritosArray.indexOf(distritosArray[i]);
            }else{
                
            }
        }

        console.log(up_escola);
        
    con.getConnection(function(err,connection) {
        if (err) throw err;

        connection.query(`UPDATE escolas SET nome=?, morada=?, email=?, contacto=?,website=?, imagem=?, idDistrito=? WHERE id=?;`,[up_escola.nome, up_escola.morada, up_escola.email, up_escola.contacto, up_escola.website, up_escola.imagem, idDistrito, up_escola.idEscola], function (err, result, fields) { 
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


router.delete('/:id', async function (req, res) {


    

    const escola_id = req.params.id;
    
    
    
    
    

    
        
    con.getConnection(function(err,connection) {
        if (err) throw err;

        connection.query(`DELETE FROM escolas where id=?`,[escola_id], function (err, result, fields) { 
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


router.get('/', async function (req, res) {


    con.getConnection(function(err,connection) {
        if (err) throw err;

        connection.query(`SELECT cursos.id, cursos.nome, cursos.pergunta, cursos.valor FROM cursos;`, function (err, result, fields) { 
            if (err) throw err;
            console.log(err);
      
            if(!err == "null"){
                console.log("NÃO ENTROU");
            }else{
             
                res.send(result);
            }
            connection.release();
         });
      

  });



});
 module.exports = router;