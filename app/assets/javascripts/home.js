// Place all the behaviors and hooks related to the matching controller here.
// All this logic will automatically be available in application.js.
$(function() {
  console.log("LOADED");
  $('.department-link').click(function(event) {
    console.log("Clicked!");
    event.preventDefault();
    var attribute = $(this).attr('value'); // Acquire the tag value from the clicked link. :)

    alert("Clicked link! " + $(this).attr('value') );
  });
}
)