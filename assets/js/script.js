$(document).ready(function() {

  // Menu sidebar
  $(".left-col .nav .nav-item .nav-link").click(function(e) {
    e.preventDefault();
    console.log($($(this).attr('href')).offset().top + 'px');
    $('html, body').animate({scrollTop: $($(this).attr('href')).offset().top - 24 + 'px'});
  });

  $(window).scroll(function() {
    let st = $(window).scrollTop();
    $(".left-col .nav .nav-item .nav-link").each(function() {
      if(st >= $($(this).attr('href')).offset().top - 25) {
        $(".left-col .nav .nav-item .nav-link.active").removeClass('active');
        $(this).addClass('active');
      }
    });
  });

  // Ouverture/fermeture exceptionelles
  $(".btn-opening-closures").click(function(e) {
    e.preventDefault();
    $(this).toggleClass('open').find('.text-closed, .text-opened').toggleClass('d-none');
    $('.opening-closures-wrapper').slideToggle();
  });

  //Realisations slider
  $('.slider-wrapper').slick({
    prevArrow: $('.arrow__prev'),
    nextArrow: $('.arrow__next'),
  });

});

