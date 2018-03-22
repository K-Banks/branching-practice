$(function() {
  $("#triangleSides").submit(function(event) {
    var side1 = parseInt($("#side1").val());
    var side2 = parseInt($("#side2").val());
    var side3 = parseInt($("#side3").val());
    console.log(side1 + side2);
    // debugger
    if (side1 + side2 <= side3 || side1 + side3 <= side2 || side2 + side3 <= side1) {
      $(".answer").text("error: do you even trigonometry bro?");
      // debugger
    } else if (side1 === side2 && side2 === side3 && side1 === side3) {
      // debugger
      $(".answer").text("equilateral");
    } else if (side1 === side2 || side2 === side3 || side3 === side1) {
      // debugger
      $(".answer").text("isoceles");
    } else {
      // debugger
      $(".answer").text("scalene");
    }

    event.preventDefault();
  });
});
