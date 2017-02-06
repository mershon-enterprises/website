window.scrollToFeatures = function() {
  $('html, body').animate({scrollTop: $('ul.special').offset().top - 150}, 500);
};

window.scrollToDescription = function() {
  $('html, body').animate({scrollTop: $('.highlight-description').offset().top - 150}, 500);
};
