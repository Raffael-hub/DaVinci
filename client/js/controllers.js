
let controllers = angular.module("app.controllers");


controllers.controller('EscolasController', function($scope, EscolaService, $state, $rootScope){
    
    $rootScope.geral;
    
    if($rootScope.geral == 'undefined'){
        var escolas;
    async function getEscolas(){
        
        escolas = await EscolaService.getEscolas($rootScope.geral);
        
        $scope.escola = escolas.data;
        console.log($scope.escola);
        
        $scope.$apply();
    }
    
        
    getEscolas();
    }else{
        var escolas;
    async function getEscolas(){
        
        escolas = await EscolaService.getEscolas($rootScope.geral);
        
        $scope.escola = escolas.data;
        $rootScope.geral = 'undefined';
        
        $scope.$apply();
    }
    
        
    getEscolas();
    }
    

    var Todas = function (){
        if($scope.Lisboa || $scope.Portalegre || $scope.Faro || $scope.Beja || $scope.Setubal || $scope.Evora || $scope.Leiria || $scope.Coimbra || $scope.Viseu || $scope.Porto || $scope.VilaReal || $scope.CasteloBranco || $scope.Guarda || $scope.Aveiro || $scope.Braga || $scope.VianaDoCastelo || $scope.Santarem || $scope.Braganca){
            $scope.All = true;
        }else{
            
            $scope.All = false;
            
        }
    }

    
    //FARO
    
    $scope.checkValFaro = function(){
        
        
        var escolasFaro = [];
        if(!$scope.Faro){
            for(let i =0; i<escolas.data.length; i++){
                
                if(escolas.data[i].distrito == "Faro"){
                    escolasFaro.push(escolas.data[i]);
                }
            }
            
            $scope.escolaFaro = escolasFaro;
            console.log($scope.escolaFaro);
            $scope.FaroSelected = true;
            $scope.All = true;
            
        }else{
            
            $scope.FaroSelected = false;
            $scope.Faro = false;
            Todas();
        }
    }


    //Beja
    $scope.checkValBeja = function(){
        
        
        var escolasBeja = [];
        if(!$scope.Beja){
            for(let i =0; i<escolas.data.length; i++){
                
                if(escolas.data[i].distrito == "Beja"){
                    escolasBeja.push(escolas.data[i]);
                }
            }
            
            $scope.escolaBeja = escolasBeja;
            $scope.BejaSelected = true;
            $scope.All = true;
            
        }else{
            
            $scope.BejaSelected = false;
            $scope.Beja = false;
            Todas();
        }
    }


    //Setubal
    $scope.checkValSetubal = function(){
        
        
        var escolasSetubal = [];
        if(!$scope.Setubal){
            for(let i =0; i<escolas.data.length; i++){
                
                if(escolas.data[i].distrito == "Setubal"){
                    escolasSetubal.push(escolas.data[i]);
                }
            }
            
            $scope.escolaSetubal = escolasSetubal;
            $scope.SetubalSelected = true;
            $scope.All = true;
            
        }else{
            
            $scope.SetubalSelected = false;
            $scope.Setubal = false;
            Todas();
        }
    }

    //Evora
    $scope.checkValEvora=function(){
        
        
        var escolasEvora = [];
        if(!$scope.Evora){
            for(let i =0; i<escolas.data.length; i++){
                
                if(escolas.data[i].distrito == "Evora"){
                    escolasEvora.push(escolas.data[i]);
                }
            }
            
            $scope.escolaEvora = escolasEvora;
            $scope.EvoraSelected = true;
            $scope.All = true;
            
        }else{
            
            $scope.EvoraSelected = false;
            $scope.Evora = false;
            Todas();
        }
    }

    //Portalegre
    $scope.checkValPortalegre = function(){
        
        
        var escolasPortalegre = [];
        if(!$scope.Portalegre){
            for(let i =0; i<escolas.data.length; i++){
                
                if(escolas.data[i].distrito == "Portalegre"){
                    escolasPortalegre.push(escolas.data[i]);
                }
            }
            
            $scope.escolaPortalegre = escolasPortalegre;
            $scope.PortalegreSelected = true;
            $scope.All = true;
            
        }else{
            
            $scope.PortalegreSelected = false;
            $scope.Portalegre= false;
            $scope.Portalegre = false;
            Todas();
        }
    }

    //Leiria
    $scope.checkValLeiria=function(){
        
        
        var escolasLeiria = [];
        if(!$scope.Leiria){
            for(let i =0; i<escolas.data.length; i++){
                
                if(escolas.data[i].distrito == "Leiria"){
                    escolasLeiria.push(escolas.data[i]);
                }
            }
            
            $scope.escolaLeiria = escolasLeiria;
            $scope.LeiriaSelected = true;
            $scope.All = true;
            
        }else{
            
            $scope.LeiriaSelected = false;
            $scope.Leiria = false;
            Todas();
        }
    }

    //Coimbra
    $scope.checkValCoimbra=function(){
        
        var escolasCoimbra = [];
        if(!$scope.Coimbra){
            for(let i =0; i<escolas.data.length; i++){
                
                if(escolas.data[i].distrito == "Coimbra"){
                    escolasCoimbra.push(escolas.data[i]);
                }
            }
            
            $scope.escolaCoimbra = escolasCoimbra;
            $scope.CoimbraSelected = true;
            $scope.All = true;
            
        }else{
            
            $scope.CoimbraSelected = false;
            $scope.Coimbra = false;
            Todas();
        }
    }

    //VISEU
    $scope.checkValViseu=function(){
        
        
        var escolasViseu = [];
        if(!$scope.Viseu){
            for(let i =0; i<escolas.data.length; i++){
                
                if(escolas.data[i].distrito == "Viseu"){
                    escolasViseu.push(escolas.data[i]);
                }
            }
            
            $scope.escolaViseu = escolasViseu;
            $scope.ViseuSelected = true;
            $scope.All = true;
            
        }else{
            
            $scope.ViseuSelected = false;
            $scope.Viseu = false;
            Todas();
        }
    }

    //PORTO

    $scope.checkValPorto=function(){
        
        
        var escolasPorto = [];
        if(!$scope.Porto){
            for(let i =0; i<escolas.data.length; i++){
                
                if(escolas.data[i].distrito == "Porto"){
                    escolasPorto.push(escolas.data[i]);
                }
            }
            
            $scope.escolaPorto = escolasPorto;
            $scope.PortoSelected = true;
            $scope.All = true;
            
        }else{
            
            $scope.PortoSelected = false;
            $scope.Porto = false;
            Todas();
        }
    }


    //VILA REAL

    $scope.checkValVilaReal = function(){


        var escolasVilaReal = [];
        if(!$scope.VilaReal){
            for(let i =0; i<escolas.data.length; i++){

                if(escolas.data[i].distrito == "Vila Real"){
                    escolasVilaReal.push(escolas.data[i]);
                }
            }

            $scope.escolaVilaReal = escolasVilaReal;
            $scope.VilaRealSelected = true;
            $scope.All = true;

        }else{

            $scope.VilaRealSelected = false;
            $scope.VilaReal = false;
            Todas();
        }
    }




    //Lisboa
    $scope.checkValLisboa = function(){
        
        
        var escolasLisboa = [];
        if(!$scope.Lisboa){
            for(let i =0; i<escolas.data.length; i++){
                
                if(escolas.data[i].distrito == "Lisboa"){
                    escolasLisboa.push(escolas.data[i]);
                }
            }
            
            $scope.escolaLisboa = escolasLisboa;
            $scope.LisboaSelected = true;

            
            $scope.All = true;
            
            
        }else{
            
            $scope.LisboaSelected = false;
            $scope.Lisboa= false;
            Todas();
        }
    }


    //CASTELO BRANCO

    $scope.checkValCasteloBranco = function(){


        var escolasCasteloBranco = [];
        if(!$scope.CasteloBranco){
            for(let i =0; i<escolas.data.length; i++){

                if(escolas.data[i].distrito == "Castelo Branco"){
                    escolasCasteloBranco.push(escolas.data[i]);
                }
            }

            $scope.escolaCasteloBranco = escolasCasteloBranco;
            $scope.CasteloBrancoSelected = true;
            $scope.All = true;

        }else{

            $scope.CasteloBrancoSelected = false;
            $scope.CasteloBranco = false;
            Todas();
        }
    }



    //GUARDA

    
    $scope.checkValGuarda = function(){


        var escolasGuarda = [];
        if(!$scope.Guarda){
            for(let i =0; i<escolas.data.length; i++){

                if(escolas.data[i].distrito == "Guarda"){
                    escolasGuarda.push(escolas.data[i]);
                }
            }

            $scope.escolaGuarda = escolasGuarda;
            $scope.GuardaSelected = true;
            $scope.All = true;

        }else{

            $scope.GuardaSelected = false;
            $scope.Guarda = false;
            Todas();
        }
    }


    //AVEIRO

    $scope.checkValAveiro = function(){


        var escolasAveiro = [];
        if(!$scope.Aveiro){
            for(let i =0; i<escolas.data.length; i++){

                if(escolas.data[i].distrito == "Aveiro"){
                    escolasAveiro.push(escolas.data[i]);
                }
            }

            $scope.escolaAveiro = escolasAveiro;
            $scope.AveiroSelected = true;
            $scope.All = true;

        }else{

            $scope.AveiroSelected = false;
            $scope.Aveiro = false;
            Todas();
        }
    }


    //BRAGA

    $scope.checkValBraga = function(){


        var escolasBraga = [];
        if(!$scope.Braga){
            for(let i =0; i<escolas.data.length; i++){

                if(escolas.data[i].distrito == "Braga"){
                    escolasBraga.push(escolas.data[i]);
                }
            }

            $scope.escolaBraga = escolasBraga;
            $scope.BragaSelected = true;
            $scope.All = true;

        }else{

            $scope.BragaSelected = false;
            $scope.Braga = false;
            Todas();
        }
    }



    //VIANA DO CASTELO

    $scope.checkValVianaDoCastelo = function(){


        var escolasVianaDoCastelo = [];
        if(!$scope.VianaDoCastelo){
            for(let i =0; i<escolas.data.length; i++){

                if(escolas.data[i].distrito == "Viana do Castelo"){
                    escolasVianaDoCastelo.push(escolas.data[i]);
                }
            }
            
            $scope.escolaVianaDoCastelo = escolasVianaDoCastelo;
            $scope.VianaDoCasteloSelected = true;
            $scope.All = true;

        }else{

            $scope.VianaDoCasteloSelected = false;
            $scope.VianaDoCastelo = false;
            Todas();
        }
    }



    //SANTAREM

    $scope.checkValSantarem = function(){


        var escolasSantarem = [];
        if(!$scope.Santarem){
            for(let i =0; i<escolas.data.length; i++){

                if(escolas.data[i].distrito == "Santarem"){
                    escolasSantarem.push(escolas.data[i]);
                }
            }

            $scope.escolaSantarem = escolasSantarem;
            $scope.SantaremSelected = true;
            $scope.All = true;

        }else{

            $scope.SantaremSelected = false;
            $scope.Santarem = false;
            Todas();
        }
    }


    //BRAGANÇA

    $scope.checkValBraganca = function(){


        var escolasBraganca = [];
        if(!$scope.Braganca){
            for(let i =0; i<escolas.data.length; i++){

                if(escolas.data[i].distrito == "Braganca"){
                    escolasBraganca.push(escolas.data[i]);
                }
            }

            $scope.escolaBraganca = escolasBraganca;
            $scope.BragancaSelected = true;
            $scope.All = true;

        }else{
            
            $scope.BragancaSelected = false;
            $scope.Braganca = false;
            Todas();
        }
    }


   



});

