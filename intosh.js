$( document ).ready(function() {

//diamonds

var timeout = null
$('.diamond').click(function() {
  var $diamond = $(this)
  var $diamondParent = $diamond.parent()
  clearTimeout(timeout)
  $('#userbg').toggleClass("on");
  $('.user, .userinfo').not(this).parent().removeClass("on");
  
  timeout = setTimeout(function() {
    $diamondParent.toggleClass('on')
    clearTimeout(timeout)
  }, 300);
  $diamondParent.next('.userinfo').toggleClass("on");
  
});

$(".close").click(function () {
    $(".user, .userinfo, #userbg").removeClass("on");

});

$(document).ready(function(){
  var mouseX, mouseY;
  var ww = $( window ).width();
  var wh = $( window ).height();
  var traX, traY;
  $(document).mousemove(function(e){
    mouseX = e.pageX;
    mouseY = e.pageY;
    traX = ((4 * mouseX) / 570) + 40;
    traY = ((4 * mouseY) / 570) + 50;
    console.log(traX);
    $(".title").css({"background-position": traX + "%" + traY + "%"});
  });
});

var current = 1; //keeps track of the current div
var height = $('.roles').height(); //the height of the roles div
var numberDivs = $('.roles').children().length; //the number of children of the roles div
var first = $('.roles div:nth-child(1)'); //the first div nested in roles div
setInterval(function() {
    var number = current * -height;
    first.css('margin-top', number + 'px');
    if (current === numberDivs) {
        first.css('margin-top', '0px');
        current = 1;
    } else current++;
}, 2000);

});






