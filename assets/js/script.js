AOS.init();

function smoothScroll(e){
e.preventDefault();
// $()outside to capture the dom element
const target = $($(this).attr('href'));
$('html,body').animate({
  scrollTop:target.offset().top
},700,function() {
    // Callback after animation
    // Must change focus!
    target.focus();
    if (target.is(":focus")) { // Checking if the target was focused
      return false;
    } else {
      target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
      target.focus(); // Set focus again
    };
  });
}




$("#myNavbar a").on('click',smoothScroll);
$(".navbar-brand a").on('click',smoothScroll);


  $(document).scroll(function(){
  $(".navbar").toggleClass("nav-small",$(this).scrollTop()>100);
  $(".logo-image").toggleClass("logo-image2",$(this).scrollTop()>100);
  $(".a1").toggleClass("a2",$(this).scrollTop()>100);
  });
  $(function() {
  $('.material-card > .mc-btn-action').click(function () {
  var card = $(this).parent('.material-card');
  var icon = $(this).children('i');
  icon.addClass('fa-spin-fast');
  if (card.hasClass('mc-active')) {
  card.removeClass('mc-active');
  window.setTimeout(function() {
  icon
  .removeClass('fa-arrow-left')
  .removeClass('fa-spin-fast')
  .addClass('fa-bars');
  }, 800);
  } else {
  card.addClass('mc-active');
  window.setTimeout(function() {
  icon
  .removeClass('fa-bars')
  .removeClass('fa-spin-fast')
  .addClass('fa-arrow-left');
  }, 800);
  }
  });
  });



  