controllers.controller('HomeController', function($scope){


    $scope.header = "HOME";

});

controllers.controller('CursosController', function($scope,$state, CursosService, $rootScope,CursosAdminService){
    
    $scope.divP = false;
    $scope.ola = true;
    $scope.header = "CURSOS";
    $scope.fase2 = true;
    $scope.mostra = true;
    $scope.esconde = true;
    $scope.mostra2 = true;
    $scope.esconde4 = true;
    $scope.esconde5 = true;
    $scope.mostra9 = false;
    $scope.esconde10 = true;
    var SegTag;
    $scope.esconde_h1=false;
    

   

    $scope.IrEscolas = async function(curso){

           async function curso88(){
        
            let cursossss = await CursosService.InserirValor(curso.id);
            
            
            

        }

        curso88();

        
        $rootScope.geral = curso.id
        $state.go('escolas');
        
        
    }

    
    
    $scope.nr = 0;
    $scope.nrk = 0;
    
    async function getCategorias(){
        categorias = await CursosService.getCategorias();
        
        $scope.categorias = categorias.data;
        console.log(categorias.data);
        
        $scope.$apply();
    }
    
        
    getCategorias();
    var nr_P = 0;

    $scope.continuar = function(cat){
        console.log(cat);
        $scope.esconde_h1 = true;
        $scope.divP = true;
        $scope.fase2 = false;
        $scope.novas_categorias = cat;
        

    }
    $scope.esconde3 = true;
    var sim =[];
    var radioTrue;
    var nr3 = 0;
    var continua_cat = [];
    var tagsSeparated = [];

    $scope.curso = {sim};

    
    $scope.SNclick = function(x){
        
        if(x == "sim"){
            $scope.IsDisabled4 = false;
            $scope.ola5 = "sim"
            $scope.ola6 = "";
        }else{
            $scope.IsDisabled4 = false;
            $scope.ola6 = "nao";
            $scope.ola5 = "";
        }
    }
    $scope.seguinte2 = function(){
        
        var nr = $scope.nr;
        if(nr+1<=clicados.length){
            
            $scope.nr = nr+1;
             nr3+=1;
             
            radioTrue= $scope.SELECTED;
            radioFalse = $scope.SELECTED;

            rdtrue = $scope.ola5;
            rdfalse = $scope.ola6;

            if(rdtrue == "sim"){
                sim.push(radioTrue);
            }else{
                
            

        }
        
            
            /* if(typeof radioTrue == 'undefined'){
                

            }else{
                
                for(let i =0; i<=sim.length;i++){
                    if(sim.includes(radioTrue)){
                        
                    }else{
                        sim.push(radioTrue);
                        
                        
            }    */
       /*  } */  
              
                
        
        console.log(nr3);
        if(nr3 >= clicados.length){
            console.log(nr3);
            $scope.mostra2 = false;
            $scope.mensagem = "No próximo passo irás Selecionar 2 áreas que gostarias de trabalhar";
        }
             
            

        }else{
            
            console.log("Acabou as perguntas");
            $scope.esconde3 = false;
            $scope.mostra = false;
            $scope.restantes = sim;
            $scope.esconde = false;
            console.log(sim);

                
                async function getCursosTodos(){
                    curso3 = await CursosService.newcurso($scope.curso);
                    var TagsJuntar = curso3.data;
                    SegTag = curso3.data;
                    $scope.curso3 = curso3.data;
                    console.log(curso3.data);

                    
                    var juntaTag2 = TagsJuntar.map(function(tag){
                        return {nome: tag.tag, imagem: tag.imagem};
                    });

                    let l = (juntaTag2) => juntaTag2.filter((v,i) => juntaTag2.indexOf(v) ===i);
                    var repe = l(juntaTag2);
                    console.log(repe);
                    $scope.curso4 = repe;
                   

                    
                    
                    $scope.esconde4 = false;
                   

                    function removeDuplicates(originalArray, prop) {
                        var newArray = [];
                        var lookupObject  = {};
                   
                        for(var i in originalArray) {
                           lookupObject[originalArray[i][prop]] = originalArray[i];
                        }
                   
                        for(i in lookupObject) {
                            newArray.push(lookupObject[i]);
                        }
                         return newArray;
                    }
                   
                   var uniqueArray = removeDuplicates(TagsJuntar, "tag");
                   
                    $scope.curso5 = uniqueArray;
                    $scope.esconde = true;
                   $scope.$apply();

                }
                getCursosTodos();
                
                

                
            }
         
            
        }
        
        
      
    
    $scope.IsDisabled = true;
    $scope.IsDisabled4 = true;
    $scope.IsDisabled3 = true;
    $scope.IsDisabled5 = true;
    /* $scope.IsDisabled4 = true; */
    var clicados = [];



    $scope.clicado = function(categoria){
            if(!clicados.length>0){
                clicados.push(categoria);
               
            }else{
                if(clicados.includes(categoria)){
                    var idx = clicados.indexOf(categoria)
                    clicados.splice(idx,1)
                }else{
                    clicados.push(categoria);
                  
                    $scope.categoriasFinais = clicados;
                    console.log(clicados);
                   
                }
            }
            
        if(clicados.length<3){
            $scope.IsDisabled = true;
        }else{
            $scope.IsDisabled = false;
          

        }
            
        }
var clicados2 = [];

        $scope.clicado2 = function(curso){
            if(!clicados2.length>0){
                clicados2.push(curso);
               
            }else{
                if(clicados2.includes(curso)){
                    var idx = clicados2.indexOf(curso)
                    clicados2.splice(idx,1)
                }else{
                    clicados2.push(curso);
                    console.log(clicados2);
                    
                   
                }
            }
            if(clicados2.length<2){
                $scope.IsDisabled3 = true;
            }else{
                $scope.IsDisabled3 = false;
              
    
            }
        }

        


        var ultimo = [];
        
        
        $scope.siga = function(){
           
           console.log(SegTag);
           console.log(clicados2);

           SegTag.forEach(element => {
               clicados2.forEach(element2 =>{
                   if(element.tag == element2){
                       ultimo.push(element);
                   }
               })
           });

           console.log(ultimo);
           $scope.mostra9 = true;
           $scope.esconde4 = true;
           $scope.esconde5 = false;
           
           $scope.mostra7 = ultimo;
           console.log(ultimo);
            
        }

        var sim3 = [];
        var nr5 = 0;

        $scope.SNclick2 = function(x){
        
            if(x == "sim"){
                $scope.IsDisabled5 = false;
                $scope.ola7 = "sim"
                $scope.ola8 = "";
            }else{
                $scope.IsDisabled5 = false;
                $scope.ola7 = "nao";
                $scope.ola8 = "";
            }
        }
        $scope.seguinte3 = function(){
            
            nr5= nr5 + 1;
            var nrk = $scope.nrk;
            $scope.nrk = nrk+1;
            

            radioTrue2= $scope.SELECTED3;
            
            
            rdtrue = $scope.ola7;
            rdfalse = $scope.ola8;

            if(rdtrue == "sim"){
                sim3.push(radioTrue2);
            }else{

            }
            
         

        if(sim3.length>2){
            //Faz qualquer coisa, MAs não pode proseeguir
        }



            
            
            
        
        console.log(ultimo.length);
        console.log(nr5);

        if(nr5 == ultimo.length){
            $scope.final5 = sim3;
            $scope.esconde10 = false;
            $scope.esconde5 = true;
            $scope.mostra9 = true;
        }
        

    }
          
           
        


        

    
    
});



