$(document).on("PatchworkLoaded", function() {
  Patchwork.callPlatformMethod({
    platform: PATCHWORK_BILL_PAY_PLATFORM_UID,
    method:     "widgets",
    action:     "GET",
    params:  {
      foreground: "#ccc",
      background: "#008799"
    }
  }).then(function(responseJavascript) {
    eval(responseJavascript);
  });
});

