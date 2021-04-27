var City = "orange";
var Weather = function(){
    if(City) {
        $('.city').empty();
        $('.icon').empty();
        $('.status').empty();
        $('.temp').empty();
        $('.date').empty();
        $('.wind').empty();
        $('.humidity').empty();
    }
    City = $('.search').val().trim();
    // save city into local storage
    //console.log(City)
    $.getJSON(`http://api.openweathermap.org/data/2.5/weather?q=${City}&units=imperial&appid=55e59dbef56313cb7bcc2acb12bedeef`, function(data) {
        //console.log(data);
        
        var icon = `http://api.openweathermap.org/img/w/${data.weather[0].icon}.png`;
        var status = data.weather[0].description;
        var temp = Math.floor(data.main.temp);
        var city = data.name;
        var date = data.dt;
        var wind = Math.floor(data.wind.speed);
        var humidity = data.main.humidity;

        $('.city').append(city);
        $('.icon').attr('src', icon);
        $('.status').append(status);
        $('.temp').append(temp + ('\u2109'));
        $('.date').append(date);
        $('.wind').append('wind:' + wind + 'mph');
        $('.humidity').append('humidity:' + humidity + '%');


    })
        
}


$('#search').click(Weather)
var fiveDay = function (){
    if (City){
        $('.datef').empty();
        $('.iconf').empty();
        $('.tempf').empty();
        $('.humidf').empty();
    }

   
}
   

$.getJSON(`http://api.openweathermap.org/data/2.5/forecast?q=${City}&units=imperial&appid=55e59dbef56313cb7bcc2acb12bedeef`, function(data) {
    console.log(data);
})  

