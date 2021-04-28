var City = "";

var Weather = function () {
    if (City) {
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
    localStorage.setItem("search", JSON.stringify(City));
    console.log(City);
    renderSearch();

    function renderSearch(){
        var list = JSON.parse(localStorage.getItem(City));
        if(list !== null){
           document.querySelector('.recentSearch').textContent = `
           ${list}
           `
            
        }
    }

    $.getJSON(`http://api.openweathermap.org/data/2.5/weather?q=${City}&units=imperial&appid=55e59dbef56313cb7bcc2acb12bedeef`, function (data) {
        console.log("current weather", data);

        var icon = `http://api.openweathermap.org/img/w/${data.weather[0].icon}.png`;
        var status = data.weather[0].description;
        var temp = Math.floor(data.main.temp);
        var city = data.name;
        var date = moment().format("dddd MMM Do");
        var wind = Math.floor(data.wind.speed);
        var humidity = data.main.humidity;

        $('.city').append(city);
        $('.icon').attr('src', icon);
        $('.status').append(status);
        $('.temp').append(temp + ('\u2109'));
        $('.date').append(date);
        $('.wind').append('wind:' + wind + 'mph');
        $('.humidity').append('humidity:' + humidity + '%');
        fiveDay();

    })

}


$('#search').click(Weather)
var fiveDay = function () {
    if (City) {
        $('.datef').empty();
        $('.iconf').empty();
        $('.tempf').empty();
        $('.humidf').empty();
    }





    $.getJSON(`http://api.openweathermap.org/data/2.5/forecast?q=${City}&units=imperial&appid=55e59dbef56313cb7bcc2acb12bedeef`, function (data) {
        console.log(data);
        var date1 = data.list[1].dt_txt;
        // console.log("what is this", date1)
        var date2 = data.list[10].dt_txt;
        var date3 = data.list[18].dt_txt;
        var date4 = data.list[26].dt_txt;
        var date5 = data.list[34].dt_txt;


        localStorage.setItem
        var icon1 = `http://api.openweathermap.org/img/w/${data.list[1].weather[0].icon}.png`;
        var icon2 = `http://api.openweathermap.org/img/w/${data.list[10].weather[0].icon}.png`;
        var icon3 = `http://api.openweathermap.org/img/w/${data.list[18].weather[0].icon}.png`;
        var icon4 = `http://api.openweathermap.org/img/w/${data.list[26].weather[0].icon}.png`;
        var icon5 = `http://api.openweathermap.org/img/w/${data.list[34].weather[0].icon}.png`;

        var tempf1 = Math.floor(data.list[1].main.temp);
        var tempf2 = Math.floor(data.list[10].main.temp);
        var tempf3 = Math.floor(data.list[18].main.temp);
        var tempf4 = Math.floor(data.list[26].main.temp);
        var tempf5 = Math.floor(data.list[34].main.temp);

        var humdity1 = data.list[1].main.humidity;
        var humdity2 = data.list[10].main.humidity;
        var humdity3 = data.list[18].main.humidity;
        var humdity4 = data.list[26].main.humidity;
        var humdity5 = data.list[34].main.humidity;

        $('#humid1').append(`<p>${humdity1}%</p>`)
        $('#humid2').append(`<p>${humdity2}%</p>`)
        $('#humid3').append(`<p>${humdity3}%</p>`)
        $('#humid4').append(`<p>${humdity4}%</p>`)
        $('#humid5').append(`<p>${humdity5}%</p>`)

        $('#tempf1').append(`<p>${tempf1}\u2109</p>`);
        $('#tempf2').append(`<p>${tempf2}\u2109</p>`);
        $('#tempf3').append(`<p>${tempf3}\u2109</p>`);
        $('#tempf4').append(`<p>${tempf4}\u2109</p>`);
        $('#tempf5').append(`<p>${tempf5}\u2109</p>`);



        $('#day1').append(date1);
        $('#day2').append(date2);
        $('#day3').append(date3);
        $('#day4').append(date4);
        $('#day5').append(date5);


        $('#iconf1').attr("src", icon1);
        $('#iconf2').attr("src", icon2);
        $('#iconf3').attr("src", icon3);
        $('#iconf4').attr("src", icon4);
        $('#iconf5').attr("src", icon5);
    })

}


var search = document.querySelector(".search")


