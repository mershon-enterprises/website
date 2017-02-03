$(document).ready(function() {
  // initialize Patchwork
  Patchwork.init({
    accountId: PATCHWORK_ACCOUNT_ID,
    apiKey:    PATCHWORK_API_KEY
  });

  // Set up Stripe Button dependency
  Patchwork.callPlatformMethod({
    platformId: PATCHWORK_STRIPE_PLATFORM_ID,
    method: "button",
    action: "GET",
    params: {}
  }).then(function(responseJavascript) {
    eval(responseJavascript);
    PatchworkStripeButton.init(PATCHWORK_STRIPE_PLATFORM_ID, function() {
      alert("Please check your email for your receipt and instructions!");
    });

    var donationButton = PatchworkStripeButton.createButton({
      allowBitcoin:          true,
      buttonId:              "buy-donation-button",
      label:                 "Buy it now for just $375.00",
      classes:               "button btn btn-block",
      name:                  "Buy a Donation Button",
      description:           "Integrated into your Website",
      amount:                37500,
      requireBillingAddress: true,
      panelLabel:            "Pay {{amount}}",
      mode:                  "charge",
    });
    $("#buy-donation-button-container").append(donationButton);

    var billPayButton = PatchworkStripeButton.createButton({
      allowBitcoin:          "false",
      buttonId:              "buy-bill-pay-button",
      label:                 "Get it now for just $275.00/month",
      classes:               "button btn btn-block",
      name:                  "Automatic Bill Pay",
      description:           "Integrated into your Website",
      plan:                  "AUTO BILL PAY",
      amount:                27500,
      requireBillingAddress: true,
      panelLabel:            "Pay {{amount}}/month",
      mode:                  "subscribe",
    });
    $("#buy-automatic-bill-pay-button-container").append(billPayButton);

  });
});
