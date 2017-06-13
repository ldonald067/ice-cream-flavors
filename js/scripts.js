$(document).ready(function() {
  $("button").click(function(){
    var iceCreams = ["chocolate", "vanilla", "cakebatter", "coffee"];
    iceCreams.forEach(function(iceCream) {
      $("#here1").append($("<li>").text("I love " + iceCream));

    });
  });

});
