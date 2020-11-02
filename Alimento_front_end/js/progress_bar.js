var progreso = 0;
      var idInterval = setInterval(function(){
        // Aumento en 10 el progreso
        progreso +=10;
        $('#progress-bar').css('width', progreso + '%');
      
      //Si llegó a 100 elimino el interval
        if(progreso == 100){
       clearInterval(idInterval);
      }
      },1000);