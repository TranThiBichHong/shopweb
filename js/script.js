$(document).ready(function() {
    $('#scrollTop').on('click', function() {
        $('html, body').animate({ scrollTop: 0 }, 'slow');
    });
    $("#in").click(function (){
        $('html, body').animate({
            scrollTop: $("#introduction").offset().top
        }, 'slow');
    });
    $("#in1").click(function (){
        $('html, body').animate({
            scrollTop: $("#introduction").offset().top
        }, 4000);
    });
    $(window).bind('scroll', function() {
        var t = window.scrollY;
        if(t > 300 ) {
            $('#scrollTop').show();
            $('.mcd-menu').show();
            $('.banner-title').show();
            $('.menumini').show();
        } else {
            $('#scrollTop').hide();
            $('.banner-title').hide();
            $('.menumini').hide();
        }
        if(t > 500 ) {
            $('.intro1').show();
        } else {
            $('.intro1').hide();
        }
        if(t > 1000 ) {
            $('.intro2').show();
        } else {
            $('.intro2').hide();
        }
        if(t > 1500 ) {
            $('.intro3').show();
        } else {
            $('.intro3').hide();
        }
        if(t > 2700 ) {
            $('.intro4').show();
        } else {
            $('.intro4').hide();
        }
    });
});
//silces-intro-product
 ( function($) {
  
    $(document).ready(function() {
      
      var s           = $('.slider'),
          sWrapper    = s.find('.slider-wrapper'),
          sItem       = s.find('.slide'),
          btn         = s.find('.slider-link'),
          sWidth      = sItem.width(),
          sCount      = sItem.length,
          slide_note  = s.find('.slide-note'),
          slide_title = s.find('.slide-title'),
          slide_text  = s.find('.slide-text'),
          slide_more  = s.find('.slide-more'),
          slide_image = s.find('.slide-image img'),
          sTotalWidth = sCount * sWidth;
      
      sWrapper.css('width', sTotalWidth);
      sWrapper.css('width', sTotalWidth);
      
      var clickCount  = 0;
      
      btn.on('click', function(e) {
        e.preventDefault();
  
        if( $(this).hasClass('next') ) {
          
          ( clickCount < ( sCount - 1 ) ) ? clickCount++ : clickCount = 0;
        } else if ( $(this).hasClass('prev') ) {
          
          ( clickCount > 0 ) ? clickCount-- : ( clickCount = sCount - 1 );
        }
        TweenMax.to(sWrapper, 0.4, {x: '-' + ( sWidth * clickCount ) })
  

  
        //CONTENT ANIMATIONS
  
        var fromProperties = {autoAlpha:0, x:'-50', y:'-10'};
        var toProperties = {autoAlpha:0.8, x:'0', y:'0'};
  
        TweenLite.fromTo(slide_image, 1, {autoAlpha:0, y:'40'}, {autoAlpha:1, y:'0'});
        TweenLite.fromTo(slide_note, 0.4, fromProperties, toProperties);
        TweenLite.fromTo(slide_title, 0.6, fromProperties, toProperties);
        TweenLite.fromTo(slide_text, 0.8, fromProperties, toProperties);
        TweenLite.fromTo(slide_more, 1, fromProperties, toProperties);
  
      });
            
    });
  })(jQuery)
  $('.overlay').addClass('overlay-blue');
  //script_prices
  function showprice (priceId){
    var price = document.querySelectorAll("div.price>h1")
    for(var i=0; i<price.length; i++)
    price[i].style.display ="none"
    var s= document.getElementById(priceId)
    s.style.display="block"
}
  /* phan hinh anh cua trang mua san pham*/
  $(document).ready(function(){
      $(".thumbnail img").click(function(){
          $("#mainImg").attr("src", $(this).attr("src"))
      })
  })