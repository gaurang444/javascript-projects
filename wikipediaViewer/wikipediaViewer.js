$(document).ready(function() {
  $(".fa").click(function(){
    $('.div1').toggle('1000');
   // $(".div2").toggle("1000");
//$('#target').removeClass("a").addClass("b");
//$(".div2").toggleClass("searchdiv");
    $(".div2").append("<input type=text class=input1></input><button class=searchBtn>Search</button>")
    });
   
   $('.div2').on('click', '.searchBtn', function(){
  var tosearch=$(".input1").val();
 if (tosearch==''){
  alert("please enter something to search");
 }
else {     
  if($('#display').hasClass("inner")){
       $('#display').addClass("searchdiv")
    } 
  // $('.inner').removeClass("inner"); //$('#display').addClass("searchdiv");
            

     
    var url ="https://en.wikipedia.org/w/api.php?action=query&gsrlimit=10&prop=extracts&exintro&explaintext&exsentences=2&exlimit=max&generator=search&gsrsearch=" 
  
     var last="&format=json&callback=?";
     console.log(tosearch);
     var apiURL =url+tosearch+last;
     console.log(apiURL);
     $.getJSON(apiURL, function(success) {
       
        var html = "";
        $.each(success.query.pages, function(i, item) {
 html += "<div class='resultdiv'>";
var pageID='http://en.wikipedia.org/?curid=' + item.pageid; 
 html += "<br>";
 html += "<a target=_blank  href=" + pageID + ">" + item.title + "</a>";
 html += "<br>";
 html += item.extract;
 html += "<br>";
 html += "<br>";
 html += "</div>";
        });

 $('#theResults').html(''); 
 $('#theResults').append(html);
     

 
    })
     }
      //$('#display').append(myHtml);
});
    

    
  
});
