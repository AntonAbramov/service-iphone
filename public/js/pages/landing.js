define([
  'helpers/domHelper',
  'jquery'
], function (domHelper, $) {

  function init() {
    _cacheDom();
    _bindEvents();
  }

  // ===========================================================

  $(document).ready(function(){
    var devise = 0;
    var backCall, order;
    var id_device;
    var id_model;
    var id_repair;


    function setTextPrise(index) {
      $('.fault_pin_tooltip').fadeOut('slow', function() {
        if(isPragu) {
          switch (index){
            case 1: {
              $('.fault_pin_tooltip .title').html('замена кнопки power или замена аккумулятора');
              $('.fault_pin_tooltip .price').html('Цена: от 600 Kč');
              break;
            }
            case 2: {
              $('.fault_pin_tooltip .title').html('если у вас нет изображения , не работает тачскрин или если вы разбили экран то это замена видеомодуля');
              $('.fault_pin_tooltip .price').html('Цена: от 1700 Kč');
              break;
            }
            case 3: {
              $('.fault_pin_tooltip .title').html('замена системного разъема или замена аккумулятора');
              $('.fault_pin_tooltip .price').html('Цена: от 900 Kč');
              break;
            }
            case 4: {
              $('.fault_pin_tooltip .title').html('замена слухового динамика ');
              $('.fault_pin_tooltip .price').html('Цена: от 900 Kč');
              break;
            }
            case 5: {
              $('.fault_pin_tooltip .title').html('замена микрофона');
              $('.fault_pin_tooltip .price').html('Цена: от 900 Kč');
              break;
            }
            case 6: {
              $('.fault_pin_tooltip .title').html('замена кнопки home');
              $('.fault_pin_tooltip .price').html('Цена: от 800 Kč');
              break;
            }
            case 7: {
              $('.fault_pin_tooltip .title').html('замена фронтальной камеры или замена основной камеры');
              $('.fault_pin_tooltip .price').html('Цена: от 900 Kč');
              break;
            }
            case 8: {
              $('.fault_pin_tooltip .title').html('ремонт програмного обеспечения');
              $('.fault_pin_tooltip .price').html('Цена: 600 Kč');
              break;
            }
          }
        } else {
          switch (index){
            case 1: {
              $('.fault_pin_tooltip .title').html('замена кнопки power или замена аккумулятора');
              $('.fault_pin_tooltip .price').html('Цена: от 1500 руб.');
              break;
            }
            case 2: {
              $('.fault_pin_tooltip .title').html('если у вас нет изображения , не работает тачскрин или если вы разбили экран то это замена видеомодуля');
              $('.fault_pin_tooltip .price').html('Цена: от 2500 руб.');
              break;
            }
            case 3: {
              $('.fault_pin_tooltip .title').html('замена системного разьема или замена аккумулятора');
              $('.fault_pin_tooltip .price').html('Цена: от 1500 руб.');
              break;
            }
            case 4: {
              $('.fault_pin_tooltip .title').html('замена слухового динамика ');
              $('.fault_pin_tooltip .price').html('Цена: от 1500 руб.');
              break;
            }
            case 5: {
              $('.fault_pin_tooltip .title').html('замена микрофона');
              $('.fault_pin_tooltip .price').html('Цена: от 1500 руб.');
              break;
            }
            case 6: {
              $('.fault_pin_tooltip .title').html('замена кнопки home');
              $('.fault_pin_tooltip .price').html('Цена: от 1500 руб.');
              break;
            }
            case 7: {
              $('.fault_pin_tooltip .title').html('замена фронтальной камеры или замена основной камеры');
              $('.fault_pin_tooltip .price').html('Цена: от 1500 руб.');
              break;
            }
            case 8: {
              $('.fault_pin_tooltip .title').html('ремонт програмного обеспечения');
              $('.fault_pin_tooltip .price').html('Цена: 1000 руб.');
              break;
            }
          }
        }
      });
    }


    $('.selectmodel').click(function() {
      $('.selectmodel').removeClass('active');
      $(this).addClass('active');

      var model = $(this).data('model');
      id_model = parseInt($(this).data('id'));

      $('#inputmodel').val(model);

      if(devise == 1) $('.selectstep[data-step=2] .text').html(model.substr(5,model.length));
      else if(devise == 2) $('.selectstep[data-step=2] .text').html(model.substr(7,model.length));

      $('.selectstep[data-step=2]').fadeIn('slow').css('display', 'block');

      $('#formstep2').fadeOut('slow',function() {
        $('#formstep3').fadeIn('slow');
      });

    });


    $('#formstep2 .back').click(function() {
      $('.selectstep[data-step=1]').fadeOut('slow');
      $('#formstep2').fadeOut('slow',function() {
        $('#formstep1').fadeIn('slow');
      });

    });

    $('#formstep3 .back').click(function() {
      $('.selectstep[data-step=2]').fadeOut('slow');
      $('.selectmodel').removeClass('active');
      $('#formstep3').fadeOut('slow',function() {
        $('#formstep2').fadeIn('slow');
      });
    });

    $('#formstep4 .back').click(function() {
      $('.selectstep[data-step=3]').fadeOut('slow');
      $('.selectrepair').removeClass('active');
      $('#formstep4').fadeOut('slow',function() {
        $('#formstep3').fadeIn('slow');
      });
    });

    $('.selectstep').click(function(){
      var step = parseInt($(this).data('step'));
      var index = $('.formstep:visible').index();

      $('.formstep:visible').fadeOut('slow',function() {
        for(i=index;i>=step;i--) $('.selectstep[data-step='+i+']').fadeOut('fast');
        $('.selectrepair').removeClass('active');
        $('.selectmodel').removeClass('active');
        $('#formstep'+step).fadeIn('slow');
      });

    });

    $('.selectrepair').click(function(){
      $('.selectrepair').removeClass('active');
      $(this).addClass('active');

      id_repair = parseInt($(this).data('id'));
      /*
       var id_device;
       var id_model;
       var id_repair;
       */
      var textEndForm;
      $('#inputrepair').val($(this).data('repair'));

      $('.selectstep[data-step=3] .text').html($(this).data('repair'));

      if(id_device == 1) {
        $('.selectstep[data-step=3]').fadeIn('slow').css('display', 'block');
      } else {
        $('#stepsforform').fadeOut('slow');
        $('#stepsendform').fadeIn('slow');
      }

      switch(id_repair){
          case 1: {
            textEndForm = "замена экрана вашего iPhone";
            switch(id_model){
              case 1: {
                textEndForm += " 6plus: <span class='price'>9000 руб.</span>";
                break;
              }
              case 2: {
                textEndForm += " 6: <span class='price'>8000 руб.</span>";
                break;
              }
              case 3: {
                textEndForm += " 5s: <span class='price'>5500 руб.</span>";
                break;
              }
              case 4: {
                textEndForm += " 5c: <span class='price'>5500 руб.</span>";
                break;
              }
              case 5: {
                textEndForm += " 5: <span class='price'>5500 руб.</span>";
                break;
              }
              case 6: {
                textEndForm += " 4s: <span class='price'>2900 руб.</span>";
                break;
              }
              case 7: {
                textEndForm += " 4: <span class='price'>2900 руб.</span>";
                break;
              }
              case 8: {
                textEndForm += " 3gs: <span class='price'>2500 руб.</span>";
                break;
              }
            }
            break;
          }
          case 2: {
            textEndForm = "замена микрофона на вашем iPhone";
            switch(id_model){
              case 1: {
                textEndForm += " 6plus: <span class='price'>3000 руб.</span>";
                break;
              }
              case 2: {
                textEndForm += " 6: <span class='price'>3000 руб.</span>";
                break;
              }
              case 3: {
                textEndForm += " 5s: <span class='price'>2000 руб.</span>";
                break;
              }
              case 4: {
                textEndForm += " 5c: <span class='price'>2000 руб.</span>";
                break;
              }
              case 5: {
                textEndForm += " 5: <span class='price'>2000 руб.</span>";
                break;
              }
              case 6: {
                textEndForm += " 4s: <span class='price'>1500 руб.</span>";
                break;
              }
              case 7: {
                textEndForm += " 4: <span class='price'>1500 руб.</span>";
                break;
              }
              case 8: {
                textEndForm += " 3gs: <span class='price'>1500 руб.</span>";
                break;
              }
            }
            break;
          }
          case 3: {
            textEndForm = "замена аккумуляторной батареи на вашем iPhone";
            switch(id_model){
              case 1: {
                textEndForm += " 6plus: <span class='price'>3000 руб.</span>";
                break;
              }
              case 2: {
                textEndForm += " 6: <span class='price'>3000 руб.</span>";
                break;
              }
              case 3: {
                textEndForm += " 5s: <span class='price'>2000 руб.</span>";
                break;
              }
              case 4: {
                textEndForm += " 5c: <span class='price'>2000 руб.</span>";
                break;
              }
              case 5: {
                textEndForm += " 5: <span class='price'>2000 руб.</span>";
                break;
              }
              case 6: {
                textEndForm += " 4s: <span class='price'>1500 руб.</span>";
                break;
              }
              case 7: {
                textEndForm += " 4: <span class='price'>1500 руб.</span>";
                break;
              }
              case 8: {
                textEndForm += " 3gs: <span class='price'>1500 руб.</span>";
                break;
              }
            }
            break;
          }
          case 4: {
            textEndForm = "замена кнопки вкл/выкл на вашем iPhone";
            switch(id_model){
              case 1: {
                textEndForm += " 6plus: <span class='price'>3000 руб.</span>";
                break;
              }
              case 2: {
                textEndForm += " 6: <span class='price'>3000 руб.</span>";
                break;
              }
              case 3: {
                textEndForm += " 5s: <span class='price'>2000 руб.</span>";
                break;
              }
              case 4: {
                textEndForm += " 5c: <span class='price'>2000 руб.</span>";
                break;
              }
              case 5: {
                textEndForm += " 5: <span class='price'>2000 руб.</span>";
                break;
              }
              case 6: {
                textEndForm += " 4s: <span class='price'>1500 руб.</span>";
                break;
              }
              case 7: {
                textEndForm += " 4: <span class='price'>1500 руб.</span>";
                break;
              }
              case 8: {
                textEndForm += " 3gs: <span class='price'>1500 руб.</span>";
                break;
              }
            }
            break;
          }
          case 5: {
            textEndForm = "замена кнопки меню на вашем iPhone";
            switch(id_model){
              case 1: {
                textEndForm += " 6plus: <span class='price'>3000 руб.</span>";
                break;
              }
              case 2: {
                textEndForm += " 6: <span class='price'>3000 руб.</span>";
                break;
              }
              case 3: {
                textEndForm += " 5s: <span class='price'>2000 руб.</span>";
                break;
              }
              case 4: {
                textEndForm += " 5c: <span class='price'>2000 руб.</span>";
                break;
              }
              case 5: {
                textEndForm += " 5: <span class='price'>2000 руб.</span>";
                break;
              }
              case 6: {
                textEndForm += " 4s: <span class='price'>1500 руб.</span>";
                break;
              }
              case 7: {
                textEndForm += " 4: <span class='price'>1500 руб.</span>";
                break;
              }
              case 8: {
                textEndForm += " 3gs: <span class='price'>1500 руб.</span>";
                break;
              }
            }
            break;
          }
          case 6: {
            textEndForm = "замена передней или задней камеры на вашем iPhone";
            switch(id_model){
              case 1: {
                textEndForm += " 6plus: <span class='price'>3000 руб.</span>";
                break;
              }
              case 2: {
                textEndForm += " 6: <span class='price'>3000 руб.</span>";
                break;
              }
              case 3: {
                textEndForm += " 5s: <span class='price'>3000 руб.</span>";
                break;
              }
              case 4: {
                textEndForm += " 5c: <span class='price'>3000 руб.</span>";
                break;
              }
              case 5: {
                textEndForm += " 5: <span class='price'>2500 руб.</span>";
                break;
              }
              case 6: {
                textEndForm += " 4s: <span class='price'>1500 руб.</span>";
                break;
              }
              case 7: {
                textEndForm += " 4: <span class='price'>1500 руб.</span>";
                break;
              }
              case 8: {
                textEndForm += " 3gs: <span class='price'>1500 руб.</span>";
                break;
              }
            }
            break;
          }
          case 7: {
            textEndForm = "замена динамика на вашем iPhone";
            switch(id_model){
              case 1: {
                textEndForm += " 6plus: <span class='price'>3000 руб.</span>";
                break;
              }
              case 2: {
                textEndForm += " 6: <span class='price'>3000 руб.</span>";
                break;
              }
              case 3: {
                textEndForm += " 5s: <span class='price'>2000 руб.</span>";
                break;
              }
              case 4: {
                textEndForm += " 5c: <span class='price'>2000 руб.</span>";
                break;
              }
              case 5: {
                textEndForm += " 5: <span class='price'>2000 руб.</span>";
                break;
              }
              case 6: {
                textEndForm += " 4s: <span class='price'>1500 руб.</span>";
                break;
              }
              case 7: {
                textEndForm += " 4: <span class='price'>1500 руб.</span>";
                break;
              }
              case 8: {
                textEndForm += " 3gs: <span class='price'>1500 руб.</span>";
                break;
              }
            }
            break;
          }
          case 8: {
            textEndForm = "опишите проблему в текстовом сообщение или можете сделать это по телефону чтобы узнать цену ремонта";
            $('#repair8').html('если вы не знаете причину поломки мастер произведет бесплатную диагностику');
            $('#textmsg').show();
            break;
          }
        }

      $('.textrepair').html(textEndForm);


      $('#formstep3').fadeOut('slow',function() {
        $('#formstep4').fadeIn('slow');
      });

    });

    $('.selectdevise').click(function(){
      var index = parseInt($(this).data('index'));
      id_device = parseInt($(this).data('index'));

      if(index == 1) {
        devise = 1;
        $('.modeliphone').hide();
        $('.modelipad').show();
        $('.selectstep[data-step=1] .text').html('iPad');
      }
      else if(index == 2) {
        devise = 2;
        $('.modelipad').hide();
        $('.modeliphone').show();
        $('.selectstep[data-step=1] .text').html('iPhone');
      }

      $('#formstep1').fadeOut('slow',function() {
        $('#formstep2').fadeIn('slow');
      });

      $('.selectstep[data-step=1]').fadeIn('slow').css('display', 'block');
    });

    $('.sendreport').click(function(){
      order = $('#popup2').bPopup();
    });


  });





  // ===========================================================



  return {
    init: init
  }

});