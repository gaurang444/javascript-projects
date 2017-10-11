window.onload = function(){
  var counters = document.getElementsByClassName("counter");
  var amounts = [];
  var greatest = 0;
  for(var i = 0; i < counters.length; i++){
    console.log(counters[i].innerText);
    amounts[i] = parseInt(counters[i].innerText);
    if(greatest < amounts[i]){
      greatest = amounts[i];
    }
  }
  console.log(amounts);
  var count = 0;
  var counter = setInterval(function () {
    for(var k = 0; k < amounts.length; k++){
      if(amounts[k] >= count){
        counters[k].innerText = count++;
      }else{
        counters[k].innerText = amounts[k];
      }
      if(k > greatest){
        clearInterval(counter);
      }
    }
  }, 50);
}
