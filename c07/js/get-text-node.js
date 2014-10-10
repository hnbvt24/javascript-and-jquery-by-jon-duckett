$(document).ready(function() {
  var $listItemText = $('li').text();
  $('li').append('<i>' + $listItemText + '</i>');
});