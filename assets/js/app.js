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
    cont.html('<img src="../assets/img/italian1.jpg"/>');
    }
    if( selection === "venezolana") {
    cont.html('<p>Hola esto es un append Venezolano</p> <img src="http://www.moonkitty.net/avatars/sailor-moon-manga-avatar-001.jpg"/> <img src="http://www.moonkitty.net/avatars/sailor-moon-manga-avatar-001.jpg"/>');
    }
    if( selection === "arabe") {
    cont.html('<p>Hola esto es un append Árabe</p> <img src="http://images6.fanpop.com/image/photos/34800000/Sailor-Moon-icon-sailor-moon-34857518-100-100.gif"/><img src="http://images6.fanpop.com/image/photos/34800000/Sailor-Moon-icon-sailor-moon-34857518-100-100.gif"/>');
    }
    if( selection === "peruana") {
    cont.html('<p>Hola esto es un append Peruano</p> <img src="https://v.dreamwidth.org/303319/106183"/><img src="https://v.dreamwidth.org/303319/106183"/>');
    }
})
});