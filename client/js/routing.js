var app = angular.module('app');

app.config(['$urlRouterProvider', '$stateProvider', '$locationProvider',  function ($urlRouterProvider, $stateProvider, $locationProvider) {


   $stateProvider
   .state('escolas',{
       url: '/escolas.html',
       views: {
           'container@': {
               controller: 'EscolasController',
               templateUrl: 'html/escolas.html'
           }
       }
   })



   .state('cursos',{
    url: '/cursos.html',
    
    views:{
        'container@':{
            controller: 'CursosController',
            templateUrl: 'html/cursos.html'
      }
     }
   })

   .state('home',{
    url: '/home.html',
    views:{
        'container@':{
            controller: 'HomeController',
            templateUrl: 'html/home.html'
      }
     }
   })

   .state('admin',{
    url: '/admin.html',
    views:{
        'container@':{
            controller: 'AdminController',
            templateUrl: 'html/admin.html'
      }
     }
   })

   .state('adminHub',{
    url: '/adminHub.html',
    views:{
        'container@':{
            controller: 'AdminHubController',
            templateUrl: 'html/adminHub.html'
      }
     }
   })

   .state('criarEscola',{
    url: '/criarEscola.html',
    views:{
        'container@':{
            controller: 'CriarEscolaController',
            templateUrl: 'html/criarEscola.html'
      }
     }
   })

   .state('editar_escola',{
    url: '/editarEscola.html',
    params:{
        escola:null
    },
    views:{
        'container@':{
            controller: 'EditarEscolaController',
            templateUrl: 'html/editar_escola.html'
      }
     }
   })

   .state('sobre',{
    url: '/sobre.html',
    views:{
        'container@':{
            controller: 'SobreController',
            templateUrl: 'html/sobre.html'
      }
     }
   })

   .state('adminHubEscolas',{
    url: '/adminHubEscolas.html',
    views:{
        'container@':{
            controller: 'adminHubEscolasController',
            templateUrl: 'html/adminHubEscolas.html'
      }
     }
   })

   .state('adminHubCursos',{
    url: '/adminHubCursos.html',
    views:{
        'container@':{
            controller: 'adminHubCursosController',
            templateUrl: 'html/adminHubCursos.html'
      }
     }
   })
   .state('editar_curso',{
    url: '/editarCurso.html',
    params:{
        curso:null
    },
    views:{
        'container@':{
            controller: 'EditarCursoController',
            templateUrl: 'html/editar_curso.html'
      }
     }
   })
   .state('criarCurso',{
    url: '/criarCurso.html',
    views:{
        'container@':{
            controller: 'CriarCursoController',
            templateUrl: 'html/criarCurso.html'
      }
     }
   })
   .state('escolacurso',{
    url: '/escolaCurso.html',
    params:{
        escCurso:null,
        nome:null
    },
    views:{
        'container@':{
            controller: 'EscolaCursoController',
            templateUrl: 'html/EscolaCurso.html'
      }
     }
   })

   .state('adminStats',{
    url: '/adminStats.html',

    views:{
        'container@':{
            controller: 'adminStatsController',
            templateUrl: 'html/adminStats.html'
      }
     }
   });


   
   $urlRouterProvider.otherwise('/home.html');
  
   if(window.history && window.history.pushState){
      
    $locationProvider.html5Mode({
            enabled: true,
            requireBase: false
     });
   }


}]);