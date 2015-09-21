$('.nav--toggle').on("click tap", function(){
  $('.nav--primary').toggleClass("active");
  $('i.open').toggle();
  $('i.close').toggle();
});