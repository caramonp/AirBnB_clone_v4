$('document').ready(() => {
  const myIds = [];
  const myNames = [];
  $('input[type="checkbox"]').click(function () {
    if ($(this).is(':checked')) {
      myIds.push($(this).attr('data-id'));
      myNames.push($(this).attr('data-name'));
    } else {
      myIds.pop($(this).attr('data-id'));
      myNames.pop($(this).attr('data-name'));
    }
    $('.amenities h4').text(myNames).join(', ');
  });

const url = 'http://192.168.100.28:5001/api/v1/status/';
  $.get(url, function (info) {
    if (info.status === 'OK') {
      $('#api_status').addClass('available');
    } else {
      $('#api_status').removeClass('available');
    }
  });
});

function request (){
  $.ajax({
    url = 'http://0.0.0.0:5001/api/v1/places_search/',
    type = "POST",
    data = {},
    dataType: 'json',
    contentType: 'application/json',
    success: function (data){
    for (place in data){
      $('body').append(`<article>
	  <div class="title_box">
	    <h2>{{ place.name }}</h2>
	    <div class="price_by_night">${{ place.price_by_night }}</div>
	  </div>
	  <div class="information">
	    <div class="max_guest">{{ place.max_guest }} Guest{% if place.max_guest != 1 %}s{% endif %}</div>
            <div class="number_rooms">{{ place.number_rooms }} Bedroom{% if place.number_rooms != 1 %}s{% endif %}</div>
            <div class="number_bathrooms">{{ place.number_bathrooms }} Bathroom{% if place.number_bathrooms != 1 %}s{% endif %}</div>
	  </div>
	  <div class="user">
            <b>Owner:</b> {{ place.user.first_name }} {{ place.user.last_name }}
          </div>
          <div class="description">
	    {{ place.description | safe }}
          </div)
    }
    }
  })
}
