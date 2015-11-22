define([
  'helpers/domHelper',
  'jquery'
], function (domHelper, $) {

  function init() {
    //_cacheDom();
    //_bindEvents();


  // ===========================================================

    var devise = 0;
    var backCall, order;
    var id_device;
    var id_model;
    var id_repair;

    $('.selectmodel').click(function() {
      $('.selectmodel').removeClass('active');
      $(this).addClass('active');

      var model = $(this).data('model');
      id_model = parseInt($(this).data('id'));

      $('#inputmodel').val(model);

      if(devise == 1) {
        $('.selectstep[data-step=2] .text').html(model.substr(5,model.length));
      }
      else if(devise == 2) {
        $('.selectstep[data-step=2] .text').html(model.substr(7,model.length));
      }

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
        switch(id_repair){
          case 1: {
            textEndForm = "замена экрана вашего iPad ";
            switch(id_model){
              case 1: {
                textEndForm += "Mini Retina: <span class='price'>3600 грн.</span>";
                break;
              }
              case 2: {
                textEndForm += "Mini: <span class='price'>2800 грн.</span>";
                break;
              }
              case 3: {
                textEndForm += "Air: <span class='price'>2000 грн.</span>";
                break;
              }
              case 4: {
                textEndForm += "4: <span class='price'>2000 грн.</span>";
                break;
              }
              case 5: {
                textEndForm += "3: <span class='price'>2000 грн.</span>";
                break;
              }
              case 6: {
                textEndForm += "2: <span class='price'>750 грн.</span>";
                break;
              }
              case 7: {
                textEndForm += "1: <span class='price'>750 грн.</span>";
                break;
              }
            }
            break;
          }
          case 2: {
            textEndForm = "замена микрофона на вашем iPad ";
            switch(id_model){
              case 1: {
                textEndForm += "Mini Retina: <span class='price'>3600 грн.</span>";
                break;
              }
              case 2: {
                textEndForm += "Mini: <span class='price'>2800 грн.</span>";
                break;
              }
              case 3: {
                textEndForm += "Air: <span class='price'>2000 грн.</span>";
                break;
              }
              case 4: {
                textEndForm += "4: <span class='price'>2000 грн.</span>";
                break;
              }
              case 5: {
                textEndForm += "3: <span class='price'>2000 грн.</span>";
                break;
              }
              case 6: {
                textEndForm += "2: <span class='price'>750 грн.</span>";
                break;
              }
              case 7: {
                textEndForm += "1: <span class='price'>750 грн.</span>";
                break;
              }
            }
            break;
          }
          case 3: {
            textEndForm = "замена аккумуляторной батареи на вашем iPad ";
            switch(id_model){
              case 1: {
                textEndForm += "Mini Retina: <span class='price'>3600 грн.</span>";
                break;
              }
              case 2: {
                textEndForm += "Mini: <span class='price'>2800 грн.</span>";
                break;
              }
              case 3: {
                textEndForm += "Air: <span class='price'>2000 грн.</span>";
                break;
              }
              case 4: {
                textEndForm += "4: <span class='price'>2000 грн.</span>";
                break;
              }
              case 5: {
                textEndForm += "3: <span class='price'>2000 грн.</span>";
                break;
              }
              case 6: {
                textEndForm += "2: <span class='price'>750 грн.</span>";
                break;
              }
              case 7: {
                textEndForm += "1: <span class='price'>750 грн.</span>";
                break;
              }
            }
            break;
          }
          case 4: {
            textEndForm = "замена кнопки вкл/выкл на вашем iPad ";
            switch(id_model){
              case 1: {
                textEndForm += "Mini Retina: <span class='price'>3600 грн.</span>";
                break;
              }
              case 2: {
                textEndForm += "Mini: <span class='price'>2800 грн.</span>";
                break;
              }
              case 3: {
                textEndForm += "Air: <span class='price'>2000 грн.</span>";
                break;
              }
              case 4: {
                textEndForm += "4: <span class='price'>2000 грн.</span>";
                break;
              }
              case 5: {
                textEndForm += "3: <span class='price'>2000 грн.</span>";
                break;
              }
              case 6: {
                textEndForm += "2: <span class='price'>750 грн.</span>";
                break;
              }
              case 7: {
                textEndForm += "1: <span class='price'>750 грн.</span>";
                break;
              }
            }
            break;
          }
          case 5: {
            textEndForm = "замена кнопки меню на вашем iPad ";
            switch(id_model){
              case 1: {
                textEndForm += "Mini Retina: <span class='price'>3600 грн.</span>";
                break;
              }
              case 2: {
                textEndForm += "Mini: <span class='price'>2800 грн.</span>";
                break;
              }
              case 3: {
                textEndForm += "Air: <span class='price'>2000 грн.</span>";
                break;
              }
              case 4: {
                textEndForm += "4: <span class='price'>2000 грн.</span>";
                break;
              }
              case 5: {
                textEndForm += "3: <span class='price'>2000 грн.</span>";
                break;
              }
              case 6: {
                textEndForm += "2: <span class='price'>750 грн.</span>";
                break;
              }
              case 7: {
                textEndForm += "1: <span class='price'>750 грн.</span>";
                break;
              }
            }
            break;
          }
          case 6: {
            textEndForm = "замена передней камеры на вашем iPad ";
            switch(id_model){
              case 1: {
                textEndForm += "Mini Retina: <span class='price'>3600 грн.</span>";
                break;
              }
              case 2: {
                textEndForm += "Mini: <span class='price'>2800 грн.</span>";
                break;
              }
              case 3: {
                textEndForm += "Air: <span class='price'>2000 грн.</span>";
                break;
              }
              case 4: {
                textEndForm += "4: <span class='price'>2000 грн.</span>";
                break;
              }
              case 5: {
                textEndForm += "3: <span class='price'>2000 грн.</span>";
                break;
              }
              case 6: {
                textEndForm += "2: <span class='price'>750 грн.</span>";
                break;
              }
              case 7: {
                textEndForm += "1: <span class='price'>750 грн.</span>";
                break;
              }
            }
            break;
          }
          case 7: {
            textEndForm = "замена динамика на вашем iPad ";
            switch(id_model){
              case 1: {
                textEndForm += "Mini Retina: <span class='price'>3600 грн.</span>";
                break;
              }
              case 2: {
                textEndForm += "Mini: <span class='price'>2800 грн.</span>";
                break;
              }
              case 3: {
                textEndForm += "Air: <span class='price'>2000 грн.</span>";
                break;
              }
              case 4: {
                textEndForm += "4: <span class='price'>2000 грн.</span>";
                break;
              }
              case 5: {
                textEndForm += "3: <span class='price'>2000 грн.</span>";
                break;
              }
              case 6: {
                textEndForm += "2: <span class='price'>750 грн.</span>";
                break;
              }
              case 7: {
                textEndForm += "1: <span class='price'>750 грн.</span>";
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
        $('.selectstep[data-step=3]').fadeIn('slow').css('display', 'block');
        $('#stepsforform').fadeOut('slow');
        $('#stepsendform').fadeIn('slow');
      } else {
        switch(id_repair){
          case 1: {
            textEndForm = "замена экрана вашего iPhone";
            switch(id_model){
              case 1: {
                textEndForm += " 6plus: <span class='price'>3600 грн.</span>";
                break;
              }
              case 2: {
                textEndForm += " 6: <span class='price'>2800 грн.</span>";
                break;
              }
              case 3: {
                textEndForm += " 5s: <span class='price'>2000 грн.</span>";
                break;
              }
              case 4: {
                textEndForm += " 5c: <span class='price'>2000 грн.</span>";
                break;
              }
              case 5: {
                textEndForm += " 5: <span class='price'>2000 грн.</span>";
                break;
              }
              case 6: {
                textEndForm += " 4s: <span class='price'>750 грн.</span>";
                break;
              }
              case 7: {
                textEndForm += " 4: <span class='price'>750 грн.</span>";
                break;
              }
              case 8: {
                textEndForm += " 3gs: <span class='price'>450 грн.</span>";
                break;
              }
            }
            break;
          }
          case 2: {
            textEndForm = "замена микрофона на вашем iPhone";
            switch(id_model){
              case 1: {
                textEndForm += " 6plus: <span class='price'>600 грн.</span>";
                break;
              }
              case 2: {
                textEndForm += " 6: <span class='price'>650 грн.</span>";
                break;
              }
              case 3: {
                textEndForm += " 5s: <span class='price'>400 грн.</span>";
                break;
              }
              case 4: {
                textEndForm += " 5c: <span class='price'>400 грн.</span>";
                break;
              }
              case 5: {
                textEndForm += " 5: <span class='price'>400 грн.</span>";
                break;
              }
              case 6: {
                textEndForm += " 4s: <span class='price'>350 грн.</span>";
                break;
              }
              case 7: {
                textEndForm += " 4: <span class='price'>300 грн.</span>";
                break;
              }
              case 8: {
                textEndForm += " 3gs: <span class='price'>250 грн.</span>";
                break;
              }
            }
            break;
          }
          case 3: {
            textEndForm = "замена аккумуляторной батареи на вашем iPhone";
            switch(id_model){
              case 1: {
                textEndForm += " 6plus: <span class='price'>900 грн.</span>";
                break;
              }
              case 2: {
                textEndForm += " 6: <span class='price'>600 грн.</span>";
                break;
              }
              case 3: {
                textEndForm += " 5s: <span class='price'>450 грн.</span>";
                break;
              }
              case 4: {
                textEndForm += " 5c: <span class='price'>400 грн.</span>";
                break;
              }
              case 5: {
                textEndForm += " 5: <span class='price'>400 грн.</span>";
                break;
              }
              case 6: {
                textEndForm += " 4s: <span class='price'>350 грн.</span>";
                break;
              }
              case 7: {
                textEndForm += " 4: <span class='price'>350 грн.</span>";
                break;
              }
              case 8: {
                textEndForm += " 3gs: <span class='price'>250 грн.</span>";
                break;
              }
            }
            break;
          }
          case 4: {
            textEndForm = "замена кнопки вкл/выкл на вашем iPhone";
            switch(id_model){
              case 1: {
                textEndForm += " 6plus: <span class='price'>600 грн.</span>";
                break;
              }
              case 2: {
                textEndForm += " 6: <span class='price'>600 грн.</span>";
                break;
              }
              case 3: {
                textEndForm += " 5s: <span class='price'>400 грн.</span>";
                break;
              }
              case 4: {
                textEndForm += " 5c: <span class='price'>350 грн.</span>";
                break;
              }
              case 5: {
                textEndForm += " 5: <span class='price'>350 грн.</span>";
                break;
              }
              case 6: {
                textEndForm += " 4s: <span class='price'>350 грн.</span>";
                break;
              }
              case 7: {
                textEndForm += " 4: <span class='price'>350 грн.</span>";
                break;
              }
              case 8: {
                textEndForm += " 3gs: <span class='price'>250 грн.</span>";
                break;
              }
            }
            break;
          }
          case 5: {
            textEndForm = "замена кнопки меню на вашем iPhone";
            switch(id_model){
              case 1: {
                textEndForm += " 6plus: <span class='price'>500 грн.</span>";
                break;
              }
              case 2: {
                textEndForm += " 6: <span class='price'>500 грн.</span>";
                break;
              }
              case 3: {
                textEndForm += " 5s: <span class='price'>500 грн.</span>";
                break;
              }
              case 4: {
                textEndForm += " 5c: <span class='price'>250 грн.</span>";
                break;
              }
              case 5: {
                textEndForm += " 5: <span class='price'>300 грн.</span>";
                break;
              }
              case 6: {
                textEndForm += " 4s: <span class='price'>250 грн.</span>";
                break;
              }
              case 7: {
                textEndForm += " 4: <span class='price'>250 грн.</span>";
                break;
              }
              case 8: {
                textEndForm += " 3gs: <span class='price'>150 грн.</span>";
                break;
              }
            }
            break;
          }
          case 6: {
            textEndForm = "замена передней камеры на вашем iPhone";
            switch(id_model){
              case 1: {
                textEndForm += " 6plus: <span class='price'>750 грн.</span>";
                break;
              }
              case 2: {
                textEndForm += " 6: <span class='price'>750 грн.</span>";
                break;
              }
              case 3: {
                textEndForm += " 5s: <span class='price'>450 грн.</span>";
                break;
              }
              case 4: {
                textEndForm += " 5c: <span class='price'>400 грн.</span>";
                break;
              }
              case 5: {
                textEndForm += " 5: <span class='price'>450 грн.</span>";
                break;
              }
              case 6: {
                textEndForm += " 4s: <span class='price'>350 грн.</span>";
                break;
              }
              case 7: {
                textEndForm += " 4: <span class='price'>350 грн.</span>";
                break;
              }
              case 8: {
                textEndForm += " 3gs: <span class='price'>200 грн.</span>";
                break;
              }
            }
            break;
          }
          case 7: {
            textEndForm = "замена динамика на вашем iPhone";
            switch(id_model){
              case 1: {
                textEndForm += " 6plus: <span class='price'>550 грн.</span>";
                break;
              }
              case 2: {
                textEndForm += " 6: <span class='price'>500 грн.</span>";
                break;
              }
              case 3: {
                textEndForm += " 5s: <span class='price'>350 грн.</span>";
                break;
              }
              case 4: {
                textEndForm += " 5c: <span class='price'>300 грн.</span>";
                break;
              }
              case 5: {
                textEndForm += " 5: <span class='price'>300 грн.</span>";
                break;
              }
              case 6: {
                textEndForm += " 4s: <span class='price'>250 грн.</span>";
                break;
              }
              case 7: {
                textEndForm += " 4: <span class='price'>250 грн.</span>";
                break;
              }
              case 8: {
                textEndForm += " 3gs: <span class='price'>200 грн.</span>";
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
        $('#stepsforform').fadeOut('slow');
        $('#stepsendform').fadeIn('slow');
      }



      $('.repair-msg').html(textEndForm);


      $('#formstep3').fadeOut('slow',function() {
        $('#formstep4').fadeIn('slow');
      });

    });

    $('.choose-device').click(function(){
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


    var formParent = document.getElementById('formstep4'),
        form = formParent.childNodes[0];

    function sbmForm(e) {
      e.preventDefault();
      $('#rapair-info').val($('.repair-msg').text());

      var formLength = form.length - 1,
          data = '';
      for (var i = 0; i < formLength; i++) {
        data += form[i].getAttribute('name') + '=' + form[i].value + '&';
      }

      $.ajax({
        type: 'POST',
        url: '/call-courier',
        data: data
      }).done(function (res) {
        if (res === 'success') {
          formParent.innerHTML = '<h1 style="color: green; text-align:center;">Мы вам перезвоним в течении 3 мин! </h1>';
        } else {
          $(formParent).prepend('Opps something wend wrong');
        }
      });
    }

    form.addEventListener('submit', sbmForm);

  }




  // ===========================================================



  return {
    init: init
  }

});