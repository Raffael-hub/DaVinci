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

        connection.query("SELECT * from categorias ;",function (err, result, fields) { 
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
            var c_res = []
            const cc = req.body.sim;
            
            for(let i =0; i<cc.length; i++){
                c_res.push(cc[i].id);
            }
            console.log(cc);
            
            var y = c_res.join(); 
            

            con.getConnection(function(err,connection) {
                if (err) throw err;
        
                connection.query(`SELECT cursos.id, cursos.nome, pergunta, idTag, idCategoria, tags.tag,imagem FROM cursos,tags WHERE idCategoria IN(${y}) AND idTag = tags.id GROUP BY cursos.id, cursos.nome, pergunta, idTag, idCategoria, tags.tag,imagem;`,function (err, result, fields) { 
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

        router.put('/:id', async function (req, res) {

            const ola = req.params.id;
            
          
            

            con.getConnection(function(err,connection) {
                if (err) throw err;
        
                connection.query(`UPDATE cursos SET valor = valor + 1 where cursos.id =? `,[ola],function (err, result, fields) { 
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


 module.exports = router;