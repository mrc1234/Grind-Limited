$(document).ready(function() {
  $(document).on('click', '.code', getCodes);
  function getCodes() {
    var theCode = {
      code: 'thecode'
    };
    $.ajax({
      headers: {
        'Content-Type': 'application/json'
      },
      type: 'POST',
      url: 'api/codes',
      data: JSON.stringify(theCode),
      success: function() {
        console.log('done');
      },
      error: function() {
        alert('failure');
      }
    });
  }
});
