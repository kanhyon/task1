// This file is automatically compiled by Webpack, along with any other files
// present in this directory. You're encouraged to place your actual application logic in
// a relevant structure within app/javascript and only use these pack files to reference
// that code so it'll be compiled.

require("@rails/ujs").start()
require("turbolinks").start()
require("@rails/activestorage").start()
require("channels")


// Uncomment to copy all static images under ../images to the output folder and reference
// them with the image_pack_tag helper in views (e.g <%= image_pack_tag 'rails.png' %>)
// or the `imagePath` JavaScript helper below.
//
// const images = require.context('../images', true)
// const imagePath = (name) => images(name, true)
//= require jquery3
//= require popper
//= require bootstrap-sprockets

$(function() {
    var API_KEY = 'c9987c59be99f04524daf29578e8f832'
    var city = 'Tokyo';
    var url = 'http://api.openweathermap.org/data/2.5/forecast?q=' + city + ',jp&units=metric&APPID=' + API_KEY;
    $.ajax({
      url: url,
      dataType: "json",
      type: 'GET',
    })
    .done(function(data) {
      var insertHTML = "";
      var cityName = '<h2>' + data.city.name + '</h2>';
      $('#city-name').html(cityName);
      for (var i = 0; i <= 8; i = i + 2) {
        insertHTML += buildHTML(data, i);
      }
      $('#weather').html(insertHTML);
    })
    .fail(function(data) {
      console.log("失敗しました");
    });
  });
  function buildHTML(data, i) {
    var Week = new Array("（日）","（月）","（火）","（水）","（木）","（金）","（土）");
    var date = new Date (data.list[i].dt_txt);
    date.setHours(date.getHours() + 9);
    var month = date.getMonth()+1;
    var day = month + "月" + date.getDate() + "日" + Week[date.getDay()] + date.getHours() + "：00";
    var icon = data.list[i].weather[0].icon;
    var html =
    '<div class="weather-report">' +
      '<img src="http://openweathermap.org/img/w/' + icon + '.png">' +
      '<div class="weather-date">' + day + '</div>' +
      '<div class="weather-main">'+ data.list[i].weather[0].main + '</div>' +
      '<div class="weather-temp">' + Math.round(data.list[i].main.temp) + '℃</div>' +
    '</div>';
    return html
  }