controllers.controller('AdminController', function($scope,$state, AdminService){
    $scope.esconde13 = true;
    $scope.msg5 = "Username/password Invalido";

    $scope.header = "ADMIN";

    $scope.btnLogin = function(){
        let userAdmin ={
            user: $scope.INPUT1,
            pass: $scope.INPUT2

        }
        
       
        async function Login(){
            $scope.admin = userAdmin;
            let login = await AdminService.login($scope.admin);
            let login2 = login.data;
           
            

            if(login2.msg == 1){
                $state.go("adminHub");
            }else{
                $scope.esconde13 = false;
                $scope.$apply();

            }
        }

        Login();



        
        
    }


    

    

    
});


controllers.controller('AdminHubController', function($scope,$state, AdminService,CrudService,StarService, $rootScope){

    $scope.header = "ADMIN HUB";
    
    async function Escolas6(){
       
        let EscolasAdmin = await AdminService.EscolasAdmin();
         $scope.EscolasAdmin2 = EscolasAdmin.data;
         console.log($scope.EscolasAdmin2);
         
         $scope.$apply();
         
 
    }
    

    Escolas6();

    async function catcat2(){
        var kk;
        var categ = await StarService.stats(kk);
        var categ3  = categ.data;
        
        var valorTotal = 0;

        for(let i = 0; i<categ3.length; i++){
            valorTotal+=categ3[i].valor;
        }

        
        
        $scope.total = valorTotal;
        $scope.$apply();
    }
   

    catcat2();

    async function getCursos(){
        
       var count =0;
       var obj_curso;
        cursos = await CrudService.Cursos();
        let cursos_conta = cursos.data; 
        $scope.cursos56 = cursos.data;
      
        /* for(let i =0 ; i<cursos_conta.length; i++){
            if(cursos_conta[i].valor > count){
                count = cursos_conta[i].valor;
                obj_curso = cursos_conta[i];

            }
            
            
        }
        $scope.obj_cursos = obj_curso; */
        

        let kk = cursos_conta.sort(function(a, b){return b.valor-a.valor});
        $scope.obj_cursos = kk;
        
   
        $scope.$apply();
    }

    getCursos();

    


});




