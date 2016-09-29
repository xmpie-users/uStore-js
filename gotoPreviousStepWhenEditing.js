<script type="text/javascript">
$("document").ready(function() {
  // If the referring page is the cart page, and there is a previous button on the page, redirect to that location
  if (document.referrer.indexOf("Cart") > -1 && $("#ctl00_cphMainContentFooter_WizardStepsNextPrev1_ButtonPrev").length > 0)
  { 
    document.location.href = $("#ctl00_cphMainContentFooter_WizardStepsNextPrev1_ButtonPrev").attr("href"); 
  }
});
</script>
