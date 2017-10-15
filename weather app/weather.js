/*Reach somehow the temperature and sign outside ready func using javascript!*/

$(document).ready(function() {
    var error = document.getElementById("error");
    var longitude;
    var latitude;
    var temp;
    var sign;
    var tempHtml;
  
    function locateMe() {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(setLocation);
      } else {
        error.innerHTML = "I could not locate you.";
      }
    }
    function setLocation(position) {
      longitude = position.coords.longitude;
      latitude = position.coords.latitude;
      var url =
        "https://fcc-weather-api.glitch.me/api/current?lat=" + latitude + "&lon=" + longitude;
      $.getJSON(url).done(getWeather);
      function getWeather(response) {
        var location = JSON.stringify(response.name);
        location = location.slice(1, -1);
        var country = JSON.stringify(response.sys.country);
        country = country.slice(1, -1);
        location = location + " " + country;
        $("#location").html(location);
        
        var main = JSON.stringify(response.weather[0].main);
        main = main.slice(1, -1);
        $("#weather").html(main);
  
        temp = JSON.stringify(response.main.temp);
        temp = Math.round(temp * 10) / 10;
        sign = "C";
        tempHtml = temp + "°" + "<a id='switch' onclick='switchMe()' href='#'>" + sign + "</a>";
        $("#temperature").html(tempHtml);
        
        var icon = JSON.stringify(response.weather[0].icon);
        icon = icon.slice(1, -1);
        $("#icon").attr("src", icon);
      }
    }
  
    locateMe();
  });
  
  function switchMe() {
    var sign = $("#switch").html();
    var content = $("#temperature").html();
    var temp = [];
    for (var i = 0; i < content.length; i++){
      if (content.charAt(i) === "°"){
        break;
      } else {
        temp.push(content.charAt(i));
      }
    }
    temp = temp.join("");
    var tempHtml;
    if ($("#switch").html() === "C") {
      sign = "F";
      temp = temp * (9 / 5) + 32;
      tempHtml = temp + "°" + "<a id='switch' onclick='switchMe()' href='#'>" + sign + "</a>";
      $("#temperature").empty();
      $("#temperature").html(tempHtml);
    } else if ($("#switch").html() === "F") {
      sign = "C";
      temp = (temp - 32) / (9 / 5);
      temp = Math.round(temp * 10) / 10;
      tempHtml = temp + "°" + "<a id='switch' onclick='switchMe()' href='#'>" + sign + "</a>";
      $("#temperature").empty();
      $("#temperature").html(tempHtml);
    } else {
      alert("error");
    }
  }
  