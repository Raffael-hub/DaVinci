let directives = angular.module("app.directives");

directives.directive("chart1", function(StarService,$rootScope){
    return {
        restrict: 'A',
        $scope:{
            obj3:"=",
    },
        link: function($scope, $elm, $attr){
      /*   $scope.$watch("",newValue,oldValue){} */
            
       
            $rootScope.$on('thisIsTheNameOfTheEvent', function() {
               
            

            var data = new google.visualization.DataTable();
            data.addColumn('string','cursos');
            data.addColumn('number','valores');
            
            async function catcat2(){
                var categ = await StarService.stats($scope.obj3);
                var val  = categ.data;
                

                for(let i =0; i<val.length; i++){

                    
                  
                    data.addRows([[val[i].nome,val[i].valor]]);
                }
                    var options = {
                        'title' : 'Cursos Selecionados',
                        'width' : 950,
                        'height': 450,
                        "fill" : "coral"
                        
                      
        
                    }
                    var chart = new google.visualization.PieChart($elm[0]);
                    chart.draw(data,options);
            }
           
        
            catcat2();
        });
            
        }
        
    }
    
   
   });
   



   directives.directive("chart3", function(CrudService,$rootScope){
    return {
        restrict: 'A',
    
        link: function($scope, $elm, $attr){
    
            
         
             
            var data = new google.visualization.DataTable();
            data.addColumn('string','cursos');
            data.addColumn('number','Nr Cursos Selecionados');
            
            
                
            async function getCursos(){
        
                var count =0;
                var obj_curso;
                 cursos = await CrudService.Cursos();
                 let cursos_conta = cursos.data; 
                 $scope.cursos56 = cursos.data;
               
                 
         
                 let kk = cursos_conta.sort(function(a, b){return b.valor-a.valor});
                 
                 
            
                 
             
                

                    
                  
                    data.addRows([[kk[0].nome,kk[0].valor]]);
                    data.addRows([[kk[1].nome,kk[1].valor]]);
                    data.addRows([[kk[2].nome,kk[2].valor]]);
                
                    var options = {
                        'title' : 'Cursos Selecionados',
                        'width' : 650,
                        'height': 250,
                        "fill" : "coral"
                        
                      
        
                    }
                    var chart = new google.visualization.BarChart($elm[0]);
                    chart.draw(data,options);
                
            }
           
            getCursos();
     
            
        }
        
    }
    
   
   });

   google.load('visualization','1',{packages:['corechart']});


 


