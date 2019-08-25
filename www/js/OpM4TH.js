  
  var img = ["img/apple.png","img/cherries.png"];
  var img2 = ["img/pineapple.png","img/raspberry.png"];
  var fase = 0;
  var posneg = ["-","+"]
  var perguntas = [["+","=","25","-","05","=","08","04","=","??"],
                   ["-","=","15","-","22","=","03","02","=","??"],
                   ["+","=","25","-","05","=","08","04","=","??"],
                   ["-","=","15","-","22","=","03","02","=","??"],
                   ["+","=","25","-","05","=","08","04","=","??"],
                   ["-","=","15","-","22","=","03","02","=","??"]];
  var respostas = [["08","16","12","15"],
                   ["08","12","10","05"],
                   ["08","16","12","15"],
                   ["08","12","10","05"],
                   ["08","16","12","15"],
                   ["08","12","10","05"]];
repeticao = setInterval(function(){
          var tempo = $(".jogofacil span.seg").text();
          var tempoAtual = parseInt(tempo-1);
          $(".jogofacil span.seg").text(tempoAtual);
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
        $(".jogofacil ").show();
        $("#facil1").show();
        $("section.dificuldade").hide();
        $(".progresso").animate({
          width:0
        },30000); 
  
        $(".jogofacil span.seg").text(30);

        var numimg = Math.floor(Math.random() * 2);
        var numimg2 = Math.floor(Math.random() * 2);
        var sortposneg = Math.floor(Math.random() * 2);
        var i = parseInt(sortposneg);
        console.log(numimg);
        console.log(numimg2);
        console.log(sortposneg);
          //CONTA1
          $("#facil1 .ops .op11 .x img").attr("src",img[numimg]);
          $("#facil1 .ops .op11 .opr").text(perguntas[fase][0]);
          $("#facil1 .ops .op11 .y img").attr("src",img2[numimg2]);
          $("#facil1 .ops .op11 .equal").text(perguntas[fase][1]);
          $("#facil1 .ops .op11 .result").text(perguntas[fase][2]);

          //CONTA2
          $("#facil1 .ops .op12 .x img").attr("src",img[numimg]);
          $("#facil1 .ops .op12 .opr").text(perguntas[fase][3]);
          $("#facil1 .ops .op12 .number").text(perguntas[fase][4]);
          $("#facil1 .ops .op12 .equal").text(perguntas[fase][5]);
          $("#facil1 .ops .op12 .result").text(perguntas[fase][6]);
          //CONTA3
          $("#facil1 .ops .op13 .y img").attr("src",img2[numimg2]);
          $("#facil1 .ops .op13 .opr").text(posneg[sortposneg]);
          $("#facil1 .ops .op13 .number").text(perguntas[fase][7]);
          $("#facil1 .ops .op13 .equal").text(perguntas[fase][8]);
          $("#facil1 .ops .op13 .result").text(perguntas[fase][9]);
          //RESPOSTAS
          $("#facil1 .res .1").text(respostas[fase][0]);
          $("#facil1 .res .2").text(respostas[fase][1]);
          $("#facil1 .res .3").text(respostas[fase][2]);
          $("#facil1 .res .4").text(respostas[fase][3]);

          $("#facil1 .res li").on('click',function(){
             res = $(this).text();
            console.log(res);
              if(res == respostas[fase][i]){
                fase += 1;
                 $("#facil1").hide();
                 $("div#facil2").show();
                 console.log(fase);//FASE2
                   numimg = Math.floor(Math.random() * 2);
                   numimg2 = Math.floor(Math.random() * 2);
                   sortposneg = Math.floor(Math.random() * 2);
                   i = parseInt(sortposneg);
                  console.log(numimg);
                  console.log(numimg2);
                  console.log(sortposneg);
                    //CONTA1
                    $("#facil2 .ops .op11 .x img").attr("src",img[numimg]);
                    $("#facil2 .ops .op11 .opr").text(perguntas[fase][0]);
                    $("#facil2 .ops .op11 .y img").attr("src",img2[numimg2]);
                    $("#facil2 .ops .op11 .equal").text(perguntas[fase][1]);
                    $("#facil2 .ops .op11 .result").text(perguntas[fase][2]);

                    //CONTA2
                    $("#facil2 .ops .op12 .x img").attr("src",img[numimg]);
                    $("#facil2 .ops .op12 .opr").text(perguntas[fase][3]);
                    $("#facil2 .ops .op12 .number").text(perguntas[fase][4]);
                    $("#facil2 .ops .op12 .equal").text(perguntas[fase][5]);
                    $("#facil2 .ops .op12 .result").text(perguntas[fase][6]);
                    //CONTA3
                    $("#facil2 .ops .op13 .y img").attr("src",img2[numimg2]);
                    $("#facil2 .ops .op13 .opr").text(posneg[sortposneg]);
                    $("#facil2 .ops .op13 .number").text(perguntas[fase][7]);
                    $("#facil2 .ops .op13 .equal").text(perguntas[fase][8]);
                    $("#facil2 .ops .op13 .result").text(perguntas[fase][9]);
                    //RESPOSTAS
                    $("#facil2 .res .1").text(respostas[fase][0]);
                    $("#facil2 .res .2").text(respostas[fase][1]);
                    $("#facil2 .res .3").text(respostas[fase][2]);
                    $("#facil2 .res .4").text(respostas[fase][3]);

                    $("#facil2 .res li").on('click',function(){
                       res = $(this).text();
                      console.log(res);
                        if(res == respostas[fase][i]){
                          fase += 1;
                           $("#facil2").hide();
                            $(".progresso").animate({width:0},30000); 
                           $("#facil3").show();
                           console.log(fase);//FASE3
                               numimg = Math.floor(Math.random() * 2);
                               numimg2 = Math.floor(Math.random() * 2);
                               sortposneg = Math.floor(Math.random() * 2);
                                i = parseInt(sortposneg);
                              console.log(numimg);
                              console.log(numimg2);
                              console.log(sortposneg);
                                //CONTA1
                                $("#facil3 .ops .op11 .x img").attr("src",img[numimg]);
                                $("#facil3 .ops .op11 .opr").text(perguntas[fase][0]);
                                $("#facil3 .ops .op11 .y img").attr("src",img2[numimg2]);
                                $("#facil3 .ops .op11 .equal").text(perguntas[fase][1]);
                                $("#facil3 .ops .op11 .result").text(perguntas[fase][2]);

                                //CONTA2
                                $("#facil3 .ops .op12 .x img").attr("src",img[numimg]);
                                $("#facil3 .ops .op12 .opr").text(perguntas[fase][3]);
                                $("#facil3 .ops .op12 .number").text(perguntas[fase][4]);
                                $("#facil3 .ops .op12 .equal").text(perguntas[fase][5]);
                                $("#facil3 .ops .op12 .result").text(perguntas[fase][6]);
                                //CONTA3
                                $("#facil3 .ops .op13 .y img").attr("src",img2[numimg2]);
                                $("#facil3 .ops .op13 .opr").text(posneg[sortposneg]);
                                $("#facil3 .ops .op13 .number").text(perguntas[fase][7]);
                                $("#facil3 .ops .op13 .equal").text(perguntas[fase][8]);
                                $("#facil3 .ops .op13 .result").text(perguntas[fase][9]);
                                //RESPOSTAS
                                $("#facil3 .res .1").text(respostas[fase][0]);
                                $("#facil3 .res .2").text(respostas[fase][1]);
                                $("#facil3 .res .3").text(respostas[fase][2]);
                                $("#facil3 .res .4").text(respostas[fase][3]);

                                $("#facil3 .res li").on('click',function(){
                                   res = $(this).text();
                                  console.log(res);
                                    if(res == respostas[fase][i]){
                                      fase += 1;
                                       $("#facil3").hide();
                                       $("#facil4").show();
                                       console.log(fase);//FASE4
                                         numimg = Math.floor(Math.random() * 2);
                                         numimg2 = Math.floor(Math.random() * 2);
                                         sortposneg = Math.floor(Math.random() * 2);
                                          i = parseInt(sortposneg);
                                        console.log(numimg);
                                        console.log(numimg2);
                                        console.log(sortposneg);
                                          //CONTA1
                                          $("#facil4 .ops .op11 .x img").attr("src",img[numimg]);
                                          $("#facil4 .ops .op11 .opr").text(perguntas[fase][0]);
                                          $("#facil4 .ops .op11 .y img").attr("src",img2[numimg2]);
                                          $("#facil4 .ops .op11 .equal").text(perguntas[fase][1]);
                                          $("#facil4 .ops .op11 .result").text(perguntas[fase][2]);

                                          //CONTA2
                                          $("#facil4 .ops .op12 .x img").attr("src",img[numimg]);
                                          $("#facil4 .ops .op12 .opr").text(perguntas[fase][3]);
                                          $("#facil4 .ops .op12 .number").text(perguntas[fase][4]);
                                          $("#facil4 .ops .op12 .equal").text(perguntas[fase][5]);
                                          $("#facil4 .ops .op12 .result").text(perguntas[fase][6]);
                                          //CONTA3
                                          $("#facil4 .ops .op13 .y img").attr("src",img2[numimg2]);
                                          $("#facil4 .ops .op13 .opr").text(posneg[sortposneg]);
                                          $("#facil4 .ops .op13 .number").text(perguntas[fase][7]);
                                          $("#facil4 .ops .op13 .equal").text(perguntas[fase][8]);
                                          $("#facil4 .ops .op13 .result").text(perguntas[fase][9]);
                                          //RESPOSTAS
                                          $("#facil4 .res .1").text(respostas[fase][0]);
                                          $("#facil4 .res .2").text(respostas[fase][1]);
                                          $("#facil4 .res .3").text(respostas[fase][2]);
                                          $("#facil4 .res .4").text(respostas[fase][3]);

                                          $("#facil4 .res li").on('click',function(){
                                             res = $(this).text();
                                            console.log(res);
                                              if(res == respostas[fase][i]){
                                                fase += 1;
                                                 $("#facil4").hide();
                                                 $("#facil5").show();
                                                 console.log(fase);//FASE5
                                                   numimg = Math.floor(Math.random() * 2);
                                                   numimg2 = Math.floor(Math.random() * 2);
                                                   sortposneg = Math.floor(Math.random() * 2);
                                                   i = parseInt(sortposneg);
                                                  console.log(numimg);
                                                  console.log(numimg2);
                                                  console.log(sortposneg);
                                                    //CONTA1
                                                    $("#facil5 .ops .op11 .x img").attr("src",img[numimg]);
                                                    $("#facil5 .ops .op11 .opr").text(perguntas[fase][0]);
                                                    $("#facil5 .ops .op11 .y img").attr("src",img2[numimg2]);
                                                    $("#facil5 .ops .op11 .equal").text(perguntas[fase][1]);
                                                    $("#facil5 .ops .op11 .result").text(perguntas[fase][2]);

                                                    //CONTA2
                                                    $("#facil5 .ops .op12 .x img").attr("src",img[numimg]);
                                                    $("#facil5 .ops .op12 .opr").text(perguntas[fase][3]);
                                                    $("#facil5 .ops .op12 .number").text(perguntas[fase][4]);
                                                    $("#facil5 .ops .op12 .equal").text(perguntas[fase][5]);
                                                    $("#facil5 .ops .op12 .result").text(perguntas[fase][6]);
                                                    //CONTA3
                                                    $("#facil5 .ops .op13 .y img").attr("src",img2[numimg2]);
                                                    $("#facil5 .ops .op13 .opr").text(posneg[sortposneg]);
                                                    $("#facil5 .ops .op13 .number").text(perguntas[fase][7]);
                                                    $("#facil5 .ops .op13 .equal").text(perguntas[fase][8]);
                                                    $("#facil5 .ops .op13 .result").text(perguntas[fase][9]);
                                                    //RESPOSTAS
                                                    $("#facil5 .res .1").text(respostas[fase][0]);
                                                    $("#facil5 .res .2").text(respostas[fase][1]);
                                                    $("#facil5 .res .3").text(respostas[fase][2]);
                                                    $("#facil5 .res .4").text(respostas[fase][3]);

                                                    $("#facil5 .res li").on('click',function(){
                                                       res = $(this).text();
                                                      console.log(res);
                                                        if(res == respostas[fase][i]){
                                                          fase = 0;
                                                           $("#facil5").hide();
                                                           $(".ganhou").show();
                                                           console.log(fase);
                                                        }else{
                                                          $("#facil5").hide();
                                                          $(".perdeu").show();
                                                          fase = 0;
                                                        };
                                                      
                                                      });
                                              }else{
                                                $("#facil4").hide();
                                                $(".perdeu").show();
                                                fase = 0;
                                              };
                                            
                                            });
                                    }else{
                                      $("#facil3").hide();
                                      $(".perdeu").show();
                                      fase = 0;
                                    };
                                  
                                  });
                        }else{
                          $("#facil2").hide();
                          $(".perdeu").show();
                          fase = 0;
                        };
                      
                      });
              }else{
                $("#facil1").hide();
                $(".perdeu").show();
                fase = 0;
              };
            
            });
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