controllers.controller('CriarEscolaController', function($scope,$state, CrudService, AdminService){
    

    async function Escolas7(){
       
        let distritos = await AdminService.EscolasAdmin();
         let dist = distritos.data;
         
         function removeDuplicates(originalArray, prop) {
            var newArray = [];
            var lookupObject  = {};
       
            for(var i in originalArray) {
               lookupObject[originalArray[i][prop]] = originalArray[i];
            }
       
            for(i in lookupObject) {
                newArray.push(lookupObject[i]);
            }
             return newArray;
        }
       
       var uniqueArray = removeDuplicates(dist, "distrito");
       $scope.NovosDistritos = uniqueArray;
       $scope.distrito = uniqueArray[0].distrito;
       
       $scope.$apply();
         
 
    }

    Escolas7();

    

    $scope.criarEscola2 = function(){
        var nome = $scope.nome;
        var morada = $scope.morada;
        var email = $scope.email;
        var website = $scope.website;
        var contacto = $scope.contacto;
         var imagem = $scope.imagem;
         var distrito = $scope.distrito;
  
        let new_escola = {
            nome: nome,
            morada: morada,
            email: email,
            website: website,
            contacto: contacto,
            imagem:imagem,
            distrito: distrito


        }
        $scope.escolas = new_escola;
        console.log(new_escola);

        //TODO Fazer metodo receber req.body no adminCruds.js / Criar Service / Mandar new_escola comp param no service
        

        async function Inserir(){
            insert_escola = await CrudService.criarEscolas5($scope.escolas);
           
            if(insert_escola){
                alert("Escola Criada");
                $state.go("adminHubEscolas");
            }
        }
        
        Inserir();

    }

   
});



