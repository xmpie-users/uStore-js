<script type="text/javascript">
$("document").ready(function() {
  if (document.title.indexOf("Order Summary") > 1 && //we are on the order summary page 
      $("#ctl00_cphMainContentFooter_btnNext").length > 0 && //there is a next button on the page
      $("#ctl00_cphMainContent_BillingAddress_ddlAddresses").val() > 0) {  //the billing address is already set
    document.location.href = $("#ctl00_cphMainContentFooter_btnNext").attr("href");
  }
});
</script>
