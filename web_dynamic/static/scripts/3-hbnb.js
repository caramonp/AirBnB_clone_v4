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
