  
 
 
   //PROGRAMAÇÃO

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
       // $(".progresso span.minutos").noanimate();
        //$(".progresso span.segundos").noanimate();

         tempo = setInterval(function(){
        var tempoAtual = $(".facil1 div div.progresso span.segundos").text();
       $(".facil1 div div.progresso span.segundos").text(tempoAtual-1);
        if(tempoAtual==0){
          clearInterval(tempo);
        };
    },1000);
      });

      //MEDIO
       $(".dificuldade ul li#medio").on('click',function(){
      	$("section.facil1").fadeIn();
      	$("section.dificuldade").fadeOut(); 
      	$(".progresso").animate({width:0},30000);
      });

     // DIFICIL
     $(".dificuldade ul li#dificil").on('click',function(){
      	$("section.facil1").fadeIn();
      	$("section.dificuldade").fadeOut();
      	$(".progresso").animate({width:0},30000); 
      });
  });
    

 






 