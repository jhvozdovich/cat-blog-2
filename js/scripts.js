$(document).ready(function() {
  $("button#light").click(function() {
    $("body").removeClass();
    $("body").addClass("light");
  });

  $("button#dark").click(function() {
    $("body").removeClass();
    $("body").addClass("dark");
  });

  $("#meow-img").click(function() {
    $(".click-meow").toggle();
  })

  $(".crisis-img").click(function() {
    $(".crisis").toggle();
  })

  $(".crisis").click(function() {
    $(".crisis").after("<h3>Nyaaaa</h3>")
  })

  $(".add-cat").click(function() {
    $(".add-cat").prepend("#insert-img1");
  });

  $(".add-cat h5").click(function(){
    $("#insert-img2").append();
  });

});