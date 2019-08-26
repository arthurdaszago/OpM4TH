  
  var img = ["img/apple.png","img/cherries.png"];
  var img2 = ["img/pineapple.png","img/raspberry.png"];
  var dificuldade =0;
  var fase = 0;
  var posneg = ["-","+"]
  var perguntas = [[
                   ["+","=","25","-","05","=","08","04","=","??"],
                   ["-","=","15","-","22","=","03","02","=","??"],
                   ["-","=","05","+","12","=","34","08","=","??"],
                   ["+","=","05","+","06","=","09","02","=","??"],
                   ["-","=","05","+","09","=","18","03","=","??"],
                   ["-","=","04","-","06","=","16","08","=","??"]],
                  [["*","=","300","-","16","=","34","05","=","??"],
                   ["+","=","340","/","02","=","66","54","=","??"],
                   ["/","=","08","-","24","=","64","08","=","??"],
                   ["*","=","140","/","2","=","5","8","=","??"],
                   ["+","=","444","-","20","=","91","22","=","??"],
                   ["-","=","125","/","15","=","15","80","=","??"]],
                  [["*","=","48","+","√25","=","13","4³","=","??"],
                   ["+","=","208","-","7²","=","95","√625","=","??"],
                   ["/","=","12","*","4⁰","=","144","4²","=","??"],
                   ["/","=","10","*","2³","=","800","√25","=","??"],
                   ["*","=","169","+","6²","=","49","√16","=","??"],
                   ["+","=","200","/","√625","=","6","2⁵","=","??"]]];
  var respostas = [[["08","16","12","15"],
                   ["08","12","10","05"],
                   ["09","25","17","18"],
                   ["00","04","02","03"],
                   ["01","07","04","03"],
                   ["10","26","18","22"]],
                  [["1","11","06","09"],
                   ["154","262","208","118"],
                   ["03","19","11","24"],
                   ["6","22","10","24"],
                   ["311","355","315","358"],
                   ["20","180","100","60"]],
                  [["-58","70","6","-52"],
                   ["39","89","49","87"],
                   ["-4","28","0","25"],
                   ["5","15","0","20"],
                   ["9","17","12","20"],
                   ["18","82","14","85"]]];
repeticao = setInterval(function(){
          var tempo = $(".jogo span.seg").text();
          var tempoAtual = parseInt(tempo-1);
          $(".jogo span.seg").text(tempoAtual);
          $("#progresso").animate({width: "-=1.5vw"},0);
            if(tempoAtual==0){
              clearInterval(repeticao);
              $(".jogo").fadeOut();
              $("#perdeu").fadeIn();
            };
        },1000);

//Embaralhar as li 
(function($){
    $.fn.shuffleli = function() {
        var allElems = this.get(),
            getRandom = function(max) {
                return Math.floor(Math.random() * max);
            },
            shuffled = $.map(allElems, function(){
                var random = getRandom(allElems.length),
                    randEl = $(allElems[random]).clone(true)[0];
                allElems.splice(random, 1);
                return randEl;
           });
        this.each(function(i){
            $(this).replaceWith($(shuffled[i]));
        });
        return $(shuffled);
    };
})(jQuery);

//EMBARALHAR AS MATRIZES DO MESMO JEITO
function shuffle(a) {
     for (let i = perguntas[dificuldade].length - 1; i > 0; i--) {
       const j = Math.floor(Math.random() * (i + 1));
       [perguntas[dificuldade][i], perguntas[dificuldade][j]] = [perguntas[dificuldade][j], perguntas[dificuldade][i]];
       [respostas[dificuldade][i], respostas[dificuldade][j]] = [respostas[dificuldade][j], respostas[dificuldade][i]];
     }
};