controllers.controller('EditarEscolaController', function($scope,$state,$timeout, CrudService,EscolaService, AdminService,EditarCursosService, EscolasCursosService){

    $scope.zet = false;
    async function Escolas8(){
       
        let distritos = await AdminService.EscolasAdmin();
         let dist = distritos.data;
         
         function removeDuplicates(originalArray, prop) {
            var newArray = [];
            var lookupObject  = {};
       
            for(var i in originalArray) {
               lookupObject[originalArray[i][prop]] = originalArray[i];
            }
       
            for(i in lookupObject) {
                newArray.push(lookupObject[i]);
            }
             return newArray;
        }
       
       var uniqueArray = removeDuplicates(dist, "distrito");
       $scope.NovosDistritos = uniqueArray;
      
       
       $scope.$apply();
         
 
    }

    Escolas8();


    $scope.escola = $state.params.escola;
    $scope.distrito = $scope.escola.distrito;
    

    $scope.gravar = function(){
        var nome = $scope.escola.nome;
        var morada = $scope.escola.morada;
        var email = $scope.escola.email;
        var website = $scope.escola.website;
        var contacto = $scope.escola.contacto;
         var imagem = $scope.escola.imagem;
         var distrito = $scope.escola.distrito;
         var idEscola = $scope.escola.id;
  
        let update_escola = {
            nome: nome,
            morada: morada,
            email: email,
            website: website,
            contacto: contacto,
            imagem:imagem,
            distrito: distrito,
            idEscola: idEscola


        }

        console.log(update_escola);

        $scope.update_escola = update_escola;

        async function update(){
           let k = CrudService.updateEscola($scope.update_escola);
           if(k){
            $timeout(function(){
                
                $scope.zet = true;
                alert("Escola Atualizada");
             }, 100);
   
               $state.go("adminHub");
           }else{
               alert("Erro na atualização");
           }
        }

        update();
    }

    $scope.mm4 = false;
    $scope.mm6 = false;
    
    $scope.cursos = function(escola_id){
        $scope.escola_id_curso = escola_id;
        async function Escolas16(){
       
        let cursos = await EditarCursosService.EditarCursos(escola_id);
        $scope.cc = cursos.data;
        if($scope.cc.length==0){
            $scope.mm7 = true;
        }
            
             if($scope.mm4 == false){
                $scope.mm4 = true;
             }else{
                 $scope.mm4 = false;
             }
           $scope.$apply();
             
     
        }
    
        Escolas16();
    
    }

    
    $scope.eliminar = function(curso){
        var mm5 = $scope.escola_id_curso;

        var curso_del = [mm5,curso.id];

        async function Escolas17(){
       
            let cursos = await EditarCursosService.deleteCurso(curso_del);
            
            if(cursos){
                alert("Curso Eliminado");
                $state.go("adminHub");
            }
                
                 
         
            }
        
            Escolas17();
        

        
    }

    $scope.adicionar = function(escola_id){
    
        $scope.escolacc_id = escola_id;
        async function Escolas19(){
            escola = [
                escola_id
            ];
       
            let cursos = await EscolasCursosService.CursosEscolas2(escola);
            $scope.cursos4 = cursos.data;
                
            if($scope.mm6 == false){
                $scope.mm6 = true;
             }else{
                 $scope.mm6 = false;
             }
           $scope.$apply();
         
            }
        
            Escolas19();
        

        
    }

    $scope.adicionar3 = function(curso){
        console.log(curso);
        console.log($scope.escolacc_id);

        var novo_arr = [
            curso.id,$scope.escolacc_id
        ];

        
        

        async function Escolas19(){
      
            let cursos = await EscolaService.AdicionarCursoEscola(novo_arr);
                if(cursos){
                    alert("Curso Adicionada");
                    $scope.mm7 = false;
                    $state.go("adminHubEscolas");
                }
         
            }
        
            Escolas19();
    }
    
});


