$(document).ready(function(){
  
  $(".Modern-Slider").slick({
    autoplay:true,
    autoplaySpeed:10000,
    speed:600,
    slidesToShow:1,
    slidesToScroll:1,
    pauseOnHover:false,
    dots:true,
    pauseOnDotsHover:true,
    cssEase:'linear',
    fade:true,
    draggable:false,
    prevArrow:'<button class="PrevArrow"></button>',
    nextArrow:'<button class="NextArrow"></button>', 
  });

  $('.__full').on('click', function() {
    $('.desc-info').fadeToggle(300);
    $('.suitDesc').fadeToggle(300);
    $('.fa-expand').toggleClass('fa-compress');
    $('.x').toggleClass('fw'); 
    $('.Modern-Slider .item .img-fill').css('width', '100vw');   
  });
  
});