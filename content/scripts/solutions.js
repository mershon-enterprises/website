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

    var priceTiers = [
      { amount: 4900,
        plan: "AUTO BILL PAY 49",
        div: "#buy-automatic-bill-pay-button-container-1-49"
      },
      { amount: 9900,
        plan: "AUTO BILL PAY 99",
        div: "#buy-automatic-bill-pay-button-container-50-99"
      },
      { amount: 21900,
        plan: "AUTO BILL PAY 219",
        div: "#buy-automatic-bill-pay-button-container-100-999"
      },
      { amount: 51900,
        plan: "AUTO BILL PAY 519",
        div: "#buy-automatic-bill-pay-button-container-1000"
      }
    ];
    for (var i in priceTiers) {
      var tier = priceTiers[i];
      var billPayButton = PatchworkStripeButton.createButton({
        allowBitcoin:          "false",
        buttonId:              "buy-bill-pay-button-" + tier.amount,
        label:                 "Start Trial",
        classes:               "button btn btn-block",
        name:                  "Automatic Bill Pay",
        description:           "Integrated into your Website",
        plan:                  tier.plan,
        amount:                tier.amount,
        requireBillingAddress: true,
        panelLabel:            "Pay {{amount}}/month",
        mode:                  "subscribe",
      });
      $(tier.div).append(billPayButton);
    }

  });
});
