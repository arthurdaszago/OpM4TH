  
  var img = ["img/apple.png","img/cherries.png"];
  var img2 = ["img/pineapple.png","img/raspberry.png"];

  var posneg = ["+","-"]
  var perguntas = [["+","=","25","-","05","=","08","04","=","??"],
                    []];
  var respostas = [["08","16","12","15"],
                    []];
repeticao = setInterval(function(){
          var tempo = $(".facil1 span.seg").text();
          var tempoAtual = parseInt(tempo-1);
          $(".facil1 span.seg").text(tempoAtual);
            if(tempoAtual==0){
              clearInterval(repeticao);
            };
        },1000);

 $(".inicio div").on("click", function(){
      $("section.dificuldade").show();
      $("section.facil1").hide();
      $("section.inicio").hide();
      $("body div.fundo").hide();


      //ESCOLHER NIVEL
      //FACIL
      $(".dificuldade ul li#facil").on('click',function(){
      	$("section.facil1").show();
      	$("section.dificuldade").hide(); 
      	$(".progresso").animate({
          width:0
        },30000);
        $(".facil1 span.seg").text(30);

        var numimg = Math.floor(Math.random() * 2);
        var numimg2 = Math.floor(Math.random() * 2);
        var sortposneg = Math.floor(Math.random() * 2);
        console.log(numimg);
        console.log(numimg2);
        console.log(sortposneg);
          //CONTA1
          $(".facil1 .ops .op11 .x img").attr("src",img[numimg]);
          $(".facil1 .ops .op11 .opr").text(perguntas[0][0]);
          $(".facil1 .ops .op11 .y img").attr("src",img2[numimg2]);
          $(".facil1 .ops .op11 .equal").text(perguntas[0][1]);
          $(".facil1 .ops .op11 .result").text(perguntas[0][2]);

          //CONTA2
          $(".facil1 .ops .op12 .x img").attr("src",img[numimg]);
          $(".facil1 .ops .op12 .opr").text(perguntas[0][3]);
          $(".facil1 .ops .op12 .number").text(perguntas[0][4]);
          $(".facil1 .ops .op12 .equal").text(perguntas[0][5]);
          $(".facil1 .ops .op12 .result").text(perguntas[0][6]);
          //CONTA3
          $(".facil1 .ops .op13 .y img").attr("src",img2[numimg2]);
          $(".facil1 .ops .op13 .opr").text(posneg[sortposneg]);
          $(".facil1 .ops .op13 .number").text(perguntas[0][7]);
          $(".facil1 .ops .op13 .equal").text(perguntas[0][8]);
          $(".facil1 .ops .op13 .result").text(perguntas[0][9]);
          //RESPOSTAS
          $(".facil1 .res .1").text(respostas[0][0]);
          $(".facil1 .res .2").text(respostas[0][1]);
          $(".facil1 .res .3").text(respostas[0][2]);
          $(".facil1 .res .4").text(respostas[0][3]);

      });

      //MEDIO
       $(".dificuldade ul li#medio").on('click',function(){
      	$("section.medio1").fadeIn();
      	$("section.dificuldade").fadeOut(); 
      	$(".progresso").animate({width:0},30000);
      });

     // DIFICIL
     $(".dificuldade ul li#dificil").on('click',function(){
      	$("section.dificil1").fadeIn();
      	$("section.dificuldade").fadeOut();
      	$(".progresso").animate({width:0},30000); 
      });
  });