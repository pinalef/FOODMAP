$(document).ready(function(){
  $('#splashscreen').hide();
  $('#home').hide();
  $('#splashscreen').show();
  $('#splashscreen').fadeOut(3000).hide(1000);
  $('#home').delay(3000).fadeIn();

  var cont = $('#container');
  
  $('#categorias').on('change', function() {
    var selection = $('#categorias').val();
    //cont.text(selection);
    if( selection === "italiana") {
    $('#1').hide();  
    $('#2').hide();
    $('#4').hide();
    $('#5').hide();
    $('#3').show();
    console.log('entra a italiana');
    }
    if( selection === "japonesa") {
    $('#1').show();  
    $('#2').hide();
    $('#4').hide();
    $('#5').show();
    $('#3').hide();
    }
    if( selection === "hamburguesas") {
      $('#1').hide();  
      $('#2').show();
      $('#4').show();
      $('#5').hide();
      $('#3').hide();
    }
    if(selection === ""){
      $('#1').show();  
      $('#2').show();
      $('#4').show();
      $('#5').show();
      $('#3').show();
    }
  })

  /* evento mouse over sobre las imagenes */
  $('#1').mouseover(function(){
      $('#idKiseki').attr('src', 'assets/img/japo1.jpg');
  });
  $('#1').mouseout(function(){
    $('#idKiseki').attr('src', 'assets/img/kiseki.jpg');
  })
  $('#2').mouseover(function(){
    $('#idMechada').attr('src', 'assets/img/ham1.jpeg');
});
$('#2').mouseout(function(){
  $('#idMechada').attr('src', 'assets/img/la-gran-mechada-portena-logo.jpg');
})
$('#3').mouseover(function(){
  $('#idMangiata').attr('src', 'assets/img/italian1.jpg');
});
$('#3').mouseout(function(){
$('#idMangiata').attr('src', 'assets/img/la-mangiata.jpg');
})
$('#4').mouseover(function(){
  $('#idBrecons').attr('src', 'assets/img/ham2.jpeg');
});
$('#4').mouseout(function(){
$('#idBrecons').attr('src', 'assets/img/logo-brecons-valparaiso.jpg');
})
$('#5').mouseover(function(){
  $('#idTomodachi').attr('src', 'assets/img/japo2.jpg');
});
$('#5').mouseout(function(){
$('#idTomodachi').attr('src', 'assets/img/tomodachi-house.jpg');
})
});