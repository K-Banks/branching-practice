$(function(){
  $("#datingSurvey").submit(function(event){
    var movie = parseInt($("input:radio[name=movie]:checked").val());
    var food = parseInt($("input:radio[name=food]:checked").val());
    var color = parseInt($("input:radio[name=color]:checked").val());
    var datingScore = movie + food + color;
    console.log(datingScore);

    $(".results").show();
    if (datingScore <= 3) {
      console.log("steve should show now");
      $(".steve").show();
    } else if (datingScore >3 && datingScore <7){
      console.log("nicki should show now");
      $(".nicki").show();
    } else {
      console.log("tilda should show now");
      $(".tilda").show();
    }

    $("#datingSurvey").hide();

    event.preventDefault();
  });
});
