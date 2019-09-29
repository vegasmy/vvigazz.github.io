// open mobile menu
$('.js-toggle-menu').click(function(e){
    e.preventDefault();
    $('.menu').slideToggle();
    $(this).toggleClass('open');
  });