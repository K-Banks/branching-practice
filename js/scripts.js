$(document).ready(function() {
  $("#userSelection").submit(function() {
    var selection = $("#userSelect").val();
    console.log(selection);
    if (selection === "turtles") {
      $(".turtles").show();
    } else if (selection === "snakes") {
      $(".snakes").show();
    } else if (selection === "insects") {
      $(".insects").show();
    }
    event.preventDefault();
  });
});
