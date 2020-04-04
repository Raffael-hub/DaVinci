let services = angular.module("app.services");

services.factory('EscolaService', function($http){
    
    service = {};

    service.getEscolas = function(cursoGeral){
        return $http.get('/escolas/'+cursoGeral);
    }

    service.AdicionarCursoEscola = function(novo_arr){
        return $http.post('/escolas/',novo_arr);
    }


  

   

    return service;
});


services.factory('CursosService', function($http){
    
    service = {};

    service.getCategorias = function(){
        return $http.get('/cursos');
    }

    service.newcurso = function(curso){
        return $http.post('/cursos',curso);
    }

    service.InserirValor = function(curso){
        console.log(curso);
        return $http.put('/cursos/'+curso);
    }


    

   

    return service;
});


services.factory('AdminService', function($http){

    service = {};

    service.login = function(admin){
        return $http.post('/admin',admin);
    }

    service.EscolasAdmin = function(){
        return $http.get('/admin');
    }

    service.CursosAdmin = function(curso){
        return $http.put('/admin',curso);
    }

    return service;

});

services.factory('CrudService', function($http){

        service = {};

        service.criarEscolas5 = function(new_escola){
            return $http.post('/adminCrud',new_escola);
        }

        service.updateEscola = function(update_escola){
            return $http.put('/adminCrud',update_escola);
        }

        service.deleteEscola = function(escola){
            console.log(escola.id);
            return $http.delete('/adminCrud/' + escola.id);
        }

        service.Cursos = function(){
            return $http.get('/adminCrud');
        }

       

        return service;

        
});

services.factory('CursosAdminService', function($http){

    service = {};

   
    service.CursosAdmin = function(){
        return $http.get('/cursosAdmin');
    }

    service.criarCursos5 = function(new_curso){
        return $http.post('/cursosAdmin',new_curso);
    }

    service.categoriasMostra2 = function(){
        return $http.put('/cursosAdmin');
    }

    return service;

});

services.factory('EscolasCursosService', function($http){

    service = {};

   
    service.CursosEscolas = function(curso){
        return $http.get('/adminCursoEscola/'+curso.id);
    }

    service.CursosEscolas2 = function(escola){
        return $http.post('/adminCursoEscola',escola);
    }

    service.deleteCurso = function(kk){
        
        
        return $http.delete('/adminCursoEscola/'+kk);
    }
    

    return service;

});

services.factory('EditarCursosService', function($http){

    service = {};

   
    service.EditarCursos = function(curso_id){
        return $http.get('/EditarCursos/'+curso_id);
    }

    service.deleteCurso = function(curso_del){
        
        console.log(curso_del);
        return $http.delete('/EditarCursos/'+curso_del);
    }

    return service;

});

services.factory('StarService', function($http){

    service = {};

   
    service.stats = function(x){
        return $http.post('/stats',x);
    }

   

    return service;

});



