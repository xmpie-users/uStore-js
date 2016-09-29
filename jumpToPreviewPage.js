<script type="text/javascript">
$(document).ready(function() {
  if (document.location.href.indexOf("Customization.aspx") > -1) { //this line will select to change thumbnail on every product in the store
  //  if (document.title.indexOf("My business card") > -1) { //alternatively, this line will select to change thumbnail only on the product called "My business card"
    var steps = xmp.uStore.storeFrontParams.customizationStepIDs,
    currentStepId = $(".Duc").attr("stepid"),
    currentStepNumber = -1;

    for (var i=0; i<steps.length; ++i) {
      if (steps[i] == currentStepId) {
        currentStepNumber = i;
        break;
      }
    }
    jump2Thumb(currentStepNumber);
  }
});

function jump2Thumb(iThumb) {
  for (var i=0; i<iThumb; ++i)
  {
    setTimeout(function() {
      var test = $('#ctl00_cphMainContent_ucDialCustomization_SlideShow_btnNext');
      test.click();
    }, 400);
  }
}
