//import $ from '../libs/jquery-2.1.4.min';
const $ = require('jquery');
  function init() {
    //_cacheDom();
    //_bindEvents();


  // ===========================================================

    let devise = 0;
    let backCall, order;
    let id_device;
    let id_model;
    let id_repair;
    let modelUrl;

    $('.selectmodel').click(function() {
      $('.selectmodel').removeClass('active');
      $(this).addClass('active');

      let model = $(this).data('model');
      modelUrl = $(this).data('url');
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
      let step = parseInt($(this).data('step'));
      let index = $('.formstep:visible').index();

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
       let id_device;
       let id_model;
       let id_repair;
       */
      let textEndForm;
      $('#inputrepair').val($(this).data('repair'));

      $('.selectstep[data-step=3] .text').html($(this).data('repair'));

      if(id_device == 1) {
        switch(id_repair){
          case 1: {
            textEndForm = "Замена сенсорного стекла вашего iPad ";
            switch(id_model){
              case 1: {
                textEndForm += "Mini Retina: <span class='price'>1199 грн.</span>";
                break;
              }
              case 2: {
                textEndForm += "Mini: <span class='price'>1199 грн.</span>";
                break;
              }
              case 3: {
                textEndForm += "Air: <span class='price'>1999 грн.</span>";
                break;
              }
              case 4: {
                textEndForm += "mini 3: <span class='price'>1999 грн.</span>";
                break;
              }
              case 5: {
                textEndForm += "4: <span class='price'>1149 грн.</span>";
                break;
              }
              case 6: {
                textEndForm += "3: <span class='price'>1149 грн.</span>";
                break;
              }
              case 7: {
                textEndForm += "2: <span class='price'>1049 грн.</span>";
                break;
              }
            }
            break;
          }
          case 2: {
            textEndForm = "Замена микрофона на вашем iPad ";
            switch(id_model){
              case 1: {
                textEndForm += "Mini Retina: <span class='price'>799 грн.</span>";
                break;
              }
              case 2: {
                textEndForm += "Mini: <span class='price'>699 грн.</span>";
                break;
              }
              case 3: {
                textEndForm += "Air: <span class='price'>699 грн.</span>";
                break;
              }
              case 4: {
                textEndForm += "mini 3: <span class='price'>799 грн.</span>";
                break;
              }
              case 5: {
                textEndForm += "4: <span class='price'>599 грн.</span>";
                break;
              }
              case 6: {
                textEndForm += "3: <span class='price'>599 грн.</span>";
                break;
              }
              case 7: {
                textEndForm += "2: <span class='price'>499 грн.</span>";
                break;
              }
            }
            break;
          }
          case 3: {
            textEndForm = "Замена аккумуляторной батареи на вашем iPad ";
            switch(id_model){
              case 1: {
                textEndForm += "Mini Retina: <span class='price'>1499 грн.</span>";
                break;
              }
              case 2: {
                textEndForm += "Mini: <span class='price'>1399 грн.</span>";
                break;
              }
              case 3: {
                textEndForm += "Air: <span class='price'>1999 грн.</span>";
                break;
              }
              case 4: {
                textEndForm += "mini 3: <span class='price'>1899 грн.</span>";
                break;
              }
              case 5: {
                textEndForm += "4: <span class='price'>1399 грн.</span>";
                break;
              }
              case 6: {
                textEndForm += "3: <span class='price'>1399 грн.</span>";
                break;
              }
              case 7: {
                textEndForm += "2: <span class='price'>1199 грн.</span>";
                break;
              }
            }
            break;
          }
          case 4: {
            textEndForm = "Замена кнопки вкл/выкл на вашем iPad ";
            switch(id_model){
              case 1: {
                textEndForm += "Mini Retina: <span class='price'>649 грн.</span>";
                break;
              }
              case 2: {
                textEndForm += "Mini: <span class='price'>649 грн.</span>";
                break;
              }
              case 3: {
                textEndForm += "Air: <span class='price'>799 грн.</span>";
                break;
              }
              case 4: {
                textEndForm += "mini 3: <span class='price'>899 грн.</span>";
                break;
              }
              case 5: {
                textEndForm += "4: <span class='price'>599 грн.</span>";
                break;
              }
              case 6: {
                textEndForm += "3: <span class='price'>599 грн.</span>";
                break;
              }
              case 7: {
                textEndForm += "2: <span class='price'>549 грн.</span>";
                break;
              }
            }
            break;
          }
          case 5: {
            textEndForm = "Замена кнопки меню на вашем iPad ";
            switch(id_model){
              case 1: {
                textEndForm += "Mini Retina: <span class='price'>599 грн.</span>";
                break;
              }
              case 2: {
                textEndForm += "Mini: <span class='price'>549 грн.</span>";
                break;
              }
              case 3: {
                textEndForm += "Air: <span class='price'>699 грн.</span>";
                break;
              }
              case 4: {
                textEndForm += "mini 3: <span class='price'>799 грн.</span>";
                break;
              }
              case 5: {
                textEndForm += "4: <span class='price'>549 грн.</span>";
                break;
              }
              case 6: {
                textEndForm += "3: <span class='price'>549 грн.</span>";
                break;
              }
              case 7: {
                textEndForm += "2: <span class='price'>549 грн.</span>";
                break;
              }
            }
            break;
          }
          case 6: {
            textEndForm = "Замена передней камеры на вашем iPad ";
            switch(id_model){
              case 1: {
                textEndForm += "Mini Retina: <span class='price'>799 грн.</span>";
                break;
              }
              case 2: {
                textEndForm += "Mini: <span class='price'>699 грн.</span>";
                break;
              }
              case 3: {
                textEndForm += "Air: <span class='price'>849 грн.</span>";
                break;
              }
              case 4: {
                textEndForm += "mini 3: <span class='price'>899 грн.</span>";
                break;
              }
              case 5: {
                textEndForm += "4: <span class='price'>699 грн.</span>";
                break;
              }
              case 6: {
                textEndForm += "3: <span class='price'>649 грн.</span>";
                break;
              }
              case 7: {
                textEndForm += "2: <span class='price'>599 грн.</span>";
                break;
              }
            }
            break;
          }
          case 7: {
            textEndForm = "Замена динамика на вашем iPad ";
            switch(id_model){
              case 1: {
                textEndForm += "Mini Retina: <span class='price'>599 грн.</span>";
                break;
              }
              case 2: {
                textEndForm += "Mini: <span class='price'>599 грн.</span>";
                break;
              }
              case 3: {
                textEndForm += "Air: <span class='price'>699 грн.</span>";
                break;
              }
              case 4: {
                textEndForm += "mini 3: <span class='price'>699 грн.</span>";
                break;
              }
              case 5: {
                textEndForm += "4: <span class='price'>599 грн.</span>";
                break;
              }
              case 6: {
                textEndForm += "3: <span class='price'>599 грн.</span>";
                break;
              }
              case 7: {
                textEndForm += "2: <span class='price'>549 грн.</span>";
                break;
              }
            }
            break;
          }
          case 8: {
            textEndForm = "Опишите проблему в текстовом сообщение или можете перейти на " + "<a href="+ modelUrl +">каталог наших цен.</a>";
            $('#repair8').html('Если вы не знаете причину поломки мастер произведет бесплатную диагностику');
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
            textEndForm = "Замена стекла вашего iPhone";
            switch(id_model){
              case 1: {
                textEndForm += " 6plus: <span class='price'>1399 грн.</span>";
                break;
              }
              case 2: {
                textEndForm += " 6: <span class='price'>1199 грн.</span>";
                break;
              }
              case 3: {
                textEndForm += " 5/5c/5s: <span class='price'>799 грн.</span>";
                break;
              }
              case 6: {
                textEndForm += " 4/4s: <span class='price'>699 грн.</span>";
                break;
              }
              case 9: {
                textEndForm += " 7plus: <span class='price'>4499 грн.</span>";
                break;
              }
              case 10: {
                textEndForm += " 7: <span class='price'>3999 грн.</span>";
                break;
              }
              case 11: {
                textEndForm += " 6plus: <span class='price'>2499 грн.</span>";
                break;
              }
              case 12: {
                textEndForm += " 6s: <span class='price'>1999 грн.</span>";
                break;
              }
              case 13: {
                textEndForm += " se: <span class='price'>799 грн.</span>";
                break;
              }
            }
            break;
          }
          case 2: {
            textEndForm = "Замена микрофона на вашем iPhone";
            switch(id_model){
              case 1: {
                textEndForm += " 6plus: <span class='price'>499 грн.</span>";
                break;
              }
              case 2: {
                textEndForm += " 6: <span class='price'>499 грн.</span>";
                break;
              }
              case 3: {
                textEndForm += " 5/5c/5s: <span class='price'>349 грн.</span>";
                break;
              }
              case 6: {
                textEndForm += " 4/4s: <span class='price'>249 грн.</span>";
                break;
              }
              case 9: {
                textEndForm += " 7plus: <span class='price'>1099 грн.</span>";
                break;
              }
              case 10: {
                textEndForm += " 7: <span class='price'>899 грн.</span>";
                break;
              }
              case 11: {
                textEndForm += " 6plus: <span class='price'>799 грн.</span>";
                break;
              }
              case 12: {
                textEndForm += " 6s: <span class='price'>699 грн.</span>";
                break;
              }
              case 13: {
                textEndForm += " se: <span class='price'>399 грн.</span>";
                break;
              }
            }
            break;
          }
          case 3: {
            textEndForm = "Замена аккумуляторной батареи на вашем iPhone";
            switch(id_model){
              case 1: {
                textEndForm += " 6plus: <span class='price'>599 грн.</span>";
                break;
              }
              case 2: {
                textEndForm += " 6: <span class='price'>499 грн.</span>";
                break;
              }
              case 3: {
                textEndForm += " 5/5c/5s: <span class='price'>399 грн.</span>";
                break;
              }
              case 6: {
                textEndForm += " 4/4s: <span class='price'>349 грн.</span>";
                break;
              }
              case 9: {
                textEndForm += " 7plus: <span class='price'>1599 грн.</span>";
                break;
              }
              case 10: {
                textEndForm += " 7: <span class='price'>1499 грн.</span>";
                break;
              }
              case 11: {
                textEndForm += " 6plus: <span class='price'>1199 грн.</span>";
                break;
              }
              case 12: {
                textEndForm += " 6s: <span class='price'>999 грн.</span>";
                break;
              }
              case 13: {
                textEndForm += " se: <span class='price'>399 грн.</span>";
                break;
              }
            }
            break;
          }
          case 4: {
            textEndForm = "Замена кнопки вкл/выкл на вашем iPhone";
            switch(id_model){
              case 1: {
                textEndForm += " 6plus: <span class='price'>499 грн.</span>";
                break;
              }
              case 2: {
                textEndForm += " 6: <span class='price'>449 грн.</span>";
                break;
              }
              case 3: {
                textEndForm += " 5/5c/5s: <span class='price'>349 грн.</span>";
                break;
              }
              case 6: {
                textEndForm += " 4/4s: <span class='price'>249 грн.</span>";
                break;
              }
              case 9: {
                textEndForm += " 7plus: <span class='price'>999 грн.</span>";
                break;
              }
              case 10: {
                textEndForm += " 7: <span class='price'>799 грн.</span>";
                break;
              }
              case 11: {
                textEndForm += " 6plus: <span class='price'>599 грн.</span>";
                break;
              }
              case 12: {
                textEndForm += " 6s: <span class='price'>599 грн.</span>";
                break;
              }
              case 13: {
                textEndForm += " se: <span class='price'>399 грн.</span>";
                break;
              }
            }
            break;
          }
          case 5: {
            textEndForm = "Замена кнопки меню на вашем iPhone";
            switch(id_model){
              case 1: {
                textEndForm += " 6plus: <span class='price'>399 грн.</span>";
                break;
              }
              case 2: {
                textEndForm += " 6: <span class='price'>399 грн.</span>";
                break;
              }
              case 3: {
                textEndForm += " 5/5c/5s: <span class='price'>199 грн.</span>";
                break;
              }
              case 6: {
                textEndForm += " 4/4s: <span class='price'>199 грн.</span>";
                break;
              }
              case 9: {
                textEndForm += " 7plus: <span class='price'>999 грн.</span>";
                break;
              }
              case 10: {
                textEndForm += " 7: <span class='price'>999 грн.</span>";
                break;
              }
              case 11: {
                textEndForm += " 6plus: <span class='price'>599 грн.</span>";
                break;
              }
              case 12: {
                textEndForm += " 6s: <span class='price'>599 грн.</span>";
                break;
              }
              case 13: {
                textEndForm += " se: <span class='price'>499 грн.</span>";
                break;
              }
            }
            break;
          }
          case 6: {
            textEndForm = "Замена передней камеры на вашем iPhone";
            switch(id_model){
              case 1: {
                textEndForm += " 6plus: <span class='price'>599 грн.</span>";
                break;
              }
              case 2: {
                textEndForm += " 6: <span class='price'>499 грн.</span>";
                break;
              }
              case 3: {
                textEndForm += " 5/5c/5s: <span class='price'>349 грн.</span>";
                break;
              }
              case 6: {
                textEndForm += " 4/4s: <span class='price'>249 грн.</span>";
                break;
              }
              case 9: {
                textEndForm += " 7plus: <span class='price'>1599 грн.</span>";
                break;
              }
              case 10: {
                textEndForm += " 7: <span class='price'>1599 грн.</span>";
                break;
              }
              case 11: {
                textEndForm += " 6plus: <span class='price'>1299 грн.</span>";
                break;
              }
              case 12: {
                textEndForm += " 6s: <span class='price'>1199 грн.</span>";
                break;
              }
              case 13: {
                textEndForm += " se: <span class='price'>899 грн.</span>";
                break;
              }
            }
            break;
          }
          case 7: {
            textEndForm = "Замена динамика на вашем iPhone";
            switch(id_model){
              case 1: {
                textEndForm += " 6plus: <span class='price'>299 грн.</span>";
                break;
              }
              case 2: {
                textEndForm += " 6: <span class='price'>299 грн.</span>";
                break;
              }
              case 3: {
                textEndForm += " 5/5c/5s: <span class='price'>249 грн.</span>";
                break;
              }
              case 6: {
                textEndForm += " 4/4s: <span class='price'>199 грн.</span>";
                break;
              }
              case 9: {
                textEndForm += " 7plus: <span class='price'>699 грн.</span>";
                break;
              }
              case 10: {
                textEndForm += " 7: <span class='price'>699 грн.</span>";
                break;
              }
              case 11: {
                textEndForm += " 6plus: <span class='price'>399 грн.</span>";
                break;
              }
              case 12: {
                textEndForm += " 6s: <span class='price'>399 грн.</span>";
                break;
              }
              case 13: {
                textEndForm += " se: <span class='price'>249 грн.</span>";
                break;
              }
            }
            break;
          }
          case 8: {
            textEndForm = "Опишите проблему в текстовом сообщение или можете перейти на " + "<a href="+ modelUrl +">каталог наших цен.</a>";
            $('#repair8').html('Если вы не знаете причину поломки мастер произведет бесплатную диагностику');
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
      let index = parseInt($(this).data('index'));
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


    let formParent = document.getElementById('formstep4'),
        form = formParent.childNodes[0];

    function sbmForm(e) {
      e.preventDefault();
      $('#rapair-info').val($('.repair-msg').text());

      let formLength = form.length - 1,
          data = '';
      for (let i = 0; i < formLength; i++) {
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



  export default {
    init: init
  }

