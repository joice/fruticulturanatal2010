jQuery(document).ready(function($){
  $(".slideshow").cycle({
    fx: 'fade'
  });
  $("a[href^='http:']").not("[href*='localhost']").attr('target','_blank');
  var difference = (new Date("10/17/2010") - new Date()) / 1000;
  $("#countdown").html(Math.floor(( difference < 0 ? 0 : difference ) / (60 * 60 * 24)));
});
