// Place all the behaviors and hooks related to the matching controller here.
// All this logic will automatically be available in application.js.
$(function() {
  console.log("LOADED");
  $('.department-link').click(function(event) {
    event.preventDefault();
    var attribute = $(this).attr('value'); // Acquire the tag value from the clicked link. :)

    var selected_tag = $(this).attr('value');

    alert("Clicked link! " + $(this).attr('value') );
  });
}
)