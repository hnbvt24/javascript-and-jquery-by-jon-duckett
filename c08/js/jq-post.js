$('#register').on('submit', function(e) {           // When form is submitted
  e.preventDefault();                               // Prevent it being sent
  var details = $('#register').serialize();         // Serialize form data
  $.post('register.php', details, function(data) {  // Use $.post() to send it
    $('#register').html(data);                    // Where to display result
  });
});