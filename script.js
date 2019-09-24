 //alert("Achtung baby");

$.getJSON("http://api.openweathermap.org/data/2.5/weather?q=Belgrade,rs&units=metric&APPID=b08ea711d19d515f388901379c87d63a", 
function(data){
    console.log(data);

    var icon="http://openweathermap.org/img/wn/" + data.weather[0].icon + ".png";

    var temp=Math.floor(data.main.temp);

   $('.icon').attr('src',icon);
   $('.temp').append(temp);

});