var button = document.querySelector('.search')
var userInput = document.querySelector(".input")

for (var i = 0; i < localStorage.length; i++) {
    var city = localStorage.getItem(i);
    console.log(localStorage.getItem("city"))
    var cityName = $('.list-group').addClass("list-group-item");
    
    cityName.append(`<li> ${city}</li>`)
}

//key count for local storage
var keyCount = 0;
//search button click event
button.click(function() {

    var searchInput = $(".input").val();

    var currentUrl = `http://api.openweathermap.org/data/2.5/weather?q=${searchInput}&units=imperial&appid=55e59dbef56313cb7bcc2acb12bedeef`;

    if (searchInput == "") {
        console.log(searchInput);
    }else {
        $.ajax({
            url: currentUrl,
            method: "GET",
        }).then(function(response){
            var cityName = $(".list-group").addClass("list-group-items");
            cityName.append(`<li> ${response.name}</li>`);
            //local storage
            var local = localStorage.setItem(keyCount, response.name);
            keyCount = keyCount + 1;

            //current weather append
            var currentCard = $('.currentCard').append(`<div class="card-body"</div>`);
            currentCard.empty();
            var currentName = currentCard.append("<p>");
            currentCard.append(currentName);

             // Adjust Date 
             var timeUTC = new Date(response.dt * 1000);
             currentName.append(response.name + " " + timeUTC.toLocaleDateString("en-US"));
             currentName.append(`<img src="https://openweathermap.org/img/wn/${response.weather[0].icon}@2x.png">`);

            //add temp
            var currentTemp = currentName.append("<p>");
            currentName.append(currentTemp);
            currentTemp.append(`<p>Temperature: ${response.main.temp}</p>`)

            //humidity
            currentTemp.append(`<p>Humidity: ${response.main.humidity}%</p>`);

            //wind speed
            currentTemp.append(`<p>Wind Speed: ${response.eind.speed}</p>`);

            //UV index
            var UVindex = `https://api.openweathermap.org/data/2.5/uvi?appid=b8ecb570e32c2e5042581abd004b71bb&lat=${response.coord.lat}&lon=${response.coord.lon}`;


            $.ajax({
                url: UVindex,
                method: "GET"
            }).then(function(response) {
                var currentUV = currentTemp.append(`<p class="card-text">UV index: ${response.value}</p>`);
                currentUV.addClass("UV");
                currentTemp.append(currentUV);

            });

        });
    }
})


// function getData(userInput){
//     $.getJSON(`http://api.openweathermap.org/data/2.5/weather?q=${userInput}&units=imperial&appid=55e59dbef56313cb7bcc2acb12bedeef`, function(data) {
//     console.log(data)
//     var temp = Math.floor(data.main.temp)
//     var weather = data.weather[0].main
//     $(".results").append(`${temp} ${weather}`);
    
//     })


    // $('btn').click(function(){
    //     var ticker = Ticker.value.trim();
    //     var data = localStorage.getItem(ticker);
    //     if(data){
    //         console.log(JSON.parse(data))
    //     }else{
    //         getData(ticker)
    //     }
    // })

// }






















// //attaching api 

//     var requestUrl = 'api.openweathermap.org/data/2.5/weather?q=Lake Forest&units=imperialappid=55e59dbef56313cb7bcc2acb12bedeef';

//     fetch(requestUrl) 
//         .then(function (response) {
//             console.log(response)
//             return response.json();
            
//         })
//         .then(function (data) {
//             console.log(data)
//             //Loop over the data to generate a table, each table row will have a link to the repo url
//             for (var i = 0; i < data.length; i++) {
//               // Creating elements, tablerow, tabledata, and anchor
//               var createTableRow = document.createElement('tr');
//               var tableData = document.createElement('td');
//               var link = document.createElement('a');
      
//               // Setting the text of link and the href of the link
//               link.textContent = data[i].html_url;
//               link.href = data[i].html_url;
      
//               // Appending the link to the tabledata and then appending the tabledata to the tablerow
//               // The tablerow then gets appended to the tablebody
//               tableData.appendChild(link);
//               createTableRow.appendChild(tableData);
//               tableBody.appendChild(createTableRow);
//             }
//           });
      

          