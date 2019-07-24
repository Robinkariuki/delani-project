$('#textarea').attr('rows', 20);

$("#development").click(function() {
  $("#p1").show();

});
$("#development").click(function() {
  $("#p1").hide();
});



$("#design").click(function() {
  $("#p2").show();

});
$("#design").click(function() {
  $("#p2").hide();
});

$("#product").click(function() {
  $("#p3").show();

});
$("#product").click(function() {
  $("#p3").hide();
});
$(".contact").submit(function(event){
    var name = document.getElementById("name");

    $(".forms").append(+ name + "we have received your email.we will get back to you soon ")


    event.preventDefault();
});