var acerto = new Audio("aud/acerto.mp3");
var erro = new Audio("aud/erro.mp3")
var fundo = new Audio("aud/fundo.mp3")
 fundo.play();
  

  //ESCOLHER DIFICULDADE
 $(".inicio div").on("click", function(){
      $("section.dificuldade").fadeIn();
      $("section.fase1").fadeOut();
      $("section.inicio").fadeOut();
     // $("body div.fundo").fadeOut();
       });
    
      //FACIL
      $(".dificuldade ul li").on('click',function(){
        fundo.play();
        if (this.id == 1) {
          dificuldade = 0;
        }else if (this.id == 2) {
          dificuldade = 1;
        }else if (this.id == 3) {
          dificuldade = 2;
        }
        shuffle();
        $(".jogo ").fadeIn();
        $("#fase1 ul.res li").shuffleli();
        $("#fase1").fadeIn();
        $("section.dificuldade").fadeOut();
        $("#progresso").animate({width: "51%"},1);
  
        $(".jogo span.seg").text(31);

        var numimg = Math.floor(Math.random() * 2);
        var numimg2 = Math.floor(Math.random() * 2);
        var sortposneg = Math.floor(Math.random() * 2);
        var i = parseInt(sortposneg);
        console.log(numimg);
        console.log(numimg2);
        console.log(sortposneg);
          //CONTA1
          $("#fase1 .ops .op11 .x img").attr("src",img[numimg]);
          $("#fase1 .ops .op11 .opr").text(perguntas[dificuldade][fase][0]); 
                                                                   
          $("#fase1 .ops .op11 .y img").attr("src",img2[numimg2]);
          $("#fase1 .ops .op11 .equal").text(perguntas[dificuldade][fase][1]); 
          $("#fase1 .ops .op11 .result").text(perguntas[dificuldade][fase][2]); 

          $("#fase1 .ops .op12 .x img").attr("src",img[numimg]);
          $("#fase1 .ops .op12 .opr").text(perguntas[dificuldade][fase][3]);
          $("#fase1 .ops .op12 .number").text(perguntas[dificuldade][fase][4]);
          $("#fase1 .ops .op12 .equal").text(perguntas[dificuldade][fase][5]);
          $("#fase1 .ops .op12 .result").text(perguntas[dificuldade][fase][6]);

          $("#fase1 .ops .op13 .y img").attr("src",img2[numimg2]);
          $("#fase1 .ops .op13 .opr").text(posneg[sortposneg]);
          $("#fase1 .ops .op13 .number").text(perguntas[dificuldade][fase][7]);
          $("#fase1 .ops .op13 .equal").text(perguntas[dificuldade][fase][8]);
          $("#fase1 .ops .op13 .result").text(perguntas[dificuldade][fase][9]);

          $("#fase1 .res .r1").text(respostas[dificuldade][fase][0]);
          $("#fase1 .res .r2").text(respostas[dificuldade][fase][1]);
          $("#fase1 .res .r3").text(respostas[dificuldade][fase][2]);
          $("#fase1 .res .r4").text(respostas[dificuldade][fase][3]);

          $("#fase1 .res li").on('click',function(){
             res = $(this).text();
            console.log(res);
              if(res == respostas[dificuldade][fase][i]){
                acerto.play();
               tempo = $(".jogo span.seg").text();
               tempoAtual = parseInt(tempo)+10;
               $(".jogo span.seg").text(tempoAtual);
               $( "#progresso" ).animate({width: "+=10vw"}, 100);
                fase += 1;
                 $("#fase1").fadeOut();
                 $("#fase2 ul.res li").shuffleli();
                 $("div#fase2").fadeIn();
                 console.log(fase);//FASE2
                   numimg = Math.floor(Math.random() * 2);
                   numimg2 = Math.floor(Math.random() * 2);
                   sortposneg = Math.floor(Math.random() * 2);
                   i = parseInt(sortposneg);
                  console.log(numimg);
                  console.log(numimg2);
                  console.log(sortposneg);
                    //CONTA1
                    $("#fase2 .ops .op11 .x img").attr("src",img[numimg]);
                    $("#fase2 .ops .op11 .opr").text(perguntas[dificuldade][fase][0]);
                    $("#fase2 .ops .op11 .y img").attr("src",img2[numimg2]);
                    $("#fase2 .ops .op11 .equal").text(perguntas[dificuldade][fase][1]);
                    $("#fase2 .ops .op11 .result").text(perguntas[dificuldade][fase][2]);

                    //CONTA2
                    $("#fase2 .ops .op12 .x img").attr("src",img[numimg]);
                    $("#fase2 .ops .op12 .opr").text(perguntas[dificuldade][fase][3]);
                    $("#fase2 .ops .op12 .number").text(perguntas[dificuldade][fase][4]);
                    $("#fase2 .ops .op12 .equal").text(perguntas[dificuldade][fase][5]);
                    $("#fase2 .ops .op12 .result").text(perguntas[dificuldade][fase][6]);
                    //CONTA3
                    $("#fase2 .ops .op13 .y img").attr("src",img2[numimg2]);
                    $("#fase2 .ops .op13 .opr").text(posneg[sortposneg]);
                    $("#fase2 .ops .op13 .number").text(perguntas[dificuldade][fase][7]);
                    $("#fase2 .ops .op13 .equal").text(perguntas[dificuldade][fase][8]);
                    $("#fase2 .ops .op13 .result").text(perguntas[dificuldade][fase][9]);
                    //respostas[dificuldade]
                    $("#fase2 .res .r1").text(respostas[dificuldade][fase][0]);
                    $("#fase2 .res .r2").text(respostas[dificuldade][fase][1]);
                    $("#fase2 .res .r3").text(respostas[dificuldade][fase][2]);
                    $("#fase2 .res .r4").text(respostas[dificuldade][fase][3]);

                    $("#fase2 .res li").on('click',function(){
                       res = $(this).text();
                      console.log(res);
                        if(res == respostas[dificuldade][fase][i]){
                          acerto.play();
                          tempo = $(".jogo span.seg").text();
                          tempoAtual = parseInt(tempo)+10;
                          $(".jogo span.seg").text(tempoAtual);
                          $( "#progresso" ).animate({width: "+=10vw"}, 100);
                          fase += 1;
                           $("#fase2").fadeOut();
                           $("#fase3 ul.res li").shuffleli();
                           $("#fase3").fadeIn();
                           console.log(fase);//FASE3
                               numimg = Math.floor(Math.random() * 2);
                               numimg2 = Math.floor(Math.random() * 2);
                               sortposneg = Math.floor(Math.random() * 2);
                                i = parseInt(sortposneg);
                              console.log(numimg);
                              console.log(numimg2);
                              console.log(sortposneg);
                                //CONTA1
                                $("#fase3 .ops .op11 .x img").attr("src",img[numimg]);
                                $("#fase3 .ops .op11 .opr").text(perguntas[dificuldade][fase][0]);
                                $("#fase3 .ops .op11 .y img").attr("src",img2[numimg2]);
                                $("#fase3 .ops .op11 .equal").text(perguntas[dificuldade][fase][1]);
                                $("#fase3 .ops .op11 .result").text(perguntas[dificuldade][fase][2]);

                                //CONTA2
                                $("#fase3 .ops .op12 .x img").attr("src",img[numimg]);
                                $("#fase3 .ops .op12 .opr").text(perguntas[dificuldade][fase][3]);
                                $("#fase3 .ops .op12 .number").text(perguntas[dificuldade][fase][4]);
                                $("#fase3 .ops .op12 .equal").text(perguntas[dificuldade][fase][5]);
                                $("#fase3 .ops .op12 .result").text(perguntas[dificuldade][fase][6]);
                                //CONTA3
                                $("#fase3 .ops .op13 .y img").attr("src",img2[numimg2]);
                                $("#fase3 .ops .op13 .opr").text(posneg[sortposneg]);
                                $("#fase3 .ops .op13 .number").text(perguntas[dificuldade][fase][7]);
                                $("#fase3 .ops .op13 .equal").text(perguntas[dificuldade][fase][8]);
                                $("#fase3 .ops .op13 .result").text(perguntas[dificuldade][fase][9]);
                                //respostas[dificuldade]
                                $("#fase3 .res .r1").text(respostas[dificuldade][fase][0]);
                                $("#fase3 .res .r2").text(respostas[dificuldade][fase][1]);
                                $("#fase3 .res .r3").text(respostas[dificuldade][fase][2]);
                                $("#fase3 .res .r4").text(respostas[dificuldade][fase][3]);

                                $("#fase3 .res li").on('click',function(){
                                   res = $(this).text();
                                  console.log(res);
                                    if(res == respostas[dificuldade][fase][i]){
                                      acerto.play();
                                      tempo = $(".jogo span.seg").text();
                                      tempoAtual = parseInt(tempo)+10;
                                      $(".jogo span.seg").text(tempoAtual);
                                      $( "#progresso" ).animate({width: "+=10vw"}, 100);
                                      fase += 1;
                                       $("#fase3").fadeOut();
                                       $("#fase4 ul.res li").shuffleli();
                                       $("#fase4").fadeIn();
                                       console.log(fase);//FASE4
                                         numimg = Math.floor(Math.random() * 2);
                                         numimg2 = Math.floor(Math.random() * 2);
                                         sortposneg = Math.floor(Math.random() * 2);
                                          i = parseInt(sortposneg);
                                        console.log(numimg);
                                        console.log(numimg2);
                                        console.log(sortposneg);
                                          //CONTA1
                                          $("#fase4 .ops .op11 .x img").attr("src",img[numimg]);
                                          $("#fase4 .ops .op11 .opr").text(perguntas[dificuldade][fase][0]);
                                          $("#fase4 .ops .op11 .y img").attr("src",img2[numimg2]);
                                          $("#fase4 .ops .op11 .equal").text(perguntas[dificuldade][fase][1]);
                                          $("#fase4 .ops .op11 .result").text(perguntas[dificuldade][fase][2]);

                                          //CONTA2
                                          $("#fase4 .ops .op12 .x img").attr("src",img[numimg]);
                                          $("#fase4 .ops .op12 .opr").text(perguntas[dificuldade][fase][3]);
                                          $("#fase4 .ops .op12 .number").text(perguntas[dificuldade][fase][4]);
                                          $("#fase4 .ops .op12 .equal").text(perguntas[dificuldade][fase][5]);
                                          $("#fase4 .ops .op12 .result").text(perguntas[dificuldade][fase][6]);
                                          //CONTA3
                                          $("#fase4 .ops .op13 .y img").attr("src",img2[numimg2]);
                                          $("#fase4 .ops .op13 .opr").text(posneg[sortposneg]);
                                          $("#fase4 .ops .op13 .number").text(perguntas[dificuldade][fase][7]);
                                          $("#fase4 .ops .op13 .equal").text(perguntas[dificuldade][fase][8]);
                                          $("#fase4 .ops .op13 .result").text(perguntas[dificuldade][fase][9]);
                                          //respostas[dificuldade]
                                          $("#fase4 .res .r1").text(respostas[dificuldade][fase][0]);
                                          $("#fase4 .res .r2").text(respostas[dificuldade][fase][1]);
                                          $("#fase4 .res .r3").text(respostas[dificuldade][fase][2]);
                                          $("#fase4 .res .r4").text(respostas[dificuldade][fase][3]);

                                          $("#fase4 .res li").on('click',function(){
                                             res = $(this).text();
                                            console.log(res);
                                              if(res == respostas[dificuldade][fase][i]){
                                                tempo = $(".jogo span.seg").text();
                                                tempoAtual = parseInt(tempo)+10;
                                                $(".jogo span.seg").text(tempoAtual);
                                                $( "#progresso" ).animate({width: "+=10vw"}, 100);
                                                acerto.play();
                                                fase += 1;
                                                 $("#fase4").fadeOut();
                                                 $("#fase5 ul.res li").shuffleli();
                                                 $("#fase5").fadeIn();
                                                 console.log(fase);//FASE5
                                                   numimg = Math.floor(Math.random() * 2);
                                                   numimg2 = Math.floor(Math.random() * 2);
                                                   sortposneg = Math.floor(Math.random() * 2);
                                                   i = parseInt(sortposneg);
                                                  console.log(numimg);
                                                  console.log(numimg2);
                                                  console.log(sortposneg);
                                                    //CONTA1
                                                    $("#fase5 .ops .op11 .x img").attr("src",img[numimg]);
                                                    $("#fase5 .ops .op11 .opr").text(perguntas[dificuldade][fase][0]);
                                                    $("#fase5 .ops .op11 .y img").attr("src",img2[numimg2]);
                                                    $("#fase5 .ops .op11 .equal").text(perguntas[dificuldade][fase][1]);
                                                    $("#fase5 .ops .op11 .result").text(perguntas[dificuldade][fase][2]);

                                                    //CONTA2
                                                    $("#fase5 .ops .op12 .x img").attr("src",img[numimg]);
                                                    $("#fase5 .ops .op12 .opr").text(perguntas[dificuldade][fase][3]);
                                                    $("#fase5 .ops .op12 .number").text(perguntas[dificuldade][fase][4]);
                                                    $("#fase5 .ops .op12 .equal").text(perguntas[dificuldade][fase][5]);
                                                    $("#fase5 .ops .op12 .result").text(perguntas[dificuldade][fase][6]);
                                                    //CONTA3
                                                    $("#fase5 .ops .op13 .y img").attr("src",img2[numimg2]);
                                                    $("#fase5 .ops .op13 .opr").text(posneg[sortposneg]);
                                                    $("#fase5 .ops .op13 .number").text(perguntas[dificuldade][fase][7]);
                                                    $("#fase5 .ops .op13 .equal").text(perguntas[dificuldade][fase][8]);
                                                    $("#fase5 .ops .op13 .result").text(perguntas[dificuldade][fase][9]);
                                                    //respostas[dificuldade]
                                                    $("#fase5 .res .r1").text(respostas[dificuldade][fase][0]);
                                                    $("#fase5 .res .r2").text(respostas[dificuldade][fase][1]);
                                                    $("#fase5 .res .r3").text(respostas[dificuldade][fase][2]);
                                                    $("#fase5 .res .r4").text(respostas[dificuldade][fase][3]);

                                                    $("#fase5 .res li").on('click',function(){
                                                       res = $(this).text();
                                                      console.log(res);
                                                        if(res == respostas[dificuldade][fase][i]){

                                                          acerto.play();
                                                          clearInterval();
                                                          fase = 0;
                                                           $("#fase5").fadeOut();
                                                           $(".jogo").fadeOut();
                                                           $("#ganhar").fadeIn();
                                                           console.log(fase);
                                                        }else{
                                                          erro.play();
                                                          clearInterval();
                                                          $("#fase5").fadeOut();
                                                          $(".jogo").fadeOut();
                                                          $("#perdeu").fadeIn();
                                                          fase = 0;
                                                        };
                                                      
                                                      });
                                              }else{
                                                erro.play()
                                                clearInterval();
                                                $("#fase4").fadeOut();
                                                $(".jogo").fadeOut();
                                                $("#perdeu").fadeIn();
                                                fase = 0;
                                              };
                                            
                                            });
                                    }else{
                                      erro.play()
                                      clearInterval();
                                      $("#fase3").fadeOut();
                                      $(".jogo").fadeOut();
                                      $("#perdeu").fadeIn();
                                      fase = 0;
                                    };
                                  
                                  });
                        }else{
                          erro.play()
                          clearInterval();
                          $("#fase2").fadeOut();
                          $(".jogo").fadeOut();
                          $("#perdeu").fadeIn();
                          fase = 0;
                        };
                      
                      });
              }else{
                erro.play()
                clearInterval();
                $("#fase1").fadeOut();
                $(".jogo").fadeOut();
                $("#perdeu").fadeIn();
                fase = 0;
              };
            
            });
  });

    $("#ganhar p,#perdeu p").on('click',function(){
      $("#fase1").fadeOut();
      $("#fase2").fadeOut();
      $("#fase3").fadeOut();
      $("#fase4").fadeOut();
      $("#fase5").fadeOut();
      $(".jogo").fadeOut();
      $("#ganhar").fadeOut();
      $("#perdeu").fadeOut();
      $(".inicio").fadeIn();
      fundo.play();
    });