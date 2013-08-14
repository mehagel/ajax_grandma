$(document).ready(function() {
  // This is called after the document has loaded in its entirety
  // This guarantees that any elements we bind to will exist on the page
  // when we try to bind to them

  // See: http://docs.jquery.com/Tutorials:Introducing_$(document).ready()
  $('#submit-form').submit(function(event) {
    event.preventDefault();
    $.ajax({
      type: "POST",
      url: '/grandma',
      data: $(this).serialize(),
    }).done(function(response) {
      $('#grandma-says').html(response);
    });
  });
});
