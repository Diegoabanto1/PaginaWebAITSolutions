$(document).foundation();


//Hace smooth scroll hasta la seccion

$('header a[href^="#"]').on('click',function (e) {
  // e.preventDefault();
  
  altoMenu=$("#header").height()
  var target = this.hash,
  $target = $(target);

 $('html, body').stop().animate({
   'scrollTop': $target.offset().top-altoMenu
  }, 900, 'swing', function () {
   window.location.hash = target;
  });
});