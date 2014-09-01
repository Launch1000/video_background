 $(document).ready(function() {
//BEGIN jQuery Selectors

  
  $("#hero").wallpaper({
  source: {
    poster: "assets/bg/front_hero.jpg",
    video: "//www.youtube.com/embed/2qOpPo-onf0"
  }
});

$("#hero .rotate").textrotator({
        animation: "fade",
        speed: 2200
      });

function setHeight() {
    windowHeight = $(window).innerHeight();
    $('#hero').css('min-height', windowHeight);
  };
  setHeight();
  
  $(window).resize(function() {
    setHeight();
  });
//END jQuery Selectors    
});
