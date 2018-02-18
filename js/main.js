$(document).ready(function(){
    $('.next').on('click', function(){
      var currentImg = $('.active');
      var nextImg = currentImg.next();
  
      if(nextImg.length){
        currentImg.removeClass('active').css('z-index', -10);
        nextImg.addClass('active').css('z-index', 10);
      }
    });
  
    $('.prev').on('click', function(){
      var currentImg = $('.active');
      var prevImg = currentImg.prev();
  
      if(prevImg.length){
        currentImg.removeClass('active').css('z-index', -10);
        prevImg.addClass('active').css('z-index', 10);
      }
    });

    $('.country').click(function(){
      $(this).css({'background':'#E0E0E0','border-top':'2px solid #2E5B78'}).siblings().css({'background':'#f0f0f0','border-style':'none'});
    });
    $('#egy').click(function(){
      $('.egypt').removeClass('disable-country');
      //$(this).css('background-color','red');
      $('.ng ').addClass('disable-country');
      $('.uk ').addClass('disable-country');
      $('.cuba ').addClass('disable-country');
      $('.sing').addClass('disable-country');
      $('.uae').addClass('disable-country');
      $('.south').addClass('disable-country');
      $('.alg').addClass('disable-country');
    });
    $('#ng').click(function(){
      $('.ng').removeClass('disable-country');
      $('.uk ').addClass('disable-country');
      $('.cuba ').addClass('disable-country');
      $('.sing').addClass('disable-country');
      $('.uae').addClass('disable-country');
      $('.south').addClass('disable-country');
      $('.alg').addClass('disable-country');
      $('.egypt ').addClass('disable-country');
    });
    $('#uk').click(function(){
      $('.uk').removeClass('disable-country');
      $('.ng').addClass('disable-country');
      $('.cuba ').addClass('disable-country');
      $('.sing').addClass('disable-country');
      $('.uae').addClass('disable-country');
      $('.south').addClass('disable-country');
      $('.alg').addClass('disable-country');
      $('.egypt ').addClass('disable-country');
    });
    $('#cuba').click(function(){
      $('.cuba').removeClass('disable-country');
      $('.ng').addClass('disable-country');
      $('.uk ').addClass('disable-country');
      $('.sing').addClass('disable-country');
      $('.uae').addClass('disable-country');
      $('.south').addClass('disable-country');
      $('.alg').addClass('disable-country');
      $('.egypt ').addClass('disable-country');
    });
    $('#sing').click(function(){
      $('.sing').removeClass('disable-country');
      $('.ng').addClass('disable-country');
      $('.uk ').addClass('disable-country');
      $('.cuba ').addClass('disable-country');
      $('.uae').addClass('disable-country');
      $('.south').addClass('disable-country');
      $('.alg').addClass('disable-country');
      $('.egypt ').addClass('disable-country');
    });
    $('#uae').click(function(){
      $('.uae').removeClass('disable-country');
      $('.ng').addClass('disable-country');
      $('.uk ').addClass('disable-country');
      $('.cuba ').addClass('disable-country');
      $('.sing').addClass('disable-country');
      $('.south').addClass('disable-country');
      $('.alg').addClass('disable-country');
      $('.egypt ').addClass('disable-country');
    });
    $('#south').click(function(){
      $('.south').removeClass('disable-country');
      $('.ng').addClass('disable-country');
      $('.uk ').addClass('disable-country');
      $('.cuba ').addClass('disable-country');
      $('.sing').addClass('disable-country');
      $('.uae').addClass('disable-country');
      $('.alg').addClass('disable-country');
      $('.egypt ').addClass('disable-country');
    });
    $('#alg').click(function(){
      $('.alg').removeClass('disable-country');
      $('.ng').addClass('disable-country');
      $('.uk ').addClass('disable-country');
      $('.cuba ').addClass('disable-country');
      $('.sing').addClass('disable-country');
      $('.uae').addClass('disable-country');
      $('.south').addClass('disable-country');
      $('.egypt ').addClass('disable-country');
    });
  });
  
  
  $("html").height(200).niceScroll()
  