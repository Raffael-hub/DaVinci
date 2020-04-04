var express = require('express');
var router = express.Router();
var mysql = require('mysql');


var con = mysql.createPool({
    host: 'localhost',
    user: 'id13150587_root',
    password: 'FLkie?$*4ZO*0@h_',
    database: 'id13150587_escolaspap'
    });



router.get('/', async function (req, res) {
    
    con.getConnection(function(err,connection) {
        if (err) throw err;

        connection.query("SELECT cursos.id, cursos.nome, cursos.pergunta, tags.tag, categorias.nome AS CategoriaNome FROM cursos,tags,categorias WHERE idTag = tags.id AND idCategoria=categorias.id GROUP BY cursos.id, cursos.nome, cursos.pergunta, tags.tag, CategoriaNome;",function (err, result, fields) { 
            if (err) throw err;
    
            if(!result[0]){
                console.log("NÃO RECEBEU")
            }else{
             
                res.send(result);
                

            }
            connection.release();
         });


         
    
     });
    });

     router.post('/', async function (req, res) {
        
        const AdminObj = req.body;

        
        const TagsArray = AdminObj.Tags;
        const CategoriasArray = AdminObj.Cat;

    

         for(let i =0;i<TagsArray.length;i++){
            if(TagsArray[i].includes(AdminObj.curso)){

                var idTag = TagsArray.indexOf(TagsArray[i]) + 1;
            }else{
                
            }
        }

      
        for(let i =0;i<CategoriasArray.length;i++){
            if(CategoriasArray[i].includes(AdminObj.categoria)){

                var idCategoria = CategoriasArray.indexOf(CategoriasArray[i]) + 1;
            }else{
                
            }
        }

        console.log("Tag: " + idTag);
        console.log("Categoria: " + idCategoria);
       
    
        
    
        

       con.getConnection(function(err,connection) {
            if (err) throw err;
    
            connection.query(`INSERT INTO cursos (nome, pergunta, idTag, idCategoria) VALUES (?, ?, ? ,?);`,[AdminObj.nome, AdminObj.pergunta, idTag, idCategoria] ,function (err, result, fields) { 
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
    
        con.getConnection(function(err,connection) {
            if (err) throw err;
    
            connection.query("SELECT * from categorias;",function (err, result, fields) { 
                if (err) throw err;
        
                if(!err == "null"){
                    console.log("NÃO RECEBEU");
                }else{
                 
                    res.send(result);
                    
    
                }
                connection.release();
             });
    
    
             
        
         });
        });

 module.exports = router;