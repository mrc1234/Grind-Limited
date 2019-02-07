$(document).ready(function() {
  $(document).on('click', '.logoutbtn', logoutUser);
  // loginUser does a post to our "api/login" route and if successful, redirects us the the members page
  function logoutUser() {
    $.get('/api/logout')
      .then(function() {
        console.log('Logged out');
        window.location.replace('/');
        // $('.logoutbtn').hide();
        // If there's an error, log the error
      })
      .catch(function(err) {
        console.log(err);
      });
  }
});
