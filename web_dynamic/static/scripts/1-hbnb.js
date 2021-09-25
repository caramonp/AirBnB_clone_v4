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
});
