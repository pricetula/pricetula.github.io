$(document).ready(function(){

  $(".button-collapse").sideNav();

  $('.parallax').parallax();

  AOS.init();


  $('.dropdown-button').dropdown({
      constrainWidth: true, // Does not change width of dropdown to that of the activator
      hover: true, // Activate on hover
      belowOrigin: false, // Displays dropdown below the button
    }
  );


});
