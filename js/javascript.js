$('#textarea').attr('rows', 20);

$(document).ready(function(){
  $("#design").click(function(){
  $("#design p").toggle();
  $("#design img").toggle();
});

$("#development").click(function(){
$("#development p").toggle();
$("#development img").toggle();
});

$("#product").click(function(){
$("#product p").toggle();
$("#product img").toggle();
});

});
