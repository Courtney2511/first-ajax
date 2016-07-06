$(document).ready(function () {

  $("#ajax-button").on('click', function(){

    $.ajax({
      url:  "http://first-ajax-api.herokuapp.com/",
      method: "GET",
      data: { },
      dataType: "text"
    });

  });

  $("#ajax-pingpong").on('click', function(){

    $.ajax({
      url: "http://first-ajax-api.herokuapp.com/ping",
      method: "GET",
      data: { },
      dataType: "text"
    }).done(function(responseData){
      console.log("the response is:" + responseData);
      $("#step3456").append(responseData);
    }).fail(function(){
      console.log("The request didn't work!")
      $("#step3456").append("Sorry! Didn't work :(")
    }).always(function(){
      console.log("The request finished!")
    });

  });

  $("#ajax-count").on('click', function(){

    $.ajax({
      url: "http://first-ajax-api.herokuapp.com/count",
      method: "GET",
      data: { },
      dataType: "text"
    }).done(function(responseData){
      $("#step7").append(responseData);
    });

  });

  $("#ajax-time").on('click', function(){

    $.ajax({
        url: "http://first-ajax-api.herokuapp.com/time",
        method: "GET",
        data: {
          timezone: 'Pacific/Honolulu'
        },
        dataType: "text"
      }).done(function(responseData){
        $("#step8").append(responseData);
      });

  });

  $("#ajax-car").on('click', function(){

    $.ajax({
      url: "http://first-ajax-api.herokuapp.com/a_car",
      method: "GET",
      data: { },
      dataType: "html"
    }).done(function(responseData){
      $("#car").append(responseData);
    });

  });


});
