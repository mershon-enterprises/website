//Animate the page down to the contact form.
window.scrollToContact = function() {
  $('html, body').animate({scrollTop: $('#footer').offset().top}, 1000);
};

// highlight the active nav menu button
$(document).ready(function() {
  // initialize Patchwork
  Patchwork.init({
    accountId: PATCHWORK_ACCOUNT_ID,
    apiKey:    PATCHWORK_API_KEY
  });

  // contact form
  window.doContact = function() {
    var data = {
      name:               $("#contact-form input[name='name']").val(),
      company:            $("#contact-form input[name='company']").val(),
      phone:              $("#contact-form input[name='phone']").val(),
      message:            $("#contact-form textarea[name='message']").val(),
      to_email_addresses: $("#contact-form input[name='email']").val()
    };
    Patchwork.callPlatformMethod({
      platformId: PATCHWORK_EMAIL_PLATFORM_ID,
      method: "send",
      action: "POST",
      params: data
    }).then(
      function() {
        alert('Thank you for contacting us!', 'We\'ll get back to you as soon as possible!', 'success');
      },
      function() {
        alert('Uh oh! The mail didn\'t send.', 'We\'ll get it fixed as soon as possible!', 'error');
      }
    );
    return false;
  };

  window.getSampleContract = function() {
    var data = {
      sampleContract: true,
      to_email_addresses: $("#sampleContractEmail").val()
    };
    Patchwork.callPlatformMethod({
      platformId: 6,
      method: "send",
      action: "POST",
      params: data
    }).then(
      function() {
        alert("Please check your email for the sample contract document.");
      },
      function() {
        alert("Apologies, we were unable to send the sample contract to your email at this time.");
      }
    );
    return false;
  };

  // update navbar
  var id = null;
  switch (window.location.pathname) {
    case "/about_us.shtml":
      id = "#menu-about"; break;
    case "/pricing.shtml":
      id = "#menu-pricing"; break;
    case "/solutions.shtml":
      id = "#menu-solutions"; break;
    case "/testimonials.shtml":
      id = "#menu-testimonials"; break;
  }
  $(id).addClass("active");
});
