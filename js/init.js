window.sr = ScrollReveal(
  {
    reset: true,
    duration: 1000
  }
);
$(".button-collapse").sideNav();
$('.parallax').parallax();

sr.reveal('#banner-reveal');
sr.reveal(
  '#text-reveal',
  {
    origin: 'right'
  }
);
sr.reveal(
  '#photo-reveal',
  {
    origin: 'left'
  }
);