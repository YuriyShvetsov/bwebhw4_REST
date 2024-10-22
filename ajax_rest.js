$(document).ready(function () {
  $("form").submit(function (event) {
    var formData = {
      query: $("#ip").val(),
    };
	var url = "https://suggestions.dadata.ru/suggestions/api/4_1/rs/iplocate/address?ip=";
	var token = "7aade7e7ecb6789dc895101a5ab4a94222f68a52";

    $.ajax({
      type: "GET",
      url: url + formData.query,
	  beforeSend: function(xhr) {
                 xhr.setRequestHeader("Authorization", "Token "+ token) 
            },
      data: '',
      dataType: "json",
      encode: true,
    }).done(function (result) {
      if (result) {
        var location = result.location.value;
        var location_city = result.location.data.city;
        var city_type_full = result.location.data.city_type_full;
        console.log(result);
        if (location) {
          $("#result").html(
            '<p>Местонахождение: ' + location + '</p><p>' + city_type_full + ': ' + location_city + '</p>'
         );
        }
      }

    }
	);

    event.preventDefault();
  });
});