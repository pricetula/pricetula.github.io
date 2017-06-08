$(document).ready(function(){
  $(".button-collapse").sideNav();

  $('.parallax').parallax();

  $('select').material_select();

  AOS.init();

  $('.dropdown-button').dropdown({
      constrainWidth: true, // Does not change width of dropdown to that of the activator
      belowOrigin: false, // Displays dropdown below the button
    }
  );

  $('.smoothScroll').on('click', function (event) {
    if (this.hash !== '#' && this.hash !== '') {
      event.preventDefault();

      const hash = this.hash;

      $('html, body').animate(
        {scrollTop: $(hash).offset().top},
        800,
        () => {
          window.location.hash = hash;
        },
      );
    }
  });
});
