$(function(){
  $("#datingSurvey").submit(function(event){
    var movie = parseInt($("input:radio[name=movie]:checked").val());
    var food = parseInt($("input:radio[name=food]:checked").val());
    var color = parseInt($("input:radio[name=color]:checked").val());
    var datingScore = movie + food + color;
    console.log(preference);
    var preference = $("#preference").val();
    console.log(preference);

// Randomize gender result for those feeling lucky
    if (preference === "lucky") {
      var random = Math.random();
      if (random <= 0.5) {
        preference = "male";
        console.log(preference);
      } else {
        preference = "female";
        console.log(preference);
      }
    }
// Shows results well
    $(".results").show();
// Gottfried logic
    if (preference === 'loser') {
     $(".loser").show();
// Shows match for male
    } else if (preference === "male") {
      if (datingScore <= 4) {
        $(".steve").show();
      } else if (datingScore >4 && datingScore <7){
        $(".therock").show();
      } else {
        $(".prince").show();
      }
// Shows match for female
    } else {
      if (datingScore <= 4) {
        $(".schaal").show();
      } else if (datingScore >4 && datingScore <7){
        $(".nicki").show();
      } else {
        $(".tilda").show();
      }
    }
// Shows match for female

// Hide survey
    $("#datingSurvey").hide();

    event.preventDefault();
  });
});
