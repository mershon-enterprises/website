$(document).on("PatchworkLoaded", function() {
  Patchwork.callPlatformMethod({
    platformId: PATCHWORK_BILL_PAY_PLATFORM_ID,
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

