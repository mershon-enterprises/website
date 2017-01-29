//Animate the page down to the contact form.
window.scrollToContact = function() {
  $('html, body').animate({scrollTop: $('#footer').offset().top}, 1000);
};

window.contactUs = function() {
  $.ajax({
    method: 'POST',
    url: 'scripts/php/contact.php',
    data: {
      // FIXME -- pull from contact form
      // name: $scope.contactInfo.name,
      // company: $scope.contactInfo.company,
      // email: $scope.contactInfo.email,
      // message: $scope.contactInfo.message
    }
  })
  .done(function() {
    swal('Thank you for contacting us!', 'We\'ll get back to you as soon as possible!', 'success');
  })
  .fail(function() {
    swal('Uh oh! The mail didn\'t send.', 'We\'ll get it fixed as soon as possible!', 'error');
  });
};