controllers.controller('SobreController', function($scope,$state){
 $scope.header = "Sobre Page";

});


controllers.controller('adminHubEscolasController', function($scope,$state, CrudService, AdminService){
   
    async function getEscolas(){
        
       
        escolas = await AdminService.EscolasAdmin();
        //
        $scope.escola = escolas.data;
        console.log($scope.escola);
        
        $scope.$apply();
    }
    
        
    getEscolas();

    $scope.criarEscola = function(){
        $state.go("criarEscola");
    }

    $scope.editar = function(escola){
        
        $state.go("editar_escola", {escola:escola});
        console.log(escola);
    }

    $scope.eliminar = async function(escola){
        console.log(escola);
        escolaDe = await CrudService.deleteEscola(escola); 
        
        if(escolaDe){
            alert("Escola Eliminada");
            $state.reload();
        }
    }
   
   });


   controllers.controller('adminHubCursosController', function($scope,$state,CrudService,EscolasCursosService){

    async function getCursos(){
        
       
        cursos = await CrudService.Cursos();
       
        $scope.cursos = cursos.data;
        console.log($scope.cursos);
        
        
        $scope.$apply();
    }
    
        
    getCursos();
   

    $scope.editar = function(curso){
        
        $state.go("editar_curso", {curso:curso});

    }

    $scope.eliminar = function(x){

        
        async function Escolas19(){
            var kk = x.id
            let curso_del = await EscolasCursosService.deleteCurso(kk);
            
           if(cursos){
                alert("Curso Eliminado");
                $state.go("adminHub");
            } 
                
                 
         
            }
      
            Escolas19(); 
        }

    $scope.escolas = function(escola){
        
        
       async function getCursosEscolas(){
        
       
        cursosEscolas = await EscolasCursosService.CursosEscolas(escola);
       
        $scope.cursosEscolas = cursosEscolas.data;
        console.log(cursosEscolas.data);

        if(cursosEscolas.data.length == 0){
            alert("Este Curso Não está inserido em nenhuma Escola");
        }else{
            $state.go("escolacurso", {escCurso:$scope.cursosEscolas, nome:escola.nome})
        }
       
        
        $scope.$apply();
    }
    
        
    getCursosEscolas();

    }

    
   });

   controllers.controller('EditarCursoController', function($scope,$state,AdminService ,$timeout){

    $scope.curso = $state.params.curso;
  
    $scope.gravar = function(){
        async function update(){
            let k = AdminService.CursosAdmin($scope.curso);
            if(k){
             $timeout(function(){
                 
                 alert("Curso Atualizado");
              }, 100);
    
                $state.go("adminHubCursos");
            }else{
                alert("Erro na atualização");
            }
         }
 
         update();
    }
   });




   controllers.controller('CriarCursoController', function($scope,$state, CursosAdminService){
    
   
    async function curso7(){
        $scope.arrayTag = [];
        $scope.arrayCategorias = [];
        let cursos = await CursosAdminService.CursosAdmin();
        let cur = cursos.data;
        
        
         function removeDuplicates(originalArray, prop) {
            var newArray = [];
            var lookupObject  = {};
       
            for(var i in originalArray) {
               lookupObject[originalArray[i][prop]] = originalArray[i];
            }
       
            for(i in lookupObject) {
                newArray.push(lookupObject[i]);
            }
             return newArray;
        }
       
       var uniqueArray = removeDuplicates(cur, "tag");
       var uniqueArray2 = removeDuplicates(cur,"CategoriaNome");

      
       for(let i =0; i<uniqueArray.length; i++){
        $scope.arrayTag.push(uniqueArray[i].tag);
        
    }
 

       for(let i =0; i<uniqueArray2.length; i++){
        $scope.arrayCategorias.push(uniqueArray2[i].CategoriaNome);
    }
       



       $scope.NovosCursos = uniqueArray;
       $scope.curso = uniqueArray[0].tag;
       
      


       $scope.NovosCategorias = uniqueArray2;
       $scope.categoria= uniqueArray2[0].CategoriaNome;


      
      
         
       $scope.$apply();
    }

    curso7();


    

    

    $scope.criarCurso2 = function(){
        var nome = $scope.nome;
        var pergunta = $scope.pergunta;
        var curso = $scope.curso;
        var categoria = $scope.categoria;
        var tags = $scope.arrayTag;
       var Categorias = $scope.arrayCategorias;
  
        let new_curso = {
            nome: nome,
            pergunta: pergunta,
            curso: curso,
            categoria: categoria,
            Tags:tags,
            Cat:Categorias

            

        }
        $scope.cursos = new_curso;
        console.log(new_curso);

        //TODO Fazer metodo receber req.body no adminCruds.js / Criar Service / Mandar new_escola comp param no service
        

        async function Inserir(){
            insert_curso = await CursosAdminService.criarCursos5($scope.cursos);
           
            if(insert_curso){
                alert("Curso Criado");
                $state.go("adminHubCursos");

            }
        }
        
        Inserir();

    }

   
});


controllers.controller('EscolaCursoController', function($scope,$state){
    $scope.cursoNome = $state.params.nome;
    $scope.escolas = $state.params.escCurso;        
    
   
   });

controllers.controller('adminStatsController', function($scope,$state,CursosAdminService,StarService, $rootScope){

  
    

async function catcat(){
    categorias = await CursosAdminService.categoriasMostra2();

    $scope.zz = categorias.data;
    $scope.$apply();
    
}

catcat();



$scope.width = 900;

    $scope.height = 350;
    $scope.yAxis = 'Selecionados';
    $scope.xAxis = 'Cursos';

$scope.max = 0;


$scope.cat_click = function(x){
    
    
    $scope.obj3 = x;
    $scope.obj5 = x;
    $rootScope.$broadcast('thisIsTheNameOfTheEvent');
    
   
}







   });

   
   
   
   