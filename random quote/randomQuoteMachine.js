$(document).ready(function(){
var toTweet;  
$("#button").click(function(){
    $.getJSON("https://api.icndb.com/jokes/random", function(result){
 toTweet=result.value.joke;
$(".quote").html(toTweet); 
$(".author").html("Carlos Ray Norris");      
      
      
         
       });
    
});
  $("#tweet").click(function(){
    window.open("https://twitter.com/intent/tweet?=text="+toTweet)
  })
})