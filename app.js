var carousel = $('#carousel'),
    slideWidth = 300,
    dragStart, 
    dragEnd,
    height= $(window).height() + 50;

$(window).scroll(function(){ 
  $(".wrap").css("height", height+"px");
  shiftSlide(-1);
  height+=10;
})

function shiftSlide(direction) {
  if (carousel.hasClass('transition')) return;
  dragEnd = dragStart;
  $(document).off('mouseup')
  carousel.off('mousemove')
          .addClass('transition')
          .css('transform','translate3d(' + (direction * slideWidth) + 'px, 0px, 0px)'); 
  setTimeout(function(){
    if (direction === 1) {
      $('.slide:first').before($('.slide:last'));
    } else if (direction === -1) {
      $('.slide:last').after($('.slide:first'));
    }
    carousel.removeClass('transition')
    carousel.css('transform','translate3d(0px,0px,0px)'); 
  },700)
}