$(document).ready(function() {
  var isOpen = false; // Variable to track slider state

  $("#login, #loginactivo").click(function() {
    isOpen = !isOpen; // Toggle state on each click

    if (isOpen) {
      $("#sliderinisesion").animate({right: '0px'}, 500);
    } else {
      $("#sliderinisesion").animate({right: '-400px'}, 500);
    }        
  });

  $("#cerrar1").click(function() {
    $("#sliderinisesion").animate({right: '-400px'}, 500); 
  });      
});
