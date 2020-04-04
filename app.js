var express = require('express');
var app = express();
var path = require("path");
const body_parser = require('body-parser');
const escolas = require("./routes/escolas");
const cursos = require("./routes/cursos");
const admin = require("./routes/admin");
const adminCrud = require("./routes/adminCrud");
const cursosAdmin = require("./routes/cursosAdmin");
const adminCursoEscola = require("./routes/adminCursoEscola");
const EditarCursos = require("./routes/EditarCursos");
const stats = require("./routes/stats");

app.use(body_parser.json());
app.use('/escolas',escolas);
app.use('/cursos',cursos);
app.use('/admin',admin);
app.use('/adminCrud',adminCrud);
app.use('/cursosAdmin',cursosAdmin);
app.use('/adminCursoEscola',adminCursoEscola);
app.use('/EditarCursos',EditarCursos);
app.use('/stats',stats);

app.use(express.static(__dirname + '/client'));

app.get('/', function(req, res){
    console.log(__dirname + 'index.html');
    res.sendFile(path.join(__dirname+ '/client/index.html'));
  });

app.get('/escolas.html', function(req, res){
   console.log(__dirname + 'index.html');
  res.sendFile(path.join(__dirname+ '/client/index.html'));
});

app.get('/cursos.html', function(req, res){
  console.log(__dirname + 'index.html');
  res.sendFile(path.join(__dirname+ '/client/index.html'));
});

app.get('/admin.html', function(req, res){
  console.log(__dirname + 'index.html');
  res.sendFile(path.join(__dirname+ '/client/index.html'));
});

app.get('/adminHub.html', function(req, res){
  console.log(__dirname + 'index.html');
  res.sendFile(path.join(__dirname+ '/client/index.html'));
});

app.get('/adminHubEscolas.html', function(req, res){
  console.log(__dirname + 'index.html');
  res.sendFile(path.join(__dirname+ '/client/index.html'));
});

app.get('/adminHubCursos.html', function(req, res){
  console.log(__dirname + 'index.html');
  res.sendFile(path.join(__dirname+ '/client/index.html'));
});

app.get('/criarEscola.html', function(req, res){
  console.log(__dirname + 'index.html');
  res.sendFile(path.join(__dirname+ '/client/index.html'));
});
app.get('/editar_escola.html', function(req, res){
  console.log(__dirname + 'index.html');
  res.sendFile(path.join(__dirname+ '/client/index.html'));
});

app.listen(8000);
console.log("running..")